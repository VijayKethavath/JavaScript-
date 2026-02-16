let Membership="Regular"
let purchaseAmount=400;
let discount=0;
let final=0;

if(Membership=="Regular"){
  if(purchaseAmount<100){
    discount=0;
  }
  else if(purchaseAmount<500 && purchaseAmount>100){
    discount=0.05;
  }
  else{
    discount=0.10;
  }
}
else if(Membership=="VIP"){
  if(purchaseAmount<100){
    discount=0.10;
  }
  else if(purchaseAmount<500 && purchaseAmount>100){
    discount=0.15;
  }
  else{
    discount=0.20;
  }
}
else{
  console.log("Invalid Membership")
}

console.log("Purchase Amount:"+purchaseAmount);
console.log("Discount:"+discount*100+"%");
final=purchaseAmount-(purchaseAmount*discount)
console.log("Final Amount :"+final);

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
