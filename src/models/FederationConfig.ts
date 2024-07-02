export type FederationConfig = {
  name: string;
  exposes: Record<string, string | { import: string[]; name: string }>;
};
