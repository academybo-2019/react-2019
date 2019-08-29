import React from 'react';
import Notas from './notas/Main';
import Samples from './samples/Contador';
import Calculadora from './samples/Calculadora'

function App() {

  return (
    <div className="App">
        <Samples></Samples>
        <Notas></Notas>
        <Calculadora></Calculadora>
    </div>
  );
}

export default App;
