
  const input = document.getElementById("username");
  const errorMsg = document.getElementById("errorMsg");

  input.addEventListener("input", function () {
    const pattern = /^[A-Za-z0-9]{3,35}$/;

    if (!pattern.test(input.value)) {
      input.classList.add("error");
      errorMsg.style.display = "block";
    } else {
      input.classList.remove("error");
      errorMsg.style.display = "none";
    }
  });

  const fname=document.getElementById("fname")

  fname.addEventListener("input", ()=>{
      const pattern =/^[A-Za-z0-9]{3,9}/

      if(!pattern.test(fname.value)){
        fname.classList.add("error")
        console.log(fname);
        errorMsg.style.display='block'
        
      }
      else{
        fname.classList.remove("error")
        errorMsg.style.display = "none";
      }
  })
