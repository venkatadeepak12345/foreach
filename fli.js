const studentsli = [
  {
    name: "Aarav",
    city: "Delhi",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "Science", marks: 92 },
    ],
  },
  {
    name: "Meera",
    city: "Mumbai",
    subjects: [
      { name: "Math", marks: 95 },
      { name: "English", marks: 90 },
    ],
  },
];

const student=studentsli.flatMap((stude)=>{
    return stude.subjects
    .filter((st)=>{
        return st.marks>=89
    })
    .map((stud)=>{
        return{
            name:stude.name,
            city:stude.city,
            studentName:stud.name,
            studentMarks:stud.marks
        }
    })
})
console.log(student);

const department = [
  {
    name: "Engineering",
    Employees: [
      { name: "Tata", Experience: 5 },
      { name: "Satya", Experience: 2 }
    ]
  },
  {
    name: "Marketing",
    Employees: [
      { name: "Mahesh", Experience: 4 },
      { name: "Hema", Experience: 1 }
    ]
  }
];
const exp=department.map((dep)=>{
    return dep.Employees.filter((em)=>{
        return em.Experience>3
    })
    .map((esd)=>{
        return{
            name:dep.name,
            
            studentName:esd.name,
            experience:esd.Experience
        }
    })
    
})
console.log(exp);
// Example 1: School → Filter Students with High Grades

const schools = [
  {
    name: "Greenwood High",
    students: [
      { name: "Alice", grade: 92 },
      { name: "Bob", grade: 65 }
    ]
  },
  {
    name: "Hilltop School",
    students: [
      { name: "Charlie", grade: 88 },
      { name: "Diana", grade: 73 }
    ]
  }
];
const stuname=schools.flatMap((st)=>{
    return st.students.filter((stu)=>{
        return stu.grade>80
    })
    .map((stude)=>{
        let grades;
        if(stude.grade>=90){
            grades="A"
        }else if(stude.grade>=80){
            grades="B"
        }else if(stude.grade>=60){
            grades="C"
        }else{
            grades="D"
        }
        return{
           Schoolname:st.name,
            studentName:stude.name,
            studentGrade:stude.grade,
            grades:grades
        }
    })
})
console.log(stuname);
////Hospitals → Patients Older Than 60
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const hospitalage=hospitals.flatMap((hos)=>{
    return hos.patients.filter((ho)=>{
       return ho.age>=60
    })
    .map((hosp)=>{
        return{
            name:hos.name,
            paientsName:hosp.name,
            patientsAge:hosp.age
        }
    })
})
console.log(hospitalage);

//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
]
const storebazar=stores.flatMap((sto)=>{
    return sto.products.filter((stor)=>{
       return stor.price>=100
    })
    .map((store)=>{
        return{
            storename:sto.name,
            productName:store.name,
            productPrice:store.price
        }
    })
})
console.log(storebazar);
//⚽ Example 2: Teams → Players with More Than 10 Goals
const teams = [
  {
    name: "Red Hawks",
    players: [
      { name: "Alex", goals: 12 },
      { name: "Ben", goals: 5 }
    ]
  },
  {
    name: "Blue Sharks",
    players: [
      { name: "Sam", goals: 15 },
      { name: "Leo", goals: 8 }
    ]
  }
];
const goalsscored=teams.flatMap((goa)=>{
    return goa.players.filter((go)=>{
        return go.goals>=10
    })
    .map((gos)=>{
        return{
           Teamname:goa.name,
           Teamplayer:gos.name,
           Scored:gos.goals,
           Whichplayerhasscoredname:gos.name.charAt(0).toUpperCase("")

        }
    })
})
console.log(goalsscored);
const students = [
  {
    name: "Rahul",
    class: "10A",
    marks: [
      { subject: "Math", score: 90 },
      { subject: "Science", score: 85 },
      { subject: "English", score: 88 }
    ]
  },
  {
    name: "Anjali",
    class: "10A",
    marks: [
      { subject: "Math", score: 95 },
      { subject: "Science", score: 91 },
      { subject: "English", score: 89 }
    ]
  },
  {
    name: "Kiran",
    class: "10B",
    marks: [
      { subject: "Math", score: 82 },
      { subject: "Science", score: 79 },
      { subject: "English", score: 84 }
    ]
  },
  {
    name: "Sneha",
    class: "10B",
    marks: [
      { subject: "Math", score: 96 },
      { subject: "Science", score: 92 },
      { subject: "English", score: 90 }
    ]
  }
];
const toppers={}
students.forEach((student)=>{
    const studentss=student.marks.reduce((sum,total)=>sum+total.score,0)
    if(
        !toppers[student.class]||studentss>toppers[student.class].total
    ){
        toppers[student.class]={
            name:student.name,
            total:studentss
        }
    }
})
const result={}
for(const classnamme in toppers){
    result[classnamme]=toppers[classnamme].name
}
console.log(result);
const departments = [
  {
    name: "Electronics",
    sales: [
      { name: "Alice", amount: 3000 },
      { name: "Bob", amount: 4500 }
    ]
  },
  {
    name: "Furniture",
    sales: [
      { name: "Charlie", amount: 2800 },
      { name: "Diana", amount: 5000 }
    ]
  }
];
const departmentsales={}
departments.forEach((departs)=>{
    const result=departs.sales.reduce((cur,amount)=>{
        return cur.amount>amount.amount?cur:amount
    })
    departmentsales[departs.name]={
        name:result.name,
        sale:result.amount
    }
})
console.log(departmentsales);


