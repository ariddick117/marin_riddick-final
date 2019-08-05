(() => {
	console.log('yadayada');

	//carousel INDEX constants
	const arrows = document.querySelectorAll('.arrowsCon'),
				bannerImages = document.querySelector('#carousel_images');


	//burger menu variables
		var button = document.querySelector("#button");
		var burgerCon = document.querySelector("#burgerContent");

	//burger menu function
		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

	//burger menu event
		button.addEventListener("click", hamburgerMenu, false);

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
