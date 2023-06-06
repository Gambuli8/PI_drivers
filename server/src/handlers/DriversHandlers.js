const {
  getAllDriver,
  getDriverByNameDB,
} = require("../Controllers/getDrivers");

//params /Drivers/ =>
const getAllDriversH = async (req, res) => {
  try {
    const allDrivers = await getAllDriver();
    res.status(200).json(allDrivers);
  } catch (error) {
    res.status(400).json("No se encontro ningun Piloto");
  }
};
//query --> /drivers?name.surname=hamilton
const getDriversByNameH = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const allDriverName = await getDriverByNameDB(name);
      res.status(200).json(allDriverName);
    }
  } catch (error) {
    res.status(400).json("No se encontro ningun Piloto con ese nombre");
  }
};

//body
const postDriversH = async (req, res) => {};
const getAllTeamsH = async (req, res) => {};

module.exports = {
  getAllDriversH,
  getAllTeamsH,
  getDriversByNameH,
  postDriversH,
};
