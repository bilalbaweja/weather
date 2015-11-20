$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.

    var d = new Date();
    var weekday = new Array(10);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Sunday";
    weekday[8] = "Monday";
    weekday[9] = "Tuesday";
    var n = weekday[d.getDay()];
    var o = weekday[(d.getDay()+1)];
    var p = weekday[(d.getDay()+2)];
    var q = weekday[(d.getDay()+3)];
        
    var markup = "Hello, it's " +  Date(data.currently.time) + "." + "<br>" + "<br>" + "We are currently looking at " + data.currently.summary + " weather." + "The general forecast for the next 10 days is " + data.daily.summary + " The detailed forecast for the next 3 days is below."
    var markup1= ("<h2>" + o + "</h2>") + "<br>" + "The weather on " + o +" is "  + data.daily.data[1].summary + " with minimum temperature of " + data.daily.data[1].temperatureMin +" F and maximum temperature of " + data.daily.data[1].temperatureMax + " F."
    var markup2= ("<h2>" + p + "</h2>") + "<br>" + "The weather on " + p +" is "  + data.daily.data[2].summary + " with minimum temperature of " + data.daily.data[2].temperatureMin +" F and maximum temperature of " + data.daily.data[2].temperatureMax + " F."
    var markup3= ("<h2>" + q + "</h2>") + "<br>" + "The weather on " + q +" is "  + data.daily.data[3].summary + " with minimum temperature of " + data.daily.data[3].temperatureMin +" F and maximum temperature of " + data.daily.data[3].temperatureMax + " F."
   

    $('.weather-report1').html(markup1);
    $('.weather-report2').html(markup2);
    $('.weather-report3').html(markup3);
    // End of your code

    $('.weather-report').html(markup);

  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    }); was
  });
});