import Image from "next/image";

const projects = [
  {
    title: "Operation Aurora Shield",
    focus: "Hybrid cloud lateral movement simulation for mission-critical workloads.",
    image: "/images/project-topology.svg",
    findings: [
      "Identified over-permissioned IAM roles enabling cross-account pivoting.",
      "Detected insecure inter-VPC routing exposing staging data."
    ],
    remediation: [
      "Implemented scoped IAM policies with automated drift detection.",
      "Deployed segmented routing and guardrail alerts in AWS Network Firewall."
    ]
  },
  {
    title: "Operation Nebula Trace",
    focus: "Cloud-native breach & attack simulation for SaaS platform resilience.",
    image: "/images/project-cloud.svg",
    findings: [
      "Exposed API gateway tokens stored in plaintext within CI logs.",
      "Limited alerting on anomalous data exfiltration patterns."
    ],
    remediation: [
      "Rotated tokens into managed secrets with continuous scanning.",
      "Built data egress detections with automated SOAR playbooks."
    ]
  },
  {
    title: "Operation Copper Watch",
    focus: "Zero trust validation for on-prem to cloud migration pipeline.",
    image: "/images/project-topology.svg",
    findings: [
      "Legacy bastion host exposed to broad CIDR ingress.",
      "Insufficient MFA enforcement on privileged admin paths."
    ],
    remediation: [
      "Introduced conditional access with IP allow-lists and session recording.",
      "Rolled out phishing-resistant MFA with step-up policies."
    ]
  }
];

export default function OperationsPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Operations</p>
        <h2 className="section-title text-white">Project Intelligence Dossiers</h2>
        <p className="text-slate-300">
          Each engagement includes a dedicated architecture visual, threat-driven findings, and actionable
          remediation blueprints.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article key={project.title} className="card grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.focus}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Findings
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300">
                    {project.findings.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                    Remediation
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-300">
                    {project.remediation.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <Image
                src={project.image}
                alt={`${project.title} architecture placeholder`}
                width={640}
                height={420}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
