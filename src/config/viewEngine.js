import express from "express";

let configViewEngine = () => {
  app.use(express.static("./srx/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};
module.exports = configViewEngine;
