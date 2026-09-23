import StudentCollection from "./StudentCollection.js";

//  Initialize the collection with some students
const students = [
	{ name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
	{ name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
	{ name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
	{ name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

// 1. constructor: Recieve an array of initial students and asign to the internal array.

const studentCollection = new StudentCollection(students);

// 2. addStudent: Adds a new student object to the students array.
studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

// 3. getStudentByName: Return a student by name.
// console.log(studentCollection.getStudentByName("Emily White"));

// 4. removeStudentByName: Removes a student by filtering out their name from the array.
// studentCollection.removeStudentByName("Emily White");

// 5. updateStudentGrades: Finds a student by name and updates their grades.
// studentCollection.updateStudentGrades("John Doe", [100, 77, 60]);

// 6. calculateAverageGrade: Returns the average of a student's grades with a given name.
// console.log(studentCollection.calculateAverageGrade("John Doe"));

// 7. getEnrolledStudents: Returns an array of students who are enrolled.
// console.log(studentCollection.getEnrolledStudents());

// 8. getStudentsAboveAge: Returns students older than a given age.
// console.log(studentCollection.getStudentsAboveAge(20));

// 9. getTopStudent: Finds the student with the highest average grade.
// const topStudent = studentCollection.getTopStudent();
// console.log("Top student:", topStudent);

// 10. getStudentSummaries: Maps the students into a summary object with name and average grade.
// console.log(studentCollection.getStudentSummaries());

// 11. getTopStudents: Filters students by a grade threshold.
// console.log(studentCollection.getTopStudents());

// 12. getEnrolledStudentNames: Filters enrolled students and returns an array of their names.
// console.log(studentCollection.getEnrolledStudentNames());

// 13. formatGrades: Returns an array of strings formatting each student's grades.
// console.log(studentCollection.formatGrades());

// 14. getHonorRollStudents: Filters students whose average grade is 90 or above.
// console.log(studentCollection.getHonorRollStudents());

// 15. serializeStudents: Converts the students array to a JSON string.
// 16. deserializeStudents: Converts a JSON string back into the students array.

// console.log(JSON.stringify(studentCollection));

// // TASK: test all the methods you have created:

// // Serialize the students to JSON
// const serializedData = studentCollection.serializeStudents();
// console.log("Serialized Data:", serializedData);

// //  Deserialize the JSON back into the collection
// studentCollection.deserializeStudents(serializedData);
// console.log("Deserialized Data:", studentCollection.students);
