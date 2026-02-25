function sum(val, callback) {
  callback(val + 10);
  sub(40, (a) => console.log(a));
}
sum(10, (a) => console.log(a));


function sub(val, callback) {
  callback(val - 10);
  mul(4, (a) => console.log(a));
}


function mul(val, callback) {
  callback(val * 10);
  div(500, (a) => console.log(a));
}


function div(val, callback) {
  callback(val / 10);
}


console.log("--------------------------------------");
console.log("start");

setTimeout(()=>{
  console.log("first cell");
},5000);

for(i=0;i<=5;i++){
  console.log(i);
  
}

setTimeout(()=>{
  console.log("Second cell");
},3000);



