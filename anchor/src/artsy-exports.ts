// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import ArtsyIDL from '../target/idl/artsy.json'
import type { Artsy } from '../target/types/artsy'

// Re-export the generated IDL and type
export { Artsy, ArtsyIDL }

// The programId is imported from the program IDL.
export const ARTSY_PROGRAM_ID = new PublicKey(ArtsyIDL.address)

// This is a helper function to get the Artsy Anchor program.
export function getArtsyProgram(provider: AnchorProvider) {
  return new Program(ArtsyIDL as Artsy, provider)
}

// This is a helper function to get the program ID for the Artsy program depending on the cluster.
export function getArtsyProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Artsy program on devnet and testnet.
      return new PublicKey('CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg')
    case 'mainnet-beta':
    default:
      return ARTSY_PROGRAM_ID
  }
}
