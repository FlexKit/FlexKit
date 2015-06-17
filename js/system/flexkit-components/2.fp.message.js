//function showMessage(msg, type, delay) {
//    if (!msg) {
//        return false;
//    }
//    type = type || '';
//    delay = typeof delay === 'undefined' ? 3000 : delay;
//    var message = $('<div/>', {'class' : 'message large ' + type, 'html' : msg});
//    //message.append($('<a/>', {'class' : 'btn-close icon-cancel icon12 error', 'href' : "javascript:;"}));
//    $('#message-container').html(message);
//
//    if (delay) {
//        var timer = setTimeout(function () {
//            message.fadeOut(function () {
//                $(this).remove();
//            });
//        }, delay);
//
//        message.on('mouseover', function () {
//            clearTimeout(timer);
//        }).on('mouseout', function () {
//            timer = setTimeout(function () {
//                message.fadeOut(function () {
//                    $(this).remove();
//                });
//            }, delay);
//        });
//    }
//
//    message.on('click', function () {
//        $(this).remove();
//    });
//}

function showMessage(msg, classes, delay) {
    if (classes && classes.indexOf('error')) {
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
}

function hideMessage() {
    $('.smoke-base').remove();
}

function showConfirm(msg, classes, yesCallback, noCallback) {
    if(typeof classes === 'function'){
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
    }, {classname : classes, ok : 'Yes', cancel : 'No'});
}

function showNotification(msg, type, delay) {
    if (!msg) {
        return false;
    }
    type = type || '';
    delay = typeof delay === 'undefined' ? 3000 : delay;
    var message = $('<div/>', {'class' : 'message notification ' + type, 'html' : msg});
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
}