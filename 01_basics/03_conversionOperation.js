let score  = "33ab"
let isWin = true

console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(String(isWin))

let isUserWin = 1

let reallyWin = Boolean(isUserWin)
console.log(reallyWin);

// "33" => 33
// "33aa" => NaN
// true => 1; false = 0

// ******************************** OPERATIONS ****************************

let val = 3;
let negativeVal = -val
console.log(negativeVal)

let name = "Gyan"
let LName = "Rajput"

console.log(name + " "+ LName); //Result : Gyan Rajput
console.log(1 + "2"); //Result : 12
console.log("1" + 2+2); //Result : 122
console.log(1+2+"2"); //Result : 32

let gameCounter  = 100
gameCounter++
console.log(gameCounter); //Result : 101