
// timepicker widget

$(document).ready(function(){
    $("#time").timepicker({
        timeFormat: 'h:mm p',   // format the time
        interval: 30,           // set 30 minutes for each appointment 
        minTime: '10',          // set the earliest time for an appointment to 10:00am
        maxTime: '5:00pm',      // set the latest time for an appointment to 5:00pm
        //defaultTime: '',
        //startTime: '10:00',
        dynamic: false,
        dropdown: true,         // enable a dropdown list for easier time selection
        scrollbar: true         // enable the scrollbar for easier scrolling
    });
});
