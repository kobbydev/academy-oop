// STUDENT CLASS
class Student {
	#name;
	#age;
	#grade;
	#courses;
	#gpa;
	constructor(name, age, courses, grade, gpa) {
		this.#name = name;
		this.#age = age;
		this.#grade = grade;
		this.#courses = courses;
		this.#gpa = gpa;
	}

	setName(newName) {
		if ((newName = "")) {
			console.log("cannot be empty");
		} else {
			this.#name = newName;
		}
	}

	getName() {
		return this.#name;
	}

	setAge(newAge) {
		if (newAge < 0) {
			console.log("invalid data");
		} else {
			this.#age = newAge;
		}
	}

	getAge() {
		return this.#age;
	}

	setGrade(newGrade) {
		if (newGrade < 0) {
			console.log("invalid data");
		} else {
			this.#grade = newGrade;
		}
	}

	getGrade() {
		return this.#grade;
	}

	setCourses(newCourses) {
		if ((newCourses = "")) {
			console.log("cannot be empty");
		} else {
			this.#courses = newCourses;
		}
	}

	getCourses() {
		return this.#courses;
	}

	setGpa(newGpa) {
		if (newGpa < 0) {
			console.log("invalid data");
		} else {
			this.#gpa = newGpa;
		}
	}

	getGpa() {
		return this.#gpa;
	}

	calculateNewGpa(newGpa) {
		console.log(`Your gpa is ${newGpa}`);
	}

	sayHello() {
		console.log(
			`Hi, my name is ${this.#name}. I am ${
				this.#age
			} years old and I am in grade ${this.#grade}. The courses I read are : ${
				this.#courses
			} and my gpa is ${this.#gpa}`
		);
	}

	printCourses() {
		// console.log(this.#courses);
		return this.getCourses().join(",");
	}
}
// let st = new Student("kofi", 10, 2, ["math", "english"], 3.2);
// console.log(st);
// ______________________________________________
let studentRoll = [];
/**
 *
 * Creates a student object
 * @param {string} name
 * @param {number} age
 * @param {string[]} courses
 * @param {number} grade
 * @returns {Student} new student object
 */
function createStudent(name, age, courses, grade) {
	// create student
	let newStudent = new Student(name, age, courses, grade);
	// return student
	return newStudent;

	// return new Student (name, age, grade, courses)
}

/**
 * Adds student to studentRoll array
 * @param {Student} student
 */
function enrollStudent(student) {
	//append student to studentRoll array
	studentRoll.push(student);
}
// student1 = createStudent("kofi", 19, 8, ["math", "french"]);
// student2 = createStudent("kofi", 15, 8, ["math", "twi"]);
// student3 = createStudent("kwame", 29, 8, ["math", "ga"]);
// enrollStudent(student1);
/**
 * Search students by given name
 * @param {string} name
 */

function searchStudent(name) {
	let result = studentRoll.filter((nname) => nname.getName() === name);
	for (index in result) {
		tbody1.innerHTML += `<tr>
										<th scope="row">${result[index].getName()}</th>
										<td id="task-title">${result[index].getAge()}</td>
										<td id="task-body">
											${result[index].getCourses()}
										</td>
										<td>
											${result[index].getGrade()}
										</td>
									</tr>`;
	}
}

// (nname) => nname.getName() === name;
/**
 * Returns list of students in given grade
 * @param {number} grade
 * @returns {Student[]}
 */
function filterStudentsByGrade(grade) {
	return studentRoll.filter((ggrade) => ggrade.getGrade() === grade);
}

/**
 * Returns list of students who have ages between minAge and maxAge
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Student[]}
 */
function filterStudentsByAge(minAge, maxAge) {
	return studentRoll.filter(
		(aage) => aage.getAge() >= minAge && aage.getAge() <= maxAge
	);
}

let p1 = document.getElementById("name-validator");
let p2 = document.getElementById("age-validator");
let p3 = document.getElementById("grade-validator");
let p4 = document.getElementById("courses-validator");
let form = document.getElementById("form");
let studentName = document.getElementById("name");
let studentAge = document.getElementById("age");
let studentGrade = document.getElementById("grade");
let studentCourses = document.getElementById("courses");
let submitButton = document.getElementById("submit-btn");
let showButton = document.getElementById("showbtn");
let closeButton = document.getElementById("closebtn");
let searchButton = document.getElementById("searchbtn");
let clearSearchButton = document.getElementById("clear-search");
let tbody = document.getElementById("tbody");
let tbody1 = document.getElementById("tbody1");
let searchBox = document.getElementById("search-bar");
let displaySeach = document.getElementById("display-search");
let displayStudents = document.getElementById("display-students");
let table = document.getElementById("table");
let table1 = document.getElementById("table1");
console.log(studentName.value);

function validateName() {
	if (studentName.value === "") {
		p1.innerHTML = "This field is required and cannot be a number";
		return false;
	}
}
function validateAge() {
	if (studentAge.value === "") {
		p2.innerHTML = "This field is required";
		return false;
	}
}
function validateGrade() {
	if (studentGrade.value === "") {
		p3.innerHTML = "This field is required";
		return false;
	}
}
function validateCourses() {
	if (studentCourses.value === "") {
		p4.innerHTML = "This field is required and cannot be a number";
		return false;
	}
}

function addToTable() {
	for (index in studentRoll) {
		tbody.innerHTML += `<tr>
								<th scope="row">${studentRoll[index].getName()}</th>
								<td id="task-title">${studentRoll[index].getAge()}</td>
								<td id="task-body">
									${studentRoll[index].getCourses()}
								</td>
								<td>
									${studentRoll[index].getGrade()}
								</td>
							</tr>`;
	}
}
submitButton.addEventListener("click", function (event) {
	event.preventDefault();
	if (
		validateName() !== false &&
		validateAge() !== false &&
		validateGrade() !== false &&
		validateCourses() !== false
	) {
		student = createStudent(
			studentName.value,
			parseInt(studentAge.value),
			studentCourses.value.split(","),
			parseInt(studentGrade.value)
		);
		enrollStudent(student);
		console.log(studentRoll);
		tbody.innerHTML = "";
		addToTable();
	}
});

// function addToTable() {
// 	tbody.innerHTML += `<tr>
// 										<th scope="row">${studentName.value}</th>
// 										<td id="task-title">${studentAge.value}</td>
// 										<td id="task-body">
// 											${studentCourses.value}
// 										</td>
// 										<td>
// 											${studentGrade.value}
// 										</td>
// 									</tr>`;
// }

showButton.addEventListener("click", function (event) {
	event.preventDefault();
	table.style.display = "block";
	closeButton.style.display = "flex";
	displayStudents.style.display = "block";
});
closeButton.addEventListener("click", function (event) {
	event.preventDefault();
	table.style.display = "none";
	closeButton.style.display = "none";
	displayStudents.style.display = "none";
});

searchButton.addEventListener("click", function (event) {
	if (searchBox.value === "") {
		alert("cannot search empty field");
	} else {
		tbody1.innerHTML = "";
		searchStudent(searchBox.value);
		searchBox.value.innerHTML = "";
		displaySeach.style.display = "block";
		table1.style.display = "block";
		clearSearchButton.style.display = "block";
	}
});
clearSearchButton.addEventListener("click", function (event) {
	tbody1.innerHTML = "";
	searchBox.value.innerHTML = "";
	clearSearchButton.style.display = "none";
	displaySeach.style.display = "none";
	table1.style.display = "none";
});
