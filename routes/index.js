var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
//const axios = require('axios').default; // first need to run: "npm install axios --save" from the command-line

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



/* GET Yelp Test page. */
router.get('/yelp_test', function(req, res, next) {
  var API_KEY = process.env.YELP_API_KEY || "4tOGmvhaVhwWA8BkRHAexxQza0EGS_5ZmIHEjcES2JqPnNO5goFUUHwXS1baEz_nzcvTya-jQJce4hMMpxWAa8PKA3PfWjxlso2tHUGRr-Lr-cBUo3VXdw7yJ1qVYHYx" // TODO: use env vars instead of hard-coding
  // todo: dynamically compile this url based on form data
  // https://www.yelp.com/developers/documentation/v3/business_search
  var requestUrl = "https://api.yelp.com/v3/businesses/search?location=20015&price=3"
  var requestOptions = {
      headers: {
          Authorization: `Bearer ${API_KEY}`,
          //"Content-type": "application/json",
      } // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
  }
  console.log(requestOptions)
  fetch(requestUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
          console.log("DATA", data) // this is the data you're looking for
          // todo: pass the data to the page!
      })
      .catch(err => {
          console.error("FETCH ERR", err)
      })
  res.render('hello', {message:"HELLO"}) // todo: use a different page!
});





module.exports = router;
