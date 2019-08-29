import React from 'react';
import {notas} from '../notas'
import Formulario from './Formulario'

class Main extends React.Component {

    constructor(context, props){
        super(context, props)
        console.log(notas);
        this.state = {
            notas
        }
        this.guardarItem = this.guardarItem.bind(this);
    }

    eliminarItem(index) {
        console.log(index,typeof index);
        this.setState({
          notas: this.state.notas.filter(item=>item.id !== index)
        })
    }

    guardarItem(objeto){
        console.log("llego el objeto");
        console.log(objeto);
        this.setState({
          notas: [...this.state.notas,objeto]
        });
    }

    render() {
        const listaDeCards = this.state.notas.map((item, i) => {
            return (
              <div className="col-md-4" key={i}>
                <div className="card mt-4">
                  <div className="card-title text-center">
                    <h3>{item.titulo}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {item.prioridad}
                    </span>
                  </div>
                  <div className="card-body">
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.eliminarItem.bind(this,item.id)}>
                      Delete {item.id}
                    </button>
                  </div>
                </div>
              </div>
            )
          });

          let title = <h1>Note App</h1>;

        return (
            <div className="App">
               {title}
               <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Lista de Notas</h3>
                       <div className="row">
                            {listaDeCards}
                       </div>
                    </div>
                    <div className="col-md-4">
                      <h3>Formulario</h3>
                      <Formulario guardarItem={this.guardarItem}></Formulario>
                    </div>
                  </div>
                </div>
            </div>
          );
    }
}

export default Main;