//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import SwapiService from './service/slilla-service';
import SwapiService from './service/skilla-serv';

const swapi = new SwapiService();



function App() {
  return (
    <div className="App">
      <nav className='sidebar'>
        <ul className='sidebar__list'>
            <li className='sidebar__item'>Итоги</li>
            <li className='sidebar__item'>Заказы</li>
            <li className='sidebar__item'>Сообщения</li>
        </ul>
      </nav>
      <header className='header'>
        <ul className='header__list'>
            <li className='header__item'></li>
            <li className='header__item'></li>
            <li className='header__item'></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
