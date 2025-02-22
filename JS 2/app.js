// Chapter 5 MATH EXPRESSIONS


// // Question No 1

var num1 = 3;
var num2 = 5;
var addNum = num1 + num2;
document.write("Sum of 5 and 3 is ", addNum);


// // Question No 2

var num1 = 21;
var num2 = 7;
var subNum = num1 - num2;
document.write("<br> Sub of 21 and 7 is ", subNum);

var num1 = 6;
var num2 = 8;
var multiNum = num1 * num2;
document.write("<br> Multiplication of 6 and 8 is ", multiNum);

var num1 = 90;
var num2 = 6;
var diviNum = num1 / num2;
document.write("<br> Division of 90 by 6 is ", diviNum);

var num1 = 11;
var num2 = 3;
var remainderNum = num1 % num2;
document.write("<br> Remainder from 11 by 3 is ", remainderNum);


// // Question No 3

/*a*/  var myVariable;
/*b*/  document.write("<br><br> Value after variable declaration is: " + myVariable);
/*c*/  myVariable = 50;
/*d*/  document.write("<br> Initial value: " + myVariable);
/*e*/  var myVariable = ++myVariable;
/*f*/  document.write("<br> Value after Increment is: " + myVariable);
/*g*/  var myVariable = myVariable + 7;
/*h*/  document.write("<br> Value after addition is: " + myVariable);
/*i*/  var myVariable = --myVariable;
/*j*/  document.write("<br> Value after Decrement is: " + myVariable);
/*k*/  var myVariable = myVariable % 3;
/*l*/  document.write("<br> The remainder is : " + myVariable);


// // Question No 4

var ticketPrice = 600;
document.write("<br><br> Total cost to buy 5 tickets to a movie is ", ticketPrice * 5, "PKR");


// // Question No 5

document.write("<br><br> <b>'Table of 44'</b>");
var table44 = 44;
document.write("<br> 44 x 1 = ", table44 * 1);
document.write("<br> 44 x 2 = ", table44 * 2);
document.write("<br> 44 x 3 = ", table44 * 3);
document.write("<br> 44 x 4 = ", table44 * 4);
document.write("<br> 44 x 5 = ", table44 * 5);
document.write("<br> 44 x 6 = ", table44 * 6);
document.write("<br> 44 x 7 = ", table44 * 7);
document.write("<br> 44 x 8 = ", table44 * 8);
document.write("<br> 44 x 9 = ", table44 * 9);
document.write("<br> 44 x 10 = ", table44 * 10);


// // Question No 6

var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write("<br><br> ", celsiusTemp, "<sup>o</sup>C is ", fahrenheitTemp, "<sup>o</sup>F");
fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write("<br>", fahrenheitTemp, "<sup>o</sup>C is ", celsiusTemp, "<sup>o</sup>F");


// // Question No 7

document.write("<br><br><h2>Shopping Cart</h2>");
var priceItem1 = "Price of item 1";
var orderedItem1 = "Ordered quantity of item 1";
var priceItem2 = "Price of item 2";
var orderedItem2 = "Ordered quantity of item 2";
var shippingCharges = "Shipping Charges";
var totalCost = "Total cost of your order";

document.write("<br>", priceItem1, " is ", 650);
document.write("<br>", orderedItem1, " is ", 3);
document.write("<br>", priceItem2, " is ", 100);
document.write("<br>", orderedItem2, " is ", 5);
document.write("<br>", shippingCharges, " are ", 100);
document.write("<br><br>", totalCost, " is ", 650 + 100 + 100);


// // Question No 8

document.write("<br><br><h2>Mark Sheet</h2>")
var totalMarks = 980;
var marksObt = 804;

document.write("<br> Total Marks: ", totalMarks);
document.write("<br> Marks Obtained: ", marksObt);
document.write("<br> Percentage: ", marksObt * 100 / totalMarks, "%");


// // Question No 9

