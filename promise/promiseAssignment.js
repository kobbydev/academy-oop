let loadPage = () => {
	const div = document.getElementById("canvas");
	const img = document.createElement("img");
	img.src = "./funny-as.gif";
	div.appendChild(img);
};

// let sillySignin = () => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log("SIGNED IN");
// };

let sillySignin = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("signed in");
	}, 10000);
});

// sillySignin();
sillySignin
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
loadPage();
