
window.addEventListener('load', () => {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector('.temperature__description');
  let degree = document.querySelector('.degree');
  let locationTimezone = document.querySelector('.location__timezone');
  const container = document.querySelector('.container');
  const temperature = document.querySelector('.temperature');
  container.style.opacity = '1';
  temperature.style.transform = 'rotateX(0)';
  locationTimezone.style.transform = 'translateX(0)';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=87c91d044f1df178d985d9fa71744e99`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temp } = data.current;
          const { description } = data.current.weather[0];
          const celcius = temp - 273.15;
          const fahrenheit = Math.floor(celcius * (9 / 5) + 32);
          // set dom elements from the api
          degree.textContent = fahrenheit;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = data.timezone;
        })
    })
  }
})

// Event Listeners



// Functions