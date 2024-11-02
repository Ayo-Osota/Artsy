import * as anchor from '@coral-xyz/anchor'
import {Program} from '@coral-xyz/anchor'
import {Keypair} from '@solana/web3.js'
import {Artsy} from '../target/types/artsy'

describe('artsy', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Artsy as Program<Artsy>

  const artsyKeypair = Keypair.generate()

  it('Initialize Artsy', async () => {
    await program.methods
      .initialize()
      .accounts({
        artsy: artsyKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([artsyKeypair])
      .rpc()

    const currentCount = await program.account.artsy.fetch(artsyKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Artsy', async () => {
    await program.methods.increment().accounts({ artsy: artsyKeypair.publicKey }).rpc()

    const currentCount = await program.account.artsy.fetch(artsyKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Artsy Again', async () => {
    await program.methods.increment().accounts({ artsy: artsyKeypair.publicKey }).rpc()

    const currentCount = await program.account.artsy.fetch(artsyKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement Artsy', async () => {
    await program.methods.decrement().accounts({ artsy: artsyKeypair.publicKey }).rpc()

    const currentCount = await program.account.artsy.fetch(artsyKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set artsy value', async () => {
    await program.methods.set(42).accounts({ artsy: artsyKeypair.publicKey }).rpc()

    const currentCount = await program.account.artsy.fetch(artsyKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the artsy account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        artsy: artsyKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.artsy.fetchNullable(artsyKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
