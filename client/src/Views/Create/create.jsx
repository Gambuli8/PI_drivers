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
      validate({
        ...input,
        [e.target.name]: e.target.value,
      }, e.target.name);
  }

  // esta funcion se encarga de enviar los datos al back
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(PostNewDriver(input));
  };

  const [Errors, setErrors] = useState({
    Nombre: 'Nombre Requerido',
    Apellido: 'Apellido Requerido',
    Nacionalidad: 'Nacionalidad Requerido',
    Imagen: 'Imagen Requerida',
    Fecha_de_Nacimiento:'Fecha de nacimiento Requerida',
    Descripcion: 'Descripcion Requerida',
    Escuderias: 'Minimo 1 Escuderia Requerida',
  })

  //! VALIDACIONES
  const validate = (input, name) => {
    if(name === 'Nombre') {
      if (input.Nombre !== '') {
        setErrors({
        ...Errors,
          Nombre: '',
        });
      } else {
        setErrors({
        ...Errors,
          Nombre: 'Nombre Requerido',
        });
        return;
      };
    }
    else if(name === 'Apellido') {
      if (input.Apellido !== '') {
        setErrors({
        ...Errors,
          Apellido: '',
        });
      } else {
        setErrors({
        ...Errors,
          Apellido: 'Apellido requerido',
        });
        return;
      };
    }
    else if(name === 'Nacionalidad') {
      if (input.Nacionalidad !== '') {
        setErrors({
        ...Errors,
          Nacionalidad: '',
        });
      } else {
        setErrors({
        ...Errors,
          Nacionalidad: 'Nacionalidad requerida',
        });
        return;
      };
    }
    else if(name === 'Fecha_de_Nacimiento') {
      if (input.Fecha_de_Nacimiento !== '') {
        setErrors({
        ...Errors,
          Fecha_de_Nacimiento: '',
        });
      } else {
        setErrors({
        ...Errors,
          Fecha_de_Nacimiento: 'Fecha de nacimiento requerida',
        });
        return;
      };
    }
    else if(name === 'Imagen') {
      if (input.Imagen !== '') {
        setErrors({
        ...Errors,
          Imagen: '',
        });
      } else {
        setErrors({
        ...Errors,
          Imagen: 'Imagen requerida',
        });
        return;
      };
    }
    else if(name === 'Descripcion') {
      if (input.Descripcion !== '') {
        setErrors({
        ...Errors,
          Descripcion: 'Descripcion requerida',
        });
      } else {
        setErrors({
        ...Errors,
          Descripcion: '',
        });
        return;
      };
    }
    else if(name === 'Escuderias') {
      if (input.Escuderias !== '') {
        setErrors({
        ...Errors,
          Escuderias: '',
        });
      } else {
        setErrors({
        ...Errors,
          Escuderias: 'Minimo 1 Escuderia Requerida',
        });
        return;
      };
    };
};


  return (
      <div>
        {console.log(Errors)}
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
          <p className={style.errorTeams}>{Errors.Escuderias}</p>
      <button className={style.button_submit} type='submit' name='submit'>Crear</button>
      </form>
    </div>
    </div>
  )
}

export default Create;