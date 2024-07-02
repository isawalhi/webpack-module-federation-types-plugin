export const getExposedModulePaths = (
  expose: string | { import: string[]; name: string }
): string[] => {
  if (typeof expose === "string") {
    return [expose];
  }
  return expose.import;
};
