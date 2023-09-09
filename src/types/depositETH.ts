import { l1StandardBridgeABI } from '@eth-optimism/contracts-ts'
import { Address, Hex } from 'viem'
import { OpStackL1Contract } from './opStackContracts'

export const ABI = l1StandardBridgeABI
export const CONTRACT = OpStackL1Contract.L1StandardBridge
export const FUNCTION = 'depositETHTo'

export type DepositETHParameters = {
  to: Address
  minGasLimit: bigint
  extraData?: Hex
}