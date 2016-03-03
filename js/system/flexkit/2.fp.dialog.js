;(function ($) {
    $$.ui.dialog = new function () {

        this.init = function (option) {
            var el = option.el, func = option.func !== undefined ? option.func : false, title = option.title !== undefined ? option.title : null, width = option.width || 600, height = option.height || 'auto', effect = option.effect || 'fade', classes = option.classes || '', buttons = option.buttons || [], maxHeight = option.maxHeight || ($(window).height() - $(window).height() * 0.1), autoOpen = option.autoOpen !== undefined ? option.autoOpen : false, draggable = option.draggable !== undefined ? option.draggable : true, resizable = option.resizable !== undefined ? option.resizable : false;

            $(el).each(function () {
                var $this = $(this), data = $this.data();

                $this.dialog({
                    autoOpen    : data.dialogAutoopen || autoOpen,
                    modal       : true,
                    show        : {
                        effect : data.dialogEffect || effect
                    },
                    hide        : {
                        effect : data.dialogEffect || effect
                    },
                    title       : data.dialogTitle || title,
                    width       : data.dialogWidth || width,
                    height      : data.dialogHeight || height,
                    buttons     : buttons,
                    resizable   : data.dialogResizable || resizable,
                    draggable   : data.dialogDraggable || draggable,
                    maxHeight   : data.dialogMaxHeight || maxHeight,
                    dialogClass : data.dialogClasses || classes,
                    open        : function (event, ui) {
                        $('body').addClass('wrap');
                        eval('(' + (data.dialogFunc || func) + ')');
                    },
                    close       : function (event, ui) {
                        $('body').removeClass('wrap');
                    }
                });
                if (data.dialogTitle || title) {
                    $(el).dialog('option', 'title', data.dialogTitle || title)
                }
            });
        };
    };
})(jQuery);

// Initialization dialog by pressing the button (.dialog-btn)
$(document).on('click', ".dialog-btn", function () {
    var data = $(this).data();
    if ($(data.dialogElement).dialog('instance')) {
        $(data.dialogElement).dialog('open');
    } else {
        $$.ui.dialog.init({
            'el'        : data.dialogElement,
            'func'      : data.dialogFunc,
            'title'     : data.dialogTitle,
            'width'     : data.dialogWidth,
            'height'    : data.dialogHeight,
            'effect'    : data.dialogEffect,
            'classes'   : data.dialogClasses,
            'autoOpen'  : true,
            'maxHeight' : data.dialogMaxHeight,
            'draggable' : data.dialogDraggable,
            'resizable' : data.dialogResizable
        });
    }
});