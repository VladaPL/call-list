import React, {Component} from "react";
import './sidebar.css';
import logoImage from '../../assets/images/logo.png';

import chartIcon from '../../assets/images/sidebar-svg/chart-timeline-variant.svg'
import ordersIcon from '../../assets/images/sidebar-svg/orders-24px.svg';
import mailIcon from '../../assets/images/sidebar-svg/mail_outline-24px.svg';
import callsIcon from '../../assets/images/sidebar-svg/calls-24px.svg';
import peopleIcon from '../../assets/images/sidebar-svg/people-24px.svg';
import docsIcon from '../../assets/images/sidebar-svg/documents-24px.svg';
import permIcon from '../../assets/images/sidebar-svg/perm_identity_black_24dp.svg';
import briefcaseIcon from '../../assets/images/sidebar-svg/briefcase-outline.svg';
import libraryIcon from '../../assets/images/sidebar-svg/local_library_black_24dp.svg';
import settingsIcon from '../../assets/images/sidebar-svg/settings-24px.svg';

const sidebarIconsObj = {
    0: chartIcon,
    1: ordersIcon,
    2: mailIcon,
    3: callsIcon,
    4: peopleIcon,
    5: docsIcon,
    6: permIcon,
    7: briefcaseIcon,
    8: libraryIcon,
    9: settingsIcon
};

const sidebarText = ['Итоги', 'Заказы', 'Собщения', 'Звонки', 'Контрагенты', 'Документы', 'Исполнители','Отчеты','База знаний', 'Настройки'];


type LogoState = {
    active: boolean;
    logoImage: string;
};

class Logo extends Component<{}, LogoState> {

    state: LogoState = {
        active: false,
        logoImage: logoImage
    }

    render(): React.ReactNode {
        const logo = this.state.logoImage;

        return (
            <div className="logo_wrapper">
                <img className="logo__img" src={logo} alt="logo-tree"/>
            </div>
        );
    }
}



const Sidebar = () => {

    return (
        <aside className="sidebar">
            <nav className="sidebar__wrapper">
                <Logo/>
                <nav className="sidebar__list">

                    {sidebarText.map((item) => {
                        //let indexOfItem = sidebarText.indexOf(item);
                        //let icon = '';

                        return (
                            <div className={`sidebar__item-wrapper ${item === "Звонки" ? ` sidebar__item-active` : ``}`} key={item}>
                                {item === "Звонки" ? <div className="sidebar__active-mark-before"></div> : null}
                                {/* {
                                    switch(item) {
                                      case 'Итоги':
                                        icon = sidebarIconsObj[0];
                                        return icon;
                                    }
                                } */}

                                <div className="sidebar__item"> 
                                    <div className="sidebar__icon" style={{backgroundImage: `url(${sidebarIconsObj[1]})`}}></div>
                                    <div className="sidebar__text">{item}</div>
                                </div>

                                {item === "Звонки" ? <div className="sidebar__active-mark-after"></div> : null}
                            </div>);
                    })}

                </nav>
            </nav>
        </aside>
    );
};

export default Sidebar;