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
                        <button key={number} className={style.btn}>
                        <a className={style.a} onClick={() => paginate(number)}>{number}</a>
                        </button>
                    ))}
            </ul>
        </div>
    )
   
};

export default Paginado;