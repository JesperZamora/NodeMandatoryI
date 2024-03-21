import { 
  homepagePage, 
  introdutionPage, 
  firstServerPage, 
  servingHtmlFilesPage, 
  timePage, 
  exportImportPage, 
  ssrPage,
  routerPage, 
  contactPage
} from "../util/readPages.js";

import { Router } from "express"
const router = Router();

//---------- HTML ----------//

// Homepage
router.get("/", (req, res) => {
  res.send(homepagePage);
});

// Introduction
router.get("/introduction", (req, res) => {
  res.send(introdutionPage);
});

// First Server
router.get("/firstserver", (req, res) => {
  res.send(firstServerPage);
});

// Serving HTML files
router.get("/servinghtmlfiles", (req, res) => {
  res.send(servingHtmlFilesPage);
}); 

// Time
router.get("/time", (req, res) => {
  res.send(timePage);
}); 

// Export / Import
router.get("/exportimport", (req, res) => {
  res.send(exportImportPage);
}); 

// SSR
router.get("/ssr", (req, res) => {
  res.send(ssrPage);
});

router.get("/router", (req, res) => {
  res.send(routerPage);
})

// Contact
router.get("/contact", (req, res) => {
  res.send(contactPage);
}); 

export default router;