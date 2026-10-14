document.addEventListener("DOMContentLoaded", function () {
	// inputs
	const pet_name = document.getElementById("name");
	const description = document.getElementById("description");
	const image = document.getElementById("image");
	const birthdate = document.getElementById("birthdate");
	const price = document.getElementById("price");
	const pet_code = document.getElementById("pet_code");
	const is_sold = document.getElementById("is_sold");

	// containers and form
	const form = document.getElementById("petForm");
	const submitBtn = document.querySelector("#pet-form-submit-btn");
	const cardTemplate = document.getElementById("template-pet-card");
	const pet_grid = document.querySelector(".pet-grid");

	// fetch and display pets
	let pets = [
		{
			name: "Max",
			description: "Description",
			image_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
			birthdate: "2026-09-12",
			price: 120,
			pet_code: "ABC123",
			is_sold: true,
		},
		{
			name: "Bella",
			description: "Description",
			image_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
			birthdate: "2026-09-22",
			price: 150,
			pet_code: "DEF456",
			is_sold: false,
		},
	];

	displayPets();

	// add or edit form
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		event.stopPropagation();

		// Global variable to check if edit mode is active

		if (validateForm()) {
			if (window.editingPetCode) {
				window.editingPetCode = null;
				document.querySelector("#pet-form-submit-btn").textContent = "Add Pet";
				console.log("I am editing");
				updatePet();
				resetForm();
			} else {
				addPet();
				resetForm();
			}

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
		if (!window.editingPetCode) if (!isValidPetCode(pet_code)) isValid = false;

		return isValid;
	}

	function resetForm() {
		pet_name.value = "";
		description.value = "";
		image.value = "";
		birthdate.value = "";
		price.value = "";
		pet_code.value = "";
		pet_code.removeAttribute("disabled");
		is_sold.checked = false;
		submitBtn.textContent = "Add pet";
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

		// check if pet code already exists
		if (pets.find((pet) => pet.pet_code.toLowerCase() === pet_code.value.toLowerCase())) {
			markFieldAsNotValid(pet_code, "Pet code already exists");
			return false;
		}

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

	function updatePet() {
		pet = pets.find((p) => p.pet_code.toLowerCase() === pet_code.value.toLowerCase());

		pet.pet_name = pet_name.value;
		pet.description = description.value;
		pet.image_url = image.value;
		pet.birthdate = birthdate.value;
		pet.price = price.value;
		pet.is_sold = is_sold.checked;
	}

	function displayPets() {
		pet_grid.innerHTML = ""; // Clear the grid before displaying pets
		for (let pet of pets) {
			let newCard = cardTemplate.content.cloneNode(true);

			newCard.querySelector(".pet-image").src =
				pet.image_url || "https://images.unsplash.com/photo-1543466835-00a7907e9de1";
			newCard.querySelector(".pet-name").textContent = pet.name;
			newCard.querySelector(".pet-description").textContent = pet.description;
			newCard.querySelector(".pet-code").textContent = pet.pet_code;
			newCard.querySelector(".pet-birthdate").textContent = pet.birthdate;
			newCard.querySelector(".pet-price").textContent = "$" + pet.price;

			if (pet.is_sold) {
				newCard.querySelector(".btn-toggle-sold").textContent = "Mark as Available";
				newCard.querySelector(".pet-card").classList.add("sold");
				newCard.querySelector(".badge").textContent = "Sold";
				newCard.querySelector(".badge").classList.add("sold-badge");
			} else {
				newCard.querySelector(".btn-toggle-sold").textContent = "Mark as Sold";
				newCard.querySelector(".badge").textContent = "Available";
				newCard.querySelector(".badge").classList.add("available");
			}

			newCard.querySelector(".btn-toggle-sold").setAttribute("data-pet-code", pet.pet_code);
			newCard.querySelector(".btn-delete").setAttribute("data-pet-code", pet.pet_code);
			newCard.querySelector(".btn-edit").setAttribute("data-pet-code", pet.pet_code);

			pet_grid.append(newCard);
		}
	}

	// Click mark as sold/available or delete or edit button from pet card
	document.querySelector(".pet-grid").addEventListener("click", function (e) {
		// Mark as sold or available pet
		if (e.target.classList.contains("btn-toggle-sold")) {
			const pet_code = e.target.getAttribute("data-pet-code");
			pet = pets.find((p) => p.pet_code.toLowerCase() === pet_code.toLowerCase());

			if (pet) {
				pet.is_sold = !pet.is_sold;
			}

			displayPets();
		}

		// Delete pet
		if (e.target.classList.contains("btn-delete")) {
			const pet_code = e.target.getAttribute("data-pet-code");
			if (confirm("Are you sure?")) {
				pets = pets.filter((p) => p.pet_code.toLowerCase() !== pet_code.toLowerCase());
				displayPets();
			}
		}

		// Edit pet
		if (e.target.classList.contains("btn-edit")) {
			const pet_code_find = e.target.getAttribute("data-pet-code");

			const petToEdit = pets.find((p) => p.pet_code === pet_code_find);
			if (petToEdit) {
				// Change form button to edit
				submitBtn.textContent = "Update Pet";

				// insert the pet info into the form inputs
				pet_name.value = petToEdit.name;
				description.value = petToEdit.description;
				image.value = petToEdit.image_url;
				birthdate.value = petToEdit.birthdate;
				price.value = petToEdit.price;
				pet_code.value = petToEdit.pet_code;
				pet_code.setAttribute("disabled", "true");
				is_sold.checked = petToEdit.is_sold;

				window.editingPetCode = petToEdit.pet_code;
			}
		}
	});
});
