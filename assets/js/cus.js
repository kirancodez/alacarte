 


  AOS.init();
$('.element').on('click', function() {
     $(this).toggleClass("active");
});
$(window).ready(function()
{
    var $container = $('#isotope_container');

    $container.isotope({
    animationEngine: 'best-available',
    itemSelector: '.isotope_selector'
    });

    // filter items when filter link is clicked
    $('#isotope_filters button').on('click', function() {
    var selector = $(this).data('filter');
    $container.isotope({
    filter: selector
    });

}); 



    $(document).on('click', '.food_items',function () {
        $('.food_items').removeClass("active");
        $(this).addClass("active");
    });


});
var waypoint = new Waypoint({
  element: document.getElementById('counter_trigger'),
  handler: function(direction) {
    if (direction=='down')
     {
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end:    100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});

   }
  }
})
ScrollReveal().reveal('.reaveal');
    /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });

     $('.grid').drystone({
    /* Default Options */
    //The selector for the items in the grid.
    item: '.grid-item',
    //The vertical and horizontal space between each item in the grid
    gutter: 10,
    //See below for explanation
    xs: [576, 1],
    sm: [768, 2],
    md: [992, 2],
    lg: [1200, 3],
    xl: 3,
    //Runs after plugin finishes
    onComplete: function() {}

});


    
  

  


