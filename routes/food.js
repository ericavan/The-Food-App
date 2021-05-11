/*var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const axios = require('axios').default;*/


/* GET Yelp Test = stocks form page. */
/*router.get('/yelp_test', function(req, res, next) {
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
            //console.log(response.data.location)
            //console.log(response.data.total)
            //console.log(response.data.region)
            // todo: flash and render page and pass data to page
            //res.render('hello', {message:"HELLO"}) // todo: use a different page!
            //var name = req.query.name || "Traveler"
            //var message = "Hello, " + name
            var message = response.data.businesses[0].name + 
            res.render('food', { message: message });
            //res.render('hello', {restaurant1: restaurant1});
          })
          .catch(function (error) {
            console.log("ERR:", error)
            // todo: flash error message and redirect
            res.render('food', {message:"Error Caught"}) // todo: use a different page!
          })
          .then(function () {
            console.log("DONE...")
          })
      });
      
      
      
      module.exports = router;*/