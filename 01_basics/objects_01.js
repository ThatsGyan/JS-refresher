const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Gyan"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //Result : { id: '123abc', name: 'Gyan', isLoggedIn: false }

const regularUser = {
    email: 'some@gmail.com',
    fullName: {
        firstName: 'Gyanendra',
        middleName: 'Pal',
        lastName: 'Singh'
    }
}

console.log(regularUser.fullName?.firstName); //Result : Gyanendra

console.log('////////////'); //Result : 

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

const obj4 = Object.assign(obj1,obj2)
console.log(obj4); //Result : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1, ...obj2}
console.log(obj5); //Result : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const array1 = [
    {
        id: 1,
        email: 'gyan@gmail.com'
    },
    {
        id: 2,
        email: 'gyan@sexobank.com'
    },
    {
        id: 3,
        email: 'gyanendra@sexobank.com'
    }
]

console.log(array1[2].email); //Result : gyanendra@sexobank.com

console.log(tinderUser); //Result : 
console.log(Object.keys(tinderUser)); //Result : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //Result : [ '123abc', 'Gyan', false ]
console.log(Object.entries(tinderUser)); //Result : [ [ 'id', '123abc' ], [ 'name', 'Gyan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Result : true
console.log(tinderUser.hasOwnProperty('arelogged')); //Result : false


//De-strecturing 
const course = {
    courseName : 'jsHindi',
    price : '999',
    courseInstructor: 'hitesh'
}

const {courseInstructor} = course

console.log(courseInstructor); //Result : hitesh


