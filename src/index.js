import './style.css';
import { makeMainPage } from './mainPage'

function tabBar() {
    const bar = document.createElement('div');
    bar.classList.add('tabBar');

    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.id = 'home';
    homeTab.innerHTML = 'Home';
    bar.appendChild(homeTab);

    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.id = 'menu'
    menuTab.innerHTML = 'Menu';
    bar.appendChild(menuTab);

    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';
    contactTab.id = 'contact';
    bar.appendChild(contactTab);

    return bar;
}

let content = document.getElementById('content');

const name = document.createElement('div');
name.innerHTML = `Bill Filbertson's Pizza and Ice Cream`;
name.classList.add('title');
content.appendChild(name);

content.appendChild(tabBar());




content.appendChild(makeMainPage());