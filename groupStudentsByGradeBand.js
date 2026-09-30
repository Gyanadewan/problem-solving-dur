function groupStudentsByGrade(students) {
  return students.reduce((result, student) => {
    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }

    return result;
  }, {
    A: [],
    B: [],
    C: [],
    F: []
  });
}
 const students = [{"marks":65,"name":"Eve"},{"marks":60,"name":"Frank"}]

console.log(groupStudentsByGrade(students));