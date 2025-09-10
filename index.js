const lodlesone = () => {
  
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(json => {
      displylosen(json.categories)
      
    })
  
};




const removeActive = () => {
  const lossonbutton = document.querySelectorAll(".lasson-btn")
  lossonbutton.forEach(btn=>btn.classList.remove('acktiv'))
}

const lodlavleord = (id) => {
manzSpner(true)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActive();
      const click = document.getElementById(`lesone-btn-${id}`);
      click.classList.add("acktiv")
      console.log(click)
      displaylavalword(data.plants); 
       
    })
 
}





const manzSpner = (stastus) => {
  if (stastus == true) {
    document.getElementById("spinnr").classList.remove("hidden")
    document.getElementById("card-contener").classList.add("hidden")
  } else {
     document.getElementById("card-contener").classList.remove("hidden")
    document.getElementById("spinnr").classList.add("hidden")
  }
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


const showWordName = async (id) => {
  
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const ditles = await res.json();
  displayretanalri(ditles.plants);
};

const displayretanalri = (wordds) => {
  

  const ditlesBox = document.getElementById("ditlse-continer");
  ditlesBox.innerHTML = `
    <div>
      <h1 class="font-semibold text-xl mb-2">${wordds.name}</h1>
      <img src="${wordds.image}" alt="${wordds.name}" class="w-full h-40  object-cover rounded-lg mb-3">
      <p><strong>Category:</strong> ${wordds.category}</p>
      <p><strong>Price:</strong> ৳ ${wordds.price}</p>
      <p class="text-gray-600 mt-2"><strong>Description:</strong> ${wordds.description}</p>
    </div>
  `;


  document.getElementById("my_modal_5").showModal();
};


const displaylavalword = (words) => {
  const cardContener = document.getElementById("card-contener")
  cardContener.innerHTML = ""
  
  words.forEach(word => {
    
    const card = document.createElement("div")

    card.innerHTML = `
     <div class="bg-white p-4 rounded-lg gap-4">
          <img class="rounded-xl w-full h-40 object-cover mb-3" src="${word.image}" alt="">
          <h2 onclick="showWordName(${word.id})" class="font-semibold text-[16px] mb-2">${word.name}</h2>
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
  manzSpner(false)
 
}
const displylosen = (losens) => {
  const lavlecontener = document.getElementById("btn-teere");
  lavlecontener.innerHTML = "";

  
  losens.forEach((lesson) => {
    const butndiv = document.createElement("div");
    butndiv.innerHTML = `
       <button  onclick="lodlavleord(${lesson.id}) " id="lesone-btn-${lesson.id}"  class="lasson-btn py-2  rounded-lg hover:bg-green-200 w-full hover:text-white ">${lesson.category_name}</button>
    `;
    lavlecontener.appendChild(butndiv);
    
    
  });
  
};

lodlesone();
const lodallcard = () => {
  manzSpner(true)
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(json => {
      displayallcardlod(json.plants)
      
    });

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
        <button class="py-2 rounded-3xl bg-green-600 w-full text-white "
          onclick="addToCart('${word.name}', ${word.price})">Add to Cart</button>
      </div>
    `;

    cardContener.appendChild(card);
  });
  manzSpner(false)
};

lodallcard();

