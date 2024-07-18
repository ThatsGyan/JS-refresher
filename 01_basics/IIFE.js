// Immediately invoked Function Expressions (IIFE)

(function chai(){
console.log('DB CONNECTED'); //Result : 
})();

((name) =>{
    console.log(`Emp DB connection ${name}`); //Result : 
})('Employee_DB');