import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

function Card({name, lastName, image, teams, id}) {
  return (
    <div className={style.card_container}>
      <div className={style.card_detail}>
        <h3 className={style.info}>{name} {lastName}</h3>
        <p className={style.info}>{teams}</p>
       <img src={image} alt="" className={style.img} />
      </div>
      <Link to={`/detail/${name}`}> <button className={style.button}>Mas info</button></Link>
    </div>
  )
}

export default Card;