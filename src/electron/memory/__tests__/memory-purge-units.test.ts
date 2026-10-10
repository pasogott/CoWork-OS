import { describe, expect, it, vi } from "vitest";
import { MemoryService } from "../MemoryService";
import { purgeWorkspaceMemoryRowsOnHost } from "../memory-purge-sql";
import { MEMORY_UNITS } from "../memory-units";

describe("Clear All Memories row purge", () => {
  it("is a memory-domain unit", () => {
    expect(MEMORY_UNITS).toHaveProperty("memoryPurge_workspace");
  });

  it("runs through the memory statement port, not the host connection", async () => {
    // On the worker backend the port queues it with the worker's other writes; the old
    // direct host write raced them and failed with "database is locked".
    const unit = vi.fn(async () => ({ curatedEntries: 0 }));
    vi.spyOn(MemoryService, "getStatements").mockReturnValue({ unit } as never);
    const getDatabase = vi.spyOn(MemoryService, "getDatabase");
    await purgeWorkspaceMemoryRowsOnHost("workspace-1");
    expect(unit).toHaveBeenCalledWith("memoryPurge_workspace", { workspaceId: "workspace-1" });
    expect(getDatabase).not.toHaveBeenCalled();
    vi.restoreAllMocks();
  });
});
