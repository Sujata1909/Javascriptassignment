const Marks = require('./marks');
class Student{
constructor(rollno,firstname,lastname)
{
this.rollno=rollno;
this.firstname=firstname;
this.lastname=lastname;

this.marks = [];
this.totalMarks = 0;
}
addMark(subjectname, mark) {
    const newMark = new Marks(subjectname, mark);
    this.marks.push(newMark);
    this.totalMarks += mark;
  }

  calculateTotalMarks() {
    this.totalMarks = 0;
    this.marks.forEach((mark) => {
      this.totalMarks += mark.mark;
    });}

    calculateTotalPercentage()
    {
  return this.totalMarks / (this.marks.length * 100) * 100;
    };

 static getStudentsWithDistinction = (students) => {
    const studentsWithDistinction = students.filter((student) => student.totalMarks >= 200);
    return studentsWithDistinction.length;
  };

 static getStudentDetailsByRollNo = (students, rollNum) => {
  const student=students.find((student) => student.rollno === rollNum);
    if (student) {
      console.log(`${student.rollno} ${student.firstname} ${student.lastname} ${student.totalMarks}`);
}
else {

console.log("student not found");}

  };
    }
    //first student
    const student1 = new Student(1, 'John', 'Doe');
    student1.addMark('Maths', 70);
    student1.addMark('Science', 60);
    student1.addMark('Social', 50);
    //second student
    const student2=new Student(2,'sujata','khedkar');
    student2.addMark('Maths',80);
    student2.addMark('Science', 60);
     student2.addMark('Social', 70);
     //Third Student
     const student3=new Student(3,'pratiksha','Dhumal');
     student3.addMark('Maths',90);
     student3.addMark('science',78);
     student3.addMark('Social',90);


     const students=[student1,student2,student3];
    students.forEach((student) => student.calculateTotalMarks());
     //get array response

     const resultPercentage = students.map((student) => student.calculateTotalPercentage());
     console.log('Result Percentage:', resultPercentage);

     //getting student data for distinction

     const studentsWithDistinction = Student.getStudentsWithDistinction(students);
       console.log(`Students with Distinction: ${studentsWithDistinction}`);
    // Get student details by roll number

Student.getStudentDetailsByRollNo(students, 1);







