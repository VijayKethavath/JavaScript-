
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault(); 


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const pincode = document.getElementById("pincode").value.trim();

  if (!name || !email || !phone || !address || !city || !state || !pincode) {
    alert("Please fill all fields!");
    return;
  }

  window.location.href = "last.html";
});