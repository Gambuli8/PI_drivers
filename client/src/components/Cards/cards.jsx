import React from 'react';
import style from './cards.module.css';
import Card from '../Card/card';
import { useSelector } from 'react-redux';

function Cards() {

  const allDrivers = useSelector((state) => state.allDrivers);

  return (
    <div className={style.cards_container}>
        <div className={style.Cards}>
          { allDrivers.map((driver) => (
            <Card
            key={driver.id}
            id= {driver.id}
            name= {driver.Nombre}
            lastName= {driver.Apellido}
            nacionality= {driver.Nacionalidad}
            dob= {driver.Fecha_de_nacimiento}
            image={driver.Imagen}
            description= {driver.Descripcion}
            teams= {driver.Escuderias}
            />
          ))

          }
        </div>
    </div>
  )
}

export default Cards;