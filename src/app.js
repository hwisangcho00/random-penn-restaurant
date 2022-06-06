window.$ = window.jQuery = require('jquery');

const rest_container = document.getElementById('restaurant');
const get_rest_btn = document.getElementById('get_restaurant');


get_rest_btn.addEventListener('click', () => createRestaurant());

const createRestaurant = () => {

  $.getJSON('./restaurant.json', function(data) {
    var random = data.featured[Math.floor(Math.random() * data.featured.length)];
    alert(random.name);
  });
}