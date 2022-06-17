let input = document.getElementById("search-joke");
let searchBTn = document.getElementById("search-btn");
let randomBtn = document.getElementById("random");
let categoryBtn = document.getElementById("select-category");
let select = document.getElementById("category1");
let displayJokes = document.getElementById("display-jokes");
let p = document.getElementById("warning1");

const JOKE_CATEGORIES = [];

function renderjoke(joke) {
	// add joke to DOM
	displayJokes.innerHTML = `<div class="card">
				<p class="joke-category">Category: ${select.value}</p>
				<p class="joke-body">Joke: ${joke.value}</p>
			</div>`;
}
function getRandomJoke() {
	fetch("https://api.chucknorris.io/jokes/random")
		.then((resp) => resp.json())
		.then((joke) => renderjoke(joke));
}
function searchJoke(searchString) {
	// fetch joke with search param
	// loop through results
	// append to DOM
	fetch(
		`https://api.chucknorris.io/jokes/search?query=${input.value
			.trim()
			.toLowerCase()}`
	)
		.then((resp) => resp.json())
		.then((data) => {
			console.log(data.result);
			let okay = data.result.slice(0, 5);
			okay.forEach((element) => {
				displayJokes.innerHTML += `<div class="card">
				<p class="joke-body">Joke: ${element.value}</p>
			</div>`;
			});
		});
}
function getJokeWithCategory(category) {
	fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
		.then((resp) => resp.json())
		.then((joke) => renderjoke(joke));
}
function getCategories() {
	//fetch categories
	fetch("https://api.chucknorris.io/jokes/categories")
		.then((resp) => resp.json())
		.then((data) => {
			console.log(data);
			//append categories to select
			JOKE_CATEGORIES.push(...data);
			JOKE_CATEGORIES.forEach((element) => {
				select.innerHTML += `<option value="${element}">${element}</option>`;
			});
		});
	// console.log(JOKE_CATEGORIES);
}

getCategories();
categoryBtn.addEventListener("click", function (e) {
	e.preventDefault();
	// console.log(select.value);
	if (select.value === "") {
		alert("Select a category");
		return false;
	}
	displayJokes.innerHTML = "";
	getJokeWithCategory();
});

searchBTn.addEventListener("click", function (e) {
	e.preventDefault();
	if (input.value === "" || input.value.length < 3 || !String(input.value)) {
		displayJokes.innerHTML = "";
		p.innerText =
			"search field cannot be empty and must be between 3 and 120 letters";
		return false;
	} else {
		p.innerText = "";
		displayJokes.innerHTML = "";
		searchJoke();
		input.value = "";
	}
});

randomBtn.addEventListener("click", function (e) {
	e.preventDefault();
	displayJokes.innerHTML = "";
	getRandomJoke();
});
