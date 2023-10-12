const createHeader = () => {
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  const headerLogo = document.createElement('h1');
  headerLogo.textContent = 'Kerala Restaurant';
  header.appendChild(headerLogo);
  return header;
}

const createBtn = (id, text) => {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add('tab');
  return btn;
}

const createNav = () => {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'navbar');

  const homeBtn = createBtn('home', 'HOME');
  const menuBtn = createBtn('menu', 'MENU');
  const contactBtn = createBtn('contact', 'CONTACT');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'tabContent');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  const h3 = document.createElement('h3');
  h3.textContent = 'Made with <3 by Alan';
  footer.appendChild(h3);
  return footer;
}

const loadPage = () => {
  const content = document.getElementById('content');
  const header = createHeader();
  content.appendChild(header);
  const nav = createNav();
  content.appendChild(nav);
  const tabContent = createMain();
  content.appendChild(tabContent);
  const footer = createFooter();
  content.appendChild(footer);
}

export default loadPage