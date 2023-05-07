let a = 20;
let b = 0;


let waitingData = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        b = 30;
        resolve(b);
    }, 2000);
})
console.log(a+b);