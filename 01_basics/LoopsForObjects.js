const myObject = {
  js: "javaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(myObject[key]); //Result :
}

const programming = ["js", "rb", "c++", "java"];
for (const key in programming) {
    console.log(programming[key]); //Result : 
}

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr','France')

for (const key in map) {
    console.log(key); //Result : 
}