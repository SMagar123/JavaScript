//challenge your age in days
function ageInDays(){
var birthYear = prompt("What year were you born friend ?");
var ageInDay =(2020-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode("you are "+ ageInDay+" days old");
h1.setAttribute('id','ageInDay');
h1.appendChild(textAnswer);
document.getElementById('flexboxresult').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDay').remove();
}