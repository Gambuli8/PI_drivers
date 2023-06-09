import axios from "axios";

//* ACTIONS-TYPES
export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const GET_NEW_DRIVER = "GET_NEW_DRIVER";
export const GET_DRIVER_BY_NAME = "GET_DRIVER_BY_NAME";

//* ACTIONS

export const GetAllDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/`);
      return dispatch({ type: GET_ALL_DRIVERS, payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const GetAllTeams = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/teams/`);
      return dispatch({ type: GET_ALL_TEAMS, payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const PostNewDriver = (info) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/drivers/`, info);
      dispatch({ type: GET_NEW_DRIVER, payload: response.data });
      alert("Piloto Creado con exito!");
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const GetDriverByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/drivers/search/${name}`
      );
      dispatch({ type: GET_DRIVER_BY_NAME, payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};
