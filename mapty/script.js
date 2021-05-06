'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

var options = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 5000,
  zoom: 30,
};

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coords = [latitude, longitude];
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},18.35z/data=!5m1!1e4`
      );
      const map = L.map('map', {
        maxZoom: 18,
        minZoom: 13,
      }).setView(coords, 13);

      map.setZoom(17);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const circle = L.circle(coords, {
        color: '#2b282883',
        fillColor: '##d16882',
        fillOpacity: 0.5,
        radius: 50,
      }).addTo(map);
    },
    function () {
      alert('Location cannot be fetched');
    },
    options
  );
