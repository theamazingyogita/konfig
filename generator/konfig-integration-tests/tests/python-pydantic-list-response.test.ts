import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-list-response", async () => {
  await e2e(4002);
});
