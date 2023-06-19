import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

function landing() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Bienvenido a nuestra pagina de Pilotos</h1>
      <Link to='/home'><button className={style.btn}>Entrar</button></Link>
    </div>
  )
}

export default landing;