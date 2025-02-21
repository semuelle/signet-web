import AddressInput from '@components/AddressInput'
import { AmountFlexibleInput } from '@components/AmountFlexibleInput'
import { BaseToken, Chain } from '@domains/chains'
import { useSelectedMultisig } from '@domains/multisig'
import { useKnownAddresses } from '@hooks/useKnownAddresses'
import { Address } from '@util/addresses'
import { Button } from '@components/ui/button'
import { NewTransactionHeader } from '../NewTransactionHeader'
import { hasPermission } from '@domains/proxy/util'
import { Alert } from '@components/Alert'
import { Send } from '@talismn/icons'
import { Input } from '@components/ui/input'

export const DetailsForm = (props: {
  destinationAddress?: Address
  amount: string
  name: string
  chain: Chain
  setName: (n: string) => void
  selectedToken: BaseToken | undefined
  setSelectedToken: (t: BaseToken) => void
  tokens: BaseToken[]
  setDestinationAddress: (address?: Address) => void
  setAmount: (a: string) => void
  onNext: () => void
}) => {
  const [multisig] = useSelectedMultisig()
  const { addresses } = useKnownAddresses(multisig.orgId)
  const { hasDelayedPermission, hasNonDelayedPermission } = hasPermission(multisig, 'transfer')

  return (
    <>
      <NewTransactionHeader icon={<Send />}>Send</NewTransactionHeader>
      <div css={({ color }) => ({ color: color.offWhite, marginTop: 32, width: '100%' })}>
        <AmountFlexibleInput
          tokens={props.tokens}
          selectedToken={props.selectedToken}
          setSelectedToken={props.setSelectedToken}
          amount={props.amount}
          setAmount={props.setAmount}
        />
      </div>
      <div css={({ color }) => ({ color: color.offWhite, marginTop: 24 })}>
        <AddressInput
          onChange={props.setDestinationAddress}
          addresses={addresses}
          leadingLabel="Recipient"
          chain={props.chain}
        />
      </div>
      <div css={({ color }) => ({ color: color.offWhite, marginTop: 24, marginBottom: 24 })}>
        <Input
          label="Transaction Description"
          placeholder='e.g. "Reimburse transaction fees"'
          value={props.name}
          onChange={e => props.setName(e.target.value)}
        />
      </div>
      {hasNonDelayedPermission === false ? (
        hasDelayedPermission ? (
          <Alert>
            <p>Time delayed proxies are not supported yet.</p>
          </Alert>
        ) : (
          <Alert>
            <p>
              Your Vault does not have the proxy permission required to send token on behalf of the proxied account.
            </p>
          </Alert>
        )
      ) : (
        <Button
          disabled={
            !props.destinationAddress ||
            isNaN(parseFloat(props.amount)) ||
            props.amount.endsWith('.') ||
            !props.selectedToken ||
            !props.name ||
            !hasNonDelayedPermission
          }
          onClick={props.onNext}
          children="Review"
        />
      )}
    </>
  )
}
