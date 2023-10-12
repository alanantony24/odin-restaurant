import foodImage from '../images/kerala_food.jpg';

const createHomePage = () => {
  const homePageSection = document.createElement('section');

  const title = document.createElement('h2');
  title.textContent = "At this restaurant we serve authentic Kerala food, ranging from Kasargod Neerdosha to Kozhikode Halwa";
  homePageSection.appendChild(title);

  const image = new Image();
  image.src = foodImage;
  image.classList.add('homePageImage');
  homePageSection.appendChild(image);

  const description = document.createElement('p');
  description.textContent = "Experience the rich and diverse flavors of Kerala at our restaurant. Our culinary journey takes you through the vibrant spices and mouthwatering dishes of this beautiful South Indian state. From the spicy seafood delicacies to the comforting coconut-based curries, our menu is a true reflection of Kerala's gastronomic heritage. Join us for an unforgettable dining experience that will transport your taste buds to the enchanting land of Kerala";
  description.classList.add('homePageDescription')
  homePageSection.appendChild(description);
  
  return homePageSection;
}

const setBtnActive = (id) => {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) {
    activeBtn.classList.remove('active');
  }
  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

const loadHome = () => {
  const content = document.getElementById('tabContent');
  content.textContent = '';

  const homePageSection = createHomePage();
  setBtnActive('home');
  content.appendChild(homePageSection);
};

export default loadHome;