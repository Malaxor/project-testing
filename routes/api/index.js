const router = require("express").Router();
const postRoutes = require("./posts");

// routes
router.use("/posts", postRoutes);

module.exports = router;
