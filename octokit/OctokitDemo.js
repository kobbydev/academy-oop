// import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
let submitBtn = document.getElementById("submit-btn");
let userName = document.getElementById("username");
let img = document.getElementById("image");
let p1 = document.getElementById("name");
let p2 = document.getElementById("location");
let p3 = document.getElementById("email");
let p4 = document.getElementById("followers");
let p5 = document.getElementById("following");

// const octokit = new Octokit();

function getOcto() {
	// octokit.users
	// 	.getByUsername({
	// 		username: userName.value,
	// 	})
	// 	.then((data) => octo(data))
	// 	.catch((err) => console.log(err));
	fetch(`https://api.github.com/users/${userName.value}`)
		.then((response) => response.json())
		.then((data) => octo(data))
		.catch((error) => {
			console.log(error);
		});
}

function octo(data) {
	img.src = `${data.avatar_url}`;
	p1.innerHTML = `Name: ${data.name}`;
	p2.innerHTML = `Location: ${data.location}`;
	p3.innerHTML = `Email: ${data.email}`;
	p4.innerHTML = `Followers: ${data.followers}`;
	p5.innerHTML = `Following: ${data.following}`;
}

submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	getOcto();
});
