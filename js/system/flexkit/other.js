// Show button "Top" at the scrolling of documents
var topBox = $('<div id="go-top"></div>').css({
    position  : 'fixed',
    bottom    : '20px',
    right     : '20px',
    'z-index' : '555',
    'cursor'  : 'pointer',
    'display' : 'none'
}).addClass('btn icon icon-arrow-up7');

if (!device.type) {
    $('body').append(topBox);
    $(window).scroll(function (e) {
        $(window).scrollTop() <= 300 ? $('#go-top').hide('slow') : $('#go-top').show('slow');
    });
}


$(document).on('click', '#go-top', function (e) {
    $("html, body").animate({scrollTop : 0}, 1000);
}).on('click', function (e) {
    var dropdownEl = $('.dropdown-menu, .dropdown-btn');
    var container = $('.dropdown-menu');
    if (!dropdownEl.is(e.target) && dropdownEl.has(e.target).length === 0) {
        $('.dropdown-btn').removeClass('active');
        container.hide();
    }
}).on('click', '.dropdown-btn', function (e) {
    $(this).toggleClass('active');
    var dropdownData = $(this).data();
    $(dropdownData.dropdownMenu).toggle();
});