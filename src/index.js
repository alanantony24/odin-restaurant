import loadPage from "./modules/pageLoad";
import loadHome from "./modules/home";
import loadContact from "./modules/contact";
import loadMenu from "./modules/menu"
import './style.css';

const addNavEvents = () => {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

function init() {
    loadPage();
    loadHome();
    addNavEvents();
}

init();