import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import Searchbar from '../SearchBar/searchBar';

function NavBar({setCurrentPage}) {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div className={style.navbar_links}>
          <Link to="/home" className={style.navbar_link}>Home</Link>
          <Searchbar setCurrentPage={setCurrentPage}/>
          <Link to="/create" className={style.navbar_link}>Create</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;