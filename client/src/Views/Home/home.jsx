import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/navbar';
import Cards from '../../components/Cards/cards';
import { GetAllDrivers } from '../../redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './home.module.css';
import Filters from '../../components/Filters/filters';
function Home() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const driverFilters = useSelector((state) => state.driverFilters);
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() =>{
    dispatch(GetAllDrivers())
  }, [])



  return (
    <div>
    {allDrivers.length ? (
      <div className={style.container}>
      <NavBar />
      <Filters  />
      {filters? <Cards allDrivers={driverFilters}/> : <Cards allDrivers={driverFilters}/>}
      </div>
      ) : (
          <h3 className={style.loading}>Loading...</h3>
      )}
        </div>
  )
}

export default Home;