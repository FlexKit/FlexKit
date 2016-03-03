(function ($) {
    $$.ui.message = new function () {

        this.show = function (msg, classes, delay) {
            if (classes && classes.indexOf('error') !== -1) {
                smoke.alert(msg, function (e) {
                }, {
                    classname : classes
                });
                return;
            }
            smoke.signal(msg, function (e) {
            }, {
                duration  : delay || 3000,
                classname : classes || ''
            });
        };

        this.hide = function () {
            $('.smoke-base').remove();
        };
    };

    $$.ui.confirm = function (msg, classes, yesCallback, noCallback) {
        if (typeof classes === 'function') {
            noCallback = yesCallback;
            yesCallback = classes;
            classes = '';
        }
        smoke.confirm(msg, function (e) {
            if (e) {
                if (yesCallback) {
                    yesCallback();
                }
            } else {
                if (noCallback) {
                    noCallback();
                }
            }
        }, {
            classname      : classes,
            ok             : 'Yes',
            cancel         : 'No',
            reverseButtons : true
        });
    };

    $$.ui.notification = function (msg, type, delay) {
        if (!msg) {
            return false;
        }
        type = type || '';
        delay = typeof delay === 'undefined' ? 3000 : delay;
        var message = $('<div/>', {
            'class' : 'message notification ' + type,
            'html'  : msg
        });
        $('#notification-container').append(message);

        if (delay) {
            var timer = setTimeout(function () {
                message.fadeOut(function () {
                    $(this).remove();
                });
            }, delay);

            message.on('mouseover', function () {
                clearTimeout(timer);
            }).on('mouseout', function () {
                timer = setTimeout(function () {
                    message.fadeOut(function () {
                        $(this).remove();
                    });
                }, delay);
            });
        }

        message.on('click', function () {
            $(this).remove();
        });
    };
})(jQuery);