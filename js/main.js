(() => {
	console.log('yadayada');

/////////////CONSTANTS-VARIABLES
	//CAROUSEL index constants
	const arrows = document.querySelectorAll('.arrowsCon'),
				bannerImages = document.querySelector('#carousel_images');


	//BURGER menu variables
		var button = document.querySelector("#button");
		var burgerCon = document.querySelector("#burgerContent");

	//COLLAPSIBLES variables
		var colArrowOne = document.querySelector(".arrow_one");
		var colArrowTwo = document.querySelector(".arrow_two");
		var colArrowThree = document.querySelector(".arrow_three");
		var colArrowFour = document.querySelector(".arrow_four");


		var colContOne = document.querySelector(".collapsible_1_content");
		var colContTwo = document.querySelector(".collapsible_2_content");
		var colContThree = document.querySelector(".collapsible_3_content");
		var colContFour = document.querySelector(".collapsible_4_content");

/////////////FUNCTIONS

	//CAROUSEL function
		function animateBanners() {

	  let offset = 600,
		     multiplier = this.dataset.offset;
	  console.log((offset * multiplier) + "px");

	  bannerImages.style.right = `${offset * multiplier + "px"}`;
	}

	//BURGER menu function
		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

	//COLLAPSIBLES functions
		function collapsibleOne() {
			colContOne.classList.toggle("slideToggle");
			colArrowOne.classList.toggle("expanded");
		}

		function collapsibleTwo() {
			colContTwo.classList.toggle("slideToggle");
			colArrowTwo.classList.toggle("expanded");
		}

		function collapsibleThree() {
			colContThree.classList.toggle("slideToggle");
			colArrowThree.classList.toggle("expanded");
		}

		function collapsibleFour() {
			colContFour.classList.toggle("slideToggle");
			colArrowFour.classList.toggle("expanded");
		}

/////////////EVENTS

  // carousel event
  arrows.forEach(arrow => arrow.addEventListener("click", animateBanners));

	//burger menu event
		button.addEventListener("click", hamburgerMenu, false);

	//collapsibles events
		colArrowOne.addEventListener("click", collapsibleOne, false);
		colArrowTwo.addEventListener("click", collapsibleTwo, false);
		colArrowThree.addEventListener("click", collapsibleThree, false);
		colArrowFour.addEventListener("click", collapsibleFour, false);

})();
