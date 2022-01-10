let emptyArray = [];
let hobbies = ["videography","coding","painting", "horse riding", "watching movies", "dancing"];
let numbers = [44, 11, 66, 111, 22];

console.log(numbers[1]);
// console.log(hobbies[5]);
console.log(hobbies[hobbies.length-1]);

hobbies.push("eating");
// console.log(hobbies[6]);
console.log(hobbies[hobbies.length-1]);
console.log(hobbies.length);

hobbies = hobbies.slice(0,hobbies.length-2);
console.log(hobbies);
console.log(hobbies.length);
// console.log(hobbies[0],hobbies[1],hobbies[2],hobbies[3],hobbies[4]);
console.log(hobbies);


hobbies = [];
