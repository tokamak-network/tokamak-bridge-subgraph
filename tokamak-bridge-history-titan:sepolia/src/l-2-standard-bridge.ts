import { DepositFinalized as DepositFinalizedEvent } from "../generated/L2StandardBridge/L2StandardBridge";
import { DepositFinalized } from "../generated/schema";

export function handleDepositFinalized(event: DepositFinalizedEvent): void {
  let entity = new DepositFinalized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._l1Token = event.params._l1Token;
  entity._l2Token = event.params._l2Token;
  entity._from = event.params._from;
  entity._to = event.params._to;
  entity._amount = event.params._amount;
  entity._data = event.params._data;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
