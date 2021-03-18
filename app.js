// 1
const portillos = document.getElementById(`portillos`);

// 2
const images = document.getElementById(`img`);

// 3
const centered = document.getElementsByClassName(`center`);

// 4
const ginos = document.querySelector(`#ginos`);
console.dir(ginos);

// 5
const pTags = document.querySelectorAll(`p`);

// 6a
const h1 = document.querySelector(`h1`);

// 6b
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;


// 7a
const others = document.querySelector(`#others`);
console.dir(others)
// 7b
others.innerHTML = `<h4>Other favorites</h4>`;

// 8a
const aTag = document.querySelector(`a`);

// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);
console.log(h1.classList);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);


// 11b
h4.innerText = `CHICAGO: A great place to eat!`;
console.dir(h4);

// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = `See you in the Windy City Sometime!`;


// 12c
aTag.insertAdjacentElement(`afterend`, h5)

// 13
const jayB = document.querySelector(`ul li`);
jayB.remove();

// Bonus

// 14a
const divs = document.querySelectorAll(`div`);

// 14b


// 15a
 const hunger = ["Thanks",  "A", "Lot", "Now", "I", "Am", "Hungry"];

// 15b
h5.insertAdjacentElement(`afterend`,hunger);