document.write("<br><br><h2>Currency in PKR</h2>");
document.write("<br> Total Currency in PKR: ", (10 * 104.80) + (25 * 28));


// // Question No 10

var myNum = 7;

document.write(((myNum + 5) * 10) / 2);


// // Question No 11

document.write("<br><br><h2>Age Calculator</h2>");

var currentYear = 2025;
var birthYear = 2002;

var age1 = currentYear - birthYear;
var age2 = age1--;

document.write("They are either ", age1, " OR ", age2, " year old.");


// // Question No 12

document.write("<br><br><h2>The Geometrizer</h2>");

var radius = 20;
var circumference = 2 * 3.142 * 20;
var area = 3.142 * radius ** 2;


document.write("<br> Radius of a circle is: ", radius);
document.write("<br> The Circumference is: ", circumference);
document.write("<br> The Area is: ", area);


// // Question No 12

document.write("<br><br><h2>The Lifetime Supply Calculator:</h2>");

var favSnack = "Nuts";
var currentAge = 23;
var maxAge = 62;
var amountPerDay = 3;

var lifeTimeSupply = (maxAge - currentAge) * amountPerDay;


document.write("<br> Favourite Snap: ", favSnack);
document.write("<br> Current Age: ", currentAge);
document.write("<br> Estimated Maximum Age: ", maxAge);
document.write("<br> Amount of Snack per day: ", amountPerDay);
document.write("<br> You will need ", lifeTimeSupply, " Nuts to last you until the ripe old age of 63");









///// Chapter 6-9 MATH EXPRESSIONS /////


// Question No 1

document.write("<br><br> Result:");
document.write("<br>The value is: ", 10);
document.write("<br>..............................");

var a = 10;

document.write("<br><br>The value of ++a is: ", ++a);
document.write("<br>Now the value of a is: ", a);

document.write("<br><br>The value of a++ is: ", a++);
document.write("<br>Now the value of a is: ", a);

document.write("<br><br>The value of --a is: ", --a);
document.write("<br>Now the value of a is: ", a);

document.write("<br><br>The value of a-- is: ", a--);
document.write("<br>Now the value of a is: ", a);


// Question No 2


var x = 2;
var y = 1;
var result = x + y;

document.write("<br><br> x is: ", 2);
document.write("<br> ", "y is: ", 1);

document.write("<br><br> --x is: ", --x);
document.write("<br><br> --x - --y is: ", --y);
document.write("<br><br> --x - --y + ++y is: ", ++y);
document.write("<br><br> --x - --y + ++y + y-- is: ", y--);
document.write("<br><br> Result is ", result, "<br><br>");



// Question No 3

var whatName = prompt("What is your Name?");
document.write("Welcome ", whatName, "<br><br>");


// Question No 4/5


var number = prompt("Enter a number", "5");
document.write("<h2>Multiplication Table of ", number, "</h2>");

document.write(number, " x 1 = ", (number * 1), "<br>")
document.write(number, " x 2 = ", (number * 2), "<br>")
document.write(number, " x 3 = ", (number * 3), "<br>")
document.write(number, " x 4 = ", (number * 4), "<br>")
document.write(number, " x 5 = ", (number * 5), "<br>")
document.write(number, " x 6 = ", (number * 6), "<br>")
document.write(number, " x 7 = ", (number * 7), "<br>")
document.write(number, " x 8 = ", (number * 8), "<br>")
document.write(number, " x 9 = ", (number * 9), "<br>")
document.write(number, " x 10 = ", (number * 10), "<br>")




// Question No 6

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var marks2 = +prompt("Enter Obtained Marks for " + subject2 + ":");
var marks3 = +prompt("Enter Obtained Marks for " + subject3 + ":");

var totalObtained = marks1 + marks2 + marks3;

var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h4>Subject - Total Marks - Obtained Marks - Percentage</h4>");

