import { PlusCircle } from '@talismn/icons'
import { Multisig } from '@domains/multisig'
import { AccountDetails } from './AddressInput/AccountDetails'
import { ChevronDown, Stars } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  acknowledgedVaultsState,
  makeScannedVaultId,
  openScannerState,
  unimportedVaultsState,
} from '@domains/multisig/vaults-scanner'
import { CircularProgressIndicator } from '@talismn/ui'
import { Link } from 'react-router-dom'
import { cn } from '@util/tailwindcss'
import { useMemo } from 'react'

type Props = {
  multisigs: Multisig[]
  selectedMultisig: Multisig
  onChange: (multisig: Multisig) => void
}

const VaultDetails: React.FC<{
  multisig: Multisig
  disableCopy?: boolean
  selected?: boolean
  hideTooltip?: boolean
}> = ({ disableCopy, hideTooltip, multisig, selected }) => (
  <div className="flex items-center justify-center gap-[12px] select-none w-full">
    {/** Threshold + chain logo circle */}
    <div className="relative h-[40px] w-[40px] min-w-[40px] flex items-center justify-center">
      <div
        css={({ color }) => ({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: color.primaryContainer,
          borderRadius: '50%',
          opacity: selected ? 1 : 0.4,
        })}
      />
      <img
        css={{ top: -2, right: -2, position: 'absolute', height: 14 }}
        src={multisig.chain.logo}
        alt={multisig.chain.chainName}
      />
      <p
        css={({ color }) => ({
          color: color.primary,
          fontWeight: 700,
          fontSize: 12,
          marginTop: 4,
          opacity: selected ? 1 : 0.6,
        })}
      >
        {multisig.threshold}/{multisig.signers.length}
      </p>
    </div>

    <AccountDetails
      name={multisig.name}
      address={multisig.proxyAddress}
      chain={multisig.chain}
      breakLine
      hideIdenticon
      withAddressTooltip={!hideTooltip}
      disableCopy={disableCopy}
    />
  </div>
)

export const MultisigSelect: React.FC<Props> = ({ multisigs, onChange, selectedMultisig }) => {
  const unimportedVaultsLoadable = useRecoilValueLoadable(unimportedVaultsState)
  const acknowledgedVaults = useRecoilValue(acknowledgedVaultsState)
  const setOpenScanner = useSetRecoilState(openScannerState)

  const unimportedVaults = useMemo(() => {
    if (unimportedVaultsLoadable.state !== 'hasValue') return []
    return unimportedVaultsLoadable.contents ?? []
  }, [unimportedVaultsLoadable])

  const unacknowledgedVaults = useMemo(
    () =>
      unimportedVaults.filter(
        v => !acknowledgedVaults[makeScannedVaultId(v.proxiedAddress, v.multisig.multisigAddress, v.chain)]
      ) ?? [],
    [acknowledgedVaults, unimportedVaults]
  )

  const handleChange = (value: string) => {
    const newMultisig = multisigs.find(m => m.id === value)
    if (newMultisig) onChange(newMultisig)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'bg-gray-900 border-none w-[240px] px-[12px] py-[8px] flex flex-1 items-center gap-[8px] rounded-[12px] relative'
        )}
      >
        {unacknowledgedVaults.length > 0 && (
          <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-[20px] h-[20px]">
            <div className="relative flex items-center justify-center rounded-full w-full h-full bg-primary">
              <p className="text-[11px] text-gray-900 font-bold text-center w-max">{unacknowledgedVaults.length}</p>
            </div>
          </div>
        )}
        <div className="flex flex-1 w-1">
          <VaultDetails multisig={selectedMultisig} hideTooltip disableCopy />
        </div>
        <ChevronDown size={20} className="min-w-[20px]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gray-900 border border-gray-700 w-[260px] flex flex-col items-start"
        align="start"
      >
        <div className="w-full pb-[4px]">
          <DropdownMenuItem
            asChild
            className="w-full text-left items-center gap-[8px] justify-start px-[12px] py-[8px] h-max min-h-max"
          >
            <Link to="/add-vault">
              <PlusCircle size={20} />
              <p className="mt-[4px] text-[14px]">Add Vault</p>
            </Link>
          </DropdownMenuItem>
          {unimportedVaultsLoadable.state === 'loading' ? (
            <div className="px-[12px] py-[8px] flex items-center gap-[8px]">
              <CircularProgressIndicator size={20} />
              <p className="text-[12px] mt-[4px]">Scanning for importable vaults</p>
            </div>
          ) : unimportedVaultsLoadable.state === 'hasValue' ? (
            unimportedVaultsLoadable.contents.length > 0 ? (
              <DropdownMenuItem
                className={cn(
                  'w-full text-left items-center gap-[8px] justify-start px-[12px] py-[8px] h-max min-h-max text-primary hover:text-primary focus:text-primary',
                  unacknowledgedVaults.length > 0 ? 'bg-primary/20' : ''
                )}
                onClick={() => setOpenScanner(true)}
              >
                <Stars size={20} />
                <p className="mt-[4px] text-[14px]">
                  {unimportedVaultsLoadable.contents.length} vault
                  {unimportedVaultsLoadable.contents.length > 1 ? 's' : ''} detected
                </p>
              </DropdownMenuItem>
            ) : null
          ) : null}
        </div>
        <DropdownMenuSeparator />
        <div className="max-h-[240px] overflow-y-auto p-[4px] w-full">
          {multisigs.map(multisig => (
            <DropdownMenuItem
              key={multisig.id}
              className={cn(
                'flex items-center focus:bg-gray-800 hover:bg-gray-800 w-full rounded-[8px] py-[8px] px-[12px]',
                selectedMultisig.id === multisig.id ? 'bg-gray-800' : ''
              )}
              onClick={() => handleChange(multisig.id)}
            >
              <VaultDetails multisig={multisig} />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
