$(document).ready(function() {
    // Hide the popup initially
    $("#popup").hide();

    // Open popup when Contact Us button is clicked
    $("#openPopup").on("click", function(event) {
        event.preventDefault();
        $("#popup").fadeIn();
    });

    // Close popup when close button or outside popup is clicked
    $("#closePopup, .popup").on("click", function(event) {
        if (event.target !== this) return;
        $("#popup").fadeOut();
    });

    // Prevent popup from closing when form inside popup is clicked
    $(".popup-content").on("click", function(event) {
        event.stopPropagation();
    });

    $(document).ready(function() {
        $("#contactForm").submit(function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Serialize form data
            var formData = $(this).serialize();
            
            // Submit form via AJAX
            $.ajax({
                type: "POST",
                url: $(this).attr("action"),
                data: formData,
                success: function(response) {
                    console.log("Form submission successful:", response);
                    alert("Form submitted successfully!");
                    // Optionally, do something after successful submission
                },
                error: function(err) {
                    console.error("Form submission error:", err);
                    alert("Form submission error. Please try again.");
                    // Optionally, handle errors here
                }
            });
        });
    });
    

    // Project section click handler
    $(".project").on("click", function() {
        var imageUrl = $(this).find(".image-column img").attr("src");
        $("#dynamic-image").attr("src", imageUrl);
        $(".project").css("background-color", "#f0f0f0"); // Reset background color
        $(this).css("background-color", "#ff0000"); // Highlight selected project
    });
});

$(document).ready(function() {
    $('.project').on('click', function() {
        $('.project').removeClass('clicked'); // Remove 'clicked' class from all projects
        $(this).addClass('clicked'); // Add 'clicked' class to the clicked project
    });
});

$(document).ready(function() {
    // Project section click handler
    $(".project").on("click", function() {
        var imageUrl = $(this).find(".image-column img").attr("src");
        $("#dynamic-image").attr("src", imageUrl);
        $(".project").removeClass("active"); // Reset active class
        $(this).addClass("active"); // Add active class to clicked project
    });
});
$(document).ready(function() {
    // Project section click handler
    $(".project").on("click", function() {
        // Get the image URL of the clicked project
        var imageUrl = $(this).data("image-url");

        // Update the image in the image box
        $("#dynamic-image").attr("src", imageUrl);

        // Optionally, you can add a class to highlight the selected project visually
        $(".project").removeClass("active"); // Remove active class from all projects
        $(this).addClass("active"); // Add active class to the clicked project
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});
