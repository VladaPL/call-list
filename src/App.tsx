import React from 'react';
import './App.css';
import SwapiService from './service/skilla-serv';
import Sidebar from './components/sidebar/sidebar';

//const swapi = new SwapiService();



function App() {
  return (
    <div className="App font-sf-pro">
      <Sidebar/>
    </div>
  );
}

export default App;
