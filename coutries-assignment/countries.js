let container = document.getElementById("container");
let displayCountry = document.getElementById("display-country");
let countryName = document.getElementById("country-name");
let searchBtn = document.getElementById("search-btn");

function country(data) {
	for (let index = 0; index < 10; index++) {
		container.innerHTML += `<div class="card">
				<h1 class="country-name">${data[index].name.common}</h1>
				<img src="${data[index].flags.png}" alt="" id="flag" />
				<div class="card-body">
					<h3 class="region">Region: ${data[index].region}</h3>
					<h3 class="capital">Capital: ${data[index].capital[0]}</h3>
				</div>
			</div>`;
	}
}

function scountry(data) {
	let card = document.createElement("div");
	let cname = document.createElement("h1");
	let cimg = document.createElement("img");
	let cbody = document.createElement("div");
	let cregion = document.createElement("h3");
	let ccapital = document.createElement("h3");
	card.setAttribute("class", "card");
	card.setAttribute("id", "card");
	cname.setAttribute("class", "country-name");
	cimg.setAttribute("id", "flag");
	cbody.setAttribute("class", "card-body");
	cregion.setAttribute("class", "region");
	ccapital.setAttribute("class", "capital");
	cname.innerText = `${data[0].name.common}`;
	cimg.src = `${data[0].flags.png}`;
	cregion.innerText = `Region: ${data[0].region}`;
	ccapital.innerText = `Capital: ${data[0].capital[0]}`;

	card.appendChild(cname);
	card.appendChild(cimg);
	cbody.appendChild(cregion);
	cbody.appendChild(ccapital);
	card.appendChild(cbody);
	displayCountry.appendChild(card);
}

function getCountry() {
	fetch("https://restcountries.com/v3.1/all")
		.then((response) => response.json())
		.then((data) => country(data))
		.catch((error) => {
			console.log(error);
		});
}

getCountry();

async function search() {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/name/${countryName.value
				.trim()
				.toLowerCase()}`
		)
			.then((response) => response.json())
			.then((data) => scountry(data));
	} catch (error) {
		let warning = document.createElement("h1");
		warning.innerText = `${countryName.value} DOES NOT EXIST`;
		displayCountry.appendChild(warning);
		console.log(error);
	}
}

searchBtn.addEventListener("click", function (e) {
	e.preventDefault();
	displayCountry.innerHTML = "";
	search();
});
