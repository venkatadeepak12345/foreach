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
const studentdata=studentsli.flatMap((stud)=>{
    return stud.subjects.filter((st)=>{
        return st.marks>=90
    })
    .map((mar)=>{
        return{
            name:stud.name,
            city:stud.city,
            studentsMarks:mar.marks,
            subjects:mar.name
        }
    })
})
console.log(studentdata);
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
const departments=department.flatMap((dep)=>{
    return dep.Employees.filter((depa)=>{
        return depa.Experience>=5
    })
    .map((es)=>{
        return {
            name:dep.name,
            experience:es.Experience,
            departments:es.name
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
const studentsarray=schools.flatMap((dat)=>{
    return dat.students.filter((stu)=>{
        return stu.grade>=90
    })
    .map((dents)=>{
        return{
            name:dat.name,
            studentName:dents.name,
            studentsMarks:dents.grade
        }
    })
})
console.log(studentsarray);
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const patientsdata=hospitals.flatMap((pat)=>{
    return pat.patients.filter((pate)=>{
        return pate.age>=60
    })
    .map((ents)=>{
        return{
            name:pat.name,
            patientsage:ents.age,
            patientsName:ents.name
        }
    })
})
console.log(patientsdata);
//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
]
const store=stores.flatMap((stor)=>{
    return stor.products.filter((st)=>{
        return st.price>=100
    })
    .map((stp)=>{
        return {
            name:stor.name,
            productprice:stp.price,
            productName:stp.name
        }
    })
})
console.log(store);
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
const goals=teams.flatMap((go)=>{
    return go.players.filter((goa)=>{
        return goa.goals>=10
    })
    .map((gs)=>{
        return{
            name:go.name,
            goals:gs.goals,
            teamplayer:gs.name
        }
    })
})
console.log(goals);
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
const order=orders.map((ord)=>{
    const items=ord.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
        orderId:ord.orderId,
        customerName:ord.customerName,
        itemlength:ord.items.length,
        price:items

    }
})
console.log(order);
const ordersitems = [
  {
    orderId: "001",
    customer: "Amit",
    items: [
      { name: "Laptop", quantity: 1, price: 1000 },
      { name: "Mouse", quantity: 2, price: 20 }
    ]
  }
];
const item=ordersitems.map((os)=>{
    const reduce=os.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
         orderId:os.orderId,
        customerName:os.customer,
        itemlength:os.items.length,
        price:reduce


    }
})
console.log(item);
const transactions = [
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 300 },
   { type: "deposit", amount: 500 }
];
const banks=transactions.reduce((acc,cuur)=>{
    return cuur.type==="deposit"?acc+cuur.amount:acc-cuur.amount
},0)
console.log(banks);
const students = [
  { name: "Ravi", scores: [80, 85, 90] },
  { name: "Sneha", scores: [70, 75, 78] },
  { name: "Amit", scores: [60, 65, 58] },
  { name: "Priya", scores: [95, 92, 98] }
];
const marks=students.map((stud)=>{
    const markslist=stud.scores.reduce((acc,cur)=>acc+cur)
    const avg=markslist/stud.scores.length
    let grade;
    if(avg>=90){
        grade="A"
    }else if(avg>=80){
        grade="B"
    }else{
        grade="C"
    }
    return{
        name:stud.name,
        avg:avg.toFixed(2),
        grade:grade
    }
})
console.log(marks)
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
const salesof=departmentss.map((red)=>{
    const toseller=red.sales.reduce((acc,cur)=>{
        return cur.amount>acc.amount?cur:acc
    })
    return{
        name:red.name,
        departmentofsale:toseller.name,
        totalamount:toseller.amount
    }
})
console.log(salesof);
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
const teamgoal=teamsgoals.map((goa)=>{
    const goals=goa.players.reduce((acc,cur)=>{
        return cur.goals>acc.goals?cur:acc
    })
    return{
        name:goals.name,
        teamname:goa.teamName,
        goalsscored:goals.goals
    }
})
console.log(teamgoal);
const categories = [
  {
    name: "Mobile Phones",
    products: [
      { name: "iPhone", revenue: 120000 },
      { name: "Samsung", revenue: 90000 }
    ]
  },
  {
    name: "Laptops",
    products: [
      { name: "MacBook", revenue: 150000 },
      { name: "Dell", revenue: 110000 }
    ]
  }
];
const revenue=categories.map((rev)=>{
    const categories=rev.products.reduce((acc,cur)=>{
        return cur.revenue>acc.revenue?cur:acc
    })
    return{
        name:rev.name,
        productName:categories.name,
        productRevenue:categories.revenue

    }
})
console.log(revenue);
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

const toppers=studentsliz.map((stud)=>{
    const listoftoppers=stud.marks.reduce((acc,cur)=>{
        return cur.score>acc.score?cur:acc
    })
    return{
        name:stud.name,
        class:stud.class,
        subjectName:listoftoppers.subject,
        marks:listoftoppers.score
    }
})
console.log(toppers);
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
const subjectslist={
    math:{Totalscore:253,count:3},
    english:{Totalscore:168,count:2},
    science:{Totalscore:275,count:3}
}
const topperslis=Object.entries(subjectslist)
.map(([name,data])=>({
    name,
    avg:data.Totalscore/data.count,
    count:data.count
}))
.sort((a,b)=>{
    return b.avg-a.avg||b.count-a.count
}
)
.slice(0,1)
console.log(topperslis);

const teamsof = [
  {
    name: "Team A",
    players: [
      { name: "Alex", goals: 7 },
      { name: "John", goals: 4 }
    ]
  },
  {
    name: "Team B",
    players: [
      { name: "Max", goals: 3 },
      { name: "Leo", goals: 9 }
    ]
  }
];
const teamsconced=teamsof.map((goae)=>{
    const goalscon=goae.players.reduce((acc,cur)=>{
        return cur.goals>acc.goals?cur:acc
    })
    return{
        name:goae.name,
        teamname:goalscon.name,
        goalsscored:goalscon.goals
    }
})
console.log(teamsconced);
const studentsto = [
  { name: "Asha", scores: [90, 80, 85] },
  { name: "Ravi", scores: [70, 75, 78] },
  { name: "Neha", scores: [95, 92, 90] }
];
const topperlist=studentsto.map((ord)=>{
    const lists=ord.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=lists/ord.scores.length
    return{
        name:ord.name,
        avg:avg
    }
})
.sort((a,b)=>{
    return b.avg-a.avg
})
const topper=topperlist[0]
console.log({
    name:topper.name,
    avg:topper.avg.toFixed(2)
});
const cities = [
  { name: "City A", population: 1200000 },
  { name: "City B", population: 5000000 },
  { name: "City C", population: 2200000 }
]
const reduce=cities.reduce((acc,cur)=>{
    return acc.population>cur.population?acc:cur

})
console.log({
    name:reduce.name,
    population:reduce.population
});
const songs = [
  { title: "Song A", plays: 120 },
  { title: "Song B", plays: 300 },
  { title: "Song C", plays: 250 }
];
const lists=songs.reduce((acc,cur)=>{
    return acc.plays>cur.plays?acc:cur
})
console.log({
    title:lists.title,
    plays:lists.plays
});







   













