const { Router } = require("express");
const { getAllTeamsH } = require("../handlers/DriversHandlers");

const router = Router();

router.get("/", getAllTeamsH);

module.exports = router;
