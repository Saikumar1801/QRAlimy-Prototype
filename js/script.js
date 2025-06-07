// The $(document).ready() function ensures that our code runs only after the
// entire HTML document has been loaded and is ready.
$(document).ready(function() {

    // --- INTERACTIVITY 1: Feature Card Toggle Button ---
    $('.toggle-info-btn').on('click', function() {
        // 'this' refers to the specific button that was clicked.
        // .siblings('.more-info') finds the element with the class 'more-info'
        // that is next to the button's parent.
        const infoDiv = $(this).siblings('.more-info');
        
        // slideToggle() is a JQuery function that animates the height of the element
        // to show or hide it. 400 is the duration in milliseconds.
        infoDiv.slideToggle(400);

        // We can also change the button's text to be more user-friendly.
        // We check if the infoDiv is currently visible after the toggle.
        if (infoDiv.is(':visible')) {
            $(this).text('Hide Details');
        } else {
            $(this).text('Show Details');
        }
    });


    // --- INTERACTIVITY 2: Parking Form Backend Communication (AJAX) ---

    // Part A: Submitting the form data
    $('#parking-form').on('submit', function(event) {
        // event.preventDefault() stops the browser's default behavior of
        // reloading the page when a form is submitted.
        event.preventDefault();

        // .serialize() is a handy JQuery function that gathers all the form input data
        // and turns it into a string ready to be sent to the server.
        // (e.g., "vehicle_plate=CAR123&parking_spot=A-05")
        const formData = $(this).serialize();

        // We use JQuery's $.ajax() method to communicate with our PHP script.
        $.ajax({
            type: 'POST',           // The method we're using to send data.
            url: 'api/parking.php', // The path to our server-side script.
            data: formData,         // The data we are sending.
            dataType: 'json',       // We expect a JSON response from the server.
            
            // The 'success' function runs if the server responds successfully.
            success: function(response) {
                // We'll display the success message from the server in our #form-response div.
                $('#form-response').html('<p style="color: green;">' + response.message + '</p>');
                // We also clear the form fields for the next entry.
                $('#parking-form')[0].reset();
            },

            // The 'error' function runs if something goes wrong with the request.
            error: function() {
                $('#form-response').html('<p style="color: red;">Error: Could not connect to the server.</p>');
            }
        });
    });

    // Part B: Retrieving the stored data
    $('#retrieve-data-btn').on('click', function() {
        $.ajax({
            type: 'GET',            // The method for requesting data.
            url: 'api/parking.php', // We talk to the same PHP script.
            dataType: 'json',       // We expect JSON back.
            
            success: function(response) {
                const dataDiv = $('#retrieved-data');
                // The server will tell us if the retrieval was a success and will send the data.
                if (response.success && response.data) {
                    // We build some HTML to display the retrieved data.
                    let content = '<h4>Last Stored Information:</h4>' +
                                  '<p><strong>Vehicle Plate:</strong> ' + response.data.vehicle_plate + '</p>' +
                                  '<p><strong>Parking Spot:</strong> ' + response.data.parking_spot + '</p>';
                    dataDiv.html(content);
                } else {
                    // If no data was found, the server will send a different message.
                    dataDiv.html('<p style="color: #d9534f;">' + response.message + '</p>');
                }
            },
            error: function() {
                $('#retrieved-data').html('<p style="color: red;">Error: Could not retrieve data from the server.</p>');
            }
        });
    });

});