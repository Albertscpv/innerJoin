import _ from 'lodash';

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

const innerJoin = _.filter(_.map(students, student => {
    const course = _.find(courses, {studentId: student.studentId});

    return course ? {...student, courseName: course.courseName} : null;
}), item => item !== null);

console.log(innerJoin)
