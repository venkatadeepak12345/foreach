//✅ 1. Function Declaration
function greet(name){
    return `Hello ${name} !`
}
console.log(greet("alice"));
//login validation
function login(username,password){
    return username.includes("@")&&password.length>=6
}
console.log(login("user@example.com","123455"));
//2. Price Calculation in E-commerce
function ecommerce(price,tax){
    return price+ price*tax
}






console.log(ecommerce(100,0.18));
//send a message to user
function sendNotification(user, message) {
  console.log(`To ${user}: ${message}`);
}

sendNotification("John", "You have a new message!");

function flighttimings(departuretime,arrivialtime){
    return arrivialtime-departuretime
}
console.log(flighttimings(1,10));
function grade(student){
    if(student>89){
        return "A"
    }else if(student>75){
        return "B"

    }else{
        return "Fail"
    }
}
console.log(grade(65));
function addTask(taskList, task) {
  taskList.push(task);
  return taskList;
}

console.log(addTask(["Buy milk"], "Walk dog")); // ["Buy milk", "Walk dog"]
function age(birthage){
    const curyear=new Date().getFullYear()
    return curyear-birthage
}
console.log(age(2001));
// 2. Function Expression
const sayhi=function(name){
    return `Hello ${name}!`
}
console.log(sayhi("Bob"));
const rectangleArea=function(w,h){
    return w*h
}
console.log(rectangleArea(10,5));//10*5
//Example 3: Check if a Number is Even
const evenornot=function(ev){
    if(ev%2==0){
        return "Even"
    }else{
        return "False"
    }
}
console.log(evenornot(6));
//Example 4: Discount Price Calculator
const discount=function(price,dis){
    return price-price*dis
}
console.log(discount(1000,0.2));
const curyear=function(){
    const pre=new Date().getFullYear()
    return pre
}
console.log(curyear());
const triangle=(area,width)=>{
    return 0.5*area*width
}
console.log(triangle(10,5));
const curent=()=>{
    const presen=new Date().getMinutes()
    return presen
}
console.log(curent());
const students=[
  { name: "Aarav", marks: 78 },
  { name: "Neha", marks: 45 },
  { name: "Zoya", marks: 90 }
];
const student=students.map((stu)=>{
    return stu.name
})
console.log(student);
const birthage=(curage)=>{
    const curageofchinnu=new Date().getFullYear();
    const age=curageofchinnu-curage
    const ageofseconds=age*365*24*60*60
    return ageofseconds
}
console.log(birthage(2001))
const logins=(user,password)=>{
    return user.includes("@")&&password.length>=6
}
console.log(logins("user@gmail.com","123456"));
const evenorodd=(nums)=>{
    return nums%2===0?"even":"odd"
}
console.log(evenorodd(7));
const studentspassorfail = [
  { name: "Aarav", marks: 78 },
  { name: "Neha", marks: 45 },
  { name: "Zoya", marks: 90 }
];
const result=studentspassorfail.filter((stude)=>{
    return stude.marks>45
})
console.log(result);



















