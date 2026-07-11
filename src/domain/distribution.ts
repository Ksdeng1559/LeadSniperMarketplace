export type DistributionMode = "exclusive" | "shared" | "internal";

export function remainingInventory(input: {
  mode: DistributionMode;
  maxPurchases: number;
  purchaseCount: number;
  activeReservations: number;
}): number {
  if (input.mode === "internal") return 0;
  const cap = input.mode === "exclusive" ? 1 : input.maxPurchases;
  return Math.max(0, cap - input.purchaseCount - input.activeReservations);
}
