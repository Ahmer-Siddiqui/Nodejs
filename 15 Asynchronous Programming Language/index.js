let a = 10;
let b = 0;
async function runFunc(){
    return new Promise(async(resolve,reject)=>{
        setTimeout(() => {
            b=20
            resolve(b);
        }, 2000);
    })
}
let myFuncVal = runFunc();
myFuncVal.then((b)=>{
    console.log(a+b);
})
