var today = moment();
          

today = today.format('dddd MMM DD, YYYY');
today = today.toString();
// console.log(today);
var displayDate = $("displayMoment");
$("#displayMoment").append(today);

var currentHour = moment('hh');

