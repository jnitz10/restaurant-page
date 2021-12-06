import Pizza from './pizza.jpg';

function makeMenu() {
    const menuPage = document.createElement('div');

    const menuPizza = new Image();
    menuPizza.src = Pizza;
    menuPizza.classList.add('menuImage');
    menuPage.appendChild(menuPizza);


    return menuPage;
}


export {makeMenu};