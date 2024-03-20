import { readPage, renderPage } from "./templaitingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
  tabTitle: "Homepage"
});

const introduction = readPage("./public/pages/introduction/introduction.html");
export const introdutionPage = renderPage(introduction, {
  tabTitle: "introduction"
});

const firstServer = readPage("./public/pages/first_server/first_server.html");
export const firstServerPage = renderPage(firstServer, {
  tabTitle: "First Server"
});

const servingHtmlFiles = readPage("./public/pages/serving_html_files/serving_html_files.html");
export const servingHtmlFilesPage = renderPage(servingHtmlFiles, {
  tabTitle: "Serving Html Files"
});

const time = readPage("./public/pages/time/time.html");
export const timePage = renderPage(time, {
  tabTitle: "Time"
});

const exportImport = readPage("./public/pages/export_import/export_import.html");
export const exportImportPage = renderPage(exportImport, {
  tabTitle: "Export Import"
});

const ssr = readPage("./public/pages/ssr/ssr.html");
export const ssrPage = renderPage(ssr, {
  tabTitle: "Server Side Rendering"
});

const router = readPage("./public/pages/routers/routers.html");
export const routerPage = renderPage(ssr, {
  tabTitle: "Router"
});

const contact = readPage("./public/pages/contact/contact.html", {
  tabTitle: "Contacts"
});
export const contactPage = renderPage(contact);