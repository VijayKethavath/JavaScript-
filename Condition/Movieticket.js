let Day="Monday";
let age=66;
let price=0;
let discount=0;

if(Day=="Monday"||Day=="Tuesday"||Day=="wednesday"||Day=="Thrusday"){
  console.log("Standard price is $12")
  price=12;
   if(age<=12|| age>=65){
    discount=0.50;
   }
}
else{
  console.log("Standard price of $15");
  price=15;
  if(age<=12|| age>=65){
    discount=0.30;
   }
}

console.log("Tictek price:"+price);
console.log("Discount:"+(discount*100)+"%");
console.log("Final Tickek price :"+(price-(price*discount)));



// Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.

