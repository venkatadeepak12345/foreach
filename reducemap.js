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
const orderitem=orders.map((ord)=>{
const orderreduce=ord.items.reduce((re,item)=>{
  return re+item.quantity*item.price
},0)
return{
  orderId:ord.orderId,
  customerName:ord.customerName,
  totalItems:ord.items.length,
  totalAmount:orderreduce
}
})
console.log(orderitem);
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
  const reduc=orde.items.reduce((pr,item)=>{
    return pr+item.quantity*item.price
  },0)
  return{
    orderId:orde.orderId,
    customer:orde.customer,
    totalAmount:reduc
  }
})
console.log(items);
const transactions = [
  { type: "deposit", amount: 500 },
  { type: "withdrawal", amount: 200 },
  { type: "deposit", amount: 300 },
   { type: "deposit", amount: 500 }
];

const bankbalance=transactions.reduce((acc,cur)=>{
  return cur.type==="deposit"?acc+cur.amount:acc-cur.amount//so acc amount is 500 and cur amount 200 
  // is with drawl 500-200=300 so acc=300+300=600 acc+cur=600+500//the output will be 1100
                                                           
},0)
console.log(bankbalance);
const students = [
  { name: "Ravi", scores: [80, 85, 90] },
  { name: "Sneha", scores: [70, 75, 78] },
  { name: "Amit", scores: [60, 65, 58] },
  { name: "Priya", scores: [95, 92, 98] }
];
const studen=students.map((stud)=>{
  const gra=stud.scores.reduce((a,b)=>a+b,0)
  const average=gra/stud.scores.length;
  let grade;
  if(average>95){
    grade="A"
  }else if(average>80){
    grade="B"
  }else if(average>71){
    grade="C"
  }else{
    grade="Fail"
  }
  return{
    Name:stud.name,
    averageScore:average.toFixed(2),
    grade:grade
  }
  
})
console.log(studen);
