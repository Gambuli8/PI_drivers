const { Driver, Team } = require("../db");
const axios = require("axios");

const getAllDriver = async () => {
  const allDriver = await Driver.findAll();
  const DriversApi = await axios.get("http://localhost:5000/drivers");
  const DriversFilter = DriversApi.data.map((driver) => {
    return {
      id: driver.id,
      Apodo: driver.driverRef,
      Abrebiacion: driver.code,
      Numero: driver.number,
      Nombre: driver.name,
      Fecha_de_Nacimiento: driver.dob,
      Nacionalidad: driver.nationality,
      Escuderias: driver.teams,
      Imagen: driver.image.url,
      Descripcion: driver.description,
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
        Numero: driver.number,
        Nombre: driver.name,
        Imagen: driver.image.url,
        Fecha_de_Nacimiento: driver.dob,
        Nacionalidad: driver.nationality,
        Escuderias: driver.teams,
        Descripcion: driver.description,
      };
    });
    const response = [...driverDB, ...DriversFilter];
    return response;
  }
};

const newDriverDB = async (
  Nombre,
  Apellido,
  Nacionalidad,
  Imagen,
  Fecha_de_Nacimiento,
  Descripcion,
  Escuderias
) => {
  const newDriver = await Driver.create({
    Nombre,
    Apellido,
    Nacionalidad,
    Imagen,
    Fecha_de_Nacimiento,
    Descripcion,
    Escuderias,
  });
  const teamsDb = await Team.findAll();
  await newDriver.addTeams(teamsDb);
  return newDriver;
};

const getTeams = async () => {
  const TeamsApi = await axios.get("http://localhost:5000/drivers");
  const TeamsApiFilter = TeamsApi.data.map((driver) => {
    return driver.teams ? driver.teams.split(", ") : [];
  });
  const response = [...TeamsApiFilter];
  const responseSet = new Set(response.flat());
  responseSet.forEach(async (driver) => {
    await Team.findOrCreate({
      where: {
        name: driver,
      },
    });
  });
};

module.exports = {
  getAllDriver,
  getDriverByNameDB,
  newDriverDB,
  getTeams,
};
