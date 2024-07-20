//HigherOrderArrayLoops

const arr = [1,2,3,4,5,6,7,8,9,'gg']

for (const val of arr) {
    console.log(val); //Result : 
}

const greetings = 'Hello worls!'
for (const val of greetings) {
    console.log(val); //Result : 
}

//Maps
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr','France')
//map.set('IN','cc')


console.log(map); //Result :  'IN' => 'cc','USA' => 'United state of America','Fr' =>France'

for (const [key, value] of map) {
    console.log(key); //Result : 
    console.log(value); //Result : 
}

