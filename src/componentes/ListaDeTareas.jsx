import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
       if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];  //Concatenamos una tarea al principio del array
        setTareas(tareasActualizadas);
       }
    }

    const eliminartarea = id  =>{
       setTareas(tareas.filter(tarea => tarea.id !== id));
    }

    const completarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
       return tarea;
      });
      setTareas(tareasActualizadas);
    }


    return (
        // es un fragmento
        <>
        <TareaFormulario funTarea={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea)=>
            <Tarea
                   key={tarea.id}
                   id={tarea.id}
                   texto={tarea.texto} 
                   completada= {tarea.completada}
                   eliminarTarea={eliminartarea}
                   completarTarea={completarTarea}/>)
          }
        </div>
        </>

    )
}

export default ListaDeTareas;