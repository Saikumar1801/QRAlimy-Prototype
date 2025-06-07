<?php
// session_start() must be the very first thing in your script,
// before any HTML or other output is sent. It initializes the session.
session_start();

// We're telling the browser that the content we're sending back is JSON.
// This is crucial for our JQuery/AJAX call to parse it correctly.
header('Content-Type: application/json');

// $_SERVER['REQUEST_METHOD'] gives us the HTTP method used for the request (e.g., 'GET', 'POST').
$method = $_SERVER['REQUEST_METHOD'];

// --- BRANCH 1: Handle a POST request (to store data) ---
if ($method === 'POST') {
    
    // It's good practice to sanitize user input to prevent security issues like XSS.
    // htmlspecialchars() converts special characters to HTML entities.
    // The null coalescing operator (??) provides a default value if the POST variable isn't set.
    $plate = htmlspecialchars($_POST['vehicle_plate'] ?? 'N/A');
    $spot = htmlspecialchars($_POST['parking_spot'] ?? 'N/A');

    // Store the sanitized data in the session superglobal.
    // This data will persist as long as the user's session is active.
    $_SESSION['parking_data'] = [
        'vehicle_plate' => $plate,
        'parking_spot' => $spot
    ];

    // Create an associative array for our response.
    $response = [
        'success' => true,
        'message' => 'Parking information stored successfully!'
    ];

    // Use json_encode() to convert the PHP array into a JSON string and send it back.
    echo json_encode($response);

} 
// --- BRANCH 2: Handle a GET request (to retrieve data) ---
elseif ($method === 'GET') {

    // Check if the 'parking_data' key exists in our session.
    if (isset($_SESSION['parking_data'])) {
        // If it exists, create a success response including the data.
        $response = [
            'success' => true,
            'data' => $_SESSION['parking_data']
        ];
    } else {
        // If no data has been stored yet, create a response indicating that.
        $response = [
            'success' => false,
            'message' => 'No parking data has been stored in this session yet.'
        ];
    }

    echo json_encode($response);

} 
// --- BRANCH 3: Handle any other type of request ---
else {
    // If the request is not GET or POST, it's not allowed.
    http_response_code(405); // Set HTTP status code to "405 Method Not Allowed"
    $response = ['error' => 'Method not allowed'];
    echo json_encode($response);
}
?>