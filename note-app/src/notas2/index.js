import React, { Component } from 'react';

class index extends Component {

    constructor() {
        super();
        this.state={
            lista: [
                {
                    id: 1,
                    dato: "computadora"
                },
                {
                    id: 2,
                    dato: "mouse"
                },
                {
                    id: 3,
                    dato: "teclado"
                }

            ],
            nota : "",
            id: "",
            edited: 0
        }

    }

    deleteItem(id){
        console.log("eliminar item", id);
        this.setState({
            lista: this.state.lista.filter(item => item.id !== id)
        });
    }

    handleChange(e){
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({
            nota: e.target.value
        });
    }

    saveInput(){

            if(this.state.edited){
                
                const newList = this.state.lista.map(item=>{
                    if(item.id === this.state.id){
                        console.log(item);
                        item.dato = this.state.nota;
                    }
                    return item;
                }); 
                
                console.log(newList);

                this.setState({
                    lista: newList,
                    edited:0,
                    nota:"",
                    id:0
                });
            }else{
                console.log(this.state.edited);
                let notaSave = { id : new Date().valueOf(), dato: this.state.nota}
            
                this.setState({
                    lista: [...this.state.lista, notaSave],
                    nota:"",
                    id:0
                });
            } 

            
        }

    editNote(id){
        console.log(id);
        let selected = this.state.lista.filter((item) => item.id === id)[0];
        console.log(selected);
        this.setState({
            nota : selected.dato,
            id : selected.id,
            edited: 1
        });
    }


    render() {
        const estilo = {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '50px'
        }

        /* let lista = this.state.lista.map((item)=>{
            return (<p key={item.id}>{item.dato}
                <button onClick={this.deleteItem.bind(this,item.id)}>eliminar</button>
                <button onClick={this.editNote.bind(this,item.id)}>editar</button></p>
            );
        }); */
        let lista = this.state.lista.map((item)=>{
            return (
                <tr key={item.id}>
                    <td>{item.dato}</td>
                    <td>
                        <button onClick={this.deleteItem.bind(this,item.id)}>eliminar</button>
                        <button onClick={this.editNote.bind(this,item.id)}>editar</button>
                    </td>
                </tr>
            );
        });
        return (
            
            <div style={estilo}>
                <table>
                    <tbody>
                    <tr>
                        <td><input type="text" name="nota" value={this.state.nota} onChange={(e)=>this.handleChange(e)}></input></td>
                        <td><button onClick={this.saveInput.bind(this)}>guardar</button></td>
                    </tr>
                    {lista}
                    </tbody>
                </table>
                
                
            </div>
        );
    }
}

export default index;