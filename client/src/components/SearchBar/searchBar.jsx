import React, { useEffect, useState } from 'react';
import style from './searchBar.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetDriverByName } from '../../redux/Actions/Actions';

function Searchbar() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetDriverByName(name))
  }, [dispatch, name]);

  const handlerinputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(GetDriverByName(name));
      navigate(`/home`);
    }
  };

  return (
    <div className={style.container}>
      {console.log(name)}
    <div className={style.input_group}>
        <input onChange={(e) => handlerinputChange(e)} placeholder='Buscar...' type="text" name='text' className={style.input} autoComplete='off' value={name} />
    </div>
        <button type="submit" onClick={e => handlerSubmit(e)} className={style.button}>Buscar</button>
    </div>

  )
}

export default Searchbar;