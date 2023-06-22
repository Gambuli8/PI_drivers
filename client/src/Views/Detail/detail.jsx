import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './detail.module.css';

function Detail() {

  const allDrivers = useSelector((state) => state.allDrivers);

  const [drivers, setDrivers] = useState({});
  const {name} = useParams();

  useEffect(() => {
    setDrivers(allDrivers.find((driver) => driver.Nombre === name));
  }, []);

  const teamsArray = (teams) => {
    if(typeof teams === 'string'){
      return teams
    } else if(Array.isArray(teams)){
      return teams.map(team => team.name).join(', ');
    } else{
      return '';
    }
  }

  return (
    <div>
      {console.log(drivers?.Escuderias)}
      {drivers?.Nombre ? (
        <>
          {/* <Link to='/home'><button className={style.button}>Back</button></Link> */}
        <div className={style.container}>
            <div className={style.container_info}>
                <h1 className={style.title}><p>Nombre:</p>{drivers?.Nombre}</h1> 
                <h3 className={style.info}><p>Id:</p>{drivers?.id}</h3>
                <h3 className={style.info}><p>Apellido:</p>{drivers?.Apellido}</h3>
                <h3 className={style.info}><p>Nacionalidad:</p>{drivers?.Nacionalidad}</h3>
                <h3 className={style.info}> <p>Fecha de nacimiento:</p>{drivers?.Fecha_de_Nacimiento}</h3>
                {drivers?.Escuderias ? (
                  <h3 className={style.info}><p>Escuderias:</p>{teamsArray(drivers.Escuderias)}</h3>
                ) : (
                  drivers?.Teams && (
                    <h3 className={style.info}><p>Escuderias: </p>{teamsArray(drivers?.Teams)}</h3>
                  )
                )}
                <h3 className={style.info}> <p>Descripcion:</p>{drivers?.Descripcion}</h3>
                <img className={style.image} src={drivers?.Imagen} alt="Imagen no disponible" />
            </div>
          </div>
        </>
      ) : (
        <h3 className={style.loading}>Loading...</h3>
      )}
    </div>
  )
}

export default Detail;