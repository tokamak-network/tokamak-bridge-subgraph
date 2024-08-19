import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CancelCT,
  NonRequestCT,
  ProviderClaimCT,
  RequestCT,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/L2CrossTrade/L2CrossTrade"

export function createCancelCTEvent(
  _requester: Address,
  _totalAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt
): CancelCT {
  let cancelCtEvent = changetype<CancelCT>(newMockEvent())

  cancelCtEvent.parameters = new Array()

  cancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  cancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  cancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  cancelCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )

  return cancelCtEvent
}

export function createNonRequestCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _totalAmount: BigInt,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hashValue: Bytes
): NonRequestCT {
  let nonRequestCtEvent = changetype<NonRequestCT>(newMockEvent())

  nonRequestCtEvent.parameters = new Array()

  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_ctAmount",
      ethereum.Value.fromUnsignedBigInt(_ctAmount)
    )
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  nonRequestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_hashValue",
      ethereum.Value.fromFixedBytes(_hashValue)
    )
  )

  return nonRequestCtEvent
}

export function createProviderClaimCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _provider: Address,
  _totalAmount: BigInt,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hash: Bytes
): ProviderClaimCT {
  let providerClaimCtEvent = changetype<ProviderClaimCT>(newMockEvent())

  providerClaimCtEvent.parameters = new Array()

  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam("_provider", ethereum.Value.fromAddress(_provider))
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam(
      "_ctAmount",
      ethereum.Value.fromUnsignedBigInt(_ctAmount)
    )
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  providerClaimCtEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return providerClaimCtEvent
}

export function createRequestCTEvent(
  _l1token: Address,
  _l2token: Address,
  _requester: Address,
  _totalAmount: BigInt,
  _ctAmount: BigInt,
  _saleCount: BigInt,
  _l2chainId: BigInt,
  _hashValue: Bytes
): RequestCT {
  let requestCtEvent = changetype<RequestCT>(newMockEvent())

  requestCtEvent.parameters = new Array()

  requestCtEvent.parameters.push(
    new ethereum.EventParam("_l1token", ethereum.Value.fromAddress(_l1token))
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam("_l2token", ethereum.Value.fromAddress(_l2token))
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_requester",
      ethereum.Value.fromAddress(_requester)
    )
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_totalAmount",
      ethereum.Value.fromUnsignedBigInt(_totalAmount)
    )
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_ctAmount",
      ethereum.Value.fromUnsignedBigInt(_ctAmount)
    )
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_saleCount",
      ethereum.Value.fromUnsignedBigInt(_saleCount)
    )
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_l2chainId",
      ethereum.Value.fromUnsignedBigInt(_l2chainId)
    )
  )
  requestCtEvent.parameters.push(
    new ethereum.EventParam(
      "_hashValue",
      ethereum.Value.fromFixedBytes(_hashValue)
    )
  )

  return requestCtEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
