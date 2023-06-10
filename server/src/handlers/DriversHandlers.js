const {
  getAllDriver,
  getDriverByNameDB,
  newDriverDB,
  getTeams,
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
    const allDriverName = await getDriverByNameDB(name);
    res.status(200).json(allDriverName);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//body lo que lleva por inputs
const postDriversH = async (req, res) => {
  const {
    Nombre,
    Apellido,
    Nacionalidad,
    Imagen,
    Fecha_de_Nacimiento,
    Descripcion,
  } = req.body;
  try {
    await newDriverDB(
      Nombre,
      Apellido,
      Nacionalidad,
      Imagen,
      Fecha_de_Nacimiento,
      Descripcion
    );
    res.status(200).send("Creado con exitos");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllTeamsH = async (req, res) => {
  try {
    const Teams = await getTeams();
    return res.status(200).json(Teams);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllDriversH,
  getDriversByNameH,
  postDriversH,
  getAllTeamsH,
};
