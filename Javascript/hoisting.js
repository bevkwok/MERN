console.log(hello);                                   
var hello = 'world';    
// var hello;
// console.log(hello); // = undefined
// hello = "world";

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle = 'haystack';
//hoisting test() // undefined
//console.log(needle) // = 'magnet'
// *** real anwser = 'magnet' then undefined

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// guess:
// 'only okay' 
// 'super cool'
// result:
// super cool
// undefined

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// guess:
// 'chicken'
// undefined
// 'half-chicken'
// result:
// 'chicken'
// 'half-chicken'
// undefined


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// guess:
// ReferenceError


// result:
// Uncaught TypeError: mean is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// guess:
// undefined  // 'rock'  // 'r&b'  // 'disco'
// result:
// undefined  // 'rock'  // 'r&b'  // 'disco'  // undefined



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// guess:
// "san jose"  // "seattle"  // "burbank" // "san jose"  // undefined
// result:
// "san jose"  // "seattle"  // "burbank" // "san jose"  // undefined

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// guess:
// {name: "Chicago", students: 65, hiring: true}  // closed for now

// result:
// {name: "Chicago", students: 65, hiring: true} // Uncaught TypeError: Assignment to constant variable.

// guess:

// result:


// guess:

// result: