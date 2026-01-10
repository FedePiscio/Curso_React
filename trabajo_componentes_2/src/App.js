import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"

function App() {

  const usuario={

    nombre:"Juan",
    apellido:"Diaz",
    edad: 18,
    genero: "masculino"

  }

  return (
    <div>
      <Saludo usuario={usuario}></Saludo>
    </div>
  );
}

function Saludo(props){

  const {nombre, apellido, edad, genero}=props.usuario

  return (<div>{nombre && apellido ? (<div><h1>Hola {props.usuario.nombre} {props.usuario.apellido}!!</h1>
          <p>Tienes <strong>{props.usuario.edad}</strong> años</p>
          <p>Y tu genero es <strong>{props.usuario.genero}</strong></p></div>) :
          <h1>No se ha proporcionado el nombre del usuario </h1>}
          </div>)
  }

// Validacion del compoente: Es mas para el desarrollo que para el usuario.
Saludo.propTypes={

  usuario:PropTypes.shape(

    {
      nombre:PropTypes.string.isRequired,
      edad:PropTypes.number.isRequired
    }

  ).isRequired

}

export default App;
