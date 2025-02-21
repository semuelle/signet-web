import { AccountDetails } from '@components/AddressInput/AccountDetails'
import { useSelectedMultisig } from '@domains/multisig'
import { SettingsInfoRow } from '../Settings/InfoRow'
import { BalanceCard } from './BalanceCard'
import NominationPoolOverview from './NominationPoolOverview'
import { useAugmentedBalances } from '@domains/balances'
import { useNativeToken } from '@domains/chains'
import { usePoolMembership } from '@domains/staking/usePoolMembership'
import { useEffect, useState } from 'react'
import { BondedPool } from '@domains/staking'
import { Nomination } from '@domains/staking/useNominations'
import { Address } from '@util/addresses'
import { ValidatorsRotation } from './ValidatorsRotation'

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div css={{ display: 'flex', flex: 1, padding: '32px 8%', flexDirection: 'column', gap: 32, width: '100%' }}>
    {children}
  </div>
)

const Staking = () => {
  const [multisig] = useSelectedMultisig()
  const { nativeToken } = useNativeToken(multisig.chain.nativeToken.id)
  const { membership } = usePoolMembership(multisig.proxyAddress, multisig.chain)

  // user is editing nominations for a nom pool if `pool` exists
  // else we're editing via `staking` pallet
  const [editing, setEditing] = useState<
    { address: Address; nominations: Nomination[]; pool?: BondedPool } | undefined
  >()

  const augmentedTokens = useAugmentedBalances()
  const balance = augmentedTokens.find(
    ({ details }) => details.id === multisig.chain.nativeToken.id || details.id.includes(multisig.chain.nativeToken.id)
  )

  // total staked funds
  const locksStaking = balance?.balanceDetails.locks.find(({ label }) => label === 'staking')
  const stakingAmount = balance === undefined ? undefined : +(locksStaking?.amount.tokens ?? 0)

  // total funds in pool, pallet is not supported when membership = null
  const pooledAmount = membership === null ? 0 : membership?.balance.toHuman().split(' ')[0]

  const handleEditNomPool = (pool: BondedPool, nominations: Nomination[]) => {
    setEditing({ address: pool.stash, nominations, pool })
  }

  useEffect(() => {
    setEditing(undefined)
  }, [multisig])

  if (editing) {
    return (
      <Wrapper>
        <ValidatorsRotation {...editing} onBack={() => setEditing(undefined)} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h2 className="text-offWhite mt-[4px] font-bold">Staking Overview</h2>
      <div css={{ display: 'flex', gap: 32, width: '100%' }}>
        {/** second row: Proxied Account */}
        <div css={{ width: '100%' }}>
          <SettingsInfoRow label="Account">
            <AccountDetails address={multisig.proxyAddress} chain={multisig.chain} />
          </SettingsInfoRow>
        </div>
        <div css={{ display: 'grid', gap: 12, width: '100%' }}>
          <BalanceCard
            symbol={nativeToken?.symbol}
            amount={balance?.balance.avaliable}
            price={balance?.price}
            label="Available"
          />
          <BalanceCard symbol={nativeToken?.symbol} amount={stakingAmount} price={balance?.price} label="Staked" />
          <BalanceCard
            symbol={nativeToken?.symbol}
            amount={membership === undefined ? undefined : +(pooledAmount ?? '0')}
            price={balance?.price}
            label="In Pool"
          />
        </div>
      </div>
      {/** Add support for other proxy address (e.g. nested proxied address) */}
      <NominationPoolOverview address={multisig.proxyAddress} chain={multisig.chain} onEdit={handleEditNomPool} />
    </Wrapper>
  )
}
export default Staking
