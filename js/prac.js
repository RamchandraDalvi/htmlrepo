// for(var i=1; i<=10; i++){
//     console.log(i)
// }

// for(var i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// var count = 0;
// for(var i=1; i<=10; i++){
//     count+=i
// }
// console.log(count)

// for(var i=1; i<=50; i++){
//     if(i%5===0){
//         console.log(i)
//     }
// }

// var num= 2;
// for(var i=num-1; i>=1; i--){
//     num*=i
// }
// console.log(num)


// for(var i=1; i<=20; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// var count = 0;
// for(var i=1; i<=100; i++){
//     if(i%2===0){
//         count+=i;
//     }
// }
// console.log(count)

// var num = 1;
// var isPrime = true; // Assume the number is prime initially

// // Check divisibility from 2 to num - 1
// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false; // If divisible, set isPrime to false
//     break; // Exit the loop early if a divisor is found
//   }
// }

// if (isPrime && num > 1) {
//   console.log(num + " is a prime number.");
// } else {
//   console.log(num + " is not a prime number.");
// }

// var num = 283; // Input number
// var reversedNum = 0;

// for (var i = num; i > 0; i = parseInt(i / 10)) {
//   var digit = i % 10; // Get the last digit
//   reversedNum = reversedNum * 10 + digit; // Add it to the reversed number
// }

// console.log("Reversed number:", reversedNum);


var numbers = [45, 12, 78, 23, 56, 1, 89]; 
var smallest = numbers[0]; 

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]; 
  }
}

console.log("The smallest number is:", smallest);




