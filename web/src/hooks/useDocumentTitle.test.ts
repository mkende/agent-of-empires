// @vitest-environment jsdom

import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useDocumentTitle } from "./useDocumentTitle";

describe("useDocumentTitle", () => {
  it("prefixes the active session title and falls back to the app name", () => {
    const { rerender } = renderHook(({ title }) => useDocumentTitle(title), {
      initialProps: { title: "fix-login" as string | undefined },
    });
    expect(document.title).toBe("fix-login - Agent of Empires");

    rerender({ title: "refactor-db" });
    expect(document.title).toBe("refactor-db - Agent of Empires");

    rerender({ title: undefined });
    expect(document.title).toBe("Agent of Empires");
  });
});
