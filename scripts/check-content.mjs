import fs from "node:fs";

const htmlPath = "out/index.html";
if (!fs.existsSync(htmlPath)) {
  throw new Error("Build output missing: out/index.html");
}

const htmlRaw = fs.readFileSync(htmlPath, "utf8");
const html = htmlRaw.replaceAll("&amp;", "&");

const mustContain = [
  "Goutham Prasanth Pamarthy",
  "Security Engineer | OSEP & CRTE",
  "gppamarthy@gmail.com",
  "San Francisco Bay Area, California",
  "/new-website/resume.pdf",
  "Adversary Simulation Lab",
  "Cloud Migration — Healthcare Application (AWS)",
  "CompTIA Security+",
  "(ISC)² Certified in Cybersecurity (CC)",
  "https://gpamarthy.github.io/new-website/images/og-card.svg"
];

for (const token of mustContain) {
  if (!html.includes(token)) {
    throw new Error(`Missing expected content token in built site: ${token}`);
  }
  console.log(`PASS content token: ${token}`);
}

if (html.includes("/new-website/new-website/images/og-card.svg")) {
  throw new Error("Detected duplicated base path in OG image URL.");
}
console.log("PASS OG URL base path check");

const files = [
  "out/resume.pdf",
  "out/images/security-plus-badge.svg",
  "out/images/isc2-cc-badge.svg"
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing expected exported file: ${file}`);
  }
  console.log(`PASS exported file: ${file}`);
}
