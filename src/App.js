import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { task } from './task.json';
import TodoForm from './components/TodoForm'

console.log(task);
class App extends Component {
  constructor() { // el metodo constructor viene ejecutador primero del render
    super(); //hereda toda la funcionalidad de react
    this.state = {
      tareas: task
    };
    this.agregaTareas = this.agregaTareas.bind(this);

  }


  agregaTareas(tareaParam) {
    this.setState({
      tareas: [...this.state.tareas, tareaParam] /**agrego las tareas que vendran desde el componente todoForm y actualizamos el stado de la aplicacion general */
    });
  }

  removeTareas(index) {
    if (window.confirm('Are you sure you want delete it?')) {
      this.setState({
        tareas: this.state.tareas.filter((tareas, i) => { /**metodo filter , recorre el array que pasas como parametro y te devuelve un array con los elementos que cumplen con la
        condicion establecida */
          return i !== index;
        })

      })
    }
    console.log(index);


  }

  render() {
    //Primero de renderizar procesamos los datos

    const tareasList = this.state.tareas.map((tareas, i) => { //por cada tarea va a retornar una carta , il return non è del render atencion!!, es de esta function


      return (

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

            <div className="card-footer">
              <button className="btn btn-danger"
                onClick={this.removeTareas.bind(this, i)}>
                Delete
              </button>

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
            <div className="col-md-4 text-center">
              <TodoForm onAddTareas={this.agregaTareas /**metodo que actualiza el stado del componente app */} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-4">
            {tareasList /*este es como un componente que crea las cartas*/}
          </div>

        </div>
        <img src={logo} className='App-logo' alt='logo'></img>

      </div>
    );
  }
}

export default App;
