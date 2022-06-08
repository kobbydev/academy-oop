// STUDENT CLASS
class Student {
	#name;
	#age;
	#grade;
	#courses;
	#gpa;
	constructor(name, age, grade, courses, gpa) {
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
		console.log(this.#courses);
	}
}
let st = new Student("kofi", 10, 2, ["math", "english"], 3.2);
console.log(st);
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
	// return student
}

/**
 * Adds student to studentRoll array
 * @param {Student} student
 */
function enrollStudent(student) {
	//append student to studentRoll array
}

/**
 * Search students by given name
 * @param {string} name
 */
function searchStudent(name) {}

/**
 * Returns list of students in given grade
 * @param {number} grade
 * @returns {Student[]}
 */
function filterStudentsByGrade(grade) {}

/**
 * Returns list of students who have ages between minAge and maxAge
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Student[]}
 */
function filterStudentsByAge(minAge, maxAge) {}
