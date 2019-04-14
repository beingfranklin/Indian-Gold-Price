# Indian Gold Price
A simple Node.js module to get the current gold price in rupees.

### What it Does

This module uses the web scraping method to get the latest price of gold from [goldratetoday](https://www.goldratetoday.com) website.  

### A Quick example

```JavaScript
var goldrate = require('indian-gold-price');

goldrate(function(err,rate){
    console.log(rate);
});


```


## How to Install 

```sh
npm install indian-gold-price
```

To save as a dependency and use it in your code

```sh
npm install indian-gold-price --save
```

## Options

Currently there are no options.

### Examples:

```JavaScript
var goldrate = require('indian-gold-price');

goldrate(function(err,rate){
    console.log(rate); // => { withsymbol: '₹ 31,859', tengram: '31859', onegram: 3185.9 }
    console.log(rate.withsymbol); // => ₹ 31,859
    console.log(rate.tengram); // => 31859 
    console.log(rate.onegram);  // =>  3185.9

});

```

![Indian Gold Price](https://raw.githubusercontent.com/beingfranklin/Indian-Gold-Price/master/screenshot.png)

### Tests

No tests written so far.

```
npm install
//npm test
```
