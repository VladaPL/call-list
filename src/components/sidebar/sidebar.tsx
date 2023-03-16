import React from "react";
import './sidebar.css';

const sidebarData = ['Итоги', 'Заказы', 'Собщения', 'Звонки', 'Контрагенты', 'Документы', 'Исполнители','Отчеты','База знаний', 'Настройки'];

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar__wrapper">
                <div>
                    <img src="" alt="logo"/>
                </div>
            <ul>
                {sidebarData.map((item) => {
                    return <li className="sidebar__item">{item}</li>;
                })}
            </ul>
            </div>
        </nav>
    );
};

export default Sidebar;