function _progressbar() {
    $(".progressbar").each(function() {
        var value = $(this).data('progressbar-value') ? $(this).data('progressbar-value') : 0,
            maxValue = $(this).data('progressbar-maxvalue') ? $(this).data('progressbar-maxvalue') : 100;
        $(this).progressbar({
            value : value,
            max   : maxValue
        });
    });
}
_progressbar();