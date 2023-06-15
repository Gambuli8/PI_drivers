import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/navbar';
import Cards from '../../components/Cards/cards';
import { GetAllDrivers, Filter } from '../../redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './home.module.css';
import Filters from '../../components/Filters/filters';


function Home() {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const driverFilters = useSelector((state) => state.driverFilters);
  const filters = useSelector((state) => state.filters);

  useEffect(() =>{
    dispatch(GetAllDrivers())
  }, [])


  return (
    <div className={style.container}>
    {allDrivers.length ? (
        <div>
        <NavBar />
        <Filters/>
        <br />
        <br />
        {filters? <Cards allDrivers={driverFilters}/> : <Cards allDrivers={allDrivers}/>}
        </div>
        ) : (
          <h3 className={style.loading}>Loading...</h3>
          )}
    </div>
  )
}

export default Home;