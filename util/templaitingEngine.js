import fs from "fs";

export function readPage(path) {
  return fs.readFileSync(path).toString();
}

const footer = fs
  .readFileSync("./public/components/footer/footer.html")
  .toString();

export function renderPage(page, config = {}) {
  const header = fs
    .readFileSync("./public/components/header/header.html")
    .toString();
  return (
    header
      .replace("$tabTitle$", config.tabTitle || "Portfolio")
      .replace("$CSS_link$", config.CSS_link || "") +
    page +
    footer
  );
}
