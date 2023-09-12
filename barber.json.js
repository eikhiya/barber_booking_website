
// use the ajax method to load the barber.json file and display the barber 
// information in the div element with id "barbers"

$(document).ready(function() {

    // call ajax method to get barber.json file
    $.ajax({
        type: "get", // get method
        url: "barbers.json", // get the json file
        beforeSend: function() { // display a message while the json file is loading
            $("#barbers").html("Loading...");
        },
        timeout: 10000, // set the timeout to 10 seconds
        dataType: "json" // set the data type to json
    })
    .done( // if the json file is loaded successfully, display the barber information
        function(data) { // get the data from the json file
            $("#barbers").html(""); // display the content in the json file in the div element with id "barbers"
            data.barbers.forEach(function(m) { // loop through the json file
            const barberCard = $("<div>").addClass("barber-card");
            const barberImage = $("<img>").addClass("barber-image").attr("src", m.image);
            const barberName = $("<h3>").addClass("barber-name").text(m.name);
            const barberBio = $("<p>").addClass("barber-bio").text(m.bio);
          
            barberCard.append(barberImage, barberName, barberBio); // append the barber information to the barber card
            $("#barbers").append(barberCard); // append the barber card to the div element with id "barbers"
            });
    })
    .fail(function(xhr, status, error) { // if the json file is not loaded successfully, display an error message
            alert("Error: " + xhr.status + " - " + error);
    });

});