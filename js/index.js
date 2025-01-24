// if else programs

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
    default:
        console.log("Enter number range between 1 to 7")
}


var num1 = 24;
var num2 = 22;

var operation = "-";

switch (operation) {
    case "+":
        var result = num1 + num2;
        console.log("The result of addition is: " + result);
        break;
    case "-":
        var result = num1 - num2;
        console.log("The result of subtraction is: " + result);
        break;
    case "*":
        var result = num1 * num2;
        console.log("The result of multiplication is: " + result);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            var result = num1 / num2;
            console.log("The result of division is: " + result);
        }
        break;
    default:
        console.log("Invalid operation. Please choose from +, -, *, /.");
}


var month = 1;

    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall (Autumn)");
            break;
        default:
            console.log("Invalid month number. Please enter a number between 1 and 12.");
    }



var vehicle = "Car";

vehicle = vehicle.toLowerCase();
    switch (vehicle) {
        case "car":
            console.log("You selected a Car.");
            break;
        case "bike":
            console.log("You selected a Bike.");
            break;
        case "bus":
            console.log("You selected a Bus.");
            break;
        default:
            console.log("Invalid vehicle type. Please enter a valid vehicle type.");
    }

 
var char = 'a'; 

char = char.toLowerCase();

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel.");
        break;
    default:
        if (char.length === 1 && /[a-z]/.test(char)) {
            console.log(char + " is a consonant.");
        } else {
            console.log("Invalid input. Please enter a valid alphabet character.");
        }
}


// for(var i= 23; i%2==0; i++){
//     console.log(i)
// }

var count = 0;
for (var i = 43; i >= 11; i--) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log("Total even numbers:", count);








