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
console.log("Student by name: ");
console.log(studentCollection.getStudentByName("Emily White"));

console.log("=========================");

// 4. removeStudentByName: Removes a student by filtering out their name from the array.
console.log("Remove student: ");
studentCollection.removeStudentByName("Emily White");
console.log("=========================");

// 5. updateStudentGrades: Finds a student by name and updates their grades.
console.log("Update student grades:");
studentCollection.updateStudentGrades("John Doe", [100, 77, 60]);
console.log("=========================");

// 6. calculateAverageGrade: Returns the average of a student's grades with a given name.
console.log("Average grade of a student: ");
console.log(studentCollection.calculateAverageGrade("John Doe"));
console.log("=========================");

// 7. getEnrolledStudents: Returns an array of students who are enrolled.
console.log("Get the enrolled students: ");
console.log(studentCollection.getEnrolledStudents());
console.log("=========================");

// 8. getStudentsAboveAge: Returns students older than a given age.
console.log("Students above x years old:");
console.log(studentCollection.getStudentsAboveAge(20));
console.log("=========================");

// 9. getTopStudent: Finds the student with the highest average grade.
console.log("Top student: ");
const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);
console.log("=========================");

// 10. getStudentSummaries: Maps the students into a summary object with name and average grade.
console.log("Get all the student summaries: ");
console.log(studentCollection.getStudentSummaries());
console.log("=========================");

// 11. getTopStudents: Filters students by a grade threshold.
console.log("Get the top students: ");
console.log(studentCollection.getTopStudents());
console.log("=========================");

// 12. getEnrolledStudentNames: Filters enrolled students and returns an array of their names.
console.log("Get the enrolled students names: ");
console.log(studentCollection.getEnrolledStudentNames());
console.log("=========================");

// 13. formatGrades: Returns an array of strings formatting each student's grades.
console.log("Format the grades into text: ");
console.log(studentCollection.formatGrades());
console.log("=========================");

// 14. getHonorRollStudents: Filters students whose average grade is 90 or above.
console.log("Get the enrolled top grades average student: ");
console.log(studentCollection.getHonorRollStudents());
console.log("=========================");

// 15. serializeStudents: Converts the students array to a JSON string.
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);
console.log("=========================");

// 16. deserializeStudents: Converts a JSON string back into the students array.
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);
console.log("=========================");
