"use strict";

function goldrate(callback, err) {
  let request = require('request');
  let cheerio = require('cheerio');
  const url = 'https://www.goldratetoday.com/wg-00001.php';

  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      //scrapes the gold rate with the symbol
      let result = cheerio(".gr", html).text().trim();

      if (result) {
        // Slices the rupee symbol and comma for better clarity
        let newresult = result.match(/\d/g).join("");
        callback(null, {
          withsymbol: result,
          tengram: newresult,
          onegram: newresult / 10.0
        });
      } else {
        callback("Nothing Found!")
      }
    }
  });
}
module.exports = goldrate;