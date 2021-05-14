var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const axios = require('axios').default; // first need to run: "npm install axios --save" from the command-line



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GetGrub' });
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
  var message =  "Per Diem Food Questionnaire"
  res.render('food', { message: message });
  
});

/* GET API Data after gathering form criteria */
router.post('/food_results', function(req, res, next) {
  console.log("PASSED DATA: ", req.body)
  var formlocation = req.body.locationinput
  console.log("LOCATION: ", formlocation)
  var formprice = req.body.priceinput
  console.log("PRICE: ", formprice)


  var API_KEY = process.env.YELP_API_KEY
  // https://www.yelp.com/developers/documentation/v3/business_search
  var requestUrl = "https://api.yelp.com/v3/businesses/search"
  console.log("REQUEST URL:", requestUrl)
  // https://github.com/axios/axios
  var requestOptions = {
      headers: {
          Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        location: formlocation,
        price: formprice
      }
  }
  console.log("REQUEST OPTIONS:", requestOptions)
  axios.get(requestUrl, requestOptions)
    .then(function (response) {
      //console.log("RESPONSE:", response)
      console.log("DATA:", response.data)
      console.log("DATA TOTAL:", response.data.total)
      //console.log("First Data Point Name: ", response.data.businesses[0].name)

      // todo: flash and render page and pass data to page
      req.flash("success", "GetGrub Data Request Success!")
       var message = "Food Results"
      res.render('food_results', { message: message, businesses: response.data.businesses})
    })
    .catch(function (error) {
      console.log("ERR:", error)
      // todo: flash error message and redirect
      req.flash("danger", "OOPS, Please check your inputs and try again.")
      res.redirect("/food")
      //res.render('food_results', {message:"Error Caught"}) // todo: use a different page!
    })
    .then(function () {
      console.log("DONE...")
    })
});



module.exports = router;