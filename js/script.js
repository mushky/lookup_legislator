$(function() {
  $("form#get-zip").submit(function() {
  	var zip = $("input#zip").val();
  	$.get("http://congress.api.sunlightfoundation.com/legislators/locate?apikey=397475356b4e4282af49ba7ee2f26043&zip=" + zip)
  	.done(function(responseJSON) {
  		responseJSON.results.forEach(function(legislator) {
  			 $("ul#legislators").append("<li>" + legislator.first_name + " " + legislator.last_name + " (" + legislator.chamber + ")</li>");
  		});
  	});

  	return false;
  });
});