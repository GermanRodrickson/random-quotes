import React, { useState } from 'react';
import './App.css';

const Quotes = [
  'Microlink festival',
  'Como vuelvas a decir PHP me salgo del grupo',
  `Te vuelvo a decir que no se usa así xD \n
   Tienes que handlebar el estado`,
  'Ontas?',
  'Que va a tener si programa en angular',
  'Ship ship ship',
  `No es mobile friendly \n
   Y no hay intención`,
  'Eres más inestable que mi build del dark soulds',
  `☑️ sacar la web de microlink
   ☑️ hacer calistenia`,
  'Me retiro con más descargas que angular',
  `Acho tira a Valencia a votar \n
  Volviendo \n
  He metido una pegatina de microlink jajaja \n
  No se lo digáis a nadie \n
  Marketing de guerrilla`,
  'Me ponen eso y les hago un rm -rf / de su correo',
  'No soy un experto pero se ha quedado fino',
  `venga lo apunto en mi libreta \n
  de cosas que me IMPORTAN UNA PUTA MIERDA`,
  'Estoy jugando con tu jefe',
  'Full de oro',
  `Le digo a un pavo que le pago si me ayuda \n
  Y me dice que me espere dos meses`,
  'Es un putísima mierda, un servidor PHP debajo de la cama de Germán funcionaría mejor que eso',
  'Voy a celebrarlo con un apexito'
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function App() {
  const [quotes] = useState(Quotes);

  const date = new Date();
  const selectedQuote = quotes[getRandomInt(0, quotes.length - 1)]
  const quotesByLine = selectedQuote.split("\n").filter((item) => item !== '');

  setTimeout(() => {
    window.location.href = window.location.href;
  }, 10000);

  return (
    <div className="App">
      <header className="App-header">
      <div className="wrapper">
        {quotesByLine.map((quote, i) => 
        <div className="card" key={i}>
          {quote} 
          <div className="container">
            <span className="time">{`${date.getHours()}:${date.getMinutes()}`}</span>
            <span>✔</span>
          </div>
        </div>)}
      </div>
      </header>
    </div>
  );
}

export default App;
