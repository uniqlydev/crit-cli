import { type Finding, Severity } from "./findings";


export function toSarif(findings: Finding[]) {
  return {
    $schema: "https://json.schemastore.org/sarif-2.1.0.json",
    version: "2.1.0",
    runs: [{ tool: { driver: { name: "crit" } }, results: [] }]
  };
}