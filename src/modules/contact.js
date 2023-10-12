function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const contactBtn = document.getElementById(id);
  contactBtn.classList.add("active");
}

const loadContact = () => {
  const content = document.getElementById("tabContent");
  content.textContent = "";
  setBtnActive("contact");
  const contactUsContainer = document.createElement('section');
  contactUsContainer.classList.add('contactUsContainer');
  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  contactUsContainer.appendChild(h2);
  const contactData = document.createElement('p');
  contactData.textContent = "308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104 | HP : 62190819"
  contactUsContainer.appendChild(contactData);
  content.appendChild(contactUsContainer);
};

export default loadContact;
