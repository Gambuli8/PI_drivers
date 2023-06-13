import React from 'react';
import style from './paginado.module.css';


 function Paginado ({allDrivers, driverPerPage, paginate}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allDrivers / driverPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={style.container}>
            <ul className={style.ul}>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number} className={style.li}>
                        <a onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))}
            </ul>
        </div>
    )
   
};

export default Paginado;