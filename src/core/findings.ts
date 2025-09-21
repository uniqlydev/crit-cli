enum Severity {
    Info = "info",
    Low = "low",
    Medium = "medium",
    High = "high",
    Critical = "critical"
}

type Finding = {
    ruleId: string;
    file: string;
    message: string;
    severity: Severity;
}

export { Severity };
export type { Finding };