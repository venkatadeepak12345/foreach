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
const order=orders.map((or)=>{
const orderfff=or.items.reduce((cur,item)=>{
    return cur+item.quantity*item.price
},0)
return{
    orderId:or.orderId,
    customerName:or.customerName,
    totalItems:or.items.length,
    totalAmount:orderfff
}
})
console.log(order);
//Array prototype
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
const items=ordersitems.map((orde)=>{
    const itemss=orde.items.reduce((cur,acc)=>{
        return cur+acc.quantity*acc.price
    },0)
    return{
        orderId:orde.orderId,
        customerName:orde.customer,
        price:itemss

    }
})
console.log(items);
const transactions = [
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 300 },
   { type: "deposit", amount: 500 }
];
const bank=transactions.reduce((ba,cur)=>{
    return cur.type==="deposit"?ba+cur.amount:ba-cur.amount

},0)
console.log(bank);
const students = [
  { name: "Ravi", scores: [80, 85, 90] },
  { name: "Sneha", scores: [70, 75, 78] },
  { name: "Amit", scores: [60, 65, 58] },
  { name: "Priya", scores: [95, 92, 98] }
];
const grades=students.map((gr)=>{
    const stud=gr.scores.reduce((acc,cur)=>acc+cur,0)
    const avg=stud/gr.scores.length
    let grade;
    if(avg>=90){
        grade="A"
    }else if(avg>=80){
        grade="B"
    }else{
        grade ="C"
    }
    return{
        name:gr.name,
        averagescore:avg.toFixed(2),
        grade:grade,
       
    }
})
console.log(grades);



