import type Database from "better-sqlite3";
import { defineUnit, type UnitCatalog } from "../database/statements/statement-catalog";
import { record, str } from "../database/statements/unit-args";
import { purgeWorkspaceMemoryRows } from "./memory-purge-sql";

/**
 * "Clear All Memories" as a memory-domain unit (memory-purge-sql.ts). Running it through
 * the memory statement port puts it on the database worker's write connection when the
 * runtime routes memory there, queued with the worker's other writes. Run on the host
 * connection instead, it raced those writes and failed with "database is locked" once
 * the worker held the write lock past the busy timeout (startup maintenance, task
 * cancellations), leaving most stores uncleared.
 */
export const MEMORY_PURGE_UNITS = {
  memoryPurge_workspace: defineUnit(
    (args: unknown) => ({
      workspaceId: str(record(args).workspaceId, "args.workspaceId", 200),
    }),
    (db: Database.Database, args) => purgeWorkspaceMemoryRows(db, args.workspaceId),
  ),
} satisfies UnitCatalog;
