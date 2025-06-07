$(document).ready(function() {
    // Hide loading overlay after a short delay
    setTimeout(() => {
        $('#loadingOverlay').addClass('hidden');
    }, 500); // 0.5 second delay

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Feature card toggle functionality
    $('.toggle-info-btn').on('click', function() {
        const $this = $(this);
        const infoDiv = $this.siblings('.more-info');
        
        infoDiv.slideToggle(400, function() {
            if (infoDiv.is(':visible')) {
                $this.text('Hide Details');
            } else {
                $this.text('Show Details');
            }
        });
    });

    // --- REAL BACKEND INTEGRATION ---

    // Parking form submission (AJAX POST to PHP)
    $('#parking-form').on('submit', function(e) {
        e.preventDefault();
        const formData = $(this).serialize(); // Use serialize for real form submission

        // Provide user feedback
        $('#form-response').html('<div style="color: #f59e0b;">Processing...</div>').removeClass('success-message error-message');

        $.ajax({
            type: 'POST',
            url: 'api/parking.php',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if(response.success) {
                    $('#form-response').html(`<div style="font-weight: 500;">✅ ${response.message}</div>`).addClass('success-message');
                    $('#parking-form')[0].reset();
                } else {
                    $('#form-response').html(`<div>❌ ${response.message || 'An unknown error occurred.'}</div>`).addClass('error-message');
                }
            },
            error: function() {
                $('#form-response').html(`<div>❌ Error: Could not connect to the server.</div>`).addClass('error-message');
            }
        });
    });

    // Data retrieval (AJAX GET from PHP)
    $('#retrieve-data-btn').on('click', function() {
        $('#retrieved-data').html('<div style="color: #f59e0b;">Fetching data...</div>').removeClass('success-message error-message');

        $.ajax({
            type: 'GET',
            url: 'api/parking.php',
            dataType: 'json',
            success: function(response) {
                if (response.success && response.data) {
                    $('#retrieved-data').html(`
                        <div style="text-align: left; width: 100%;">
                            <h4 style="margin-bottom: 1rem; color: #10b981;">📋 Retrieved Information:</h4>
                            <p><strong>Vehicle Plate:</strong> ${response.data.vehicle_plate}</p>
                            <p><strong>Parking Spot:</strong> ${response.data.parking_spot}</p>
                        </div>
                    `).addClass('success-message');
                } else {
                    $('#retrieved-data').html(`<div>⚠️ ${response.message}</div>`);
                }
            },
            error: function() {
                $('#retrieved-data').html(`<div>❌ Error: Could not retrieve data from the server.</div>`).addClass('error-message');
            }
        });
    });

    // Smooth scrolling for navigation links
    $('nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // Adjust offset for sticky nav
            }, 800);
        }
    });

    // Add subtle parallax effect to body background
    $(window).on('scroll', function() {
        const scrolled = $(this).scrollTop();
        // Slower parallax effect
        $('body').css('background-position', `center ${scrolled * 0.2}px`);
    });
});