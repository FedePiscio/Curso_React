import logo from './logo.svg';
import './App.css';

import { useRef, useState, useEffect} from 'react';

function App() {

  // Declaramos una constante: y una funcion que se encarga de obterner informacion deL json:
  const[valorCambio, setValorCambio]=useState(null)

  // Creamos una constante para almacenar los valores dolar a euro: se actualizaran todas las veces que sea necesaria:
  const euroRef=useRef()
  // Creamos una constante para almacenar el resultado: se actualizaran todas las veces que sea necesaria:
  const resultadoRef=useRef()

  // Consultamos a la API:
  useEffect(()=>{

    const llamaApiCambio=async()=>{
      
      // Creamos este blocke para evitar posibles errores de conexion:
      try{
        // Creamos un constante par a la respuesta:
        const respuesta=await fetch("https://v6.exchangerate-api.com/v6/3aea1f097a6f787abd383fe4/latest/EUR")

        // Creamos otra constante con los datos que nos interesan:
        const datos=await respuesta.json();

        console.log(datos)

        // Llamamos a la funcion y le pasamos el parametro de cotizacion EURO-DOLAR
        setValorCambio(datos.conversion_rates.USD)

      }catch(error){
        console.error("Error al acceder a la API", error)
      }

    };

    // Ejecutamos la funcion cuando nos aseguramos que se ejecuto:
    llamaApiCambio();

  }, []);

  // Creamos una funcion anonima para hacer el calculo:
  const calcular=()=>{
    //Rescatamos la informacion de euroRef segun lo que se introduce en el cuadro de texto por el usuario:
    const euroValor=parseFloat(euroRef.current.value);
    //Creamos una constante para guardar el resultado de la conversion:
    const dolares=euroValor*valorCambio;
    // Indicamos que el resultado se vea por pantalla:
    resultadoRef.current.innerHTML=dolares.toFixed(2) + " u$s";

  }

  return <div>
          <h1>Conversor Euro-Dolar</h1>
          <input className='centrarElementos' type='text' ref={euroRef}></input><br/>
          <button className='centrarElementos' onClick={calcular}>Convertir</button><br/>
          <div className='centrarElementos resultado' ref={resultadoRef}></div>
  </div>
}

export default App;
