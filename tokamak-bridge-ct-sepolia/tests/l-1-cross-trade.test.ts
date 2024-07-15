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
    let _requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _ctAmount = BigInt.fromI32(234)
    let _saleCount = BigInt.fromI32(234)
    let newEditCTEvent = createEditCTEvent(_requester, _ctAmount, _saleCount)
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
      "_requester",
      "0x0000000000000000000000000000000000000001"
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

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
