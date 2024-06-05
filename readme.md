# Tarea:
 
 - Poder eliminar los cursos agregados  al carrito de compras y poder vaciar el carrito de compras.

 ### Primer Paso:
 
  Se agrego en `loadListeners()`; los event listeners necesarios para poder eliminar los cursos del carrito de compras y para vaciar el carrito de compras .

 ```javascript
function loadListeners() {
    shoppingBasketList.addEventListener('click', deleteCourseShoppingBasket); 
    clearShoppingBasket.addEventListener('click', clearShoppingBasketHandler);
} 
 ```

 ### Segundo Paso:
 
 Se agrego las funciones que manejan la eliminacion de cursos del carrito de compras y vaciar el carrito de compras.


- Eliminar los cursos del carrito de compras:

 ```javascript
function deleteCourseShoppingBasket(e) {
    e.preventDefault();
    if (e.target.classList.contains('deleteCourse')) {
        const courseId = e.target.getAttribute('data-id');
        const curso = document.querySelector(`[data-id="${courseId}"]`);
        if (curso) {
            curso.parentElement.parentElement.remove();
        }
    }
}
 ```

- Vaciar el carrito de compras:

 ```javascript
function clearShoppingBasketHandler() {
    coursesShoppingBasket = [];
    printCourseShoppingBasket();
}

 ```