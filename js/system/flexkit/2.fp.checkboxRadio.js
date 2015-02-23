function _checkboxRadio(){
//    if(!$('.ie8').length){
        $('input:checkbox, input:radio').not('.processed, .icon, .hidden').each(function(){

            var id = $(this).prop('id'), labelClass;
            if(!id){
                id = 'chr-'+Math.floor((Math.random()*100000)+1);
                $(this).prop('id', id);
            }

            labelClass = $(this).prop('class') || '';

            $(this).addClass('processed');

            if($(this).is(':radio')){
                $(this).addClass('radio-upgrade filed-upgrade');
            }else{
                $(this).addClass('checkbox-upgrade filed-upgrade');
            }

            if(!$(this).closest('.btn-group').length){
                var $parent = $(this).parent('label');
                var $span = $('<span class="checkbox_radio"></span>');

                if($(this).hasClass('switcher')){
                    $span.append('<span></span>');
                }

                if($parent.length){
                    $parent.prop('for', id);
                    $span.addClass(labelClass);
                }else{
                    var $label = $('<label></label>');
                    $label.addClass('checkbox_radio-wrap pointer ' + labelClass).prop('for', id);
                    $(this).wrap($label);
                }

                $(this).after($span);
            }
        });
//    }
}
_checkboxRadio();

//$(function(){
//    $('body').on('DOMNodeInserted', function(event) {
//        if (event.type == 'DOMNodeInserted') {
//            _checkboxRadio()
//        } else {
//        }
//    });
//})
//
//$(document).ajaxStop(function(){
//    _checkboxRadio();
//});