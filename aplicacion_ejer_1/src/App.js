// Importamos la libreria para utilizar la funcion UseState
import {useState, UseState} from "react";

// Importamos nuestro componente que creamos anteriormente para utilizarlo.
import ComponenteMultiple from "./components/ComponenteMultiple";

import './App.css';

function App() {

  // Creamos una variable que guarde los dias y que tenga una funcion para set de dias.
  const [dias, setDias]=useState(0);

  // Tenemos que contemplar si a escogido opcion hotel o coche: le indicamos que apareza hotel por defecto:
  const [opcion, setOption]=useState("Hotel")

  // Veamos a contemplar la posibilidad de que el usuario haya seleccionado hotel o coche:
  /* e = hace referencia al objeto del evento que se va a estar desencadenando, cuando estamos seleccionando
    hotel o coche, en ese instante de seleccion se crea un objeto de tipo evento, nosotros tenemos que rescatar
    de ese evento el valor = texto seleccionado. e: es el nombre al objeto evento por convencion*/
  const selectorHotelCoche=(e)=>{

    // De esta forma obtenemos el texto del evento que se esta ejecutando: hotel / coche en el desplegable.
    setOption(e.target.value)

  };

  // Luego debemos devolver los 3 componentes: el desplegable / el cuadro de texto / resultado: texto rendereizado
  return <div className="container">
    <select onChange={selectorHotelCoche} className="desplegable">
      <option value="Hotel">Hotel</option>
      <option value="Coche">Coche</option>
    </select>
    <input type="text" onChange={e=>setDias(e.target.value)} placeholder="introduce n° de días"></input>

    {opcion==="Hotel" && <ComponenteMultiple opcion={1} dias={dias}></ComponenteMultiple>}

    {opcion==="Coche" && <ComponenteMultiple opcion={2} dias={dias}></ComponenteMultiple>}

  </div>

}

export default App;
