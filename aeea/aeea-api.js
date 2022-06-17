let tbody1 = document.getElementById("tbody1");
let tbody2 = document.getElementById("tbody2");
let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");
let submitBtn = document.getElementById("submit-btn");

function contacts(data) {
	data.forEach((element) => {
		tbody1.innerHTML += `<tr>
						<td>${element.name}</td>
						<td>${element.number}</td>
					</tr>`;
	});
}

function getContacts() {
	fetch("https://academy-contacts-backend.herokuapp.com/api/persons")
		.then((response) => response.json())
		.then((data) => contacts(data))
		.catch((error) => console.log(error));
}

function displayAll() {
	getContacts();
}

function addToList(data) {
	data.forEach((element) => {
		tbody2.innerHTML += `<tr>
						<td>${element.name}</td>
						<td>${element.number}</td>
					</tr>`;
	});
}

// function getNewList() {
// 	fetch("https://academy-contacts-backend.herokuapp.com/api/persons")
// 		.then((response) => response.json())
// 		.then((data) => addToList(data))
// 		.catch((error) => console.log(error));
// }

async function postContacts() {
	try {
		const person = {
			name: inputName.value,
			number: inputNumber.value,
		};
		const response = await fetch(
			"https://academy-contacts-backend.herokuapp.com/api/persons",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(person),
			}
		)
			.then((resp) => resp.json())
			.then((resp) => console.log(resp));
		displayAll();
	} catch (error) {
		console.log(error);
	}
}
displayAll();
submitBtn.addEventListener("click", function (e) {
	tbody1.innerHTML = "";
	e.preventDefault();
	postContacts();
});
