import { DepositFinalized as DepositFinalizedEvent } from "../generated/L2StandardBridge/L2StandardBridge";
import { DepositFinalized } from "../generated/schema";

export function handleDepositFinalized(event: DepositFinalizedEvent): void {
  let entity = new DepositFinalized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.l1Token = event.params.l1Token;
  entity.l2Token = event.params.l2Token;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.extraData = event.params.extraData;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
