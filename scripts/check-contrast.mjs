import fs from "node:fs";

const css = fs.readFileSync("app/globals.css", "utf8");

function parseBlock(selector) {
  const pattern = new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\}`, "m");
  const match = css.match(pattern);
  if (!match) throw new Error(`Missing selector block: ${selector}`);
  const vars = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/--([a-z-]+):\s*([^;]+);/);
    if (m) vars[`--${m[1]}`] = m[2].trim();
  }
  return vars;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const val = normalized.length === 3
    ? normalized.split("").map((c) => c + c).join("")
    : normalized;
  const num = Number.parseInt(val, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function luminance({ r, g, b }) {
  const conv = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * conv(r) + 0.7152 * conv(g) + 0.0722 * conv(b);
}

function contrastRatio(a, b) {
  const l1 = luminance(hexToRgb(a));
  const l2 = luminance(hexToRgb(b));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function assertContrast(theme, fg, bg, min, label) {
  const ratio = contrastRatio(fg, bg);
  if (ratio < min) {
    throw new Error(`${theme} ${label} contrast ${ratio.toFixed(2)} < ${min}`);
  }
  console.log(`PASS ${theme} ${label}: ${ratio.toFixed(2)}:1`);
}

const dark = parseBlock(":root");
const light = parseBlock("html.light");

const checks = [
  ["--text", "--bg", 4.5, "body text"],
  ["--text-muted", "--bg", 4.5, "muted text"],
  ["--text-subtle", "--bg", 4.5, "subtle text"],
  ["--text", "--surface", 4.5, "card heading"],
  ["--accent", "--surface", 4.5, "accent label"],
  ["--accent-contrast", "--accent", 4.5, "primary button text"]
];

for (const [fg, bg, min, label] of checks) {
  assertContrast("dark", dark[fg], dark[bg], min, label);
  assertContrast("light", light[fg], light[bg], min, label);
}

const pageJs = fs.readFileSync("app/page.js", "utf8");
if (/text-slate-|dark:text-|text-white|text-cyan-/.test(pageJs)) {
  throw new Error("Found hardcoded text color utilities in app/page.js; use token classes instead.");
}
console.log("PASS token usage check in app/page.js");
