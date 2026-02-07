import Image from "next/image";

const roles = [
  {
    company: "SportsExcitement",
    title: "Lead Offensive Security Engineer",
    period: "2022 - Present",
    logo: "/images/sports-excitement-logo.svg",
    summary: "Led cloud red team exercises and built continuous attack surface monitoring for global fan platforms.",
    achievements: [
      "Directed purple team operations across AWS and Kubernetes estates.",
      "Reduced critical exposure time by integrating automated remediation playbooks."
    ]
  },
  {
    company: "DreamStudio",
    title: "Security Engineering Consultant",
    period: "2019 - 2022",
    logo: "/images/dreamstudio-logo.svg",
    summary: "Designed secure cloud architectures and performed adversary emulation for media production workloads.",
    achievements: [
      "Implemented zero trust identity segmentation for cross-region pipelines.",
      "Delivered executive risk briefings with prioritized control roadmaps."
    ]
  }
];

const stack = [
  { label: "AWS", icon: "/images/aws-icon.svg" },
  { label: "Python", icon: "/images/python-icon.svg" },
  { label: "Burp Suite", icon: "/images/burp-icon.svg" }
];

export default function BriefingPage() {
  return (
    <section className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Briefing</p>
        <h2 className="section-title text-white">Experience Timeline</h2>
        <p className="text-slate-300">Operational history of strategic security engagements.</p>
      </div>

      <div className="space-y-8">
        {roles.map((role, index) => (
          <div key={role.company} className="relative grid gap-6 lg:grid-cols-[0.25fr_1fr]">
            <div className="flex items-start justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-slate-900/60 text-sm font-semibold text-emerald-200">
                {index + 1}
              </div>
            </div>
            <div className="card space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Image src={role.logo} alt={`${role.company} logo`} width={200} height={80} />
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                  <p className="text-sm text-slate-300">
                    {role.company} · {role.period}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300">{role.summary}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {role.achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="card space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Primary Stack</p>
          <h3 className="text-2xl font-semibold text-white">Tooling & Platforms</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stack.map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <Image src={item.icon} alt={`${item.label} icon`} width={64} height={64} />
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-slate-400">Operational expertise</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
