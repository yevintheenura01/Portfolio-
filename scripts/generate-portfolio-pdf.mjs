import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

import projects from "../src/data/projects.js";
import skills from "../src/data/skills.js";
import experience from "../src/data/experience.js";
import certifications from "../src/data/certifications.js";
import careerPlan, { careerGoals } from "../src/data/careerPlan.js";
import reflections from "../src/data/reflections.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");
const htmlPath = join(outDir, "YevinTheenuraPortfolio.html");
const pdfPath = join(outDir, "YevinTheenuraPortfolio.pdf");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const browserPath = existsSync(edgePath)
  ? edgePath
  : existsSync(chromePath)
    ? chromePath
    : null;

const esc = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const publicAsset = (assetPath) => {
  const normalized = assetPath.replace(/^\//, "");
  return pathToFileURL(join(root, "public", normalized)).href;
};

const tagList = (items) =>
  `<div class="tags">${items.map((item) => `<span>${esc(item)}</span>`).join("")}</div>`;

const projectCards = projects
  .map(
    (project) => `
      <article class="project">
        <img src="${publicAsset(project.image)}" alt="${esc(project.title)}">
        <div>
          <h3>${esc(project.title)}</h3>
          <p>${esc(project.description)}</p>
          ${tagList(project.tags)}
        </div>
      </article>
    `,
  )
  .join("");

const skillGroups = skills
  .map(
    (group) => `
      <article class="compact-card">
        <h3>${esc(group.category)}</h3>
        <p>${esc(group.items.map((item) => item.name).join(" | "))}</p>
      </article>
    `,
  )
  .join("");

const experienceItems = experience
  .map(
    (item) => `
      <article class="timeline-item">
        <p class="meta">${esc(item.type)} | ${esc(item.period)}</p>
        <h3>${esc(item.role)}</h3>
        <p class="company">${esc(item.company)}</p>
        <p>${esc(item.summary)}</p>
      </article>
    `,
  )
  .join("");

const certificationItems = certifications
  .map(
    (item) => `
      <article class="compact-card">
        <p class="meta">${esc(item.issuer)} | ${esc(item.date)}</p>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        ${tagList(item.skills)}
      </article>
    `,
  )
  .join("");

const goalItems = [
  ["Short Term", careerGoals.shortTerm],
  ["Medium Term", careerGoals.mediumTerm],
  ["Long Term", careerGoals.longTerm],
  ["Target Roles", careerGoals.targetRoles.join(" | ")],
]
  .map(
    ([label, value]) => `
      <article class="compact-card">
        <p class="meta">${esc(label)}</p>
        <p>${esc(value)}</p>
      </article>
    `,
  )
  .join("");

const planItems = careerPlan
  .map(
    (phase) => `
      <article class="timeline-item">
        <p class="meta">${esc(phase.timeline)}</p>
        <h3>${esc(phase.phase)}</h3>
        <ul>${phase.objectives.map((objective) => `<li>${esc(objective)}</li>`).join("")}</ul>
      </article>
    `,
  )
  .join("");

const reflectionItems = reflections
  .map(
    (item) => `
      <article class="compact-card">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        <p class="learning">Key learning: ${esc(item.key_learning)}</p>
      </article>
    `,
  )
  .join("");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Yevin Theenura Portfolio</title>
    <style>
      @page {
        size: A4;
        margin: 14mm;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #f7faf8;
        color: #17251f;
        font-family: Inter, "Segoe UI", Arial, sans-serif;
        font-size: 10.5pt;
        line-height: 1.45;
      }

      main {
        max-width: 980px;
        margin: 0 auto;
      }

      header {
        display: grid;
        grid-template-columns: 1fr 132px;
        gap: 24px;
        align-items: center;
        padding: 26px;
        border: 1px solid #b7ddc1;
        border-radius: 18px;
        background: linear-gradient(135deg, #ffffff 0%, #e8f5ec 100%);
      }

      h1,
      h2,
      h3,
      p {
        margin: 0;
      }

      h1 {
        color: #14532d;
        font-size: 34pt;
        line-height: 1;
      }

      h2 {
        margin-bottom: 12px;
        color: #14532d;
        font-size: 19pt;
      }

      h3 {
        color: #183d2a;
        font-size: 12pt;
      }

      section {
        margin-top: 18px;
        padding: 18px;
        border: 1px solid #c7e4cd;
        border-radius: 14px;
        background: #ffffff;
        break-inside: avoid;
      }

      img {
        display: block;
        max-width: 100%;
      }

      .subtitle {
        margin-bottom: 12px;
        color: #157347;
        font-size: 11pt;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .summary {
        max-width: 680px;
        color: #334155;
        font-size: 11.5pt;
      }

      .profile {
        width: 132px;
        height: 132px;
        border: 5px solid #dff2e4;
        border-radius: 18px;
        object-fit: cover;
      }

      .contact {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 14px;
        margin-top: 18px;
        color: #224137;
        font-size: 9.5pt;
      }

      .contact span {
        white-space: nowrap;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .project {
        display: grid;
        grid-template-columns: 124px 1fr;
        gap: 14px;
        padding: 12px;
        border: 1px solid #dcefe1;
        border-radius: 12px;
        background: #fbfdfb;
        break-inside: avoid;
      }

      .project + .project {
        margin-top: 10px;
      }

      .project img {
        width: 124px;
        height: 84px;
        border-radius: 8px;
        object-fit: cover;
        background: #e5efe8;
      }

      .compact-card,
      .timeline-item {
        padding: 12px;
        border: 1px solid #dcefe1;
        border-radius: 12px;
        background: #fbfdfb;
        break-inside: avoid;
      }

      .timeline-item + .timeline-item {
        margin-top: 10px;
      }

      .meta {
        margin-bottom: 4px;
        color: #2f855a;
        font-size: 8.8pt;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .company {
        margin: 2px 0 6px;
        color: #475569;
        font-weight: 700;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }

      .tags span {
        padding: 3px 7px;
        border-radius: 999px;
        background: #e3f4e8;
        color: #166534;
        font-size: 8.4pt;
        font-weight: 700;
      }

      ul {
        margin: 8px 0 0;
        padding-left: 18px;
      }

      li + li {
        margin-top: 3px;
      }

      .learning {
        margin-top: 8px;
        color: #166534;
        font-weight: 700;
      }

      .page-break {
        break-before: page;
      }

      @media print {
        body {
          background: #ffffff;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div>
          <p class="subtitle">Full-Stack Developer | UI/UX Designer</p>
          <h1>Yevin Theenura</h1>
          <p class="summary">
            Fourth-year IT undergraduate at Sri Lanka Institute of Information Technology with a GPA of 3.22.
            Experienced in MERN stack development, responsive UI design, database management, and graphic design.
          </p>
          <div class="contact">
            <span>Email: don.yevin.dev@gmail.com</span>
            <span>Phone: +94 77 628 3842</span>
            <span>GitHub: github.com/yevintheenura01</span>
            <span>LinkedIn: Yevin Theenura</span>
          </div>
        </div>
        <img class="profile" src="${publicAsset("/images/profile.jpeg")}" alt="Yevin Theenura">
      </header>

      <section>
        <h2>Professional Profile</h2>
        <p>
          Full-stack developer intern at Sri Lanka Telecom PLC with hands-on experience building responsive React
          interfaces, server-side applications, and MongoDB-backed features. I combine technical delivery with a design
          background from graphic design roles and certifications, helping me create user-centered digital products.
        </p>
      </section>

      <section>
        <h2>Featured Projects</h2>
        ${projectCards}
      </section>

      <section class="page-break">
        <h2>Technical Skills</h2>
        <div class="grid">${skillGroups}</div>
      </section>

      <section>
        <h2>Experience & Education</h2>
        ${experienceItems}
      </section>

      <section class="page-break">
        <h2>Certifications</h2>
        <div class="grid">${certificationItems}</div>
      </section>

      <section>
        <h2>Career Direction</h2>
        <div class="grid">${goalItems}</div>
      </section>

      <section>
        <h2>Development Plan</h2>
        ${planItems}
      </section>

      <section class="page-break">
        <h2>Reflective Journal</h2>
        <div class="grid">${reflectionItems}</div>
      </section>
    </main>
  </body>
</html>`;

mkdirSync(outDir, { recursive: true });
writeFileSync(htmlPath, html, "utf8");

if (!browserPath) {
  throw new Error("Could not find Microsoft Edge or Google Chrome to print the PDF.");
}

const result = spawnSync(
  browserPath,
  [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ],
  { stdio: "inherit" },
);

if (result.status !== 0) {
  throw new Error(`PDF generation failed with exit code ${result.status}.`);
}

console.log(`Generated ${pdfPath}`);
