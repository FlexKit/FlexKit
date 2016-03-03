;(function ($) {
    $$.ui.chosen = function () {
        if ($(".chosen-select").length || $(".chosen-select-deselect").length) {
            $(".chosen-select").chosen({
                no_results_text        : "Oops, nothing found!",
                width                  : "100%",
                inherit_select_classes : true
            });
            $(".chosen-select-deselect").chosen({
                allow_single_deselect : true
            });
        }
    };
})(jQuery);