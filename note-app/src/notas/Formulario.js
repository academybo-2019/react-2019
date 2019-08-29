import React, { Component } from 'react';

class Formulario extends Component {
    constructor(context,props){
        super(context,props);
        this.state = {
            id:"",
            titulo: "",
            responsable: "",
            prioridad: ""
        };
    }

    handleInput(e) {
        console.log(e.target.value, e.target.name);
        if(e.target.name == 'titulo')
            this.setState({titulo: e.target.value})
        if(e.target.name == 'responsable')
            this.setState({responsable: e.target.value})
        if(e.target.name == 'prioridad')
            this.setState({prioridad: e.target.value})
        console.log(this.state);

    }

    guardarItem(e){
        e.preventDefault();
        let newId = new Date().valueOf().toString();
        let estado = this.state;
        estado.id = newId;
        console.log(estado);
        this.props.guardarItem(estado);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <form className="card-body" onSubmit={(e)=>this.guardarItem(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="titulo"
                        className="form-control"
                        placeholder="Titulo"
                        value={this.state.titulo}
                        onChange={(e)=>this.handleInput(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        placeholder="Responsable"
                        value={this.state.responsable}
                        onChange={(e)=>this.handleInput(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            value={this.state.prioridad}
                            onChange={(e)=>this.handleInput(e)}
                        >
                        <option >Baja</option>
                        <option>Media</option>
                        <option >Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Guardar
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;