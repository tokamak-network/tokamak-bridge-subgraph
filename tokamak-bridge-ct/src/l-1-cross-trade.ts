import {
  EditCT as EditCTEvent,
  L1CancelCT as L1CancelCTEvent,
  ProvideCT as ProvideCTEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/L1CrossTrade/L1CrossTrade"
import {
  EditCT,
  L1CancelCT,
  ProvideCT,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleEditCT(event: EditCTEvent): void {
  let entity = new EditCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1token = event.params._l1token
  entity._l2token = event.params._l2token
  entity._requester = event.params._requester
  entity._totalAmount = event.params._totalAmount
  entity._ctAmount = event.params._ctAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId
  entity._hash = event.params._hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleL1CancelCT(event: L1CancelCTEvent): void {
  let entity = new L1CancelCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1token = event.params._l1token
  entity._l2token = event.params._l2token
  entity._requester = event.params._requester
  entity._totalAmount = event.params._totalAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId
  entity._hash = event.params._hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvideCT(event: ProvideCTEvent): void {
  let entity = new ProvideCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1token = event.params._l1token
  entity._l2token = event.params._l2token
  entity._requester = event.params._requester
  entity._provider = event.params._provider
  entity._totalAmount = event.params._totalAmount
  entity._ctAmount = event.params._ctAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId
  entity._hash = event.params._hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
