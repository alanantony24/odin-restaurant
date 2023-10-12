const setBtnActive = (id) => {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }
  const menuBtn = document.getElementById(id);
  menuBtn.classList.add("active");
};

const loadMenu = () => {
    const content = document.getElementById('tabContent');
    content.textContent = '';
    setBtnActive('menu');
    const menuItems = [
        { name: "Appam", price: "$5.99" },
        { name: "Puttu", price: "$4.99" },
        { name: "Idiyappam", price: "$6.99" },
        { name: "Sadya", price: "$12.99" },
        { name: "Karimeen Pollichathu", price: "$14.99" }
    ];

    const menuItemsContainer = document.createElement('section');
    menuItemsContainer.id = 'menu-items-container'

    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';

        const itemName = document.createElement('span');
        itemName.className = 'menu-item-name';
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.className = 'menu-item-price';
        itemPrice.textContent = item.price;

        menuItemElement.appendChild(itemName);
        menuItemElement.appendChild(itemPrice);

        menuItemsContainer.appendChild(menuItemElement);
    });

    content.appendChild(menuItemsContainer);
}

export default loadMenu;
