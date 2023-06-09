import {
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVER_BY_NAME,
  GET_NEW_DRIVER,
} from "../Actions/Acrions";

let inicialState = {
  allDrivers: [],
  allTeams: [],
  newDrivers: [],
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
      };
    case GET_NEW_DRIVER:
      return {
        ...state,
        allDrivers: action.payload,
      };
    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };
    case GET_DRIVER_BY_NAME:
      return {
        ...state,
        allDrivers: action.payload,
      };

    default:
      break;
  }
}

export default rootReducer;
