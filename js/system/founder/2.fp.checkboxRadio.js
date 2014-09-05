function _checkboxRadio(){
    if(!$('.ie8').length){
        $('input:checkbox, input:radio').not('.processed, .icon, .hidden').each(function(){
            var id = $(this).prop('id'), labelClass;
            if(!id.length){
                id = 'chr-'+Math.floor((Math.random()*100000)+1);
                $(this).prop('id', id);
            }
            if($(this).prop('class') || $(this).prop('class') !== 'undefined'){
                labelClass = $(this).prop('class');
            }
            $(this).addClass('processed');
            if($(this).is(':radio')){
                $(this).addClass('radio-upgrade filed-upgrade');
            }else{
                $(this).addClass('checkbox-upgrade filed-upgrade');
            }
            if(!$(this).closest('.btn-set').length){
                var $parent = $(this).parent('label');
                if($parent.length){
                    $parent.prop({
                        'for' : id
                    });
                    !$(this).hasClass('switcher') ? $(this).after('<span class="checkbox_radio '+labelClass+'"></span>') : $(this).after('<span class="checkbox_radio '+labelClass+'"><span></span></span>');
                }else{
                    !$(this).hasClass('switcher') ? $(this).wrap('<label for="'+id+'" class="checkbox_radio-wrap pointer '+labelClass+'"></label>').after('<span class="checkbox_radio"></span>') : $(this).wrap('<label for="'+id+'" class="checkbox_radio-wrap pointer '+labelClass+'"></label>').after('<span class="checkbox_radio"><span></span></span>');
                }
            }
        });
    }
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