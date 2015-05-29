$(document).ready(function() {
    

    $(".readmore").click(function(event) {

     
        event.preventDefault();

        var hiddenDiv = $(this).siblings("#show-this-on-click");
        var readless = $(this).siblings(".readless");

        // Slide the hidden div down
        $(hiddenDiv).slideDown("slow", function() {
      
        });

        // Show the "Read Less" button
        $(readless).show();

        // Hide the "Read More" button
        $(this).hide();

    });








    //  clicking the "Read Less" button

    $(".readless").click(function(event) {


      
        event.preventDefault();

        var hiddenDiv = $(this).siblings("#show-this-on-click");
        var readmore = $(this).siblings(".readmore");
        var _this = this;

        // Slide the hidden div up
        $(hiddenDiv).slideUp("slow", function() {
            

            // Show the "Read More" button
            $(_this).hide();

            // Hide the "Read Less" button
            $(readmore).show();
        });

    });











    

    // clicking the "Learn More" button

    $(".learnmore").click(function(event) {

       
        event.preventDefault();

       
        var hiddenDiv = $(this).siblings("#learnmoretext");

        // Hide the "Learn More" button
        $(this).hide();
        
        // Slide the hidden div down
        $(hiddenDiv).slideDown("slow", function() {
            
        });

    });

});