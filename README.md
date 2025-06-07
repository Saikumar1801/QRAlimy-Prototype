# JEJECOMMS Front-end Developer Competency Test: QRAlimy Prototype

This repository contains the source code for a responsive and interactive web interface prototype, developed as part of the competency assessment for a Front-end Web Developer role at JEJECOMMS Co,.LTD.

The project demonstrates a foundational understanding of core web technologies including **HTML, CSS, JavaScript, JQuery, and PHP**.

---

## 🚀 Live Demo

A static version of the front-end is deployed on Netlify. Please note that the PHP-dependent features (the Parking Information Simulator) will not be functional on this static host. The full functionality is demonstrated in the accompanying video presentation.

**Live URL:** **[https://[YOUR_NETLIFY_DEPLOYMENT_URL]](https://[YOUR_NETLIFY_DEPLOYMENT_URL])**

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Setup and Installation](#-setup-and-installation)
- [How to Run Locally](#-how-to-run-locally)
- [Project Structure](#-project-structure)

---

## 📝 Project Overview

The goal of this task was to develop a prototype user interface for a core feature of JEJECOMMS’ service, QRAlimy. The project showcases:

1.  **Responsive Design:** A webpage layout that seamlessly adapts to both desktop and mobile viewports using CSS media queries.
2.  **Interactive UI:** Dynamic elements powered by JavaScript and JQuery to create an engaging user experience.
3.  **Backend Integration:** A simple backend simulation using PHP to handle data submission and retrieval without page reloads, demonstrating a full front-to-back data flow.

---

## ✨ Features

-   **Responsive Layout:** The interface includes a header, sticky navigation bar, main content area, and footer, all of which are responsive.
-   **Interactive Feature Card:** A "Show/Hide Details" button uses a JQuery `slideToggle()` effect to reveal more information about the QRAlimy service.
-   **Parking Information Simulator:**
    -   **Data Submission:** A form allows users to input parking information. On submission, the data is sent to a PHP script via an asynchronous **AJAX POST request**.
    -   **Data Retrieval:** A button triggers an **AJAX GET request** to the same PHP script to fetch the last stored information and display it on the page.
    -   **Temporary Data Storage:** The PHP backend uses `$_SESSION` to temporarily store the submitted data, simulating a simple database interaction.

---

## 💻 Technology Stack

-   **Front-End:**
    -   HTML5 (Semantic Markup)
    -   CSS3 (Flexbox, Media Queries, Transitions)
    -   JavaScript (ES6)
    -   JQuery (for DOM manipulation and AJAX)
-   **Back-End:**
    -   PHP (for handling API requests and session management)
-   **Development Environment:**
    -   [XAMPP](https://www.apachefriends.org/index.html) (Apache Server)

---

## 🛠️ Setup and Installation

To run this project on your local machine, you will need a local server environment that can execute PHP, such as XAMPP, MAMP, or WAMP.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/jejecomms-qralimy-prototype.git
    ```

2.  **Move the project folder:**
    -   Place the entire `jejecomms-qralimy-prototype` folder into the `htdocs` directory of your XAMPP/MAMP installation.

---

## ▶️ How to Run Locally

1.  **Start your local server:**
    -   Open your XAMPP/MAMP control panel and start the **Apache** service.

2.  **Access the project:**
    -   Open your web browser and navigate to the following URL:
    -   `http://localhost/jejecomms-qralimy-prototype/`

You should now see the fully functional website, including the interactive Parking Information Simulator.

---

## 📁 Project Structure

The project is organized into a clear and maintainable structure:
```bash
qralimy-prototype/
│
├── index.php # Main HTML structure and entry point
├── README.md # Project documentation (this file)
│
├── api/
│ └── parking.php # PHP script for handling backend logic
│
├── css/
│ └── style.css # All CSS styles for the application
│
├── js/
│ └── script.js # JavaScript and JQuery for interactivity
│
└── assets/ # Folder for static assets like images
```
