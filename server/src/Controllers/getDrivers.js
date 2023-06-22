const { Driver, Team } = require("../db");
const axios = require("axios");

const getAllDriver = async () => {
  const allDriver = await Driver.findAll({
    include: {
      model: Team,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
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
      Escuderias: driver.teams ? driver?.teams : driver?.Teams,
      Imagen: driver.image.url,
      Descripcion: driver.description,
    };
  });
  console.log(getAllDriver);

  const response = [...allDriver, ...DriversFilter];
  return response;
};

const getDriverByNameDB = async (name) => {
  if (name) {
    const driverDB = await Driver.findAll({
      where: {
        Nombre: name,
      },
      include: {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const DriversApi = await axios.get(
      ` http://localhost:5000/drivers?name.forename=${name}`
    );
    const response = [...driverDB, ...DriversApi];

    const DriversFilter = response.data.map((driver) => {
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
        Escuderias: driver?.teams
          ? driver.teams
          : driver.Teams.map((team) => team.name),
        Descripcion: driver.description,
      };
    });

    console.log(DriversFilter.data.Escuderias);
    if (name) {
      let filterDriver = DriversFilter.filter((driver) =>
        driver.Nombre.toLowerCase().includes(name.toLowerCase())
      );
      if (filterDriver.length) {
        return filterDriver;
      }
      throw new Error("no se encontro el piloto con ese nombre");
    } else {
      return DriversFilter;
    }
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
  });
  let teamDb = await Team.findAll({
    where: { name: Escuderias },
  });
  await newDriver.addTeams(teamDb);
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
