import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, acutalizarMostrar] = useState(false);  
  const [colaboradores, actualizarColaboradores] = useState([ 
  {
    id: uuid(),
    equipo: "Front End",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    puesto: "Instructor",
    foto: "https://avatars.githubusercontent.com/u/8755301?v=4",
    nombre: "Jesus Guzman | Bujeria Tech",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Data Science",
    puesto: "Data scientist",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg",
    nombre: "Anthony Stark",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Devops",
    puesto: "Project Manager",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    nombre: "Elon Musk",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    puesto: "Instructor",
    foto: "https://media.licdn.com/dms/image/D4E03AQGDS5tnrdehAQ/profile-displayphoto-shrink_800_800/0/1718244526784?e=1725494400&v=beta&t=loZsTpYuTPTSI5pBfznR8Z9iIsnhmiBB69ciaPWeekU",
    nombre: "Angela Sofia",
    fav: true
  },

])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar = ()=>{
    acutalizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    //console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id)=>{
    //console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    //console.log("Actuazliar color",color, id);
    const equiposActualizados = equipos.map( (equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


  //Crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    //console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuid() }])
  }

  //like
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div className="App">
      <div>
        <Header/>
        { 
          mostrarFormulario && <Formulario 
          equipos = {equipos.map( (equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
          />
        }
        
        
        <MiOrg cambiarMostrar = { cambiarMostrar }/>
        
        {
          equipos.map( (equipo)=> <Equipo 
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />)
        }
        <Footer/>
      </div>
    </div>
  );
}

export default App; 
