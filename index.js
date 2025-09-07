const lodlesone = () => {
  
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
  .then(json => displylosen(json.categories))
};

const lodlavleord = (categories) => {
  console.log(categories)
}

const displylosen = (losens) => {
  const lavlecontener = document.getElementById("btn-teere");
  // lavlecontener.innerHTML = "";

  
  losens.forEach((lesson) => {
    const butndiv = document.createElement("div");
    butndiv.innerHTML = `
       <button href="" onclick="lodlavleord(${lesson.category_name}) "class="py-2  rounded-lg hover:bg-green-600 w-full hover:text-white">${lesson.category_name}</button>
    `;
    lavlecontener.appendChild(butndiv);
  });
};

lodlesone();
