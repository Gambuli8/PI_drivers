const { Router } = require("express");
const DriversRoutes = require("./DriversRoutes");
const TeamsRoutes = require("./TeamsRoutes");

const router = Router();

router.use("/drivers", DriversRoutes);
router.use("/teams", TeamsRoutes);

module.exports = router;
