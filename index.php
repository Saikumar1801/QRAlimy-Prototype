<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QRAlimy Prototype - JEJECOMMS</title>
    
    <!-- This links to our stylesheet which we will create next -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <header>
        <h1>QRAlimy</h1>
        <p>Your Digital Connection, Instantly.</p>
    </header>

    <nav>
        <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#parking-sim">Parking Demo</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>

    <main>
        <!-- Section for QRAlimy Features -->
        <section id="features">
            <h2>Core Features</h2>
            <div class="feature-card">
                <h3>Mobile Business Cards</h3>
                <p>Dynamic, shareable, and eco-friendly. Your professional identity, reimagined.</p>
                <!-- This button will be made interactive with JavaScript -->
                <button class="toggle-info-btn">Show Details</button>
                <div class="more-info">
                    <p>Our templates are fully customizable. Add your social media, portfolio links, and contact information. Update it anytime, and everyone with your QR code gets the latest version.</p>
                </div>
            </div>
        </section>

        <!-- Section for the PHP Parking Simulator -->
        <section id="parking-sim">
            <h2>Parking Information Simulator</h2>
            <p>A simple demo of data submission and retrieval using PHP and JQuery.</p>
            
            <!-- Form for data submission -->
            <form id="parking-form">
                <input type="text" id="vehicle-plate" name="vehicle_plate" placeholder="Vehicle Plate (e.g., 123 ABC)" required>
                <input type="text" id="parking-spot" name="parking_spot" placeholder="Parking Spot (e.g., A-05)" required>
                <button type="submit">Store Parking Info</button>
            </form>

            <!-- This div will show messages from the server (e.g., "Success!") -->
            <div id="form-response"></div>

            <!-- Area to retrieve and display data -->
            <div class="retrieval-area">
                <h3>Retrieve Stored Info</h3>
                <button id="retrieve-data-btn">Get Last Stored Info</button>
                <div id="retrieved-data">
                    <p>No data retrieved yet.</p>
                </div>
            </div>
        </section>

        <!-- A simple about section -->
        <section id="about">
            <h2>About JEJECOMMS</h2>
            <p>We are innovators in digital communication solutions.</p>
        </section>
    </main>

    <footer>
        <p>© 2024 JEJECOMMS Co,.LTD. All rights reserved.</p>
    </footer>

    <!-- IMPORTANT: Load JQuery CDN *before* your custom script file -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
    <!-- This links to our JavaScript file for interactivity -->
    <script src="js/script.js"></script>

</body>
</html>