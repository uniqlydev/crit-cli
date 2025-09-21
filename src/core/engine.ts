import { type CritConfig } from "./config";
import { type Workflow } from "./workflow";
import { type Finding, Severity } from "./findings";

export async function runEngine({
    cfg,
    wf,
    files
}: { cfg: CritConfig; wf: Workflow; files: string[]}): Promise<Finding[]> {
    return [
        {
            ruleId: "demo.rule",
            file: "example.js",
            message: "This is a demo finding",
            severity: Severity.Critical
        }
    ]
};