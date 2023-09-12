
// datepicker widget 

$(document).ready(function() {
    $("#date").datepicker({
        dateFormat: "mm-dd--yy",
        beforeShowDay: function(date) {
            var day = date.getDay(); // get the day of the week
            var today = new Date(); // get the current date
            var twoWeeksLater = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000)); // get current date plus 14 days

            // set the conditions for the calendar
            if (day > 0 && day < 6) { // Monday-Friday
                if (date >= today && date <= twoWeeksLater) { // can book an appointment two weeks in advance
                    return [true, "open"]; // 
                }
                else { // cannot book an appointment more than two weeks in advance
                    return [false, "Closed"];
                }
            }
            else { // close on Saturday and Sunday
                  return [false, "Closed"];
            }
        }
    });
});