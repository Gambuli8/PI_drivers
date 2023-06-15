import {
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVER_BY_NAME,
  GET_NEW_DRIVER,
  FILTERS,
  GET_FILTER_CREATED_DRIVERS,
  GET_FILTER_BY_TEAMS,
  FILTERS_BY_DOB,
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
        driverFilters: action.payload,
      };
    case FILTERS:
      if (action.payload === "A-Z") {
        return {
          ...state,
          driverFilters: [...state.allDrivers].sort((a, b) => {
            if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return 1;
            if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return -1;
            return 0;
          }),
          filters: true,
        };
      } else if (action.payload === "Z-A") {
        return {
          ...state,
          driverFilters: [...state.allDrivers].sort((a, b) => {
            if (a.Nombre.toLowerCase() < b.Nombre.toLowerCase()) return 1;
            if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) return -1;
            return 0;
          }),
          filters: true,
        };
      }
    case FILTERS_BY_DOB:
      if (action.payload === "asc") {
        return {
          ...state,
          driverFilters: [...state.allDrivers].sort((a, b) => {
            if (a.Fecha_de_Nacimiento > b.Fecha_de_Nacimiento) return 1;
            if (a.Fecha_de_Nacimiento < b.Fecha_de_Nacimiento) return -1;
            return 0;
          }),
          filters: true,
        };
      } else if (action.payload === "des") {
        return {
          ...state,
          driverFilters: [...state.allDrivers].sort((a, b) => {
            if (a.Fecha_de_Nacimiento < b.Fecha_de_Nacimiento) return 1;
            if (a.Fecha_de_Nacimiento > b.Fecha_de_Nacimiento) return -1;
            return 0;
          }),
          filters: true,
        };
      }
    case GET_FILTER_CREATED_DRIVERS:
      const allDrivers = [...state.allDrivers];
      const filterCreated =
        action.payload === "created"
          ? allDrivers.filter((d) => d.createdInDb)
          : allDrivers.filter((d) => !d.createdInDb);
      return {
        ...state,
        driverFilters:
          action.payload === "all" ? state.allDrivers : filterCreated,
        filters: true,
      };
    case GET_FILTER_BY_TEAMS:
      const allDriver = state.allDrivers;
      // const allTeam = state.allTeams;
      const filteredTeam =
        action.payload === "All"
          ? allDriver
          : allDriver.filter((e) => {
              return e.Escuderias?.includes(action.payload);
            });
      return {
        ...state,
        driverFilters: filteredTeam,
        filters: true,
      };
    default:
      return state;
  }
}

export default rootReducer;
