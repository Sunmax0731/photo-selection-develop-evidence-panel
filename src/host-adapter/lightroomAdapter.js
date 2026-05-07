export function buildHostAdapterRecord(input) {
  return {
    host: "Lightroom",
    product: "photo-selection-develop-evidence-panel",
    title: input.title,
    nextAction: input.nextAction,
    evidenceOnly: true
  };
}
