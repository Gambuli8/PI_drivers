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

  return (
    <div>
      {console.log(drivers)}
      {drivers?.Nombre ? (
        <>
          <Link to='/home'><button className={style.button}>Back</button></Link>
        <div className={style.container}>
          {/* <div className={style.Card}> */}
            <div className={style.container_info}>
                <h1 className={style.title}><p>Nombre:</p>{drivers?.Nombre}</h1> 
                <h3 className={style.info}><p>Id:</p>{drivers?.id}</h3>
                <h3 className={style.info}><p>Apellido:</p>{drivers?.Apellido}</h3>
                <h3 className={style.info}><p>Nacionalidad:</p>{drivers?.Nacionalidad}</h3>
                <h3 className={style.info}> <p>Fecha de nacimiento:</p>{drivers?.Fecha_de_Nacimiento}</h3>
                <h3 className={style.info}><p>Escuderias:</p> {drivers.Escuderias}</h3>
                <h3 className={style.info}> <p>Descripcion:</p>{drivers?.Descripcion}</h3>
                <img className={style.image} src={drivers?.Imagen} alt="Imagen no disponible" />
            </div>
              {/* <div className={style.container_image}> */}
              {/* </div> */}
          </div>
        {/* </div> */}
        </>
      ) : (
        <h3 className={style.loading}>Loading...</h3>
      )}
    </div>
  )
}

export default Detail;