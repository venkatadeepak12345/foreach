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
const ordersitems=orders.map((ord)=>{
    const items=ord.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
        orderId:ord.orderId,
        customerName:ord.customerName,
        totalItems:ord.items.length,
        totalAmount:items

    }
})
console.log(ordersitems);
const ordersitemsof = [
  {
    orderId: "001",
    customer: "Amit",
    items: [
      { name: "Laptop", quantity: 1, price: 1000 },
      { name: "Mouse", quantity: 2, price: 20 }
    ]
  }
];
const itemlist=ordersitemsof.map((ite)=>{
    const list=ite.items.reduce((acc,cur)=>{
        return acc+cur.quantity*cur.price
    },0)
    return{
        orderId:ite.orderId,
        customerName:ite.customer,
        totalAmount:list
    }
})
console.log(itemlist);
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
const student=students.map((stud)=>{
    const stude=stud.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=stude/stud.scores.length
    let grade;
    if(avg>90){
        grade="A"
    }else if(avg>79){
        grade="B"
    }else{
        grade="C"
    }
    return{
        name:stud.name,
        averageScore:avg.toFixed(2),
        grade:grade
    }

})
console.log(student);







