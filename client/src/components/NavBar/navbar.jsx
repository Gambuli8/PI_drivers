import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

function NavBar({handlerChange, handlerSubmit}) {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div className={style.navbar_links}>
          <Link to="/home" className={style.navbar_link}>Home</Link>
          <div className={style.input_group}>
          <input className={style.input} type="text" placeholder='Buscar...' onChange={handlerChange} />
        <button type="submit" onClick={handlerSubmit} className={style.button}>Buscar</button>
          </div>
          <Link to="/create" className={style.navbar_link}>Create</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;