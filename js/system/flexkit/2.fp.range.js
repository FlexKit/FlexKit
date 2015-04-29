function _range() {
    var $range = $(".range");
    $range.slider();
    $range.each(function() {

        var step = $(this).data('range-step'),
            type = $(this).data('range-type'),// min, max or true
            value = $(this).data('range-value'),
            values = $(this).data('range-values'),
            minValue = $(this).data('range-minvalue'),
            maxValue = $(this).data('range-maxvalue'),
            orientation = $(this).data('range-orientation');


        if(typeof step !== 'undefined') {
            $(this).slider("option", "step", step);
        }
        if(typeof type !== 'undefined') {
            $(this).slider("option", "range", type);
        }
        if(typeof value !== 'undefined') {
            $(this).slider("option", "value", value);
        }
        if(typeof values !== 'undefined') {
            $(this).slider("option", {
                range  : true,
                values : values.split(/\s*,\s*/)
            });
        }
        if(typeof minValue !== 'undefined') {
            $(this).slider("option", "min", minValue);
        }
        if(typeof maxValue !== 'undefined') {
            $(this).slider("option", "max", maxValue);
        }
        if(typeof orientation !== 'undefined') {
            $(this).slider("option", "orientation", orientation);
        }
    });
//
//    $range
//        .on("slide slidechange", function(event, ui){
//            var element = $(this).data('range-element'),
//                template = $(this).data('range-template')
//
//            if(typeof element !== 'undefined' && typeof template !== 'undefined'){
//                $(element).html(template);
//            }else if(typeof element !== 'undefined' && typeof values !== 'undefined'){
//                $(element).html($(this).slider());
//            }else if(typeof element !== 'undefined'){
//                $(element).html($(this).slider());
//            }
//        });
}
_range();