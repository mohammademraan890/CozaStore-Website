$(document).ready(() => {
    $(".menuNav").click(() => {
        $(".bottomLinks").toggleClass("active");
    })
    $(".slider").mouseover(() => {
        $(".navigate-btns").removeClass("active")
    })
    $(".slider").mouseout(() => {
        $(".navigate-btns").addClass("active")
    })
    var sliderHeight = $('.slider').height()+$(".topNav").height(); // Get the height of the .slider

    $(window).scroll(function () {
        if ($(window).scrollTop() > sliderHeight) {
            $('.bottomNav').addClass('fixed'); // Add fixed class when scrolled past the slider
            $(" #scrollToTop").addClass("active")
        } else {
            $('.bottomNav').removeClass('fixed'); // Remove fixed class when scrolled above the slider
            $(" #scrollToTop").removeClass("active")

        }
    });


    // ----------POPuP and back to top btn
    $("#showpop").click(() => {
        $(".popup").addClass("active")
    })
    $("#cross").click(() => {
        $(".popup").removeClass("active")
    })
    $("#scrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });
})
    function FormSub(e) {
        e.preventDefault();  // Prevent the form from submitting by default
        
        var emailValue = $(".form-control").val();  // Get the email input value
    
        if (emailValue === "") {
            $("#formErr").text("Email is required.");
        } 
        else if (!emailValue.includes("@")) {
            $("#formErr").text("Enter a valid email address with '@'.");
        } 
        else {
            $("#formErr").text("");  // Clear the error message
            alert("Form submitted successfully!");  // Alert user
    
            // Clear the form input
            $(".form-control").val("");
        }
    }
    
    $(function () {
		
        var filterList = {
        
            init: function () {
            
                // https://mixitup.kunkalabs.com/
                $('#gallery').mixItUp({
                    selectors: {
                    target: '.gallery-item',
                    filter: '.filter'	
                },
                load: {
                  filter: '.print, .strategy, .logo, .web' // show all items on page load.
                }     
                });								
            
            }
    
        };
        
        // Filter ALL the things
        filterList.init();
        
    });