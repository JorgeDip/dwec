document.addEventListener("DOMContentLoaded", function () {
	const pet_name = document.getElementById("name");
	const description = document.getElementById("description");
	const image = document.getElementById("image");
	const birthdate = document.getElementById("birthdate");
	const price = document.getElementById("price");
	const pet_code = document.getElementById("pet_code");
	const is_sold = document.getElementById("is_sold");
	const form = document.getElementById("petForm");
	const cardTemplate = document.getElementById("template-pet-card");
	const pet_grid = document.querySelector(".pet-grid");
	let pets = [];

	displayPets();

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		event.stopPropagation();

		// Check if its in edit mode
		const urlParams = new URLSearchParams(window.location.search);
		const mode = urlParams.get("mode");

		if (mode == "edit") console.log("I am editing");
		if (validateForm()) {
			addPet();
			console.log(pets);
			// form.submit();

			displayPets();
		}
	});

	function validateForm() {
		var isValid = true;

		if (!isValidInput(pet_name)) isValid = false;
		if (!isValidInput(description)) isValid = false;
		if (!isValidImageUrl(image)) isValid = false;
		if (!isValidBirthdate(birthdate)) isValid = false;
		if (!isValidPrice(price)) isValid = false;
		if (!isValidPetCode(pet_code)) isValid = false;

		return isValid;
	}

	// Auxiliary functions
	function isValidInput(element, message = "This field cannot be empty") {
		if (element.value.trim().length < 1) {
			markFieldAsNotValid(element, message);
			return false;
		}
		markFieldAsValid(element);
		return true;
	}

	function isValidImageUrl(image) {
		if (!isValidInput(image, "Image URL cannot be empty")) return false;

		const regex = /^https?:\/\/.+\.(jpg|jpeg|png|gif)(\?.*)?$/i;
		if (!regex.test(image.value.trim())) {
			markFieldAsNotValid(image, "Image URL not valid (e.g https://example.com/image.png)");
			return false;
		}
		return true;
	}

	function isValidBirthdate(birthdate) {
		if (!isValidInput(birthdate, "Birthdate cannot be empty")) return false;

		if (new Date(birthdate.value) > new Date()) {
			markFieldAsNotValid(birthdate, "Birthdate cannot be in the future");
			return false;
		}

		return true;
	}

	function isValidPrice(price) {
		if (!isValidInput(price, "Price cannot be empty")) return false;

		if (price.value < 0) {
			markFieldAsNotValid(price, "Price cannot be less than 0");
			return false;
		}

		return true;
	}

	function isValidPetCode(pet_code) {
		if (!isValidInput(pet_code, "Pet code cannot be empty")) return false;

		const regex = /^[a-z]{3}[0-9]{3}$/i;
		if (!regex.test(pet_code.value.trim())) {
			markFieldAsNotValid(pet_code, "Pet code not valid (e.g ABC123)");
			return false;
		}

		return true;
	}

	function markFieldAsNotValid(element, message) {
		// If we have a custom message we show it. In other case we just show the error-message present in the HTML
		if (message) {
			element.parentNode.querySelector(".error-message").textContent = message;
		}
		// Adding the class that shows the error-message and adds the red border (css)
		element.parentNode.classList.add("is-not-valid-field");
	}

	function markFieldAsValid(element) {
		element.parentNode.classList.remove("is-not-valid-field");
	}

	// CRUD

	function addPet() {
		const newPet = {
			name: pet_name.value,
			description: description.value,
			image_url: image.value,
			birthdate: birthdate.value,
			price: price.value,
			pet_code: pet_code.value,
			is_sold: is_sold.checked,
		};

		pets.push(newPet);
	}

	function editPet() {}

	function displayPets() {
		for (let pet of pets) {
			console.log(pet.image_url);
			let newCard = cardTemplate.cloneNode(true);
			newCard.querySelector(".pet-image").src = pet.image_url || "a";
			newCard.querySelector(".pet-name").textContent = pet.name;
			newCard.querySelector(".pet-description").textContent = pet.description;

			rowCards.append(newCard);
		}
	}
});
