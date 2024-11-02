#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("AsjZ3kWAUSQRNt2pZVeJkywhZ6gpLpHZmJjduPmKZDZZ");

#[program]
pub mod artsy {
    use super::*;

  pub fn close(_ctx: Context<CloseArtsy>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.artsy.count = ctx.accounts.artsy.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.artsy.count = ctx.accounts.artsy.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeArtsy>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.artsy.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeArtsy<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Artsy::INIT_SPACE,
  payer = payer
  )]
  pub artsy: Account<'info, Artsy>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseArtsy<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub artsy: Account<'info, Artsy>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub artsy: Account<'info, Artsy>,
}

#[account]
#[derive(InitSpace)]
pub struct Artsy {
  count: u8,
}
