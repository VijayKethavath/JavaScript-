function showData() {
  let input = document.getElementById("input");
  let city = document.getElementsByClassName("city")[0];

  if (input.value == "") {
    alert("Please Enter the city");
  } else {
    getcity(input.value);
    city.innerHTML = `<p>${input.value}<p>`;
    input.value = "";
  }
}

async function getcity(city) {
  const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "243fdf7926msh5aea6e8fef14f9ep1cf2fbjsna0be481f9c61",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    show(result.main);
    wind(result.wind.speed);
  } catch (error) {
    console.error(error);
    alert("Please enter Correct City")
  }
}

function show(data) {
  let temp = document.getElementsByClassName("temp")[0];
  let hum = document.getElementById("Humidity");
  let img = document.getElementById("img");
  let desc = document.getElementsByClassName("desc")[0];
  let temperature = data.temp;

  temp.innerHTML = `<p>${data.temp}°</p>`;
  hum.innerHTML = `<p>${data.humidity}%</p>`;

  if (temperature > 86) {
    img.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // sunny
    desc.innerHTML = "Sunny";
  } else if (temperature > 68) {
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; // partly cloudy
    desc.innerHTML = "cool/cloudy";
  } else {
    img.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // cool/cloudy
    desc.innerHTML = "cool/cloudy";
  }
}

function wind(speed) {
  let wind = document.getElementById("wind");
  wind.innerHTML = `<p>${speed}Km/h</p>`;
}
