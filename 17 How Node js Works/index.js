console.log("Starting up");

setTimeout(() => {
    console.log("2 sec log");
}, 2000);

setTimeout(() => {
    console.log("0 sec log");
}, 0);

console.log("finishing up");