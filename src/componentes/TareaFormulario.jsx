import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario({funTarea}){

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
     setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();   //permite no cargar denuevo la pagina cuando se envie el formulario
    const tareaNueva = {
      id: uuidv4() ,
      texto : input,
      completada: false
    }
    funTarea(tareaNueva);
  }

  return (
    <form  className="tarea-formulario" onSubmit={manejarEnvio}>
       <input  
         className='tarea-input'
         type='text'
         placeholder='Escribe una tarea'
         name='texto'
         onChange={manejarCambio}
       />
       <button className='tarea-boton' >
        Agregar Tarea
       </button>
    </form>
  )
}

export default TareaFormulario;