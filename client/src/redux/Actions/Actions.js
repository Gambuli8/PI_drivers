import axios from "axios";

//* ACTIONS-TYPES
export const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const GET_NEW_DRIVER = "GET_NEW_DRIVER";
export const GET_DRIVER_BY_NAME = "GET_DRIVER_BY_NAME";
export const FILTERS = "FILTERS";
export const FILTERS_BY_DOB = "FILTERS_BY_DOB";
export const GET_FILTER_CREATED_DRIVERS = "GET_FILTER_CREATED_DRIVERS";
export const GET_FILTER_BY_TEAMS = "GET_FILTER_BY_TEAMS";

//* ACTIONS

export const GetAllDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers`);
      dispatch({ type: GET_ALL_DRIVERS, payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const GetAllTeams = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/teams`);
      dispatch({ type: GET_ALL_TEAMS, payload: response.data });
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

export const GetDriverByName = (Nombre) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/drivers/search?name=${Nombre}`
      );
      dispatch({ type: GET_DRIVER_BY_NAME, payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

//* FILTROS

export const Filter = (orden) => {
  return function (dispatch) {
    try {
      dispatch({ type: FILTERS, payload: orden });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const FilterByDob = (orden) => {
  return function (dispatch) {
    try {
      dispatch({ type: FILTERS_BY_DOB, payload: orden });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export function GetFilterCreatedDriver(info) {
  return function (dispatch) {
    return dispatch({ type: GET_FILTER_CREATED_DRIVERS, payload: info });
  };
}

export const GetFilterByTeam = (info) => {
  return function (dispatch) {
    return dispatch({ type: GET_FILTER_BY_TEAMS, payload: info });
  };
};
