const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
export const basePath = configuredBasePath !== undefined ? configuredBasePath : "/new-website";

export const siteConfig = {
  name: "Goutham Prasanth Pamarthy",
  title: "Security Engineer | OSEP & CRTE",
  tagline: "Pentesting • Cloud Security • Risk Reduction",
  mission:
    "I help teams ship secure software by combining offensive testing, cloud security hardening, and remediation-first engineering support.",
  location: "San Francisco Bay Area, California",
  phone: "(240) 495-8089",
  email: "gppamarthy@gmail.com",
  resumeUrl: `${basePath}/resume.pdf`,
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://gpamarthy.github.io/new-website/"
};

export const education = [
  {
    school: "University of Maryland",
    degree: "Master of Engineering in Cybersecurity"
  },
  {
    school: "Gandhi Institute of Technology and Management",
    degree: "Bachelor of Technology in Computer Science and Engineering"
  }
];

export const heroStats = [
  {
    label: "Penetration Tests Delivered",
    value: "40+",
    detail: "API and full-stack security assessments."
  },
  {
    label: "Detection Rules Built",
    value: "25+",
    detail: "AWS CloudTrail and GuardDuty detections."
  },
  {
    label: "Cloud Assets Audited",
    value: "50+",
    detail: "IAM and endpoint configuration hardening."
  }
];

export const aboutHighlights = [
  "OWASP Top 10 testing with developer-focused remediation guidance.",
  "Cloud security reviews across AWS and Azure with compliance context.",
  "DFIR enablement through SIEM workflows, memory forensics, and automation."
];

export const skills = [
  {
    category: "Red Team & Pentesting",
    items: ["AD Exploitation", "AV/EDR Evasion", "C2 Frameworks", "Lateral Movement"]
  },
  {
    category: "Tooling & Detection",
    items: ["Burp Suite", "Metasploit", "Impacket", "BloodHound", "Splunk", "ELK"]
  },
  {
    category: "Cloud & Automation",
    items: ["AWS IAM", "Azure RBAC", "KMS", "WAF", "Python", "Bash", "PowerShell"]
  }
];

export const socialLinks = [
  { label: "Email me", href: "mailto:gppamarthy@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gpamarthy7/", external: true },
  { label: "GitHub", href: "https://github.com/gpamarthy", external: true }
];
