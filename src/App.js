import React from 'react';
import './App.css';

import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></script>

        <link href="https://fonts.googleapis.com/css?family=Flamenco&display=swap" rel="stylesheet"></link>

        <Home />

      </header>
    </div>
  );
}

export default App;
