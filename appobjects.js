/*
//Create a parent function constructor
const People = function(n, yob, job){
    this.name = n;
    this.yearOfBirth = yob
    this.job = job;
    this.getAge = function (){
        return 2018 - this.yearOfBirth;
    }
}

People.prototype.workPlace = "Slatecube";

let emeka = new People("Emeka", 1921, "Developer");
let jane = new People("Jane", 1993, "Systems analyst");
const h1 = document.querySelector("#hero");

let them = [jane, emeka];
var cur = them[Math.floor(Math.random() * 2)];

h1.textContent = cur.name+ " is a "+ cur.job + " at "+cur.workPlace + " and is "+cur.getAge()+" years old";

*/

var years = [1998, 1992, 1991, 2011, 1998];

function arrayC(arr, fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
}

function getAge(year){
    return(2018 - year);    
}

newArr = arrayC(years, getAge);

console.log(newArr);



