var goldrate = require('indian-gold-price');

// log the current price of gold
goldrate(function(err,price){
    console.log(price);
});