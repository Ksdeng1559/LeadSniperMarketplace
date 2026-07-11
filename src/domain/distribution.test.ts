import { describe, expect, it } from "vitest";
import { remainingInventory } from "./distribution";

describe("remainingInventory", () => {
  it("limits exclusive leads to one seat", () => {
    expect(remainingInventory({ mode: "exclusive", maxPurchases: 5, purchaseCount: 0, activeReservations: 0 })).toBe(1);
  });

  it("subtracts paid and actively reserved shared seats", () => {
    expect(remainingInventory({ mode: "shared", maxPurchases: 3, purchaseCount: 1, activeReservations: 1 })).toBe(1);
  });

  it("never lists internal opportunities", () => {
    expect(remainingInventory({ mode: "internal", maxPurchases: 3, purchaseCount: 0, activeReservations: 0 })).toBe(0);
  });
});
