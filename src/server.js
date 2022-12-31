import express from "express";
import bodyParser from "body-parser";
// const initWebRoutes = require("./route/web");
import initWebRoutes from "./route/web";
// import dotenv from "dotenv";

// require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("done in port: ", port);
});
