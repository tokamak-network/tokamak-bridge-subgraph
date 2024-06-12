import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { FailedRelayedFastMessage } from "../generated/schema"
import { FailedRelayedFastMessage as FailedRelayedFastMessageEvent } from "../generated/L1CrossDomainMessenger/L1CrossDomainMessenger"
import { handleFailedRelayedFastMessage } from "../src/l-1-cross-domain-messenger"
import { createFailedRelayedFastMessageEvent } from "./l-1-cross-domain-messenger-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let target = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let message = Bytes.fromI32(1234567890)
    let messageNonce = BigInt.fromI32(234)
    let newFailedRelayedFastMessageEvent = createFailedRelayedFastMessageEvent(
      target,
      sender,
      message,
      messageNonce
    )
    handleFailedRelayedFastMessage(newFailedRelayedFastMessageEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FailedRelayedFastMessage created and stored", () => {
    assert.entityCount("FailedRelayedFastMessage", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FailedRelayedFastMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "target",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FailedRelayedFastMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FailedRelayedFastMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "message",
      "1234567890"
    )
    assert.fieldEquals(
      "FailedRelayedFastMessage",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "messageNonce",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
