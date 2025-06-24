//Order a Pizza
function orderpizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const order=true;
            if(order){
                resolve("📞Pizza will be ordered!")
            }else{
                reject("❌Order will be rejected!")
            }
        },2000)
    })
}
orderpizza().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
//Prepared Pizza
function preparedPizza(){
    return new Promise((resolve, reject) => {
        const prepare=true;
        if(prepare){
            resolve("Pizza will be prepared for 5 min!")
        }else{
            reject("❌Pizza not be prepared!")
        }
    },5000)
}
preparedPizza().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
//Delivered Pizza
function delieverd(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const Delivery=false;
            if(Delivery){
                resolve("🚙Pizza will be delivery in 5 min!")
            }else{
                reject("❎Pizza is not prepared!")
            }
        },4000)
    })
}
delieverd().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})
//Async Flow
async function Pizza(){
    try{
        const pizzas=await orderpizza();
        const prepared=await preparedPizza(pizzas);
        const result=await delieverd(prepared)
        console.log(result);
        
    }catch(err){
        console.log("Awaited❎:",err);
        
    }
}
Pizza()