
import './App.css';
import React, {useRef} from "react";
import video from './assets/video.mp4'; // Tenemos que importar el video para poder utilizarlo

function App() {

  const videoRef=useRef(null); // Creamos una referencia al componente video: ref=videoRef

  // Creamos una funcion anonima play:
  const videoPlay=()=>{
    videoRef.current.play() // Creamos un play para ejecutar al video de referecia ref=videoRef.
  };

  // Creamos una funcion anonima pause: Fede
  const videoPause=()=>{
    videoRef.current.pause() // Creamos un pause para ejecutar en el video de referecia ref=videoRef.
  };

  return(

    <div>

      <video ref={videoRef} width="400"> 
        <source src={video} type="video/mp4"></source>
      </video>

      <div>
        <button onClick={videoPlay} >Play</button>
        <button onClick={videoPause} >Pause</button>
      </div>

    </div>
  )

}

export default App;
