import React, { Component } from 'react';

class Calculadora extends Component {
    constructor(){
        super()
        this.state = {
            operador1:0,
            operador2:0,
            respuesta:0
        };
    }
    sumar(e) {
        e.preventDefault();
        this.setState({
            respuesta: this.state.operador1 + this.state.operador2
        });
    }

    handlerInputChange(e){
        if(e.target.name == 'operador1')
            this.setState({ operador1: parseInt(e.target.value)});
        if(e.target.name == 'operador2')
            this.setState({ operador2: parseInt(e.target.value)});
    }

    render() {
        return (
            <div className="container">
                <h1>Calculator</h1>
            <div className="row">
                <form className="col-md-4 p-5 bg-warning" onSubmit={(e)=>this.sumar(e)}>
                    <div className="form-group">
                        <label>Operador 1</label>
                        <input type="number" onChange={(e)=>this.handlerInputChange(e)} className="form-control" name="operador1" />
                    </div>
                    <div className="form-group">
                        <label>Operador 2</label>
                        <input type="number" onChange={(e)=>this.handlerInputChange(e)} className="form-control" name="operador2" />
                    </div>
                    <button type="submit" class="btn btn-success" >Sumar</button>
                    <div className="form-group">
                        <label>Respuesta</label>
                        <input type="text" className="form-control" name="respuesta" disabled value={this.state.respuesta}/>
                    </div>
                </form>     
            </div>
            </div>
        );
    }
}

export default Calculadora;