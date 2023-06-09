import React from 'react';
import style from './cards.module.css';
import Card from '../Card/card';
import { useSelector } from 'react-redux';

function Cards() {

  const AllDrivers = useSelector((state) => state.allDrivers)
  return (
    <div className={style.cards_container}>
      {console.log(AllDrivers)}
        <div className={style.Cards}>
          { AllDrivers.map((driver) => (
            <Card
            id= {driver.id}
            name= {driver.Nombre}
            lastName= {driver.Apellido}
            nacionality= {driver.nacionalidad}
            dob= {driver.Fecha_de_nacimiento}
            image={driver.Imagen}
            description= {driver.descripcion}
            teams= {driver.Escuderias}
            />
          ))

          }
        </div>
    </div>
  )
}

export default Cards;