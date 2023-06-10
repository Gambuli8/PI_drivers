import React, { useEffect } from 'react';
import style from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetDriverByName } from '../../redux/Actions/Actions';

function Searchbar() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handlerinputChange = (e) => {
    e.preventDefault();
      setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(GetDriverByName(name));
      setName("");
      navigate(`/home`);
    }
  };



  return (
    <div className={style.container}>
    <div className={style.input_group}>
        <input placeholder='Buscar...' onChange={e => handlerinputChange(e)} type="text" name='text' className={style.input} autoComplete='off' value={name} />
    </div>
        <button type="submit" className={style.button} onClick={e => handlerSubmit(e)}>Buscar</button>
    </div>
  )
}

export default Searchbar;