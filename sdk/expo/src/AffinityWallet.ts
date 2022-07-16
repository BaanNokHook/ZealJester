import { createV5CompatibleWalletFactories, createV6WalletFactories, EventComponent } from '@affinidi/wallet-core-sdk'

import platformCryptographyTools from './PlatformCryptographyTools'

export const AffinidiWallet = createV5CompatibleWalletFactories(
  platformCryptographyTools,
  EventComponent.AffinidiExpoSDK,
)

export const AffinidiWalletV6 = createV6WalletFactories(platformCryptographyTools, EventComponent.AffinidiExpoSDK)
