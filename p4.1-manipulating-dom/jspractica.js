/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
	.then((response) => {
		return response.json();
	})
	.then((jsondata) => {
		console.log(jsondata);
		renderCards(jsondata);
	})
	.catch((e) => {
		console.log(e);
	});

const rowCards = document.querySelector("main .row");

const cardTemplate = document.querySelector("#card-template").content;

function renderCards(jsondata) {
	for (let char of jsondata.data.results) {
		let newCard = cardTemplate.cloneNode(true);
		newCard.querySelector(".card-img-top").src = char.thumbnail.path;
		newCard.querySelector(".card-title").textContent = char.name;
		newCard.querySelector(".card-text").textContent = char.description || "No description";

		rowCards.append(newCard);
	}
}
