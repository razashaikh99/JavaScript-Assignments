// Chapter 17 TO 20 ;     /////////

// Q1 Answer ;
// var arr = [[], [], []];
// console.log(arr)

// Q2 Answer ;
// var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1],
// ];
// for (var x = 0; x < arr.length; x++) {
//   console.log(arr[x]);
// }

// Q3 Answer ;
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var a = 0; a < arr.length; a++) {
//   console.log(arr[a]);
// }

// Q4 Answer ;
// var table = +prompt("Enter a number to show its multiplication table");
// var tableLenght = +prompt("Enter a length multiplication table");
// document.write("Multipalication table of " + table + " lenght " + tableLenght + "<br/>");
// for (var i = 1; i <= tableLenght; i++) {
//   var multi = i * table;
//   console.log(table + " x " + i + " = " + multi);
//   document.write(table + " x " + i + " = " + multi + "<br/>");
// }

// Q5 Answer ;
// var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
// for (var x = 0; x < fruits.length; x++) {
//   console.log(fruits[x]);
// }
// var count = [0];
// for (var x = 0; x < fruits.length; x++) {
//   console.log("Element at index " + count++ + " is " + fruits[x]);
// }

// Q6 Answer ;
// A ==> Counting
// for (var i = 1; i <=15; i++) {
//   console.log(i);
// }
// B ==> Reverse Counting
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// C ==> Even Number
// for (var i = 1; i <=20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// C ==> Odd Number
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// C ==> Series
// for (var i = 1; i <= 20; i++) {
//   i++;
//   console.log(i + "k");
// }

// Q7 Answer ;
// var user = prompt("Welcome To Chaman Bakery! What do you want to order");
// var item = ["cake" , "apple pie" , "coockie" , "chips" , "patties"];
// var flag = true;
// for (var i = 0; i < item.length; i++) {
//   if (user == item[i]) {
//     console.log(user + " is availabe at index " + [i] + " in our bakery");
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("We are sorry " + user + " is not availbe in our bakery");
// }

// Q8 Answer ;
// var num = [24, 53, 78, 91, 12];
// var large = num[0];
// for (var x = 0; x < num.length; x++) {
//   if (num[x] > large) {
//     large = num[x];
//   }
// }
// document.write("Array item " + num);
// document.write("<br/> The largest number is " + large);

// Q9 Answer ;
// var num = [24, 53, 78, 91, 12];
// var small = num[0];
// for (var a = 0; a < num.length; a++) {
//   if (num[a] < small) {
//     small = num[a];
//   }
// }
// document.write("Array item " + num);
// document.write("<br/> The smallest number is " + small);

// Q10 Answer ;
// var num = 5;
// for (var a = 1; a < 20; a++) {
//   var multi = a * num;
//   console.log(multi);
// }