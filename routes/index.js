var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const axios = require('axios').default; // first need to run: "npm install axios --save" from the command-line



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Food App' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET hello page. */
router.get('/hello', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  var message = "Hello, " + name
  res.render('hello', { message: message });
});

router.get('/food', function(req, res, next) {
  var message =  "Cuisine Form"
  res.render('food', { message: message });

});

/* GET API Data after gathering form criteria */
router.get('/food_results', function(req, res, next) {
  var API_KEY = process.env.YELP_API_KEY || "4tOGmvhaVhwWA8BkRHAexxQza0EGS_5ZmIHEjcES2JqPnNO5goFUUHwXS1baEz_nzcvTya-jQJce4hMMpxWAa8PKA3PfWjxlso2tHUGRr-Lr-cBUo3VXdw7yJ1qVYHYx" // TODO: use env vars instead of hard-coding
  // https://www.yelp.com/developers/documentation/v3/business_search
  var requestUrl = "https://api.yelp.com/v3/businesses/search"
  console.log("REQUEST URL:", requestUrl)
  // https://github.com/axios/axios
  var requestOptions = {
      headers: {
          Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        location: "Washington, DC", // todo use form data
        price: 3 // todo use form data
      }
  }
  console.log("REQUEST OPTIONS:", requestOptions)
  axios.get(requestUrl, requestOptions)
    .then(function (response) {
      //console.log("RESPONSE:", response)
      console.log("DATA:", response.data)
      console.log("DATA TOTAL:", response.data.total)
      console.log("First Data Point Name: ", response.data.businesses[0].name)

      // todo: flash and render page and pass data to page
      //res.render('hello', {message:"HELLO"}) // todo: use a different page!

      var firstResult = response.data.businesses[0].name
      var secondResult = response.data.businesses[1].name
      var thirdResult = response.data.businesses[2].name
      var fourthResult = response.data.businesses[3].name
      var fifthResult = response.data.businesses[4].name
      res.render('food_results', { firstResult: firstResult, secondResult: secondResult, thirdResult: thirdResult, fourthResult: fourthResult, fifthResult: fifthResult });
      //res.render('hello', {restaurant1: restaurant1});
    })
    .catch(function (error) {
      console.log("ERR:", error)
      // todo: flash error message and redirect
      res.redirect("/stocks/form")
      //res.render('food_results', {message:"Error Caught"}) // todo: use a different page!
    })
    .then(function () {
      console.log("DONE...")
    })
});

//router.post('/dashboard', function(req, res, next) {


//});


module.exports = router;