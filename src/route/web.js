import express from "express";

let router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("heelo");
  });
  return app.use("/", router);
};

module.exports = initWebRoutes;
// export default initWebRoutes;
