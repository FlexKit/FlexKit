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
        var data = $(this).data();
        dialogInit({
            'el'        : data.dialogElement,
            'func'      : data.dialogFunc,
            'title'     : data.dialogTitle,
            'width'     : data.dialogWidth,
            'height'    : data.dialogHeight,
            'effect'    : data.dialogEffect,
            'classes'   : data.dialogClasses,
            'autoOpen'  : data.dialogAutoopen,
            'draggable' : data.dialogDraggable,
            'resizable' : data.dialogResizable
        });
    });
}
_dialog();

function dialogInit(option) {
    var el = option.el,
        func = option.func !== undefined ? option.func : false,
        title = option.title !== undefined ? option.title : false,
        width = option.width || 600,
        height = option.height || 'auto',
        effect = option.effect || 'fade',
        classes = option.classes || '',
        buttons = option.buttons || [],
        autoOpen = option.autoOpen !== undefined ? option.autoOpen : true,
        draggable = option.draggable !== undefined ? option.draggable : false,
        resizable = option.resizable !== undefined ? option.resizable : false;

    $(el).each(function(){
        var $this = $(this),
            data = $this.data();

        $this.dialog({
            autoOpen    : data.dialogAutoopen || autoOpen,
            modal       : true,
            show        : {
                effect : data.dialogEffect || effect
            },
            hide        : {
                effect : data.dialogEffect || effect
            },
            //title       : data.dialogTitle || title,
            width       : data.dialogWidth || width,
            height      : data.dialogHeight || height,
            buttons     : buttons,
            resizable   : data.dialogResizable || resizable,
            draggable   : data.dialogDraggable || draggable,
            maxHeight   : ($(window).height() - $(window).height() * 0.1),
            dialogClass : data.dialogClasses || classes,
            open        : function(event, ui){
                eval('(' + (data.dialogFunc || func) + ')');
            }
        });
        if(data.dialogTitle || title){
            $(el).dialog('option', 'title', data.dialogTitle || title)
        }
    });
}