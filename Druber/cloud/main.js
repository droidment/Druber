//require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	alert("hello from main");
  response.success("Hello world!");
});

// added comment - ravi
Parse.Cloud.define("getAllTimeSlots", function(request,response) {
              var query = new Parse.Query("TimeSlot");
			  query.include("doctorPointer");
			  
			query.find({
			  success: function(results) {
				// results is an array of Parse.Object.
				response.success(results);
			  },

			  error: function(error) {
				// error is an instance of Parse.Error.
				response.error(error);
			  }
        });
});

Parse.Cloud.define("getValidTimeSlotsNearPatient", function(request,response) {
			var lat = request.params.lat;
			var lon = request.params.lon;
			var range = request.params.range;
			var timeRange =  request.params.timeRange; // 1d, 2d, 1h, 2h, etc.
			
            var query = new Parse.Query("TimeSlot");
			query.include("doctorPointer");
			 
			var point = new Parse.GeoPoint(lat, lon);			
			query.select("objectId","location","displayAddress", "displayName");
			query.near("location", point);
			
			query.find({
			  success: function(results) {
				// results is an array of Parse.Object.
				response.success(results);
			  },

			  error: function(error) {
				// error is an instance of Parse.Error.
				response.error(error);
			  }
        });
});