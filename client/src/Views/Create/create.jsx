import { React, useState } from 'react';
import style from './create.module.css';
import { useDispatch } from 'react-redux';
import { PostNewDriver } from '../../redux/Actions/Acrions';

const Create = () => {

  const dispatch = useDispatch();

  //!ESTADOS
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    nacionality: '',
    image: '',
    dob:'',
    description: '',
    teams: {},
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

  // esta funcion se encarga de enviar los datos al back
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(PostNewDriver(input));
  };

  const [Errors, setErrors] = useState({
    name: '',
    lastName: '',
    nacionality: '',
    dob: '',
    image: '',
    description: '',
    teams: '',
  })

  //! VALIDACIONES
  const validate = (input, name) => {
    if(name === 'name') {
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
    if(name === 'lastName') {
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
    if(name === 'nacionality') {
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
    if(name === 'dob') {
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
    if(name === 'image') {
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
    if(name === 'description') {
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
    if(name === 'teams') {
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
      <form onSubmit={handlerSubmit}>
        <div className={style.container}>
          <label>Nombre:</label>
          <input type="text" name='name' onChange={handlerChange}placeholder={Errors.name}/>
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name='lastName' onChange={handlerChange}placeholder={Errors.lastName}/>
        </div>
        <div>
          <label>Nacionalidad:</label>
          <input type="text" name='nacionality' onChange={handlerChange}placeholder={Errors.nacionality}/>
        </div>
        <div>
          <label>Imagen:</label>
          <input type="url" name='image' onChange={handlerChange}placeholder={Errors.image}/>
        </div>
        <div>
          <label>Fecha de nacimineto:</label>
          <input type="date" name='dob' onChange={handlerChange}placeholder={Errors.dob}/>
        </div>
        <div>
          <label>Desscripcion</label>
          <input type="text" name='description' onChange={handlerChange}placeholder={Errors.description}/>
        </div>
        <div>
          <label>Escuderias</label>
          <select name="teams" onChange={handlerChange}>
            <option value="0">Escuderias</option>
            <option value="Mercedes">Mercedes</option>
            <option value="RedBull">RedBull</option>
            <option value="Mclaren">Mclaren</option>
            <option value="Ferrari">Ferrari</option>
          </select>
        </div>
      <button type='submit' name='submit'>Crear</button>
      </form>
    </div>
  )
}

export default Create;