// if else program 

var number = 21;

if(number%2==0){
    console.log(number,"is a even number");
}else{
    console.log(number,"is a odd number");
}


var age = 20;

if(age>=18){
    console.log("you are eligible for Voting");
}else{
    console.log("Sorry You're not eligible for voting")
}


var num1 = 22;
var num2 = 23;
var num3 = 24;

if(num1<num2 && num3<num2){
    console.log(num2, "is bigger number")
}else if(num2<num1 && num3 <num1){
    console.log(num1, "is the biggest number")
}else{
    console.log(num3, "is the biggest number")
}


var year = 1900;

if (year % 400 === 0) {
    console.log(year, "is a leap year");
} else if (year % 100 === 0) {
    console.log(year, "is not a leap year");
} else if (year % 4 === 0) {
    console.log(year, "is a leap year");
} else {
    console.log(year, "is not a leap year");
}

var char = "a";

if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
    console.log(char, "is a vowel");
}else{
    console.log(char, "is a consonant")
}


var num = 0;

if(num === 0){
    console.log("Number is Zero")
}
else if(num < 0 ){
    console.log(num, "is the negative number");
}
else if(num > 0){
    console.log(num, "is the positive number")
}


var marks = 41;

if(marks<40){
    console.log("Your are fail")
}
else{
    console.log("You are Passed")
}


var score = 70;

if(score>=90){
    console.log("Grade A");
}
else if(score>=80){
    console.log("Grade B")
}
else if(score>=70){
    console.log("Grade C")
}
else{
    console.log("Grade F")
}


var str = "Javascript";

if(str.toLowerCase().includes("Javascript")){
    console.log("The str contain Javascript word")
}
else{
    console.log("The str doesnot contain Javascript word")
}

var num = 9;

if(num>=10 && num<=100){
    console.log("The number is within the range 10 to 100")
}
else{
    console.log("The number is not in range between 10 to 100")
}


var num = 7;

switch(num){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturady");
        break;
    case 7:
        console.log("Sunday");
        break;
}



// Logical Operators AND &&, OR||
// Arithmetic Operators
// Increment,Decrement
// Addition +=, Subtraction -=
// Division /
// Modulo %

// Conditional Statements
// if-else
// switch