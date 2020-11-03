// $(document).ready(function() {
	 
	  navbar
	  
             // const navHamburger = document.querySelector('#navHamburger');
    // navHamburger.addEventListener('click', (e) => {
        // navHamburger.parentElement.classList.toggle('active');
    // })
			
		
	  // });

// Functions
function buyCourse(e) {
     e.preventDefault();
     // Use delegation to find the course that was added
     if(e.target.classList.contains('add-to-cart')) {
          // read the course values
          const course = e.target.parentElement.parentElement;

          // read the values
          getCourseInfo(course);
     }
}
// Reads the HTML information of the selected course
function getCourseInfo(course) {
     // Create an Object with Course Data
     const courseInfo = {
          image: course.querySelector('.placeIcon').src,         
          title: course.querySelector('h4').textContent,
          price: course.querySelector('.price').textContent,
          id: course.querySelector('a').getAttribute('data-id')
     }
     // Insert into the shopping cart
     addIntoCart(courseInfo);
}








