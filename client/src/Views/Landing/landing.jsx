import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

function landing() {
  return (
    <div>
      <h1 className={style.h1}>Bienvenido a nuestra pagina de Pilotos</h1>
      <Link to='/home' className={style.btn}><button>Entrar</button></Link>
    </div>
  )
}

export default landing;