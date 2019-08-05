(() => {
	console.log('yadayada');

	//carousel INDEX constants
	const arrows = document.querySelectorAll('.arrowsCon'),
				bannerImages = document.querySelector('#carousel_images');


	//burger menu variables
		var button = document.querySelector("#button");
		var burgerCon = document.querySelector("#burgerContent");

	//ABOUT collapsibles variables
		var colArrowOne = document.querySelector(".arrow_one");
		var colArrowTwo = document.querySelector(".arrow_two");

		var colContOne = document.querySelector(".collapsible_1_content");
		var colContTwo = document.querySelector(".collapsible_2_content");


	//burger menu function
		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

	//ABOUT collapsibles functions
		function collapsibleOne() {
			colContOne.classList.toggle("slideToggle");
			colArrowOne.classList.toggle("expanded");
		}

		function collapsibleTwo() {
			colContTwo.classList.toggle("slideToggle");
			colArrowTwo.classList.toggle("expanded");
		}

	//burger menu event
		button.addEventListener("click", hamburgerMenu, false);

	// ABOUT collapsibles functions
		colArrowOne.addEventListener("click", collapsibleOne, false);
		colArrowTwo.addEventListener("click", collapsibleTwo, false);

	//carousel function
		function animateBanners() {

	  let offset = 600,
	      multiplier = this.dataset.offset;
	  console.log((offset * multiplier) + "px");

	  bannerImages.style.right = `${offset * multiplier + "px"}`;
	}

  // carousel event
  arrows.forEach(arrow => arrow.addEventListener("click", animateBanners));

})();
