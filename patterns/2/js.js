 let name = document.getElementById("name")
    let ename = document.getElementById("ename")

    name.addEventListener("input", () => {
      let pname = /^[A-Za-z0-9]{3,36}$/;
      if (name.value === "") {
        ename.innerText = ""
        ename.style.display = 'none'
      }
      else if (!pname.test(name.value)) {
        ename.innerText = "User Name is invalid.Minimum 3 to maximum 35 characters allowed. Only letter and number are allowed"
        ename.style.display = 'block'
      }
      else {
        ename.innerText = ""
        ename.style.display = 'none'
      }
    })


    let fname = document.getElementById("fname")
    let efname = document.getElementById("efname")

    fname.addEventListener("input", () => {
      let pname = /^[A-Za-z]{3,36}$/;
      if (fname.value === "") {
        efname.innerText = ""
        efname.style.display = 'none'
      }
      else if (!pname.test(fname.value)) {
        efname.innerText = "Full Name is invalid.Minimum 3 to maximum 35 characters allowed."
        efname.style.display = 'block'
      }
      else {
        efname.innerText = ""
        efname.style.display = 'none'
      }
    })

    let password = document.getElementById("password")
    let epassword = document.getElementById("epassword")

    password.addEventListener("input", () => {

      let pattern = /^([?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;
      if (password.value === "") {
        epassword.innerText = ""
        epassword.style.display = "none"
      }
      else if (!pattern.test(password.value)) {
        epassword.innerText = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
        epassword.style.display = 'block'
      }
      else {
        epassword.innerText = ""
        epassword.style.display = 'none'
      }

    })

    let confirm = document.getElementById("confirm")
    let econfirm = document.getElementById("econfirm")

    confirm.addEventListener("input", () => {
      if (confirm.value === "") {
        econfirm.innerText = ""
        econfirm.style.display = 'none'
      }
      else if (password.value !== confirm.value) {
        econfirm.innerText = "Passwords do not match."
        econfirm.style.display = 'block'
      }
      else {
        econfirm.innerText = ""
        econfirm.style.display = 'none'
      }

    })

    let email = document.getElementById("email")
    let eemail = document.getElementById("eemail")

    email.addEventListener("input", () => {

      let pattern = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

      if (email.valuee === "") {
        eemail.innerText = ""
        eemail.style.display ='none'
      }
      else if (!pattern.test(email.value)) {
        eemail.innerText = "Invalid email address"
        eemail.style.display ='block'
      }
      else {
        eemail.innerText = ""
        eemail.style.display ='none'
      }
    })

    let no = document.getElementById("no")
    let eno = document.getElementById("eno")

    no.addEventListener("input", () => {

      let pattern = /^[6-9][0-9]{9}$/

      if (no.valuee === "") {
        eno.innerText = ""
        eno.style.display ="none"
      }
      else if (!pattern.test(no.value)) {
        eno.innerText = "Invalid Number "
        eno.style.display = "block"
      }
      else {
        eno.innerText = ""
        eno.style.display ="none"
      }
    })


