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
      Nombre: driver.name.forename,
      Apellido: driver.name.surname,
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
        name: name,
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
        Nombre: driver.name.forename,
        Apellido: driver.name.surname,
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
  name,
  lastName,
  nacionality,
  image,
  dob,
  description
) => {
  const newDriver = await Driver.create({
    name,
    lastName,
    nacionality,
    image,
    dob,
    description,
  });
  const teamDb = Team.findAll();
  await newDriver.addTeam(teamDb);
  return newDriver;
};

const getTeams = async () => {
  const TeamsApi = await axios.get("http://localhost:5000/drivers");
  const TeamsApiFilter = TeamsApi.data.map((driver) => {
    return driver.teams ? driver.teams.split(",") : [];
  });
  const response = [...TeamsApiFilter];
  const response2 = response.flat();
  const result = response2.filter((team, index) => {
    return response2.indexOf(team.trim()) === index;
  });
  result.forEach(async (team) => {
    await Team.findOrCreate({
      where: {
        name: team,
      },
    });
  });
  const teamDB = await Team.findAll();
  const teamMap = teamDB.map((team) => team.name);
  return teamMap;
};

module.exports = {
  getAllDriver,
  getDriverByNameDB,
  newDriverDB,
  getTeams,
};
