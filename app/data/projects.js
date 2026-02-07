export const projects = [
  {
    title: "Adversary Simulation Lab — Multi-Stage Pentest Engagement",
    category: "Red Team / Pentest",
    summary:
      "Ran full-scope penetration testing across Windows and Linux systems, including Active Directory and cloud pivot paths.",
    outcomes: [
      "Exploited MS17-010, escalated privileges, and harvested credentials with Metasploit + Hashcat.",
      "Moved laterally across Windows Server and Ubuntu, dumping NTDS.dit and cracking AD hashes with Impacket.",
      "Validated cloud impact by accessing misconfigured S3 buckets using stolen keys and documenting MITRE ATT&CK mappings."
    ],
    focus: ["Metasploit", "Impacket", "BloodHound", "AWS CLI", "ATT&CK Mapping"],
    diagram: "/images/project-topology.svg"
  },
  {
    title: "Cloud Migration — Healthcare Application (AWS)",
    category: "Cloud Security",
    summary:
      "Designed and secured a HIPAA-aligned cloud migration from on-prem infrastructure to AWS.",
    outcomes: [
      "Implemented IAM hardening, KMS encryption, MFA, VPC segmentation, and WAF controls.",
      "Deployed with CloudFormation and CloudWatch alerting for availability + compliance.",
      "Validated controls through manual and automated checks, reducing misconfiguration risk by 50%."
    ],
    focus: ["HIPAA", "IAM", "KMS", "CloudFormation", "CloudWatch", "WAF"],
    diagram: "/images/project-cloud.svg"
  }
];
