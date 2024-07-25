const students = [
    { studentId: 1, name: 'Alice' },
    { studentId: 3, name: 'Charlie' },
    { studentId: 2, name: 'Bob' },
];

const courses =[
    { courseId: 101, courseName: 'Math', studentId: 1 },
    { courseId: 102, courseName: 'Science', studentId: 2 },
    { courseId: 103, courseName: 'History', studentId: 3 },
    { courseId: 104, courseName: 'Art', studentId: 4 }, // No matching student
];

const innerJoin = students.map(student =>{
    const course = courses.find(course => course.studentId === student.studentId);
    return course ? {...student, courseName: course.courseName} : null;
}).filter(item => item !== null);

console.log(innerJoin);


//Expected result

[
    { studentId: 1, name: 'Alice', courseName: 'Math' },
    { studentId: 2, name: 'Bob', courseName: 'Science' },
    { studentId: 3, name: 'Charlie', courseName: 'History' }
]