function orderpizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const order=true;
            if(order){
                resolve("Order was successfully placed!")
            }else{
                reject("order not be placed!")
            }
        },3000)
    })
}
orderpizza().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
function preparedPizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const prepare=true;
            if(prepare){
                resolve("Pizza was prepared!")
            }else{
                reject("pizza is not prepared!")
            }
        },5000)
    })
}
preparedPizza().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
function delivery(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const delieverd=true;
            if(delieverd){
                resolve("pizza was delivery successfully!")
            }else{
                reject("pizza is not deliever!")
            }
        },4000)
    })
}
delivery().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
//async flow
async function deli() {
    try{
        const pizza=await orderpizza();
        const pre=await preparedPizza("pizza")
        const res=await delivery("pre")
        console.log("Awaited success:",res);
        
    }catch(err){
        console.log("Awaited Error:",err.message);
        
    }
    
}
deli()
function added(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const values=Number(money);
            if(isNaN(values)){
                reject(new Error("Money can be added!"))
            }else if(values<600){
                resolve("Money will be added minimum 500!")
            }else{
                resolve("Money can be added success!")
            }
        },4000)
    })
}
added(400).then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
async function add() {
    try{
        const moneys=await added(400)
        console.log("Awaited success:",moneys);
        
    }catch(err){
        console.log("Awaited Error:",err.message);
        
    }
    
}
add()
function login(username,pasword){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const loginuser=username==="admin"&&pasword==="123"
            if(loginuser){
                resolve("Login success!")
            }else{
                reject("Invalid credentials!")
            }
        },4000)
    })
}
login("admin","1234").then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
async function lo(){
    try{
        const log=await login("admin","1234")
        console.log("Awaited success:",log);
        
    }catch(err){
        console.log("Awaited Error:",err);
        
    }
}
lo()
