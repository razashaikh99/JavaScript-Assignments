// Chapter 04 ;     /////////

// Q1 Answer ;
// var x , y , z;
// x = 123 , y = "abc" , z = true;

// Q2 Answer ;
// Legals Variables Names
// var myName, My_Name, myname, MyName, $myName;
// illegals Variables Names
// var var, my-var, my&var, 123var, function

// Q3 Answer ;
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs.<br>");
// document.write("For example $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore (_) or dollar sign ($).<br>");
// document.write("For example $name, _name or name</p>");
// document.write("<p>Variable names are case-sensitive.</p>");
// document.write("<p>Variable names should not be JavaScript keywords.</p>");


// CHAPTER 05 ;     /////////

// Q1 Answer ;
// var fullName=("Muhammad Raza");
// var field = ("Web Development");
// var course = ("Web and App Development");
// console.log("My name is " + fullName + " My field name " + field + " currently studing " + course);

// Q2 Answer ;
// var num1 = 10;
// var num2 = 5;
// document.write("Sub of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
// var num1 = 10;
// var num2 = 5;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>");
// var num1 = 10;
// var num2 = 5;
// document.write("Division of "+num1+" and "+num2+" is "+(num1/num2)+"<br>");
// var num1 = 10;
// var num2 = 5;
// document.write("Reminder of " + num1 + " and " + num2 + " is " + (num1 % num2));

// Q3 Answer ;
// var value;
// document.write("Value after variable declaration is "+value+"<br>")
// var value = 5;
// document.write("Initial value " + value + "<br>")
// var value = 5;
// document.write("value aftre increament is: " + (++value) + "<br>")
// var value = 5;
// document.write("value aftre Addition is: " + (++value+7) + "<br>")
// var value = 5;
// document.write("value aftre decreament is: " + (value++ +7) + "<br>")
// var value = 5;
// document.write("The reminder is: " + value % 1)

// Q4 Answer ;
// var cost = 600;
// var ticket = 5;
// document.write("Total cost to buy " + ticket + " tickets to a movie is " + (cost * ticket) + "PKR");

// Q5 Answer ;
// var num = 5;
// document.write("<h3> Table of 5: </h3> <br>");
// document.write("5 x 1 = " + num * 1 + "<br>");
// document.write("5 x 2 = " + num * 2 + "<br>");
// document.write("5 x 3 = " + num * 3 + "<br>");
// document.write("5 x 4 = " + num * 4 + "<br>");
// document.write("5 x 5 = " + num * 5 + "<br>");
// document.write("5 x 6 = " + num * 6 + "<br>");
// document.write("5 x 7 = " + num * 7 + "<br>");
// document.write("5 x 8 = " + num * 8 + "<br>");
// document.write("5 x 9 = " + num * 9 + "<br>");
// document.write("5 x 10 = " + num * 10 + "<br>");

// Q7 Answer ;
// var item1 = 650;
// var item2 = 100;
// var quan1 = 3;
// var quan2 = 7;
// var charge = 100;
// document.write("<h1> Shopping Cart </h1>");
// document.write("Total cost of your order is " + (item1 * quan1 + item2 * quan2 + charge))

// Q8 Answer ;
// var totalMarks = 980;
// var obtainMarks = 804;
// document.write("<h1> Mark Sheet: </h1>");
// document.write("Total marks : " + totalMarks + "<br>")
// document.write("marks obtained : " + obtainMarks + "<br>")
// document.write("Percentage: " + (obtainMarks * 100 / totalMarks))

// Q9 Answer ;
// var dollar = 104;
// var riyal = 25;
// var totalDollar = 10;
// var totalRiyal = 28;
// document.write("<h1> Currency in PKR: </h1>");
// document.write("Total currency in PKR : " + (dollar * totalDollar + riyal * totalRiyal));

// Q10 Answer ;
// var num0 = 20
// var num1 = 5;
// var num2 = 10;
// var num3 = 2;
// document.write("Here our value === > " + (num0 + num1 * num2 / num3));

// Q11 Answer ;
// var currentYear=2024;
// var birthYear=2002;
// document.write("<h1>Age Calculator </h1>");
// document.write("Current Year :" +" "+currentYear+"<br>");
// document.write("Birth Year :" +" "+birthYear +"<br>");
// document.write("Your age is :" +" "+currentYear%birthYear +"<br>");

