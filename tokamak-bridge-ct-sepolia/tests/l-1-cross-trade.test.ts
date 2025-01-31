import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { EditCT } from "../generated/schema"
import { EditCT as EditCTEvent } from "../generated/L1CrossTrade/L1CrossTrade"
import { handleEditCT } from "../src/l-1-cross-trade"
import { createEditCTEvent } from "./l-1-cross-trade-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _l1token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _l2token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _totalAmount = BigInt.fromI32(234)
    let _ctAmount = BigInt.fromI32(234)
    let _saleCount = BigInt.fromI32(234)
    let _l2chainId = BigInt.fromI32(234)
    let _hash = Bytes.fromI32(1234567890)
    let newEditCTEvent = createEditCTEvent(
      _l1token,
      _l2token,
      _requester,
      _totalAmount,
      _ctAmount,
      _saleCount,
      _l2chainId,
      _hash
    )
    handleEditCT(newEditCTEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EditCT created and stored", () => {
    assert.entityCount("EditCT", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l1token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l2token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_requester",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_totalAmount",
      "234"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_ctAmount",
      "234"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_saleCount",
      "234"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l2chainId",
      "234"
    )
    assert.fieldEquals(
      "EditCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_hash",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
