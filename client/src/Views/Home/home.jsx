import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/navbar';
import Cards from '../../components/Cards/cards';
import { GetAllDrivers } from '../../redux/Actions/Acrions';
import { useDispatch } from 'react-redux';
import style from './home.module.css';
function Home() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(GetAllDrivers())
  }, [])



  return (
    <div className={style.container}>
      <NavBar/>
      <h1>home</h1>
      <Cards/>
    </div>
  )
}

export default Home;