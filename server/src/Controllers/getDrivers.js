const { Driver } = require("../db");
const axios = require("axios");

const getAllDriver = async () => {
  const allDriver = await Driver.findAll();
  const DriversApi = await axios.get("http://localhost:5000/drivers");
  const DriversFilter = DriversApi.data.map((driver) => {
    return {
      id: driver.id,
      Apodo: driver.driverRef,
      Abrebiacion: driver.code,
      numero: driver.number,
      name: driver.name,
      imagen: driver.image.url,
      fecha_de_nacimiento: driver.dob,
      nacionalidad: driver.nationality,
      descripcion: driver.description,
    };
  });

  const response = [...allDriver, ...DriversFilter];
  return response;
};

const getDriverByNameDB = async (name) => {
  if (name) {
    const driverDB = await Driver.findAll({
      where: {
        name,
      },
    });
    const DriversApi = await axios.get(
      ` http://localhost:5000/drivers?name.surname=${name}`
    );
    const DriversFilter = DriversApi.data.map((driver) => {
      return {
        id: driver.id,
        Apodo: driver.driverRef,
        Abrebiacion: driver.code,
        numero: driver.number,
        nombre: driver.name,
        imagen: driver.image.url,
        fecha_de_nacimiento: driver.dob,
        nacionalidad: driver.nationality,
        teams: driver.teams,
        descripcion: driver.description,
      };
    });
    const response = [...driverDB, ...DriversFilter];
    return response;
  }
};

module.exports = {
  getAllDriver,
  getDriverByNameDB,
};
