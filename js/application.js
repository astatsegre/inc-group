$(document).ready(function() {
    $('form').css('display', 'none');
    $('.leave-request h2').on('click', function(){
       $('form').slideToggle(); 
    });
});