### Tarea:
 
 - Poder eliminar los cursos agregados  al carrito de compras y poder vaciar el carrito de compras.

 1. Se agrego en `loadListeners()`; los event listeners necesarios para poder eliminar los cursos del carrito de compras y para vaciar el carrito de compras .

 ```javascript
function loadListeners() {
    shoppingBasketList.addEventListener('click', deleteCourseShoppingBasket); 
    clearShoppingBasket.addEventListener('click', clearShoppingBasketHandler);
} 
 ```

 2. Se agrego las funciones que manejan la eliminacion de cursos del carrito de compras y vaciar el carrito de compras.


-eliminacion de cursos del carrito de compras:

 ```javascript
function deleteCourseShoppingBasket(e) {
    e.preventDefault();
    if (e.target.classList.contains('deleteCourse')) {
        const courseId = e.target.getAttribute('data-id');
        coursesShoppingBasket = coursesShoppingBasket.filter(course => course.id !== courseId);
        printCourseShoppingBasket();
    }
}
 ```

-Vaciar el carrito de compras:

 ```javascript
function clearShoppingBasketHandler() {
    coursesShoppingBasket = [];
    printCourseShoppingBasket();
}

 ```