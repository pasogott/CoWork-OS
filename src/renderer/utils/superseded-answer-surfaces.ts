import { hasAnswerSurfaceBlock } from "../../shared/answer-surfaces/blocks";
import type { TaskEvent } from "../../shared/types";
import { getEffectiveTaskEventType } from "./task-event-compat";

/**
 * Assistant messages whose interactive answer block a later message in the same turn
 * repeats. A task builds its answer step by step and models often put the block in each
 * step's message as well as the final one; only the latest copy in a turn stays live, so
 * the user does not get the same calculator several times. A user message starts a new
 * turn, so answers to earlier questions keep their blocks.
 */
export function supersededAnswerSurfaceEvents(events: readonly TaskEvent[]): Set<string> {
  const superseded = new Set<string>();
  let latestInTurn: string | null = null;
  for (const event of events) {
    const type = getEffectiveTaskEventType(event);
    if (type === "user_message") {
      latestInTurn = null;
      continue;
    }
    if (type !== "assistant_message" || !event.id) continue;
    const message = event.payload?.message;
    if (typeof message !== "string" || !hasAnswerSurfaceBlock(message)) continue;
    if (latestInTurn) superseded.add(latestInTurn);
    latestInTurn = event.id;
  }
  return superseded;
}
