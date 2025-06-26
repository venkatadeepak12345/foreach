function greet(name){
    return `Hello ${name}!`
}
console.log(greet("alice"));
function login(username,password){
    return username.includes("@")&&password.length>=6
}
console.log(login("user@gmail.com","123444"));
function ecommerce(price,tax){
    return price+price*tax
}
console.log(ecommerce(1000,0.9));
function iseven(num){
    return num%2===0
}
console.log(iseven(5));
function mess(user,message){
    console.log(`To${user}: to get a new ${message}`);
    
}
mess("John","YOU HAVE A NICE DAY!")
function flighttimings(departuretime,arrivialtime){
    return arrivialtime-departuretime
}
console.log(flighttimings(10,16));
function student(grade){
    if(grade>90){
        return "A"
    }else if(grade>78){
        return "B"
    }else{
        return "C"
    }
}
console.log(student(99));
function presentage(birthage){
    const curage=new Date().getFullYear()
    const hours=curage-birthage
    const min=hours*365*24*60*60
    return min
}
console.log(presentage(2009));

function rectangle(area,width){
    return 2*(area*width)
}
console.log(rectangle(2,2));
function areatriangle(base,he){
    return 1/2*base*he
}
console.log(areatriangle(5,5));
function square(side,sides){
    return side*sides
}
console.log(square(4,4));











