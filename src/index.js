import './style.css';
import { makeMainPage } from './mainPage'
import { makeMenu } from './menu'
import { makeContact } from './contact'

function tabBar() {
    const bar = document.createElement('div');
    bar.classList.add('tabBar');

    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.classList.add('selected');
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

const currentPage = document.createElement('div');
content.appendChild(currentPage);

currentPage.appendChild(makeMainPage());


document.getElementById('menu').addEventListener('click', function() {
    currentPage.innerHTML = '';
    document.getElementById('menu').classList.add('selected');
    document.getElementById('home').classList.remove('selected');
    document.getElementById('contact').classList.remove('selected')
    currentPage.appendChild(makeMenu());
})

document.getElementById('home').addEventListener('click', function() {
    currentPage.innerHTML = '';
    document.getElementById('home').classList.add('selected');
    document.getElementById('menu').classList.remove('selected');
    document.getElementById('contact').classList.remove('selected')
    currentPage.appendChild(makeMainPage());
})

document.getElementById('contact').addEventListener('click', function() {
    currentPage.innerHTML = '';
    document.getElementById('contact').classList.add('selected');
    document.getElementById('menu').classList.remove('selected');
    document.getElementById('home').classList.remove('selected')
    currentPage.appendChild(makeContact());
})