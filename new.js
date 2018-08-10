/*************************
Pass function as arguments
**************************/

//Create an array to work on
var years = [1992, 2001, 1989, 1943, 1994];

//Create generic function that works on the arrays
function doThis(arr, fn){
    // create an empty array to hold return values 
    var returnArr = [];
    // loop through the fed in array and perform the fed in function on each item
    for(var i=0;i<arr.length;i++){
        //update the value of the return array with the result of performing the fed in function with the array item as argument.
        returnArr.push(fn(arr[i]));
    }   
    return returnArr; 
}

function getAge(val){
    return 2018 - val;
}

var ages = doThis(years, getAge);

function legalAge(v){
    return v > 18;
}

console.log(doThis(years, getAge));
console.log(doThis(ages, legalAge));




/* ==================================
Functions returning functions 
=================================== */

function jobName(job, name){
    if(job === "designer"){
        return function(){
            console.log(name+", what is UI?");
        }
    }
    else if(job === "teacher"){
        return function(){
            console.log(name+", what do you teach?");
        }
    }
    else{
        return function(){
            console.log(name+", what the fuck is your purpose?");
        }
    }
}

var me = jobName("teacher", "Emerald"); //this returns a function into the me variable making it a function auto.
me();

//or

jobName("designer", "Samuel")();

(function(d){
    var random = Math.random() * 10;
    alert(random + d);
})("mike");