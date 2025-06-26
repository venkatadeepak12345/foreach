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

const dep=department.flatMap((depart)=>{
    return depart.Employees .filter((emp)=>{
        return emp.Experience>3
    })
    .map((student)=>{
        return{
            name:student.name,
            Experience:student.Experience,
            Department:depart.name
        }
    })
    
})
console.log(dep);



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
const student=schools.flatMap((sch)=>{
    return sch.students.filter((stud)=>{
        return stud.grade>=85
    })
    .map((gra)=>{
        return{
            name:gra.name,
            grade:gra.grade,
            school:sch.name
        }

})
    
})
console.log(student);
//Hospitals → Patients Older Than 60
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const olderpatients=hospitals.flatMap((ol)=>{
    return ol.patients.filter((pat)=>{
        return pat.age>=60
    })
    .map((na)=>{
        return{
              name:na.name,
              age:na.age,
              hospitalName:ol.name

        }
      

    })
})
console.log(olderpatients);
//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
];
const overall=stores.flatMap((st)=>{
    return st.products .filter((pr)=>{
        return pr.price>=100
    })
    .map((ov)=>{
        return{
            Name:ov.name,
            ProductsPrice:ov.price,
            StoreName:st.name
        }
    })
})
console.log(overall);
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
const players=teams.flatMap((pl)=>{
    return pl.players
    .filter((pla)=>{
        return pla.goals>=10
    })
    .map((goal)=>{
        return{
         PlayerName:goal.name,
         GoalScored:goal.goals,
         Team:pl.name

        }
    })
})
console.log(players);
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
const luggage=flights.flatMap((lu)=>{
    return lu.passengers
    .filter((lug)=>{
        return lug.hasCheckedLuggage===true
    })
    .map((lugg)=>{
        return{
            PassengerName:lugg.name,
            PassengerLuggage:lugg.hasCheckedLuggage,
            FlightNumber:lu.flightNumber
        }
    })
    
})
console.log(luggage);





