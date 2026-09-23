const subjects = ["DWES", "DWEC", "DIW", "PY", "DAW"];

subjects[4] = "Despliegue";

subjects.forEach((subject, index) => {
	console.log(`${index} - ${subject}`);
});
