import React from 'react';
import './App.css';

import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></script>
        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}

        <Home />

        {/* <script type="text/javascript" src="js/materialize.min.js"></script> */}
      </header>
    </div>
  );
}

export default App;
