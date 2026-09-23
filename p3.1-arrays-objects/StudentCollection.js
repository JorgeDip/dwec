export default class StudentCollection {
	constructor(students = []) {
		this.students = students;
	}

	addStudent(name, age, grades = [], isEnrolled = false) {
		const student = {
			name: name,
			age: age,
			grades: grades,
			isEnrolled: isEnrolled,
		};
		this.students.push(student);
	}

	getStudentByName(studentName) {
		return this.students.find((student) => student.name == studentName);
	}

	removeStudentByName(studentName) {
		this.students = this.students.filter((student) => student.name !== studentName);
	}

	updateStudentGrades(studentName, newGrades = []) {
		const student = this.getStudentByName(studentName);
		student.grades = newGrades;
	}

	calculateAverageGrade(studentName) {
		const student = this.getStudentByName(studentName);

		const totalSumGrades = student.grades.reduce((sumGrades, grade) => sumGrades + grade);

		return totalSumGrades / student.grades.length;
	}

	getEnrolledStudents() {
		return this.students.filter((student) => student.isEnrolled);
	}

	getStudentsAboveAge(age) {
		return this.students.filter((student) => student.age > age);
	}

	getTopStudent() {
		let maxAverage = -9999;
		let topStudent;

		for (const student of this.students) {
			const gradeAverage = this.calculateAverageGrade(student.name);

			if (gradeAverage > maxAverage) {
				maxAverage = gradeAverage;
				topStudent = student;
			}
		}
		return topStudent;
	}

	getStudentSummaries() {
		return this.students.map((student) => ({
			name: student.name,
			avgGrade: this.calculateAverageGrade(student.name),
		}));
	}

	getTopStudents() {
		let maxAverage = -9999;
		let topStudents = [];

		for (const student of this.students) {
			const gradeAverage = this.calculateAverageGrade(student.name);

			if (gradeAverage > maxAverage) {
				maxAverage = gradeAverage;
				topStudents = [student];
			} else if (gradeAverage === maxAverage) {
				topStudents.push(student);
			}
		}
		return topStudents;
	}

	getEnrolledStudentNames() {
		const enrolledStudents = [];

		this.students.forEach((student) => {
			if (student.isEnrolled) enrolledStudents.push(student.name);
		});

		return enrolledStudents;
	}

	formatGrades() {
		return this.students.map((student) => {
			const formattedGrades = student.grades?.length ? student.grades.join(", ") : "No grades";
			return `${student.name}: ${formattedGrades}`;
		});
	}
	getHonorRollStudents() {
		return this.students.filter((student) => this.calculateAverageGrade(student.name) >= 90);
	}
	serializeStudents() {}
	deserializeStudents() {}
}
