export default class StudentCollection {
	constructor(students = []) {
		this.students = students;
	}

	addStudent(student = {}) {
		this.students.push(student);
	}

	getStudentByName(studentName) {
		return this.students.filter((student) => student.name == studentName);
	}

	removeStudentByName(studentName) {
		this.students = this.students.filter((student) => student.name == studentName);
	}
}
