export default function CommsPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Comms</p>
        <h2 className="section-title text-white">Secure Contact Channel</h2>
        <p className="text-slate-300">
          Ready for coordinated offensive security engagements, cloud hardening, and risk advisory.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-white">Engagement Protocol</h3>
          <p className="text-sm text-slate-300">
            Provide scope objectives, compliance constraints, and timeline requirements. I will return a mission
            plan with deliverables, testing windows, and a remediation roadmap.
          </p>
          <div className="grid gap-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3">
              <span>Primary Email</span>
              <span className="font-semibold text-emerald-300">security@domain.com</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3">
              <span>Secure Signal</span>
              <span className="font-semibold text-emerald-300">@declassified-sec</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3">
              <span>Location</span>
              <span className="font-semibold text-emerald-300">Remote · Global</span>
            </div>
          </div>
        </div>

        <div className="card space-y-4">
          <h3 className="text-xl font-semibold text-white">Operational Availability</h3>
          <p className="text-sm text-slate-300">
            Currently accepting engagements for cloud security assessments, adversary emulation, and executive
            readiness briefings.
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Next Intake Window</span>
              <span className="font-semibold text-emerald-300">Q4 2024</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Priority Focus</span>
              <span className="font-semibold text-emerald-300">Cloud Risk Reduction</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Engagement Type</span>
              <span className="font-semibold text-emerald-300">Retainer + Project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
