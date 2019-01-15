import React , {Component} from 'react';


class TodoForm extends Component{

  constructor (){
    super();
    this.state = {
        title :'',
        responsible:'',
        description:'',
        priority:'low'

    };

    /*Metodos que hemos definido que  pertenecen a este componente*/ 
    this.handleInput = this.handleInput.bind(this); /*Este metodo pertenece al componente */ 
    this.handleSubmitForm = this.handleSubmitForm.bind(this);

  }

  handleInput(input){
    /*Para modificar el estado no se puede acceder directamente , react pone a disposicion
    el metodo setState()*/

   // console.log(input.target.value, input.target.name); ver valor , nombre del input
   const {value, name} = input.target; //obtengo el nombre y el valor de los input( input = parametro)

   this.setState({
      [name] : value
   });
  // console.log(this.state);

  }

  handleSubmitForm(e){
    e.preventDefault(); /*Evita que el formulario venga refreshato*/
    console.log(this.state);

  }

    render(){
        return (
            <div className="card">
            <form className="card-body" onSubmit={this.handleSubmitForm}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Responsible"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    onChange={this.handleInput}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
    }
}

export default TodoForm;