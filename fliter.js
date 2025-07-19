const departments=[
    {
        name:"Engineering",
        Employees:[{name:"Tata",Experience:5},
            {name:"Satya",Experience:2},
        ],
    },
    
        {
        name:"Marketing",
        Employees:[{name:"Mahesh",Experience:4},
            {name:"Hema",Experience:1},
        ],
    },
     
    

]
const depart=departments.flatMap((dep)=>{
    return dep.Employees.filter((de)=>{
        return de.Experience>3
    })
    .map((sc)=>{
        return{
            name:sc.name,
            Experience:sc.Experience,
            department:dep.name
        }
    })

})
console.log(depart);
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
const schol=schools.flatMap((sch)=>{
    return sch.students.filter((stu)=>{
        return stu.grade>=90
    })
    .map((studen)=>{
        return{
            name:studen.name,
            grade:studen.grade,
            school:sch.name
        }
    })
})
console.log(schol);
//Hospitals → Patients Older Than 60
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const patients=hospitals.flatMap((hos)=>{
    return hos.patients.filter((fs)=>{
        return fs.age>=60
    })
    .map((pat)=>{
        return{
            name:pat.name,
         age:pat.age,
            hospitalName:hos.name


        }
    })
})
console.log(patients);
//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
];
const prod=stores.flatMap((stor)=>{
    return stor.products.filter((na)=>{
        return na.price>=100
    })
    .map((sto)=>{
        return{
           storename:stor.name,
           productPrice:sto.price,
           productName:sto.name
           
            
        }
    })
})
console.log(prod);
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
const overall=teams.flatMap((go)=>{
    return go.players.filter((goa)=>{
        return goa.goals>=10
    })
    .map((goal)=>{
        return{
            name:goal.name,
            teamname:go.name,
            teamscored:goal.goals,
            isPlayer:goal.name.charAt(0).toUpperCase(""),
            isTopScorer:goal.name.goals>=15,
            mesage:`${goal.name} is a top scorer in this ${go.name}`
        }
    })
})
console.log(overall);
//🧳 Example: Flights → Passengers with Checked Luggage is true
const flights = [
  {
    flightNumber: "AI101",
    passengers: [
      { name: "Raj", hasCheckedLuggage: true },
      { name: "Simran", hasCheckedLuggage: false }
    ]
  },
  {
    flightNumber: "BA202",
    passengers: [
      { name: "John", hasCheckedLuggage: true },
      { name: "Emily", hasCheckedLuggage: false }
    ]
  }
];
const flight=flights.flatMap((fli)=>{
    return fli.passengers.filter((pas)=>{
        return pas.hasCheckedLuggage===true
    })
    .map((pas)=>{
        return{
            passengersName:pas.name,
            passengersLuggage:pas.hasCheckedLuggage,
            flightNumber:fli.flightNumber,
            initalpassenger:pas.name.charAt(0).toUpperCase("")
        }
    })
})
console.log(flight);
const students=[
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
const studentlist=students.flatMap((lis)=>{
    return lis.subjects.filter((li)=>{
        return li.marks
    })
    .map((list)=>{
        return{
            name:lis.name,
           city:lis.city,
           subjects:list.name,
           marks:list.marks

        }
    })
})
console.log(studentlist);
const studentsl=[
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
const st=studentsl.map((stu)=>{
    const stude=stu.subjects.reduce((sum,s)=>sum+s.marks,0)
    const average=stude/stu.subjects.length;
    return {
        name:stu.name,
        average:average.toFixed(2)
    }
})
console.log(st);
const studentsli=[
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
const list=studentsli.flatMap((es)=>{
    return es.subjects.filter((e)=>{
        return e.marks
    })
    .map((ed)=>{
        return{
            name:es.name,
            city:es.city,
            subjects:ed.name,
            marks:ed.marks

        }
      
    })
})
console.log(list);











