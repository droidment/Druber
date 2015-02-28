//require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	alert("hello from main");
  response.success("Hello world!");
});
