const { Router } = require("express");
const {
  getAllDriversH,
  getDriversByNameH,
  postDriversH,
} = require("../handlers/DriversHandlers");

const router = Router();

router.get("/", getAllDriversH);
router.get("/search", getDriversByNameH);
router.post("/", postDriversH);

module.exports = router;
