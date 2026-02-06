let a = 10;
let b = 12;
let c = "10";
console.log("a==b", a == b);
console.log("a===b", a === b);
console.log("a===c", a === c);
console.log("a!=b", a != b);
console.log("a!=c", a != c);
console.log("a!==c", a !== c);
console.log("a>b", a > b);
console.log("a<b", a < b);
console.log("a>=b", a >= b);
console.log("a<=b", a <= b);
// ----------------------------------------------------------------------

let num=1522
let age=23
console.log ( num +" is " + ((num%2==0)?"even":"odd"))
gender=(18<=age)?"Adult":"Minor"
console.log(age+ " is "+gender)


// ----------------------------------------------------------------------

let marks=87
console.log("Marks:" + marks +" "+ ((marks>=90)?"Grand A":(marks>=85)?"Grand B":(marks>=60)?"grand c":(marks>=45)?"Grand D":"Fail"))

// ---------------------------------------------------------------------

let temp=-5
console.log("Temperature "+temp+" "+((temp>30)?"Hot":(temp>=20&&temp<=30)?"Warm":(temp>=10&&temp<=19)?"Cool":"Cold"))

// ------------------------------------------------------

let group=22
console.log("Age: "+group+"Age Group: "+((group>=0&&group<=12)?"Child":(group>=13&&group<=19)?"Teen":(group>=20&&group<=64)?"Adult":"Senior"))

