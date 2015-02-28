//require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	alert("hello from main");
  response.success("Hello world!");
});

// added comment - ravi
Parse.Cloud.define("getAllTimeSlots", function(request,response) {
              var query = new Parse.Query(TimeSlot);
			query.find({
			  success: function(results) {
				// results is an array of Parse.Object.
			  },

			  error: function(error) {
				// error is an instance of Parse.Error.
			  }
        });
});