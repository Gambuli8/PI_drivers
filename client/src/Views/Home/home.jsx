import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/navbar';
import Cards from '../../components/Cards/cards';
import Card from '../../components/Card/card';
import { GetAllDrivers, Filter, GetDriverByName } from '../../redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './home.module.css';
import Filters from '../../components/Filters/filters';


function Home() {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const driverFilters = useSelector((state) => state.driverFilters);
  const filters = useSelector((state) => state.filters);


  const [searchString, setSearchString] = useState('');

  useEffect(() =>{
    if(!allDrivers.length){
      dispatch(GetAllDrivers());
    }
  }, [dispatch, allDrivers]);

  const handlerChange = (e) => {
    setSearchString(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(GetDriverByName(searchString));
  }

  return (
    <div className={style.container}>
    {allDrivers.length ? (
        <div>
        <NavBar handlerSubmit={handlerSubmit} handlerChange={handlerChange}/>
        <Filters/>
        {filters? <Cards allDrivers={driverFilters}/> : <Cards allDrivers={allDrivers}/>}
        </div>
        ) : (
          <h3 className={style.loading}>Loading...</h3>
          )}
    </div>
  )
}

export default Home;