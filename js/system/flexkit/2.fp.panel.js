var $header = $('.panel.collapse').find('.panel-header');
if($('.panel-content:hidden').lenght) {
    $header.prepend('<i class="icon-plus collapse-btn"></i>');
} else {
    $header.prepend('<i class="icon-minus collapse-btn"></i>');
}
$(document).on('click', '.collapse-btn', function() {
    $btn = $(this);
    $(this).closest('.panel-header').nextAll('.panel-content, .panel-footer').slideToggle(function() {
        if($(this).is(':hidden')) {
            $btn.addClass('icon-plus').removeClass('icon-minus');
        } else {
            $btn.addClass('icon-minus').removeClass('icon-plus');
        }
    });
});