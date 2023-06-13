import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Filter, GetFilterCreatedDriver, GetFilterByTeam, GetAllTeams, FilterByDob } from '../../redux/Actions/Actions';
import style from './filter.module.css';

function Filters() {

    const dispatch = useDispatch();
    const allTeams = useSelector((state) => state.allTeams);
    const allDrivers3 = new Set(allTeams.flat());
    const allDrivers4 = [...allDrivers3];

    useEffect(() =>{
        dispatch(GetAllTeams())
      }, [])

    const filterOrd = (e) => {
        dispatch(Filter(e.target.value));
    };

    const filterByDob = (e) => {
        dispatch(FilterByDob(e.target.value));
    };

    const handlersFilterCreated = (e) => {
        dispatch(GetFilterCreatedDriver(e.target.value));
    };

    const handlersFilterByTeam = (e) => {
        dispatch(GetFilterByTeam(e.target.value));
    };


  return (
    <div className={style.container_filtros}>
        <select className={style.select} onChange={ e => filterOrd(e)} name="">
            <option className={style.opciones} defaultChecked value="0">Ordenamiento por Nombre</option>
            <option className={style.opciones} value="A-Z">A-Z</option>
            <option className={style.opciones} value="Z-A">Z-A</option>
        </select>
        <select className={style.select} onChange={ e => filterByDob(e)} name="">
            <option className={style.opciones} defaultChecked value="0">Orden por Fecha de Nacimiento</option>
            <option className={style.opciones} value="asc">Asc</option>
            <option className={style.opciones} value="des">Des</option>
        </select>
        <select className={style.select} onChange={e => handlersFilterCreated(e)} name="">
            <option className={style.opciones} defaultChecked defaultValue='0' >Order by create</option>
            <option className={style.opciones} key={1} value="all">Todos</option>
            <option className={style.opciones} key={2} value="created">Creados</option>
            <option className={style.opciones} key={3} value="api">Existentes</option>
        </select>
        <select className={style.select} onChange={e => handlersFilterByTeam(e)} name="">
            <option className={style.opciones} value="All">Escuderias</option>
                {allDrivers4.map((t) => (
                    <option className={style.opciones} key={`${t}`} value={t}>{t}</option>
                ))}
        </select>
    </div>
  )
}

export default Filters;