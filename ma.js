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
const student=studentsli.flatMap((stud)=>{
    return stud.subjects.filter((st)=>{
        return st.marks>89
    })
    .map((stude)=>{
        return{
            name:stud.name,
            city:stud.city,
            studentMarks:stude.marks,
            subjects:stude.name

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
const departmentsales=department.flatMap((depa)=>{
    return depa.Employees.filter((de)=>{
        return de.Experience>=5
    })
    .map((deo)=>{
        return{
            nameoftheperson:deo.name,
            Experience:deo.Experience,
            departments:depa.name
        }
    })
})
console.log(departmentsales);
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
const school=schools.flatMap((sch)=>{
    return sch.students.filter((sc)=>{
        return sc.grade>=90
    })
    .map((scho)=>{
        return{
           Schoolname:sch.name,
            studentName:scho.name,
            studentMarks:scho.grade
        }
    })
})
console.log(school);
///Hospitals → Patients Older Than 60
const hospitals = [
  { name: "City Hospital", patients: [{ name: "John", age: 65 }, { name: "Lily", age: 50 }] },
  { name: "County Clinic", patients: [{ name: "Raj", age: 70 }, { name: "Amy", age: 40 }] }
];
const patients=hospitals.map((hos)=>{
    return hos.patients.filter((ho)=>{
        return ho.age>=60
    })
    .map((hosp)=>{
        return{
            nameofthehospital:hos.name,
            nameoftheperson:hosp.name,
            age:hosp.age
        }
    })
})
console.log(patients);
//🛍️ Stores → Products Over $100
const stores = [
  { name: "ElectroMart", products: [{ name: "TV", price: 400 }, { name: "Mouse", price: 20 }] },
  { name: "TechBazaar", products: [{ name: "Laptop", price: 900 }, { name: "Cable", price: 15 }] }
]
const store=stores.flatMap((sto)=>{
    return sto.products.filter((stor)=>{
        return stor.price>=100
    })
    .map((stopr)=>{
        return{
            nameofthestore:sto.name,
            productName:stopr.name,
            price:stopr.price
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
const goals=teams.flatMap((sc)=>{
    return sc.players.filter((scor)=>{
        return scor.goals>=10
    })
    .map((score)=>{
        return{
            Teamname:sc.name,
            PlayerName:score.name,
            TeamGoals:score.goals
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
const order=orders.map((es)=>{
const ordere=es.items.reduce((acc,cur)=>{
    return acc+cur.quantity*cur.price
},0)
return{
    orderId:es.orderId,
    customerName:es.customerName,
   
    itemsLength:es.items.length,
    totalAmount:ordere
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
const items=ordersitems.map((ord)=>{
    const itemslii=ord.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
        orderId:ord.orderId,
        customerName:ord.customer,
        itemsLength:ord.items.length,
        totalAmount:itemslii

    }
})
console.log(items);
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
const studentmarks=students.map((st)=>{
    const studentred=st.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=studentred/st.scores.length
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
console.log(studentmarks);
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
const sales=departments.map((ac)=>{
    const department=ac.sales.reduce((acc,cur)=>{
         return cur.amount>acc.amount?cur:acc
         

    })
    return{
        nameofthesale:ac.name,
        salesprice:department.amount,
        salername:department.name
    }
})
console.log(sales);
//lowest
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
const sal=departmentss.map((accc)=>{
    const red=accc.sales.reduce((acc,cur)=>{
        return cur.amount<acc.amount?cur:acc
    })
    return{
        nameofthesale:accc.name,
        salesprice:red.amount,
        salername:red.name

    }
    
})
console.log(sal);
const todepartmentss = [
  {
    name: "Electronics",
    sales: [
      { name: "Alice", amount: 3000 },
      { name: "Bob", amount: 4500 },
      { name: "Bobs", amount: 4500 }
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
const totalsale=todepartmentss.map((sal)=>{
    const total=sal.sales.reduce((acc,cur)=>{
        return acc+cur.amount
    },0)
    return{
        name:sal.name,
        totalsales:total
    }
})
console.log(totalsale);
const teamss = [
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
const teamgoal=teamss.flatMap((go)=>{
return go.players.filter((gos)=>{
    return gos.goals>=7
})
.map((goa)=>{
    return{
        name:go.teamName,
        playerName:goa.name,
        goalscored:goa.goals

    }
})
})
console.log(teamgoal);

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
const team=teamsgoals.map((gos)=>{
    const teamsgo=gos.players.reduce((acc,cur)=>{
        return cur.goals>acc.goals?cur:acc
    })
    return{
        teamName:gos.teamName,
        playerName:gos.players,
        playersgoal:teamsgo
    }
})
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
const highest=categories.map((cat)=>{
    const cate=cat.products.reduce((acc,cur)=>{
        return cur.revenue>acc.revenue?cur:acc

})
return{
    nameofproduct:cat.name,
productname:cate.name,
amount:cate.revenue

}

})
console.log(highest);
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

const topper=studentsliz.map((stud)=>{
    const topperlist=stud.marks.reduce((acc,cur)=>{
        return cur.score>acc.score?cur:acc
    })
    return{
        nameofthestudent:stud.name,
        class:stud.class,
        subject:topperlist.subject,
        marks:topperlist.score
    }
})
console.log(topper);
const eachclasstopper=topper.reduce((acc,cur)=>{
    return cur.marks>acc.marks?cur:acc
})
console.log(eachclasstopper);
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

const subjectsstats={
    math:{totalscore:253,count:3},
    english:{totalscore:168,count:2},
    science:{totalscore:275,count:3}
}
const topsubject=Object.entries(subjectsstats)
.map(([name,data])=>({
    name,
    avg:data.totalscore/data.count,
    count:data.count
}))
.sort((a,b)=>{
  return b.count-a.count||b.avg-a.avg
})
.slice(0,1)
console.log("Top Subject:",topsubject[0].name);

