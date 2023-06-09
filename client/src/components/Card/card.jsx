import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

function Card({name, lastName, image, teams}) {
  return (
    <div className={style.card_container}>
      <div className={style.card_detail}>
        <h3 className={style.info}>{name} {lastName}</h3>
        <h3 className={style.info}>{teams}</h3>
       <img src={image} alt="" className={style.img} />
      </div>
      <Link to={`/detail/`}> <button className={style.button}>Mas info</button></Link>
    </div>
  )
}

export default Card;