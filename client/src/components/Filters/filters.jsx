import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterOrd } from '../../redux/Actions/Actions';

function Filters() {

    const dispatch = useDispatch();
    const driverFilters = useSelector((state) => state.driverFilters);


    const filterOrd = (e) => {
        dispatch(FilterOrd(e.target.value));
    };

  return (
    <div>
        <div>
            {console.log(driverFilters)}
            <select onChange={filterOrd} name="Ordenamiento_por_nombre">
                <option defaultChecked value="0">Ordenamiento por Nombre</option>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>
        </div>
    </div>
  )
}

export default Filters;