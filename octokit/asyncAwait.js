// import { Octokit } from "https://cdn.skypack.dev/octokit";

// const octokit = new Octokit();

const canvas = document.getElementById("canvas");
const button = document.getElementById("btn");

const display = (data) => {
	canvas.innerHTML = "";
	const { avatar_url, location, name } = data;
	const img = document.createElement("img");
	const namep = document.createElement("p");
	const locationp = document.createElement("p");
	img.src = avatar_url;
	namep.innerText = name;
	locationp.innerText = location;

	canvas.appendChild(img);
	canvas.appendChild(namep);
	canvas.appendChild(locationp);
};

const createPOrImg = (type, value) => {
	let element;
	if (type === "img") {
		element = document.createElement("img");
		element.src = value;
	} else {
		element = document.createElement("p");
		element.innerText = value;
	}
	return element;
};

const displayAll = (data) => {
	let element;
	let value;
	for (const key in data) {
		if (key === "avatar_url") {
			element = createPOrImg("img", data[key]);
		} else {
			value = `${key}: ${data[key]}`;
			element = createPOrImg(null, value);
		}
		canvas.appendChild(element);
	}
};

async function search() {
	const input = document.getElementById("username");
	const username = input.value.trim().toLocaleLowerCase();

	try {
		const response = await fetch(`https://api.github.com/users/${input.value}`)
			.then((response) => response.json())
			.then((data) => console.log(data));
		console.log(response);
	} catch (error) {
		console.log("WE CAUGHT AN ERROR");
	}
}

button.addEventListener("click", search);
