import express from "express";
const app = express();

import pagesRouter from "./router/pagesRouter.js"

app.use(express.static("public"));
app.use(pagesRouter);
/*
import { 
  homepagePage, 
  introdutionPage, 
  firstServerPage, 
  servingHtmlFilesPage, 
  timePage, 
  exportImportPage, 
  ssrPage, 
  contactPage
} from "./util/readPages.js";

//---------- HTML ----------//

// Homepage
app.get("/", (req, res) => {
  //res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
  //res.status(200).send({ data: "test hompage"});
  //test endpoint
  res.send(homepagePage);
});

// Introduction
app.get("/introduction", (req, res) => {
  res.sendFile(path.resolve("public/pages/introduction/introduction.html"));
  //res.status(200).send({ data: "test introduction"});
    //test endpoint
    res.send(introdutionPage);
});

// First Server
app.get("/firstserver", (req, res) => {
  res.sendFile(path.resolve("public/pages/first_server/first_server.html"));
  //res.status(200).send({ data: "test first server"});
  //test endpoint
  res.send(firstServerPage);
});

// Serving HTML files
app.get("/servinghtmlfiles", (req, res) => {
  res.sendFile(path.resolve("public/pages/serving_html_files/serving_html_files.html"));
  //res.status(200).send({ data: "test servering html files"});
  //test endpoint
  res.send(servingHtmlFilesPage);
}); 

// Time
app.get("/time", (req, res) => {
  res.sendFile(path.resolve("public/pages/time/time.html"));
  //res.status(200).send({ data: "test time"});
  //test endpoint
  res.send(timePage);
}); 

// Export / Import
app.get("/exportimport", (req, res) => {
  res.sendFile(path.resolve("public/pages/export_import/export_import.html"));
  //res.status(200).send({ data: "test export / import "});
  //test endpoint
  res.send(exportImportPage);
}); 

// SSR
app.get("/ssr", (req, res) => {
  res.sendFile(path.resolve("public/pages/ssr/ssr.html"));
  //res.status(200).send({ data: "test SSR"});
  //test endpoint
  res.send(ssrPage);
}); 

// Contact
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("public/pages/contact/contact.html"));
  //res.status(200).send({ data: "test contact"});
  //test endpoint
  res.send(contactPage);
});
*/

const PORT = 8080;

app.listen(PORT, (error) => {
  if(error) {
    console.log("Internal Server Error", error);
  } else {
    console.log("Server is running on port:", PORT);
  }
});