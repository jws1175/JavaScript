// variables lecture

var fname = 'Jeff';
var lname = 'Simpkins';
var age = (21 * 2);
//window.alert(fname + ' '+ lname + ' ' + age);


var job, isMarried;

job = 'Web Developer';
isMarried = 'Married';


var weekDay = prompt('What day is today?');
window.alert('Today is' + ' ' + weekDay);



// operators lecture

var year = 2018;
var January = 1;
var February = 2;
var March = 3;
var April = 4;
var May = 5;
var June = 6;
var July = 7;
var August = 8;
var September = 9;
var October = 10;
var November = 11;
var December = 12;
var month = prompt('What month is it?');
var age = prompt ('What is your age?');
var birthYear = year - age;



// if / else statements lecture


switch (month){
        
    case  'January':
        month = 1;
        break;
    case 'February':
        month =2;
        break;
    case  'March':
        month = 3;
        break;
    case  'April':
        month = 4;
        break;
    case  'May':
        month = 5;
        break;
    case  'June':
        month = 6;
        break;
    case  'July':
        month = 7;
        break;
    case  'August':
        month = 8;
        break;
    case  'September':
        month = 9;
        break;
    case  'October':
        month = 10;
        break;
    case  'November':
        month = 11;
        break;
    case  'December':
        month = 12;
        break;
        
   /* default:
        month = 2;*/
        
}
if (month < 3) {
    birthYear--;
    
    
}else { 
birthYear;

};

alert('You were born in' + ' ' + birthYear);

// Coding Challenge

var firstPlayerName ='Jeff';
var secondPlayerName = 'Mark';
var firstPlayerAge = 42;
var firstPlayerHeight = 179;
var secondPlayerAge = 37;
var secondPlayerHeight = 174;
var scoreJeff = firstPlayerHeight + 5 * firstPlayerAge;
var scoreMark = secondPlayerHeight + 5 * secondPlayerAge;

if (scoreJeff > scoreMark) {
    
    alert(firstPlayerName + ' ' + 'is the winner with'  + ' ' + scoreJeff + ' ' + 'points!');
    
} else if (scoreJeff < scoreMark) {
    
    alert(secondPlayerName +'is the winner with'  + ' '  + scoreMark + ' ' + 'points!');
    
} else if (scoreJeff === scoreMark) {
    
    alert('It\'s a tie');
    
};

// Functions lecture (containers that hold a couple of lines of code) pevents Don't Repeat Yourself or DRY

function Yourage(yearOfBirth){
    var yourBirthYear = 2017 - yearOfBirth;
    return yourBirthYear;    
    
};

var ageOfJeff = Yourage(1975);
alert(ageOfJeff);


function yearsUntilRetirement(name, yearOfBirth){
    
  var retire = Yourage(yearOfBirth);
  var retirement = 67 - age; 
  var yearsUntilRetire = 2018 + retirement;
  alert('You will be of retirement age in' + ' ' + retirement + ' ' + 'years, or in the year' + ' ' + yearsUntilRetire + '.');
}
yearsUntilRetirement('Jeff', 1975);


// Statements and Expressions lecure

/*

var SomeFun = function(parameter){


}

*/

/*
Expressions:

3 + 4;
var x =3;

*/

/*
Statements: Doesn't produce any immediate output.

if (x===5){

Do something;
}

*/



// Arrays lecture

var names = ['Jeff', 'Mark', 'Dave'];

// Another way to write an array

var years = new Array(1975, 1968, 1965);

// to get all values in the array just write alert(names);  First value in the array is 0.

alert(names[0]);
alert(names);
alert(years);
names[1] = 'Joe';
alert(names);

var Jeff = ['Jeff', 'Simpkins', 1975, 'Front End Developer'];
// Push is a method that adds an element at the end of an array.
// Pop is a method that removes an element at the end of an array. No parameters are used in this method Jeff.pop();
// Unshift is a method that adds an element at the beginning of an array.
// Shift is a method that removes an element at the beginning of an array. No parameters are used in this method. Jeff.pop();
Jeff.push('Blue');
Jeff.unshift('Mr.');
var Joe = ['Joe', 'Smith', 1968, 'Network Specialist'];
var Dave = ['Dave', 'Maybaum', 1965, 'Desktop Support Specialist'];

// IndexOf returns the position of the element you are referencing.  If an element is not there it will show -1

alert(names.indexOf('Dave'));


if (Jeff.indexOf('Front End Developer') === -1){
    alert('Jeff is not in that field');
};


// Objects and Properties lecture

// Objects use key value pairs

var John = {
    
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1966,
    Job: 'Programmer'
};

John.lastName='Miller';
John['Job'] = 'Teacher';
// Below creates a new empty object this is another way to create an object.
var Jim = new Object();
Jim.name = 'Jim';
Jim.lastName = 'Lipinski';
Jim['yearOfBirth'] = 1959;
Jim['Job'] = 'Help Desk Support';

// in the example above John is an object

/*
a few ways to access a value from the John object:

alert(John.lastName);

or

alert(John['lastName']);

In the second way the value must be passed as a string.

var xyz = 'job';
alert(John[xyz]);

*/


// Objects and Methods lecture
/*
var John = {
    
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1966,
    Job: 'Programmer',
    Family: ['Jane', 'Mark', 'Mary'],
    Yourage: function(yearOfBirth) {
        this.age = 2018 - this.yearOfBirth;
    }
};
*/
// Above the Yourage is a function expression
// this refers to the object John

// alert(John.Yourage());

// Insert age like this   var age = John.Yourage();
// Then insert into object  John.age = age;


// Loops lecture

// i is used as a counter variable in a for loop

/*for(var i=0; i < 10; i++){
    
    alert(i);
    
};*/

// names.length will give the total number of items in the array. Since there are 3 entries it is the same as say var i = 3.  You need names.lenght -1 to account for the 0 entry.

var names = ['Hey', 'You', 'Me'];
for(var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
    
};

// While loops
// only has the condition that is being evaluated such as i < 0

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
};
// if you want to stop the loop early.  This works for both for and while loops
for(var i = 0; i < 3 ; i++){
    console.log(names [i]);
    
    if(i===2){
        break;
    }
};

// continue will start from the beginning of the array and since 1 is equal to 2, it will not print 2 but will print the following items.
/*
for(var i = 0; i < 3 ; i++){
    console.log(names [i]);
    
    if(i===2){
        continue;
    }
};*/

// ECMAScript 5 or ES5 was released in 2009.
// ECMAScript 2015 or ES6 was released in 2015.
// ECMAScript 2016 was released in 2016.


// functions are available before the execution phase starts
// variables are undefined before the execution phase starts

// Hoisting in Practice - Notice the function is being called before it is defined

calculateAge(1975);

function calculateAge(year){
    
    console.log((2018 - year)-1);
};


// Scope Chain Example

var a = 'Hello';
first();

function first(){
    var b = 'Hi';
    second();
    
    function second(){
        var c = 'Hey';
        console.log(a+b+c);
    }
};


// This keyword - also known as the window object.  Only assigned a value when the object called the method

calculateAge(1974);

function calculateAge(){
    console.log(2018 - year);
    console.log(this);
}

var JWS = {
    
    name: 'Jeff',
    yearOfBirth: 1975,
    calculateAge: function (){
        console.log(this);
    }
}

JWS.calculateAge();

// Method borrowing

var Simpkins = {
    
    name: 'JS',
    yearOfBirth: 1975,
};

JWS.calculateAge = Simpkins.calculateAge;




