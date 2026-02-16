
let Membership="Standard";

if(Membership=="Basic"){
  console.log("Basic Membership: Access to only free books.");
}
else if(Membership=="Standard"){
  console.log("Standard Membership: Access to free books and discounted paid books.");
}
else if(Membership=="Premium"){
  console.log("Premium Membership: Access to all books, including exclusive content.")
}
else{
  console.log("Invalid Membership")
}


// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
