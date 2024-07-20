// forLoop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`); //Result : 
//     for(let j = 1; j <=10 ; j++){
//         //console.log(`inner loop value is : ${j} and outer loop value is ${i}`); //Result : 
//         console.log(`${i} * ${j} = ${i*j}`); //Result : 
//     }
    
// }

// let myArray = ['flash', 'batman', 'superman']

// for(let index = 0; index < myArray.length; index){
//     console.log(myArray[index]); //Result : 
// }

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`); //Result : 
        continue // will skip NO: 5
    }
    console.log(`value of index is: ${index}`); //Result : 
    
}

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`); //Result : 
        break // will exit from the loop
    }
    console.log(`value of index is: ${index}`); //Result : 
    
}