$(document).ready(function() {

//listen for click on hamburger
    $('.icon').on('click', function(event) {
        //slide down nav display
        $('header ul').slideToggle();
    });

    $('.menu-item-breakfast').on('click', function (event){
        event.preventDefault();
        $('.hide-menu-breakfast').slideToggle();
    });
    $('.menu-item-lunch').on('click', function (event){
        event.preventDefault();
        $('.hide-menu-lunch').slideToggle();
    });
    $('.menu-item-dinner').on('click', function (event){
        event.preventDefault();
        $('.hide-menu-dinner').slideToggle();
    });
    $('.menu-item-drinks').on('click', function (event){
        event.preventDefault();
        $('.hide-menu-drinks').slideToggle();
    });



   /* $('.full-page').waypoint(function(direction) {
        if(direction === 'down') {
            console.log($(this.element));
            $(this.element).removeClass('full-page');
         } else if (direction === 'up') {
             console.log($(this.element));
             $(this.element).addClass('full-page');
         }
         }, {offset: '-2%'
     
     });*/

     /*if ($(window).scrollTop() > 0) {
    $('header').removeClass('full-page');
};*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('header').removeClass('full-page');
    } else {
        $('header').addClass('full-page');
    }
}







});