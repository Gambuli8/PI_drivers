import React, {useState} from 'react';
import style from './cards.module.css';
import Card from '../Card/card';
import Paginado from '../paginado/paginado';

function Cards({allDrivers}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [driverPerPage, setDriverPerPage] = useState(9);
  const indexOfLastDriver = currentPage * driverPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driverPerPage;
  const currentDriver = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.cards_container}>
      <div className={style.Paginado}>
      <Paginado driverPerPage={driverPerPage} allDrivers={allDrivers.length} paginate={paginate}/>
      </div>
        <div className={style.Cards}>
          { currentDriver.map((driver) => (
            <Card
            key={driver.id}
            id= {driver.id}
            name= {driver.Nombre}
            lastName= {driver.Apellido}
            nacionality= {driver.Nacionalidad}
            dob= {driver.Fecha_de_Nacimiento}
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