import Image from "next/image";
import { aboutHighlights, basePath, education, heroStats, siteConfig, skills, socialLinks } from "./data/site";
import { projects } from "./data/projects";
import { experience } from "./data/experience";
import { certifications } from "./data/certifications";


const asset = (path) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export default function HomePage() {
  return (
    <div>
      <section id="home" className="section" aria-labelledby="home-title">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="pill">Declassified Enterprise Portfolio</p>
            <h1 id="home-title" className="text-main text-4xl font-semibold leading-tight md:text-5xl">{siteConfig.title}</h1>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em]">{siteConfig.tagline}</p>
            <p className="text-muted text-lg">{siteConfig.mission}</p>
            <div className="flex flex-wrap gap-4">
              <a href={siteConfig.resumeUrl} className="btn-primary">
                Download Resume (PDF)
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="btn-secondary"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="card space-y-4">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Core Focus</p>
            <p className="text-main text-lg font-semibold">Cloud Security | Red Team | Risk Reduction</p>
            <p className="text-muted text-sm">
              Security engineer with hands-on experience in pentesting, secure SDLC reviews, and cloud risk reduction
              across AWS and Azure environments.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted"><span className="text-main font-semibold">Location:</span> {siteConfig.location}</p>
              <p className="text-muted"><span className="text-main font-semibold">Email:</span> {siteConfig.email}</p>
              <p className="text-muted"><span className="text-main font-semibold">Phone:</span> {siteConfig.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.label} className="card space-y-2">
              <p className="text-subtle text-xs uppercase tracking-[0.3em]">{item.label}</p>
              <p className="text-main text-3xl font-semibold">{item.value}</p>
              <p className="text-muted text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <p className="pill">About</p>
            <h2 id="about-title" className="section-title">Mission-ready offensive security leadership.</h2>
            <p className="text-muted">
              I partner with security and engineering leaders to validate defenses against real adversary tactics.
              Engagements focus on measurable risk reduction, resiliency, and clear remediation roadmaps.
            </p>
          </div>
          <div className="card space-y-3 lg:col-span-1">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Focus Areas</p>
            <ul className="text-muted space-y-2 text-sm">
              {aboutHighlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card space-y-3 lg:col-span-1">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Education</p>
            <ul className="text-muted space-y-2 text-sm">
              {education.map((item) => (
                <li key={item.school}>
                  <span className="text-main font-semibold">{item.school}</span> — {item.degree}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="space-y-6">
          <p className="pill">Skills</p>
          <h2 id="skills-title" className="section-title">Core security capabilities.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card space-y-4">
              <h3 className="text-main text-lg font-semibold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="space-y-4">
          <p className="pill">Projects</p>
          <h2 id="projects-title" className="section-title">Security engagements with measurable outcomes.</h2>
          <p className="text-muted">Project dossiers are structured to highlight findings, remediation, and business impact.</p>
        </div>
        <div className="mt-8 grid gap-8">
          {projects.map((project) => (
            <article key={project.title} className="card grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">{project.category}</p>
                  <h3 className="text-main text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted text-sm">{project.summary}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Findings & Remediation</p>
                    <ul className="text-muted mt-2 space-y-1 text-sm">
                      {project.outcomes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em]">Focus Areas</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.focus.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex items-center justify-center p-4">
                <Image
                  src={asset(project.diagram)}
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

      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="space-y-4">
          <p className="pill">Experience</p>
          <h2 id="experience-title" className="section-title">Operational timeline.</h2>
        </div>
        <div className="mt-8 space-y-8">
          {experience.map((role, index) => (
            <div key={role.company} className="relative grid gap-6 lg:grid-cols-[0.2fr_1fr]">
              <div className="flex items-start justify-center">
                <div
                  className="text-accent flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                >
                  {index + 1}
                </div>
              </div>
              <div className="card space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Image src={asset(role.logo)} alt={`${role.company} logo`} width={180} height={72} />
                  <div>
                    <h3 className="text-main text-xl font-semibold">{role.role}</h3>
                    <p className="text-muted text-sm">
                      {role.company} · {role.period}
                    </p>
                  </div>
                </div>
                <p className="text-muted text-sm">{role.summary}</p>
                <ul className="text-muted space-y-2 text-sm">
                  {role.achievements.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section" aria-labelledby="certifications-title">
        <div className="space-y-4">
          <p className="pill">Certifications</p>
          <h2 id="certifications-title" className="section-title">Verified credentials.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="card flex flex-col items-center gap-4 text-center">
              <Image src={asset(cert.badge)} alt={`${cert.name} badge`} width={200} height={200} />
              <div>
                <p className="text-main text-sm font-semibold">{cert.name}</p>
                <p className="text-subtle text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="pill">Contact</p>
            <h2 id="contact-title" className="section-title">Secure comms channel.</h2>
            <p className="text-muted">
              Provide scope objectives, compliance constraints, and timelines. I will return a mission plan with
              deliverables, testing windows, and a remediation roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                Email me
              </a>
              <a href={siteConfig.resumeUrl} className="btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="card space-y-4">
            <div className="text-muted flex items-center justify-between text-sm">
              <span>Primary Email</span>
              <a href={`mailto:${siteConfig.email}`} className="text-accent font-semibold hover:underline">{siteConfig.email}</a>
            </div>
            <div className="text-muted flex items-center justify-between text-sm">
              <span>Phone</span>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-accent font-semibold hover:underline">{siteConfig.phone}</a>
            </div>
            <div className="text-muted flex items-center justify-between text-sm">
              <span>Location</span>
              <span className="text-accent font-semibold">{siteConfig.location}</span>
            </div>
            <div className="text-muted flex items-center justify-between text-sm">
              <span>Availability</span>
              <span className="text-accent font-semibold">Open to 2026 security roles</span>
            </div>
            <div className="card !p-4 text-sm text-muted">
              Preferred engagements include cloud security assessments, adversary emulation, and executive readiness
              briefings.
            </div>
          </div>
        </div>
      </section>

      <footer className="text-subtle border-t py-10 text-sm" style={{ borderColor: "var(--border)" }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-accent"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
