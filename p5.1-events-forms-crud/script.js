const pet_name = document.getElementById("name");
const description = document.getElementById("description");
const image = document.getElementById("image");
const birthdate = document.getElementById("birthdate");
const pet_code = document.getElementById("pet_code");
const is_sold = document.getElementById("is_sold");
const form = document.getElementById("petForm");

let pets = [];

form.addEventListener("submit", function (event) {
	event.preventDefault();
	event.stopPropagation();

	if (validateForm()) {
		console.log("All fields are ok, we can proceed");
		form.submit();
	} else {
		console.log("There is some not-valid field. The user should ckeck them.");
	}
});

function validateForm() {
	var isValid = true;

	if (pet_name.value.trim().length < 1) {
		markFieldAsNotValid(pet_name, "Input a name 1 or more characters long.");
		isValid = false;
	} else {
		markFieldAsValid(pet_name);
	}

	if (description.value.trim().length < 1) {
		markFieldAsNotValid(description, "Input a description.");
		isValid = false;
	} else {
		markFieldAsValid(description);
	}

	if (image.value.trim().length < 1) {
		markFieldAsNotValid(image, "Input a image url.");
		isValid = false;
	} else {
		markFieldAsValid(image);
	}

	if (birthdate.value.trim().length < 1) {
		markFieldAsNotValid(birthdate, "Input a birthdate.");
		isValid = false;
	} else {
		markFieldAsValid(birthdate);
	}

	if (price.value.trim().length < 1) {
		markFieldAsNotValid(price, "Input a price.");
		isValid = false;
	} else {
		markFieldAsValid(price);
	}

	if (pet_code.value.trim().length < 1) {
		markFieldAsNotValid(pet_code, "Input a pet code.");
		isValid = false;
	} else {
		markFieldAsValid(pet_code);
	}

	if (isValidPetCode(pet_code)) {
		markFieldAsNotValid(pet_code, "Input a valid pet code.");
		isValid = false;
	} else {
		markFieldAsValid(pet_code);
	}

	return isValid;
}

function isValidPetCode(cp) {
	const cpRegex = /^[a-zA-z]{3}[0-9]{3}$/;
	if (cpRegex.test(cp)) {
		return true;
	} else {
		return false;
	}
}

function markFieldAsNotValid(element, message) {
	// If we have a custom message we show it. In other case we just show the error-message present in the HTML
	if (message) {
		element.parentNode.querySelector(".error-message").textContent = message;
	}
	// Adding the class that shows the error-message and adds the red border (css)
	element.parentNode.classList.add("is-not-valid-field");
}

// This function set a field as valid and hide the error field
function markFieldAsValid(element) {
	element.parentNode.classList.remove("is-not-valid-field");
}
