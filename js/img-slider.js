$(document).ready(function() 
{
    /* Activate first paging link */
    $(".paging a:first").addClass("active");

    /* Get size of the image reel window, how many images there are, then determine the size of the image reel */
    var imageWidth = $(".window").width();
    var imageSum = $(".image_reel img").size();
    var imageReelWidth = imageWidth * imageSum;

    //Adjust the image reel to its new size
    $(".image_reel").css({'width' : imageReelWidth});

    //Paging  and Slider Function
    rotate = function()
    {
        var triggerID = $active.attr("rel") - 1; /* Get number of times to slide */
        var image_reelPosition = triggerID * 460; /* Determine distance image reel needs to slide (width = 460px) */

        $(".paging a").removeClass('active'); /* Remove the "active" class */
        $active.addClass('active'); /* Add "active" class (the $active is declared in the rotateSwitch function) */

        /* Slider Animation */
        $(".image_reel").animate({
            left: -image_reelPosition
        }, 500 );

    }; 

    /* Rotation and Timing Event */
    rotateSwitch = function()
    {
        play = setInterval(function()
        { /* Set timer - this will repeat itself every 5 seconds */
            $active = $('.paging a.active').next(); /* Move to the next paging */
            if ( $active.length == 0) 
            { /* If paging reaches the end... */
                $active = $('.paging a:first'); /* ...go back to first */
            }
            rotate(); /* Trigger the paging and slider function */
        }, 5000); /* Timer speed in milliseconds (5 seconds) */
    };

    rotateSwitch(); /* Run function on launch */

    /* On Hover... */
    $(".image_reel a").hover(function() 
    {
        clearInterval(play); /* ...stop the rotation */
    }, function() 
    {
        rotateSwitch(); /* Resume rotation timer */
    });	

    /* On Click... */
    $(".paging a").click(function() 
    {
        $active = $(this); /* ...activate the clicked paging... */
        /* ...and Reset Timer */
        clearInterval(play); /* Stop the rotation */
        rotate(); /* Trigger rotation immediately */
        rotateSwitch(); /* Resume rotation timer */
        return false; /* Prevent browser jump to link anchor */
    });

});