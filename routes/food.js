//var fetch = require('node-fetch');
//var express = require('express');
//var router = express.Router();



//const API_KEY = process.env.ALPHAVANTAGE_API_KEY || "abc123" // obtain your own api key and set via environment variable





//router.get('/form', function(req, res, next) {
//  res.render("food_form");
//});

//router.post('/dashboard', function(req, res, next) {
//  console.log("FORM DATA", req.body)
//  var symbol = req.body.symbol || "OOPS"
//  console.log("STOCK SYMBOL", symbol)

//  var requestUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}` // using string interpolation here, but you could alternatively do concatenation with + operators
//  console.log("REQUEST URL", requestUrl)

//  fetch(requestUrl)
//    .then(function(response) {
//        return response.json()
//    })
//    .then(function(data){
//        console.log("STOCK DATA SUCCESS", Object.keys(data))
//        var latestClose = Object.values(data["Time Series (Daily)"])[0]["5. adjusted close"]
        //req.flash("success", "Stock Data Request Success!")
//        res.render("food_dashboard", {symbol: symbol, data: JSON.stringify(data), latestClose: latestClose});
//      })
//    .catch(function(err){
//      console.log("STOCK DATA ERROR:", err)
//      //req.flash("danger", "OOPS, Please check your inputs and try again.")
//      res.redirect("/food/form")
//    })
//});

//module.exports = router;