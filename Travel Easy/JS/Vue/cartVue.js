$(document).ready(function() {
	 
	  // navbar
	  
             const navHamburger = document.querySelector('#navHamburger');
    navHamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle('active');
    })
			
		
	  });


// Variables
      const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');

// Listeners

loadEventListeners();

function loadEventListeners() {
     // When a new course is added
     courses.addEventListener('click', buyCourse);

     // When the remove button is clicked
     shoppingCartContent.addEventListener('click', removeCourse);

     // Clear Cart Btn
     clearCartBtn.addEventListener('click', clearCart);

     // Document Ready
     document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}