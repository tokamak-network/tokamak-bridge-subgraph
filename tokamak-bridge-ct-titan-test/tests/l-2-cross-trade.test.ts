import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { CancelCT } from "../generated/schema";
import { CancelCT as CancelCTEvent } from "../generated/L2CrossTrade/L2CrossTrade";
import { handleCancelCT } from "../src/l-2-cross-trade";
import { createCancelCTEvent } from "./l-2-cross-trade-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let _totalAmount = BigInt.fromI32(234);
    let _saleCount = BigInt.fromI32(234);
    let _l2chainId = BigInt.fromI32(234);
    let _hash = Bytes.fromI32(1234567890);
    let newCancelCTEvent = createCancelCTEvent(
      _requester,
      _totalAmount,
      _saleCount,
      _l2chainId,
      _hash
    );
    handleCancelCT(newCancelCTEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CancelCT created and stored", () => {
    assert.entityCount("CancelCT", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CancelCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_requester",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "CancelCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_totalAmount",
      "234"
    );
    assert.fieldEquals(
      "CancelCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_saleCount",
      "234"
    );
    assert.fieldEquals(
      "CancelCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l2chainId",
      "234"
    );
    assert.fieldEquals(
      "CancelCT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_hash",
      "1234567890"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
