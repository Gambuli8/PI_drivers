import { React, useEffect, useState } from 'react';
import style from './create.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PostNewDriver, GetAllTeams } from '../../redux/Actions/Actions';
import { Link } from 'react-router-dom';

const Create = () => {

  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.allTeams);
  const allDrivers3 = new Set(allTeams.flat());
  const allDrivers4 = [...allDrivers3];

  useEffect(() =>{
    dispatch(GetAllTeams())
  }, [])

  //!ESTADOS
  const [input, setInput] = useState({
    Nombre: '',
    Apellido: '',
    Nacionalidad: '',
    Imagen: '',
    Fecha_de_Nacimiento:'',
    Descripcion: '',
    Escuderias: [],
  });


    //! FUNCIONES
  // esta funcion se encarga de capturar los datos que se ingresan en los inputs
  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate({
      ...input,
      [e.target.name]: e.target.value,
    }, e.target.name);
  };

  const handlerSelectChange = (e) => {
      setInput({
        ...input,
        Escuderias: [...input.Escuderias, e.target.value],
      })
  }

  // esta funcion se encarga de enviar los datos al back
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(PostNewDriver(input));
  };

  const [Errors, setErrors] = useState({
    Nombre: '',
    Apellido: '',
    Nacionalidad: '',
    Imagen: '',
    Fecha_de_Nacimiento:'',
    Descripcion: '',
    Escuderias: [],
  })

  //! VALIDACIONES
  const validate = (input, name) => {
    if(name === 'Nombre') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Nombre requerido',
        });
      };
      return;
    };
    if(name === 'Apellido') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Apellido requerido',
        });
      };
      return;
    };
    if(name === 'Nacionalidad') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Nacionalidad requerida',
        });
      };
      return;
    };
    if(name === 'Fecha_de_Nacimiento') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Fecha de nacimiento requerida',
        });
      };
      return;
    };
    if(name === 'Imagen') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Imagen requerida',
        });
      };
      return;
    };
    if(name === 'Descripcion') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Descripcion requerida',
        });
      };
      return;
    };
    if(name === 'Escuderias') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Escuderia requerida',
        });
      };
      return;
    };
};


  return (
      <div>
        {console.log(input)}
      <Link to="/home"><button className={style.btnHome}>Volver</button></Link>
    <div className={style.form_container}>
      <h1>Crear Piloto</h1>
      <form onSubmit={handlerSubmit} className={style.container}>
        <div className={style.inputs}>
          <div className={style.inputdiv}>
          <label>Nombre:</label>
          <input type="text" name='Nombre' onChange={handlerChange}placeholder={Errors.Nombre}/>
        </div>
        <div className={style.inputdiv}>
          <label>Apellido:</label>
          <input type="text" name='Apellido' onChange={handlerChange}placeholder={Errors.Apellido}/>
        </div>
        <div className={style.inputdiv}>
          <label>Nacionalidad:</label>
          <input type="text" name='Nacionalidad' onChange={handlerChange}placeholder={Errors.Nacionalidad}/>
        </div>
        <div className={style.inputdiv}>
          <label>Imagen:</label>
          <input type="url" name='Imagen' onChange={handlerChange}placeholder={Errors.Imagen}/>
        </div>
        <div className={style.inputdiv}>
          <label>Fecha de nacimineto:</label>
          <input type="date" name='Fecha_de_Nacimiento' onChange={handlerChange}placeholder={Errors.Fecha_de_Nacimiento}/>
        </div>
        <div className={style.inputdiv}>
          <label>Desscripcion</label>
          <input type="text" name='Descripcion' onChange={handlerChange}placeholder={Errors.Descripcion}/>
        </div>
        </div>
          <label>Escuderias</label>
        <div className={style.divteams}>
          {allDrivers4.map((team, index) => (
            <div className={style.divInput} key={index}>
            <input name='Escuderias' type="checkbox" onChange={handlerSelectChange} value={team}/>
            <label htmlFor={team}>{team}</label>
            </div>
          ))}
        </div>
      <button className={style.button_submit} type='submit' name='submit'>Crear</button>
      </form>
    </div>
    </div>
  )
}

export default Create;