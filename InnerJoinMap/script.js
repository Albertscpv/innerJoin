const students = [
    { studentId: 1, name: 'Alice' },
    { studentId: 2, name: 'Bob' },
    { studentId: 3, name: 'Charlie' },
];

const courses = [
    { courseId: 101, courseName: 'Math', studentId: 1 },
    { courseId: 102, courseName: 'Science', studentId: 2 },
    { courseId: 103, courseName: 'History', studentId: 3 },
    { courseId: 104, courseName: 'Art', studentId: 4 },
];

const courseMap = new Map(courses.map(course => [course.studentId, course.courseName]));

const innerJoin = students.map(student => {
    const courseName = courseMap.get(student.studentId);
    return courseName ? {...student, courseName} : null;
})
.filter(item => item !== null);

console.log(innerJoin);