document.write(subject1 + " &nbsp;&nbsp;&nbsp;&nbsp; " + totalMarks + " &nbsp;&nbsp;&nbsp;&nbsp; " + marks1 + " &nbsp;&nbsp;&nbsp;&nbsp; " + (marks1 / totalMarks) * 100 + "% <br>");
document.write(subject2 + " &nbsp;&nbsp;&nbsp;&nbsp; " + totalMarks + " &nbsp;&nbsp;&nbsp;&nbsp; " + marks2 + " &nbsp;&nbsp;&nbsp;&nbsp; " + (marks2 / totalMarks) * 100 + "% <br>");
document.write(subject3 + " &nbsp;&nbsp;&nbsp;&nbsp; " + totalMarks + " &nbsp;&nbsp;&nbsp;&nbsp; " + marks3 + " &nbsp;&nbsp;&nbsp;&nbsp; " + (marks3 / totalMarks) * 100 + "% <br><br>");
document.write("<b>Total: </b>" + (totalMarks * 3) + " &nbsp;&nbsp;&nbsp;&nbsp; " + totalObtained + " &nbsp;&nbsp;&nbsp;&nbsp; " + percentage.toFixed(2) + "%");






////// Home PDF //////
////// Chapter 6 (Math Expression II) //////


// Question No 1

var x = 2, y = ++x;

// Question No 2

var a = 100;
b = --a;

// Question No 3

var x = 50;
var y = x++;
// The Value of Y will be '50'


// Question No 4

var y = 50;
var z = --y;
// The Value of z will be '49'


// Question No 5

var num = 10;
var newNum = num--;

// Question No 6

var num = 10;
var newNum2 = num++;

// Question No 7

var myNum = 5;
var myNum2 = ++myNum;
alert(myNum2);







////// Chapter 6 (Math Expression III) //////


// Question No 1

var calculatedNum = 2 + (2 * 6);
// The Value of calculatedNum will be '14'


// Question No 2

var calculatedNum1 = (2 + 2) * 6;
// The Value of calculatedNum1 will be '24'


// Question No 3

var calculatedNum2 = (2 + 2) * (4 + 2);
// The Value of calculatedNum2 will be '24'


// Question No 4

var calculatedNum0 = ((2 + 2) * 4) + 2;
// The Value of calculatedNum0 will be '18'


// Question No 5

var calculatedNum3 = (2 + 2) * (4 + 10);
// The Value of calculatedNum3 will be '56'


// Question No 6

var calculatedNum4 = 2 + (2 * 4) + 10;
// The Value of calculatedNum4 will be '20'


// Question No 7 is wrong it will never become 5 anyhow //






////// Chapter 8 (Concatenating Text Strings) //////


// Question No 1

var num = "2" + "2";
// The Value of num will be '22'


// Question No 2

var message = "Hello " + "Dolly";
// The Value of message will be 'Hello Dolly'
alert(message);


// Question No 3

var num = "33" + 3;
// The Value of num will be '333'


// Question No 4

var pak = "Pakistan " + "Zindabad";
// The Value of pak will be 'Pakistan Zindabad'
alert(pak);


// Question No 5

var age = "Age " + 18;
// The Value of age will be 'Age 18'
alert(age);


// Question No 6

var stg1 = "Hello ";
var stg2 = "World";
var result = stg1 + stg2;
// The Value of result will be 'Hello World'
alert(result);






////// Chapter 9 (Prompts) //////



// Question No 1

var firstName = prompt("Enter first name");

// Question No 2

var country = prompt("Country", "China");

// Question No 3

var yourName = prompt("Enter Your Name");

// Question No 4

var greet = prompt("How are you?");

// Question No 5

var val1 = "What is your field?";
var val2 = "JS Developer";
var result1 = prompt(val1, val2);

// Question No 6

var msg = prompt("Where are you from?", "Karachi");
alert(msg);




////////////////// THE END //////////////////
