const lodlesone = () => {
  
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
  .then(json => displylosen(json.categories))
};

const removeActive = () => {
  const losoneButton = document.querySelectorAll("lesone-btn")
  
    losoneButton.forEach(btn=>btn.classList.remove('Aktive'))
  
 }

const lodlavleord = (id) => {
  
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
    .then(res => res.json())
  .then(data=>{
       removeActive();
    const click = document.getElementById(`lesone-btn-${id}`);
    
       click.classList.add('Aktive');
      displaylavalword(data.plants)
  })
}


const addToCartbttone = (name, price) => {
  const cartContainer = document.getElementById("cart-container");
  const item = document.createElement("div");
  item.innerHTML = `
    <div class="flex justify-between items-center bg-green-100 rounded-lg p-3 mb-3">
      <div>
        <h2 class="font-semibold">${name}</h2>
        <p>${price} x 1</p>
      </div>
      <i class="fa-solid fa-xmark cursor-pointer text-red-600"></i>
    </div>
    
  `;
  item.querySelector("i").addEventListener("click", () => {
    item.remove();
  });
  cartContainer.appendChild(item);
};
const displaylavalword = (words) => {
  const cardContener = document.getElementById("card-contener")
  cardContener.innerHTML = ""
  words.forEach(word => {
    
    const card = document.createElement("div")

    card.innerHTML = `
     <div class="bg-white p-4 rounded-lg gap-4">
          <img class="rounded-xl w-full h-40 object-cover mb-3" src="${word.image}" alt="">
          <h2 class="font-semibold text-[16px] mb-2">${word.name}</h2>
          <p class="text-gray-700 mb-2 text-[12px]">${word.description}
            </p>
          <div class="flex justify-between mb-3">
            <p class="bg-emerald-100 text-green-600 rounded-3xl py-1 px-3">${word.category}</p>
            <p class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${word.price}</p>
          </div>
          <button onclick="addToCartbttone('${word.name}', ${word.price})" href="" class="py-2  rounded-3xl bg-green-600 w-full text-white">Add to Cart</button>
        </div>
    `
    cardContener.append(card)
  })
 
}
const displylosen = (losens) => {
  const lavlecontener = document.getElementById("btn-teere");
  lavlecontener.innerHTML = "";

  
  losens.forEach((lesson) => {
    const butndiv = document.createElement("div");
    butndiv.innerHTML = `
       <button href="" onclick="lodlavleord(${lesson.id}) " id="lesone-btn-${lesson.id}"  class=" py-2  rounded-lg hover:bg-green-600 w-full hover:text-white">${lesson.category_name}</button>
    `;
    lavlecontener.appendChild(butndiv);
  });
};

lodlesone();
const lodallcard = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(json => displayallcardlod(json.plants));
};

const addToCart = (name, price) => {
  const cartContainer = document.getElementById("cart-container");

  const item = document.createElement("div");

  item.innerHTML = `
    <div class="flex justify-between items-center bg-green-100 rounded-lg p-3 mb-3">
      <div>
        <h2 class="font-semibold">${name}</h2>
        <p>${price} x 1</p>
      </div>
      <i class="fa-solid fa-xmark cursor-pointer text-red-600"></i>
    </div>
    
  `;


  item.querySelector("i").addEventListener("click", () => {
    item.remove();
  });

  cartContainer.appendChild(item);
};

const displayallcardlod = (words) => {
  const cardContener = document.getElementById("card-contener");

  words.forEach(word => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white p-4 rounded-lg gap-4">
        <img class="rounded-xl w-full h-40 object-cover mb-4" src="${word.image}" alt="">
        <h2 class="font-semibold text-[16px] mb-3">${word.name}</h2>
        <p class="text-gray-700 mb-2 text-[12px]">${word.description}</p>
        <div class="flex justify-between mb-4">
          <p class="bg-emerald-100 text-green-600 rounded-3xl py-1 px-3">${word.category}</p>
          <p class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${word.price}</p>
        </div>
        <button class="py-2 rounded-3xl bg-green-600 w-full text-white"
          onclick="addToCart('${word.name}', ${word.price})">Add to Cart</button>
      </div>
    `;

    cardContener.appendChild(card);
  });
};

lodallcard();

