import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
let submitBtn = document.getElementById("submit-btn");
let userName = document.getElementById("username");
let img = document.getElementById("image");
let p1 = document.getElementById("name");
let p2 = document.getElementById("location");
let p3 = document.getElementById("email");
let p4 = document.getElementById("followers");
let p5 = document.getElementById("following");

const octokit = new Octokit();

function getOcto() {
	octokit.users
		.getByUsername({
			username: userName.value,
		})
		.then((data) => octo(data))
		.catch((err) => console.log(err));
}

function octo(data) {
	img.src = `${data.data.avatar_url}`;
	p1.innerHTML = `Name: ${data.data.name}`;
	p2.innerHTML = `Location: ${data.data.location}`;
	p3.innerHTML = `Email: ${data.data.email}`;
	p4.innerHTML = `Followers: ${data.data.followers}`;
	p5.innerHTML = `Following: ${data.data.following}`;
}

submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	getOcto();
});
