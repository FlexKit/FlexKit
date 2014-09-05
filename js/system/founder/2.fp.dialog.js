function _dialog(){
    $(".dialog-btn").each(function(){
        var el = $(this).data('dialog-element'),
            open = $(this).data('dialog-open') ? $(this).data('dialog-open') : false;
        $(el).dialog({
            autoOpen    : open,
            modal       : true,
            maxHeight   : ($(window).height()-$(window).height()*0.1)
        });
//        $(this+'.settings').dialog('option', 'buttons', [
//            //        {
//            //            text    : "Cancel",
//            //            'class' : 'inverse-red small mr-grid',
//            //            click   : function(){
//            //                $(this).dialog("close");
//            //            }
//            //        },
//            {
//                text    : "Save",
//                'class' : 'success small',
//                click   : function(){
//                    location.reload();
//                }
//            }
//        ]);
    });
    $(document).on('click', ".dialog-btn", function(){
        var el = $(this).data('dialog-element'),
            effect = $(this).data('dialog-effect') ? $(this).data('dialog-effect') : 'fade',
            title = $(this).data('dialog-title') ? $(this).data('dialog-title') : false,
            classes = $(this).data('dialog-classes') ? $(this).data('dialog-classes') : '',
            width = $(this).data('dialog-width') ? $(this).data('dialog-width') : 600,
            height = $(this).data('dialog-height') ? $(this).data('dialog-height') : 'auto',
            draggable = $(this).data('dialog-draggable') ? $(this).data('dialog-draggable') : false,
            resizable = $(this).data('dialog-resizable') ? $(this).data('dialog-resizable') : false;
        $(el).dialog({
            autoOpen : true,
            show     : {
                effect : effect
            },
            hide     : {
                effect : effect
            },
            dialogClass : classes,
            width       : width,
            height      : height,
            resizable   : resizable,
            draggable   : draggable
        });
        if(title){
            $(el).dialog('option', 'title', title)
        }
    });
}
_dialog();