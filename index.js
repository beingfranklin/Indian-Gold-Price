const rp = require('request-promise');
const $ = require('cheerio');
const chalk = require('chalk');
const url = 'https://www.goldratetoday.com/wg-00001.php';

rp(url)
  .then(function(html){
    var goldrate = $(".gr", html).text().trim();
    // console.log(goldrate.length());
    console.log("Todays Gold Rate is " + chalk.yellow.bold(goldrate)+ " per " + chalk.green.italic('10gms.')+ "💫");
  })
  .catch(function(err){
    console.log("🔴 Error in finding the Rate . Please try again later! 🙇")
  });