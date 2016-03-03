;(function ($) {
    $$.ui.autocomplete = function () {
        $(".autocomplete").each(function () {
            var tags = $(this).data('tags').split(/\s*,\s*/);
            $(this).autocomplete({
                source : tags
            });
        });
    };
})(jQuery);