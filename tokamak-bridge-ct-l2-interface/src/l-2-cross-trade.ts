import {
  CancelCT as CancelCTEvent,
  NonRequestCT as NonRequestCTEvent,
  ProviderClaimCT as ProviderClaimCTEvent,
  RequestCT as RequestCTEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/L2CrossTrade/L2CrossTrade"
import {
  CancelCT,
  NonRequestCT,
  ProviderClaimCT,
  RequestCT,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleCancelCT(event: CancelCTEvent): void {
  let entity = new CancelCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._requester = event.params._requester
  entity._totalAmount = event.params._totalAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNonRequestCT(event: NonRequestCTEvent): void {
  let entity = new NonRequestCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1token = event.params._l1token
  entity._l2token = event.params._l2token
  entity._requester = event.params._requester
  entity._totalAmount = event.params._totalAmount
  entity._ctAmount = event.params._ctAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId
  entity._hashValue = event.params._hashValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProviderClaimCT(event: ProviderClaimCTEvent): void {
  let entity = new ProviderClaimCT(
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

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestCT(event: RequestCTEvent): void {
  let entity = new RequestCT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1token = event.params._l1token
  entity._l2token = event.params._l2token
  entity._requester = event.params._requester
  entity._totalAmount = event.params._totalAmount
  entity._ctAmount = event.params._ctAmount
  entity._saleCount = event.params._saleCount
  entity._l2chainId = event.params._l2chainId
  entity._hashValue = event.params._hashValue

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
