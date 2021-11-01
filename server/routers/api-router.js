const apiRouter = require("express").Router();
const categoriesRouter = require("./categories-router");
const reviewsRouter = require("./reviews-router");

//ROUTERS
apiRouter.use("/categories", categoriesRouter);
apiRouter.use("/reviews", reviewsRouter);

module.exports = apiRouter;