import React , {Component} from 'react';


class TodoForm extends Component{
    render(){
        return (
            <div className="card">
            <form className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value=""
                  onChange=""
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  value=""
                  onChange=""
                  placeholder="Responsible"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value=""
                  onChange=""
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value=""
                    onChange=""
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