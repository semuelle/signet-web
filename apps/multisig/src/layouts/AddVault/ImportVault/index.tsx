import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { Address } from '@util/addresses'
import { Chain, filteredSupportedChains } from '@domains/chains'

import NameVault from '../common/NameVault'
import SelectChain from '../common/SelectChain'
import { MultisigConfig } from '../MultisigConfig'
import Confirmation from '../common/Confirmation'
import { ProxiedAccountSettings } from './ProxiedAccountSettings'
import { useAugmentedAccounts } from '../common/useAugmentedAccounts'
import { useCreateOrganisation } from '@domains/offchain-data/organisation'

export enum Step {
  NameVault,
  SelectFirstChain,
  ProxiedAccountAddress,
  MultisigConfig,
  Confirmation,
  Transactions,
}

export const ImportVault: React.FC = () => {
  let firstChain = filteredSupportedChains[0]
  if (!firstChain) throw Error('no supported chains')

  const navigate = useNavigate()
  const [step, setStep] = useState(Step.NameVault)
  const [name, setName] = useState<string>('')
  const [chain, setChain] = useState<Chain>(firstChain)
  const [threshold, setThreshold] = useState<number>(2)
  const [proxiedAddress, setProxiedAddress] = useState<Address | undefined>()
  const [importing, setImporting] = useState(false)

  const { augmentedAccounts, setAddedAccounts } = useAugmentedAccounts()
  const { createOrganisation } = useCreateOrganisation()

  const handleImport = useCallback(async () => {
    if (!proxiedAddress) return
    setImporting(true)
    try {
      const { ok, error } = await createOrganisation({
        name,
        chain: chain.squidIds.chainData,
        multisig_config: { signers: augmentedAccounts.map(a => a.address.toSs58()), threshold },
        proxied_address: proxiedAddress.toSs58(),
      })

      if (!ok || error) {
        toast.error(error ?? 'Failed to import vault, please try again later.')
        return
      }

      toast.success('Vault imported successfully!')
      navigate(`/overview`)
    } catch (e) {
      console.error(e)
      toast.error('Failed to import vault, please try again later.')
    } finally {
      setImporting(false)
    }
  }, [augmentedAccounts, chain.squidIds.chainData, createOrganisation, name, navigate, proxiedAddress, threshold])

  return (
    <>
      {step === Step.NameVault ? (
        <NameVault
          header="Import Vault"
          onBack={() => navigate('/add-vault')}
          onNext={() => setStep(Step.SelectFirstChain)}
          setName={setName}
          name={name}
        />
      ) : step === Step.SelectFirstChain ? (
        <SelectChain
          header="Import Vault"
          onBack={() => setStep(Step.NameVault)}
          onNext={() => setStep(Step.ProxiedAccountAddress)}
          setChain={setChain}
          chain={chain}
          chains={filteredSupportedChains}
        />
      ) : step === Step.ProxiedAccountAddress || !proxiedAddress ? (
        <ProxiedAccountSettings
          header="Import Vault"
          address={proxiedAddress}
          chain={chain}
          onBack={() => setStep(Step.SelectFirstChain)}
          onChange={setProxiedAddress}
          onNext={() => setStep(Step.MultisigConfig)}
        />
      ) : step === Step.MultisigConfig ? (
        <MultisigConfig
          header="Import Vault"
          chain={chain}
          threshold={threshold}
          onThresholdChange={setThreshold}
          onBack={() => setStep(Step.ProxiedAccountAddress)}
          onNext={() => setStep(Step.Confirmation)}
          members={augmentedAccounts}
          onMembersChange={setAddedAccounts}
        />
      ) : step === Step.Confirmation ? (
        <Confirmation
          header="Import Vault"
          onBack={() => setStep(Step.MultisigConfig)}
          onCreateVault={handleImport}
          proxiedAccount={proxiedAddress}
          selectedAccounts={augmentedAccounts}
          threshold={threshold}
          name={name}
          chain={chain}
          importing={importing}
        />
      ) : null}
    </>
  )
}
