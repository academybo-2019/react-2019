import React, { Component } from 'react';

class contador extends Component {
    constructor(){
        super();
        this.state = {
            numero:0
        };
        this.incrementar = this.incrementar.bind(this);
    }

    incrementar() {
        this.setState({
            numero: this.state.numero + 1
        });
    }

    render() {
        return (
            <div className="container text-center">
                <h1 className="display-2">{this.state.numero}</h1>
                <button className="btn btn-danger" onClick={this.incrementar}>Incrementar 01</button>
                <button className="btn btn-warning" onClick={()=>this.incrementar()}>Incrementar 01</button>
                <button className="btn btn-success" onClick={this.incrementar.bind(this)}>Incrementar 01</button>
            </div>
        );
    }
}

export default contador;