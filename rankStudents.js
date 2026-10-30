
function rankStudents(students) {
  const sortedStudents = [...students].sort((a,b) => b.score - a.score)
  let rank = 1;
  for (let i = 0 ; i < sortedStudents.length; i++) {
    if (i> 0 && sortedStudents[i].score !== sortedStudents[i-1].score){
        rank = i + 1;
    }
    sortedStudents[i] = {
        ...sortedStudents[i],
        rank: rank
    }
  }
  return sortedStudents
}

const students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 85 }
];

console.log(rankStudents(students))