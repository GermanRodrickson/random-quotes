import React, { useState } from 'react';
import uniqueRandomArray from 'unique-random-array'

import './App.css';

const quotes = [
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
  'Voy a celebrarlo con un apexito',
  `A good time to stop \n
    hombre claro, estoy de vacaciones`,
  `De hecho, si lo hubieras arreglado en vez de decirmelo \n
  ya serías contributor`,
  `vaya locura \n
  nos hemos pasado el juego`,
  'hombre, la gracia está en que esté Germán',
  `Me hiciste una ñapa \n
  y te lo he dicho`,
  'Ni lo quiero mirar',
  'Siempre gano',
  'Como soy autónomo, me puedo desgravar el iva de la silla',
  'Me he pasado al ramen',
  'Buenos dias espero que tenga una excelente mañana desde microlink le deseamos un buen despertar',
  'Gracias, pero hazme un PR',
  'Un tesla model 3 rojo y un Mustang estilo viber',
  `Tu PR está en la cola, recibirá noticias mías \n
  con estas manitas que me ha dado Jesús`,
  'No os quiero emocionar pero microlink ya cachea HTML comprimidio en brotli en redis',
  `- Mal: "Angular da puto cáncer" \n
  - Bien: "Angular da puto cáncer y PHP más"`,
  'Me lo he hecho con pieles de programador de angular',
  'Prefiero no fotos que luego me hacen memes',
  'Con 30e te monto una startup',
  'Si fuera rico no trabajaria',
  'Intuyo que sabes leer',
  'JAJAJAJ VEGANO VEGANO JAJAJAJA'
];

const getQuote = uniqueRandomArray(quotes);

let isFirstRun = true

function App() {
  const [quote, setQuote] = useState(getQuote());
  const date = new Date();
  const quotesByLine = quote.split("\n").filter((item) => item !== '');

  if (isFirstRun) {
    isFirstRun = false
    setTimeout(() => {
      setQuote(getQuote())
    }, 10000);
  }

  const onClick = (e) => {
    e.preventDefault()
    setQuote(getQuote)
  }

  return (
    <div className="App" onClick={onClick}>
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
