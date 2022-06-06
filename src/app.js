window.$ = window.jQuery = require('jquery');

const rest_container = document.getElementById('restaurant');
const get_rest_btn = document.getElementById('get_restaurant');


get_rest_btn.addEventListener('click', () => createRestaurant());

const createRestaurant = () => {

  $.getJSON('./restaurant.json', function(data) {
    var random = data.featured[Math.floor(Math.random() * data.featured.length)];
    
    var name = random.name;
    var type = random.type;
    var price = random.price;

    rest_container.innerHTML = '<br><br><h4> Name : '+name+'</h4>'+'<h4> Cuisine Type : '+type+'</h4>'+'</h4>'+'<h4> Price : '+price+'</h4>';

    get_rest_btn.innerHTML = 'Get Another One!';

  });
}