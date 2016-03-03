;(function ($) {
    $$.ui.checkboxRadio = function () {
        $('input:checkbox, input:radio').not('.filed-nonUpgrade, .filed-upgrade, .icon, .hidden').each(function () {

            var id = $(this).prop('id'), labelClass = '';
            if (!id) {
                id = 'chr-' + Math.floor((Math.random() * 100000) + 1);
                $(this).prop('id', id);
            }

            if ($(this).data('clone-classes')) {
                labelClass = $(this).prop('class') || '';
            }

            $(this).addClass('filed-upgrade');

            if (!$(this).closest('.btn-group').length) {
                var $label = $('<label/>', {
                    class : 'checkbox_radio ' + labelClass,
                    for   : id,
                    title : $(this).prop('title')
                });

                var $parent = $(this).parent('label');
                if ($parent.length) {
                    $parent.prop('for', id);
                }

                $(this).after($label);
            }
        });
    };
})(jQuery);

//$(function(){
//    $('body').on('DOMNodeInserted', function(event) {
//        if (event.type === 'DOMNodeInserted') {
//            _checkboxRadio();
//        } else {
//        }
//    });
//});
//
//$(document).ajaxStop(function(){
//    _checkboxRadio();
//});