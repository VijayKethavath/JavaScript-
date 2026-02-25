function sum(val,callback){
  callback(val+10);
}
function sub(val,callback){
  callback(val-10);
}
function mul(val,callback){
  callback(val*10);
}
function div(val,callback){
  callback(val/10);
}

sum(100,(sumres)=>{
  console.log(sumres);

  sub(sumres,(subres)=>{
    console.log(subres);

    mul(subres,(muli)=>{
      console.log(muli);

      div(muli,(divi)=>{
        console.log(divi);
      })
    })
    
  })
})


console.log("----------------------------------")

function order(callback){
  callback("order place");
}
function track(callback){
  callback("tracking order");
}
function dispatch(callback){
  callback("dispatch done");
}
function dliver(callback){
  callback("delivery completed");
}

order(res1=>{
  console.log(res1);

  track(res2=>{
    console.log(res2);

    dispatch(res3=>{
      console.log(res3);

      dliver(res4=>{
        console.log(res4);
        
      })
    })

  })
})