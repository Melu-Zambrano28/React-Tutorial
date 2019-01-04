import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { task } from './task.json';

console.log(task);
class App extends Component {
  constructor(){ // el metodo constructor viene ejecutador primero del render
    super(); //hereda toda la funcionalidad de react
    this.state ={
      tareas : task
    }
  }


  render() {
    //Primero de renderizar procesamos los datos

   const tareasList =  this.state.tareas.map((tareas, i ) => { //por cada tarea va a retornar una carta , 


      return(

      <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
               <h3>{tareas.title}</h3>
               <span className="badge badge-pill badge-danger ml-2">
                  {tareas.priority}
               </span>
            </div>
            <div className="card-body">
              <p>{tareas.description}</p>
              <p>{tareas.responsible}</p>
            </div>
        </div>

      </div>
       

      )
    })


    /*return del render, aqui se muestran los datos ya procesados (variable tareaList) */
    return (
      <div className="App">
         <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                  Task
                  <span className="badge badge-pill badge-light ml-2">
                    {this.state.tareas.length}
                  </span>
                </a>
          </nav>
      <div className="container">
        <div className="row mt-4">
          {tareasList} 
        </div>

      </div>
        <img src={logo} className='App-logo' alt='logo'></img>
    
      </div>
    );
  }
}

export default App;
