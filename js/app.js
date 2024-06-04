// VARIABLES
const shoppingBasket = document.getElementById('shoppingBasket');
const shoppingBasketList = document.querySelector('#shoppingBasketList tbody');
const clearShoppingBasket = document.getElementById('clearShoppingBasket');
const courseList = document.getElementById('courseList');
let coursesShoppingBasket = [];


loadListeners();

// LISTENERS
function loadListeners() {
    courseList.addEventListener('click', addCourseShoppingBasket);
    shoppingBasketList.addEventListener('click', deleteCourseShoppingBasket); 

}



// FUNCTIONS

/*function addCourseShoppingBasket() {
  console.log('hola');
} */

function addCourseShoppingBasket(e) {
    if (e.target.classList.contains('addShoppingBasket')) {
        const courseSelected = e.target.parentElement.parentElement;

        readCourseToShoppingBasket(courseSelected);
    }
}

function readCourseToShoppingBasket(courseSelected) {
    const dataCourseSelected = {
        id: courseSelected.querySelector('a').getAttribute('data-id'),
        image: courseSelected.querySelector('img').src,
        title: courseSelected.querySelector('h4').textContent,
        price: courseSelected.querySelector('.precio span').textContent,
        quantity: 1,
    };

    coursesShoppingBasket = [...coursesShoppingBasket, dataCourseSelected];

    printCourseShoppingBasket();
}

function printCourseShoppingBasket() {
    shoppingBasketList.textContent = '';

    coursesShoppingBasket.forEach((course) => {
        const { id, image, title, price, quantity } = course;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${image}" /></td>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td> <a class="deleteCourse" data-id="${id}" href="#">X</a></td>
        `;

        shoppingBasketList.appendChild(row);
});

// console.log(row);
 
  // console.log('Pintaremos el array');

}

function deleteCourseShoppingBasket(e) {
    e.preventDefault();
    if (e.target.classList.contains('deleteCourse')) {
        const courseId = e.target.getAttribute('data-id');
        coursesShoppingBasket = coursesShoppingBasket.filter(course => course.id !== courseId);
        printCourseShoppingBasket();
    }
}
