import Image from "next/image";

const certifications = [
  {
    label: "Offensive Security Experienced Penetration Tester (OSEP)",
    badge: "/images/osep-badge.svg"
  },
  {
    label: "Certified Red Team Expert (CRTE)",
    badge: "/images/crte-badge.svg"
  },
  {
    label: "AWS Certified Security - Specialty",
    badge: "/images/aws-security-badge.svg"
  }
];

export default function CertificationsPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">Certifications</p>
        <h2 className="section-title text-white">Credential Verification</h2>
        <p className="text-slate-300">High-fidelity badges showcasing validated expertise.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.label} className="card flex flex-col items-center gap-4 text-center">
            <Image src={cert.badge} alt={`${cert.label} badge`} width={200} height={200} />
            <p className="text-sm font-semibold text-white">{cert.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
