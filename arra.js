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
const listofstudents=studentsli.flatMap((stude)=>{
    return stude.subjects.filter((stu)=>{
        return stu.marks>=90
    })
    .map((res)=>{
        return{
            name:stude.name,
            city:stude.city,
            subjectslist:res.name,
            marks:res.marks
        }
    })
})
console.log(listofstudents);

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
const departments=department.flatMap((sal)=>{
    return sal.Employees.filter((emp)=>{
        return emp.Experience>=5
    })
    .map((res)=>{
        return{
           marketingname:sal.name,
           employeename:res.name,
           Experience:res.Experience

        }
    })
})
console.log(departments);
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
const school=schools.flatMap((map)=>{
    return map.students.filter((em)=>{
        return em.grade>=90
    })
    .map((res)=>{
        return{
            schoolname:map.name,
            studentName:res.name,
            studentgrade:res.grade
        }
    })
})
console.log(school);
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const hospitalslist=hospitals.flatMap((hosp)=>{
    return hosp.patients.filter((hos)=>{
        return hos.age>=60

    })
    .map((res)=>{
        return{
            name:hosp.name,
            patientName:res.name,
            age:res.age
        }
    })
})
console.log(hospitalslist);
//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
]
const store=stores.flatMap((sto)=>{
    return sto.products.filter((storess)=>{
        return storess.price>=100
    })
    .map((res)=>{
        return{
            BazarName:sto.name,
            productsName:res.name,
            productsPrice:res.price
        }
    })
})
console.log(store);
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
const team=teams.flatMap((goa)=>{
    return goa.players.filter((goal)=>{
        return goal.goals>=10
    })
    .map((res)=>{
        return{
            TeamName:goa.name,
            PlayerName:res.name,
            PlayerGoals:res.goals
        }
    })
})
console.log(team);
const orders = [
  {
    orderId: "OD1001",
    customerName: "Amit",
    items: [
      { name: "Notebook", quantity: 3, price: 20 },
      { name: "Pen", quantity: 4, price: 5 }
    ]
  },
  {
    orderId: "OD1002",
    customerName: "Sneha",
    items: [
      { name: "Pencil", quantity: 10, price: 2 },
      { name: "Eraser", quantity: 2, price: 3 }
    ]
  },
  {
    orderId: "OD1003",
    customerName: "Rahul",
    items: [
      { name: "Marker", quantity: 1, price: 25 }
    ]
  }
];
const orderlist=orders.map((ord)=>{
    const reduce=ord.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
        orderId:ord.orderId,
        customerName:ord.customerName,
        items:ord.items.length,
        totalAmount:reduce
    }
})
console.log(orderlist);
const transactions = [
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 300 },
   { type: "deposit", amount: 500 }
];
const bank=transactions.reduce((acc,cur)=>{
    return cur.type==="deposit"?acc+cur.amount:acc-cur.amount
},0)
console.log(bank);
const students = [
  { name: "Ravi", scores: [80, 85, 90] },
  { name: "Sneha", scores: [70, 75, 78] },
  { name: "Amit", scores: [60, 65, 58] },
  { name: "Priya", scores: [95, 92, 98] }
];
const toppers=students.map((st)=>{
    const red=st.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=red/st.scores.length
    let grade;
    if(avg>=90){
        grade="A"
    }else if(avg>=80){
        grade="B"
    }else{
        grade="C"
    }
    return{
        name:st.name,
        avg:avg.toFixed(2),
        grade:grade

    }
})
console.log(toppers);
const departmentss = [
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
const total=departmentss.map((res)=>{
    const to=res.sales.reduce((acc,cur)=>{
        return cur.amount>acc.amount?cur:acc
    })
    return{
        nameofthedepartments:res.name,
        salesName:to.name,
        amount:to.amount
    }
})
console.log(total);
const teamsgoals = [
  {
    teamName: "Team A",
    players: [
      { name: "John", goals: 4 },
      { name: "Alex", goals: 7 }
    ]
  },
  {
    teamName: "Team B",
    players: [
      { name: "Max", goals: 3 },
      { name: "Leo", goals: 9 }
    ]
  }
];
const goalsof=teamsgoals.map((ers)=>{
    const goal=ers.players.reduce((acc,cur)=>{
        return cur.goals>acc.goals?cur:acc
    })
    return{
        TeamName:ers.teamName,
        playerName:goal.name,
        goalsconceded:goal.goals
    }
})
console.log(goalsof);
const studentsliz = [
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
const subjectsstats=studentsliz.map((lis)=>{
    const red=lis.marks.reduce((acc,cur)=>{
        return cur.score>acc.score?cur:acc
    })
    return{
        studentName:lis.name,
        class:lis.class,
        subject:red.subject,
        score:red.score
    }
})
console.log(subjectsstats);
const studentss = [
  {
    name: "Ravi",
    class: "10A",
    subjects: [
      { name: "Math", score: 90 },
      { name: "English", score: 80 }
    ]
  },
  {
    name: "Sita",
    class: "10A",
    subjects: [
      { name: "Math", score: 85 },
      { name: "Science", score: 92 }
    ]
  },
  {
    name: "Amit",
    class: "10B",
    subjects: [
      { name: "Math", score: 78 },
      { name: "Science", score: 89 }
    ]
  },
  {
    name: "Neha",
    class: "10B",
    subjects: [
      { name: "English", score: 88 },
      { name: "Science", score: 94 }
    ]
  }
];
const subjectsstatss={
    math:{Totalscore:253,count:3},
    english:{Totalscore:168,count:2},
    science:{Totalscore:275,count:3}
}
const topperslist=Object.entries(subjectsstatss)
.map(([name,data])=>({
    name,
    avg:data.Totalscore/data.count,
    count:data.count
}))
.sort((a,b)=>{
    return b.avg-a.avg||b.count-a.count
})
.slice(0,1)
console.log(topperslist);
const studentsto = [
  { name: "Asha", scores: [90, 80, 85] },
  { name: "Ravi", scores: [70, 75, 78] },
  { name: "Neha", scores: [95, 92, 90] }
];
const studen=studentsto.map((res)=>{
    const redu=res.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=redu/res.scores.length
    return{
        name:res.name,
        avg:avg
    }
})
.sort((a,b)=>{
    return b.avg-a.avg
})

const topperss=studen[0]
console.log({
    name:topperss.name,
    avg:topperss.avg.toFixed(2)
});
const employees = [
  { name: "John", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Mike", score: 78 }
];
const expen=employees.sort((a,b)=>{
    return b.score-a.score
})
console.log(expen);













