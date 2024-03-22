import express from "express";
const app = express();

import pagesRouter from "./router/pagesRouter.js";

app.use(express.static("public"));
app.use(pagesRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Internal Server Error", error);
  } else {
    console.log("Server is running on port:", PORT);
  }
});
