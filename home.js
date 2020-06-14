console.log("Suraj magar");
//alert("are you fine");
// how you write a comment
//variables
var b="god";
console.log(b);
var c=45;
console.log(c);
/*fancy way of changing the HTML WITH JAVASCRIPT
var age=prompt("What is you age?");
document.getElementById('someText').innerHTML = age;//read the age*/
/*numbers in javascript
var num1=5;
num1=num1+1;//increment num1 by 1
num1++;
//decrement num1 by 1
num1--;
console.log(num1);//read num1
//divide. multipy, remainder %
console.log(num1%1);
//increment and decrement by any number you want
num1+=100;
console.log(num1);*/

/*Functions
//create
function fun(){
    console.log("HELLO");
}
//call
fun();
/* function that take name and returns to yo and say hello followed by you name
for example
Name:'suraj'
Returns:'hello suraj'

function greeting(name)
{
    var result="hello"+" "+name;//string concatination
    console.log(result);
}
var yname=prompt("what is your name?");
greeting(yname);
//how do arguments works in function?
//how do we add two number in function
function sumNumbers(num1,num2){
    var result=num1+num2;
    console.log(result);
}
sumNumbers('10',19);*/
/*WHILE VS FOR LOOPS
var num =0;
while(num<10){
    num+=1;
    console.log(num);
}
for(let num=0;num<10;num++){
    console.log(num);
}*/
//Datatypes in javascript
let yourAge=18;//number
let yourName="suraj";//string
let name={first:"suraj",lastname:"magar"};//object
let truth=false;//boolean
let books=['bible','quran','gita'];//array
let random;//undefined
let nothing=null;//null
/*String in javascript(common methods)
let fruit="apple,banana,orange";
let moreFruits="banana\apple";//new line
console.log(fruit.length);//length of string
console.log(fruit.indexOf("pp"));//gives the index number from begining
console.log(fruit.indexOf("w"));//gives negative value as it cannot be found in string
console.log(fruit.slice(2,5));//including 2 upto 5
console.log(fruit.replace("app","123"));//replacing the contents
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));//gives character of respective index
console.log(fruit[3]);
console.log(fruit.split(''));//single character separation
console.log(fruit.split(','));//split by comma*/
/*ARRAY
let vehicle=['car','bike','cycle','truck'];
vehicle=new Array('car','bike','cycle','truck');
//alert(vehicle[4]);
console.log(vehicle[3]);//accessing the value of index 3
vehicle[1]="monstertruck";//replacing the values of array of index 1
console.log(vehicle);
for(let i=0;i<vehicle.length;i++){
    console.log(vehicle[i]);
}
//Array common methods
console.log(vehicle.toString());//prints the elements of array in string form
console.log(vehicle.join("--"));//prints the elements of array with -- joining
console.log(vehicle.pop(), vehicle)//pop prints out the last elements and size of array changes permanently that means the poped element is now not included in array
console.log(vehicle.push("gaadi"), vehicle);//push helps to insert in array in last index
vehicle[vehicle.length]="home";//same as push
console.log(vehicle[4]);
vehicle.shift();//remove first elements from a list
console.log(vehicle);
vehicle.unshift("happy");//add first element to an array
console.log(vehicle);
let bike=['suzuki','honda','yamaha'];
let combine=vehicle.concat(bike);//combining two array in a single array
console.log(combine);
console.log(combine.slice(1,4));//from 1 not 4
console.log(combine.reverse());//reversing the order of array
console.log(combine.sort());//sorting is done on basis of 4 alphabets
let num=[334,45,64,87,1,2,5,8];
console.log(num.sort(function(a,b){return a-b}));//sorting in ascending order
console.log(num.sort(function(a,b){return b-a}));//sorting in descending order
//creating empty array and adding the elements based on index number
let emptyArray=new Array();
for(let num=0;num<=10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);
*/
/*OBJECTS IN JAVASCRIPT
let student={
    first:"suraj",
    last:"magar",
    education:"BIM", 
    age:20,
    studentInfo:function(){
        return this.first+ '\n' + this.last;
    }
};
console.log(student.first);
student.first="good";//changing value
console.log(student);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
*/
/*if else conditions and switch statements
//18-35 is my target demographic
//&& AND
//|| OR
var age=prompt("what is your age");
if((age>=18)&&(age<=35)){
    status="target demo";
    console.log(status);
}
else{
    status="not my odience";
    console.log(status);
}*/
/*Switch statement
//if everyday was a week day differentiate between weekday vs weekend
//day 0--> sunday
//day 6-->Saturday
//day 4 --->Thursday-->weekday
switch(2){
    case 0:
        text="weekend";
        break;
    case 5:
        text="weekend";
        break;
    case 6:
        text="weekend";
        break;
    default:
        text="weekday";
}
console.log(text);
*/
//JSON
//CHALLENGE: YOUR AGE IN DAYS


