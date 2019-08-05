(() => {
	console.log('yadayada');

	//variables
		var button = document.querySelector("#button");
		var burgerCon = document.querySelector("#burgerContent");

		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

		button.addEventListener("click", hamburgerMenu, false);

})();
