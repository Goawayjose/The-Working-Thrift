var main = function(){
    
    
/* SHOPPING PAGES NAVIGATION CHANGES */
   $('#back li a').click(function(e) {

        $('#back li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
    
/* END OF SHOPPING PAGES NAVIGATION CHANGES */
}

$(document).ready(main);