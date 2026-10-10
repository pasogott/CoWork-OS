import { describe, expect, it } from "vitest";
import type { TaskEvent } from "../../../shared/types";
import { supersededAnswerSurfaceEvents } from "../superseded-answer-surfaces";

const block = '```cowork-ui\n{"type":"card","children":[{"type":"text","text":"hi"}]}\n```';
const event = (id: string, type: string, message = ""): TaskEvent =>
  ({ id, taskId: "t", type, timestamp: 0, payload: { message } }) as unknown as TaskEvent;

describe("supersededAnswerSurfaceEvents", () => {
  it("keeps only the latest block in a turn live", () => {
    const events = [
      event("u1", "user_message", "Plan my mortgage"),
      event("a1", "assistant_message", `Step one\n${block}`),
      event("a2", "assistant_message", "Plain progress"),
      event("a3", "assistant_message", `Step two\n${block}`),
      event("a4", "assistant_message", `Final\n${block}`),
    ];
    expect([...supersededAnswerSurfaceEvents(events)]).toEqual(["a1", "a3"]);
  });

  it("lets answers to earlier questions keep their blocks", () => {
    const events = [
      event("u1", "user_message", "Savings?"),
      event("a1", "assistant_message", block),
      event("u2", "user_message", "And a mortgage?"),
      event("a2", "assistant_message", block),
    ];
    expect(supersededAnswerSurfaceEvents(events).size).toBe(0);
  });
});
