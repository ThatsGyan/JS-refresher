
//SINGLETON

// object litrals
//Object.create
const mySym = Symbol('Key1')
const JsUser = {
    'employee name' : "Hitesh",
    age : 18,
    [mySym] : 'myKey1',
    location : "Jaipur",
    email: "gyansat1399@gmail.com",
    isLoggeedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}
// console.log(JsUser['employee name']); //Result : Hitesh
// console.log(JsUser[mySym]); //Result : myKey1
// console.log(typeof JsUser[mySym]); //Result : 

// JsUser.email = 'ramrajan@gmail.com'
// console.log(JsUser.email); //Result : 

// Object.freeze(JsUser)
// JsUser.email = 'gyanraj2000@gmail.com'
// console.log(JsUser); //Result : 

JsUser.greeting = function(){
    console.log("Hello Js User"); //Result : 
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user:  ${this["employee name"]}`); //Result : 
}
console.log(JsUser.greeting() ); //Result : Hello Js User

console.log(JsUser.greetingTwo()); //Result : 