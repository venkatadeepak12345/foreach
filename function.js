//✅ 1. Function Declaration
function greet(name){
    return `Hello ${name}!`
}
console.log(greet("alice"));
//function expression
const sayhi=function greet(name,age){
    return `Hello ${name} age of ${age} years old!`
}



console.log(sayhi("alice",24));
//arrow functions
const grret=(name,age)=>{
    return `Hello ${name} age of ${age} years old!`
}
console.log(grret("alice","3"));
const login=(username,password)=>{
    return username.includes("@")&&password.length>=6
}
console.log(login("admin@gmail.com","123456"));
const ecommerce=(price,tax)=>{
    return price+price*tax

}
console.log(ecommerce(100,0.4));
const ecommerces=(price,tax)=>{
    return price-price*tax
}
console.log(ecommerces(100,0.2));
const evenorodd=(num)=>{
    return num%2===0?"even":"odd"
}
console.log(evenorodd(3));
const rectangle=(area,width)=>{
    return area*width
}
console.log(rectangle(5,5))
const triangle=(areas,wit)=>{
    return 0.5*areas*wit
}
console.log(triangle(55,19));
const studentsmarks=(grade)=>{
    if(grade>=89){
        return"A"
    }else if(grade>=70){
        return "B"
    }else{
        return 'C'
    }
}
console.log(studentsmarks(60));
const currentage=(birthage)=>{
    const age=new Date().getFullYear()
    const overall=age-birthage
    const min=overall*365
   
    return min

    
}
console.log(currentage(2001));
const addtask=(taskadded,tasks)=>{
    taskadded.push(tasks)
    return taskadded
}
console.log(addtask(["walk"],"dog"));
function sendNotification(user, message) {
    console.log(`To:${user} send message to the ${message}`);
    
}
sendNotification("aice","sjijis")


 