// Q12 Answer ;
// var radius = 20;
// var circumference = 3.142
// document.write("<h1> The Geometrizer </h1> " + "<br>");
// document.write("Radius of a circle : " + radius + "<br>");
// document.write("The circumference is : " + radius * 2 * circumference + "<br>");
// document.write("The area is : " + radius * 20 * circumference + "<br>");

// Q13 Answer ;
// var snack = ("Chocolate super");
// var age = 22;
// var maxAge = 60;
// var amountOfSnack = 2;
// document.write("<h1> The Lifetime Supply Calculator</h1> " + "<br>");
// document.write("Favourite Snack : " + snack + "<br>");
// document.write("Current age : " + age + "<br>");
// document.write("Estimated maximum age : " + maxAge + "<br>");
// document.write("Amount of snacks per day : " + amountOfSnack + "<br>");
// document.write("You will need " + (amountOfSnack * maxAge - age) + " " + snack + "to last you until the rip old age of " + maxAge);


// Chapter 6 & 7 ;     /////////

// Q1 Answer ;
// var a = 10;
// document.write("Results: <br>")
// document.write("The value of a is : " + (a) + "<br>");
// document.write("................................")
// document.write("<br>")
// document.write("<br>")
// document.write("The value of  ++a is : " + (++a) + "<br>");
// document.write("Now the value of a is : " + (a))
// document.write("<br>")
// document.write("<br>")
// document.write("The value of  a++ is : " + (a++) + "<br>");
// document.write("Now the value of a is : " + (a))
// document.write("<br>")
// document.write("<br>")
// document.write("The value of  a-- is : " + (--a) + "<br>");
// document.write("Now the value of a is : " + (a))
// document.write("<br>")
// document.write("<br>")
// document.write("The value of  a-- is : " + (a) + "<br>");
// document.write("Now the value of a is : " + (--a))

// Q2 Answer ;
// var a = 2;
// var b = 1;
// --a;
// --a - --b;
// --a - --b + ++a;
// --a - --b + ++b + b--;
// document.write("a is" + " " + a + "<br>" , "b is" + " " + b + "<br>");
// document.write("Result is" + " " + (a+b));


// Chapter 8 & 9 ;     /////////

// Q3 Answer ;
// var userName = prompt ("Username");
// document.write(userName);

// Q5 Answer ;
// var num = prompt ('Write number');
// if(num === ""){
//     num=5
// }
// document.write("<h3> Multiplication Table: </h3> <br>");
// document.write(num + " " + " x 1 = " + num * 1 + "<br>");
// document.write(num + " " + " x 2 = " + num * 2 + "<br>");
// document.write(num + " " + " x 3 = " + num * 3 + "<br>");
// document.write(num + " " + " x 4 = " + num * 4 + "<br>");
// document.write(num + " " + " x 5 = " + num * 5 + "<br>");
// document.write(num + " " + " x 6 = " + num * 6 + "<br>");
// document.write(num + " " + " x 7 = " + num * 7 + "<br>");
// document.write(num + " " + " x 8 = " + num * 8 + "<br>");
// document.write(num + " " + " x 9 = " + num * 9 + "<br>");
// document.write(num + " " + " x 10 = " + num * 10 + "<br>");

// Q6 Answer ;
// document.write("<table border = '1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// var subject1 = prompt("Enter Subject One");
// var totalMarks = 100;
// var marksSub1 = parseFloat(prompt("Enter Obtained Marks for " + subject1));
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSub1 + "</td><td>" + (marksSub1 / totalMarks * 100) + " % </td></tr>");
// var subject2 = prompt("Enter Subject Two");
// var marksSub2 = parseFloat(prompt("Enter Obtained Marks for " + subject2));
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSub2 + "</td><td>" + (marksSub2 / totalMarks * 100) + " % </td></tr>");
// var subject3 = prompt("Enter Subject Three");
// var marksSub3 = parseFloat(prompt("Enter Obtained Marks for " + subject3));
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSub3 + "</td><td>" + (marksSub3 / totalMarks * 100) + " % </td></tr>");
// var totalObtain = marksSub1 + marksSub2 + marksSub3;
// document.write("<tr><td>Total</td><td>300</td><td>" + totalObtain + "</td><td>" + (totalObtain / 300 * 100) + " % </td></tr>");
// document.write("</table>");
