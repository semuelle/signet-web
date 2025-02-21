import { Chain } from './tokens'

export const supportedChains: Chain[] = [
  {
    chainName: 'Polkadot',
    genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/polkadot.svg',
    nativeToken: {
      id: 'polkadot-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://apps-rpc.polkadot.io',
      },
      {
        url: 'wss://polkadot-rpc.dwellir.com',
      },
      {
        url: 'wss://polkadot-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://rpc.ibp.network/polkadot',
      },
      {
        url: 'wss://rpc.dotters.network/polkadot',
      },
      {
        url: 'wss://1rpc.io/dot',
      },
      {
        url: 'wss://rpc-polkadot.luckyfriday.io',
      },
      {
        url: 'wss://polkadot.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://dot-rpc.stakeworld.io',
      },
    ],
    squidIds: {
      chainData: 'polkadot',
    },
    ss58Prefix: 0,
    subscanUrl: 'https://polkadot.subscan.io/',
    polkaAssemblyUrl: 'https://polkadot.polkassembly.io',
  },
  {
    chainName: 'Polkadot Asset Hub',
    genesisHash: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/polkadot-asset-hub.svg',
    nativeToken: {
      id: 'polkadot-asset-hub-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://statemint-rpc.dwellir.com',
      },
      {
        url: 'wss://statemint-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://sys.ibp.network/statemint',
      },
      {
        url: 'wss://sys.dotters.network/statemint',
      },
      {
        url: 'wss://rpc-asset-hub-polkadot.luckyfriday.io',
      },
      {
        url: 'wss://polkadot-asset-hub-rpc.polkadot.io',
      },
      {
        url: 'wss://statemint.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://dot-rpc.stakeworld.io/assethub',
      },
    ],
    squidIds: {
      chainData: 'polkadot-asset-hub',
    },
    ss58Prefix: 0,
    subscanUrl: 'https://assethub-polkadot.subscan.io/',
  },
  {
    chainName: 'Kusama',
    genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/kusama.svg',
    nativeToken: {
      id: 'kusama-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://kusama-rpc.polkadot.io',
      },
      {
        url: 'wss://kusama-rpc.dwellir.com',
      },
      {
        url: 'wss://kusama-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://rpc.ibp.network/kusama',
      },
      {
        url: 'wss://rpc.dotters.network/kusama',
      },
      {
        url: 'wss://1rpc.io/ksm',
      },
      {
        url: 'wss://rpc-kusama.luckyfriday.io',
      },
      {
        url: 'wss://kusama.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://ksm-rpc.stakeworld.io',
      },
    ],
    squidIds: {
      chainData: 'kusama',
    },
    ss58Prefix: 2,
    subscanUrl: 'https://kusama.subscan.io/',
    polkaAssemblyUrl: 'https://kusama.polkassembly.io',
  },
  {
    chainName: 'Kusama Asset Hub',
    genesisHash: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/kusama-asset-hub.svg',
    nativeToken: {
      id: 'kusama-asset-hub-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://statemine-rpc.dwellir.com',
      },
      {
        url: 'wss://statemine-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://sys.ibp.network/statemine',
      },
      {
        url: 'wss://sys.dotters.network/statemine',
      },
      {
        url: 'wss://rpc-asset-hub-kusama.luckyfriday.io',
      },
      {
        url: 'wss://kusama-asset-hub-rpc.polkadot.io',
      },
      {
        url: 'wss://statemine.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://ksm-rpc.stakeworld.io/assethub',
      },
    ],
    squidIds: {
      chainData: 'kusama-asset-hub',
    },
    ss58Prefix: 2,
    subscanUrl: 'https://assethub-kusama.subscan.io/',
  },
  {
    chainName: 'Acala',
    genesisHash: '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/acala.svg',
    nativeToken: {
      id: 'acala-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://acala-rpc.dwellir.com',
      },
      {
        url: 'wss://acala-rpc-0.aca-api.network',
      },
      {
        url: 'wss://acala-rpc-1.aca-api.network',
      },
      {
        url: 'wss://acala-rpc-3.aca-api.network/ws',
      },
    ],
    squidIds: {
      chainData: 'acala',
    },
    ss58Prefix: 10,
    subscanUrl: 'https://acala.subscan.io/',
  },
  {
    chainName: 'Astar',
    genesisHash: '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/astar.svg',
    nativeToken: {
      id: 'astar-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://rpc.astar.network',
      },
      {
        url: 'wss://astar-rpc.dwellir.com',
      },
      {
        url: 'wss://1rpc.io/astr',
      },
      {
        url: 'wss://astar.public.curie.radiumblock.co/ws',
      },
    ],
    squidIds: {
      chainData: 'astar',
    },
    ss58Prefix: 5,
    subscanUrl: 'https://astar.subscan.io/',
    polkaAssemblyUrl: 'https://astar.polkassembly.io',
  },
  {
    chainName: 'HydraDX',
    genesisHash: '0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/hydradx.svg',
    nativeToken: {
      id: 'hydradx-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://hydradx-rpc.dwellir.com',
      },
      {
        url: 'wss://rpc.hydradx.cloud',
      },
    ],
    squidIds: {
      chainData: 'hydradx',
    },
    ss58Prefix: 63,
    subscanUrl: 'https://hydradx.subscan.io/',
    polkaAssemblyUrl: 'https://centrifuge.polkassembly.io',
  },
  {
    chainName: 'Interlay',
    genesisHash: '0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/interlay.svg',
    nativeToken: {
      id: 'interlay-substrate-tokens-intr',
    },
    rpcs: [
      {
        url: 'wss://interlay-rpc.dwellir.com',
      },
      {
        url: 'wss://api.interlay.io/parachain',
      },
      {
        url: 'wss://rpc-interlay.luckyfriday.io/',
      },
    ],
    squidIds: {
      chainData: 'interlay',
    },
    ss58Prefix: 2032,
    subscanUrl: 'https://interlay.subscan.io/',
  },
  {
    chainName: 'Karura',
    genesisHash: '0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/karura.svg',
    nativeToken: {
      id: 'karura-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://karura-rpc-0.aca-api.network',
      },
      {
        url: 'wss://karura-rpc-1.aca-api.network',
      },
      {
        url: 'wss://karura-rpc-2.aca-api.network/ws',
      },
      {
        url: 'wss://karura-rpc-3.aca-api.network/ws',
      },
    ],
    squidIds: {
      chainData: 'karura',
    },
    ss58Prefix: 8,
    subscanUrl: 'https://karura.subscan.io/',
  },
  {
    chainName: 'Khala',
    genesisHash: '0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/khala.svg',
    nativeToken: {
      id: 'khala-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://khala-rpc.dwellir.com',
      },
      {
        url: 'wss://khala.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://khala-api.phala.network/ws',
      },
    ],
    squidIds: {
      chainData: 'khala',
    },
    ss58Prefix: 30,
    subscanUrl: 'https://khala.subscan.io/',
  },
  {
    chainName: 'Kintsugi',
    genesisHash: '0x9af9a64e6e4da8e3073901c3ff0cc4c3aad9563786d89daf6ad820b6e14a0b8b',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/kintsugi.svg',
    nativeToken: {
      id: 'kintsugi-substrate-tokens-kint',
    },
    rpcs: [
      {
        url: 'wss://kintsugi-rpc.dwellir.com',
      },
      {
        url: 'wss://api-kusama.interlay.io/parachain',
      },
    ],
    squidIds: {
      chainData: 'kintsugi',
    },
    ss58Prefix: 2092,
    subscanUrl: 'https://kintsugi.subscan.io/',
  },
  {
    chainName: 'Moonbeam',
    genesisHash: '0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/moonbeam.svg',
    nativeToken: {
      id: 'moonbeam-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://moonbeam-rpc.dwellir.com',
      },
      {
        url: 'wss://1rpc.io/glmr',
      },
      {
        url: 'wss://wss.api.moonbeam.network',
      },
      {
        url: 'wss://moonbeam.unitedbloc.com',
      },
      {
        url: 'wss://moonbeam.public.curie.radiumblock.co/ws',
      },
    ],
    squidIds: {
      chainData: 'moonbeam',
    },
    ss58Prefix: 1284,
    subscanUrl: 'https://moonbeam.subscan.io/',
  },
  {
    chainName: 'Phala',
    genesisHash: '0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/phala.svg',
    nativeToken: {
      id: 'phala-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://phala-rpc.dwellir.com',
      },
      {
        url: 'wss://phala.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://api.phala.network/ws',
      },
    ],
    squidIds: {
      chainData: 'phala',
    },
    ss58Prefix: 30,
    subscanUrl: 'https://phala.subscan.io/',
  },
  {
    chainName: 'Rococo',
    genesisHash: '0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/rococo-testnet.svg',
    nativeToken: {
      id: 'rococo-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://rococo-rpc.polkadot.io',
      },
    ],
    squidIds: {
      chainData: 'rococo-testnet',
    },
    ss58Prefix: 42,
    subscanUrl: 'https://rococo.subscan.io/',
  },
  {
    chainName: 'Shibuya',
    genesisHash: '0xddb89973361a170839f80f152d2e9e38a376a5a7eccefcade763f46a8e567019',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/shibuya-testnet.svg',
    nativeToken: {
      id: 'shibuya-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://shibuya-rpc.dwellir.com',
      },
      {
        url: 'wss://rpc.shibuya.astar.network',
      },
    ],
    squidIds: {
      chainData: 'shibuya-testnet',
    },
    ss58Prefix: 5,
    subscanUrl: 'https://shibuya.subscan.io/',
  },
  {
    chainName: 'Aleph Zero Testnet',
    genesisHash: '0x05d5279c52c484cc80396535a316add7d47b1c5b9e0398dd1f584149341460c5',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/aleph-zero-testnet.svg',
    nativeToken: {
      id: 'aleph-zero-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://aleph-zero-testnet-rpc.dwellir.com',
      },
      {
        url: 'wss://ws.test.azero.dev',
      },
    ],
    squidIds: {
      chainData: 'aleph-zero-testnet',
    },
    ss58Prefix: 42,
    subscanUrl: 'https://test.azero.dev/#/explorer/',
  },
]
