import {
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVER_BY_NAME,
  GET_NEW_DRIVER,
  FILTERS,
} from "../Actions/Actions";

let inicialState = {
  allDrivers: [],
  allTeams: [],
  newDrivers: [],
  driverFilters: [],
  filters: false,
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
        newDrivers: action.payload,
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
    case FILTERS:
      if (action.payload === "asc") {
        const allDRivers = [...state.allDrivers];
        return {
          ...state,
          filters: true,
          driverFilters: allDRivers.sort((a, b) => {
            if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1;
            if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1;
            return 0;
          }),
        };
      } else if (action.payload === "des") {
        const allDRivers = [...state.allDrivers];
        return {
          ...state,
          filters: true,
          driverFilters: allDRivers.sort((a, b) => {
            if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return 1;
            if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return -1;
            return 0;
          }),
        };
      }
    default:
      return state;
  }
}

export default rootReducer;
