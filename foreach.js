const students = [
  {
    name: "Rahul", class: "10A",
    marks: [
      { subject: "Math", score: 90 },
      { subject: "Science", score: 85 },
      { subject: "English", score: 87 }
    ]
  },
  {
    name: "Anjali", class: "10A",
    marks: [
      { subject: "Math", score: 95 },
      { subject: "Science", score: 91 },
      { subject: "English", score: 89 }
    ]
  },
  {
    name: "Kiran", class: "10B",
    marks: [
      { subject: "Math", score: 82 },
      { subject: "Science", score: 79 },
      { subject: "English", score: 84 }
    ]
  },
  {
    name: "Sneha", class: "10B",
    marks: [
      { subject: "Math", score: 96 },
      { subject: "Science", score: 92 },
      { subject: "English", score: 90 }
    ]
  }
];

const toppers = {};

students.forEach(student => {
  const totalScore = student.marks.reduce((sum, subj) => sum + subj.score, 0);

  if (
    !toppers[student.class] ||
    totalScore > toppers[student.class].score
  ) {
    toppers[student.class] = {
      name: student.name,
      score: totalScore
    };
  }
});

// Final output: class => student name
const result = Object.fromEntries(
  Object.entries(toppers).map(([cls, info]) => [cls, info.name])
);

console.log(result);
