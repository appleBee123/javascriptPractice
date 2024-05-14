
    // Declaring the variables
    let lon;
    let lat;
    let temperature = document.querySelector(".temp");
    let summary = document.querySelector(".summary");
    let loc = document.querySelector(".location");
    let icon = document.querySelector(".icon");
    const kelvin = 273;
    
    window.addEventListener("load", () => {
      if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = "101.43.35.9";
      lat = "55.20.19.0";
    
      // API ID
      const api = "6adcc08846fe8af83a9f1352a85d326d";
    
      // API URL
      const base =
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
    `lon=${lon}&appid=6adcc08846fe8af83a9f1352a85d326d`;
    
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = 
              `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
        });
    });
      }
    });
    
