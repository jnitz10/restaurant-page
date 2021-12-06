import Icon from './original.jpg';

function makeMainPage() {
    const mainPage = document.createElement('div');
    
    const myIcon = new Image();
    myIcon.src = Icon;
    mainPage.appendChild(myIcon);


    const mainPageInfo = document.createElement('div');
    mainPageInfo.innerHTML = `We're the best pizza and ice cream joint around.`
    mainPage.appendChild(mainPageInfo);
    mainPageInfo.classList.add('mainPage')

    return mainPage;
}

export {makeMainPage};