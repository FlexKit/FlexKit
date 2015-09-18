function _chosen() {
    if($(".chosen-select").length || $(".chosen-select-deselect").length) {
        $(".chosen-select").chosen({
            no_results_text        : "Oops, nothing found!",
            width                  : "100%",
            inherit_select_classes : true
        });
        $(".chosen-select-deselect").chosen({
            allow_single_deselect : true
        });

        // Don't hide dropdown after selection on a multiple select
        // https://github.com/harvesthq/chosen/issues/2310#issuecomment-93372444
        var chosen = $(".chosen-select.chosen-dropdownshow").data('chosen');
        if(chosen) {
            var autoClose = false;
            var chosen_resultSelect_fn = chosen.result_select;
            chosen.search_contains = true;
            chosen.result_select = function(evt) {
                var resultHighlight = null;
                if(autoClose === false) {
                    evt['metaKey'] = true;
                    evt['ctrlKey'] = true;
                    resultHighlight = chosen.result_highlight;
                }
                var stext = chosen.get_search_text();
                var result = chosen_resultSelect_fn.call(chosen, evt);
                if(autoClose === false && resultHighlight !== null)
                    resultHighlight.addClass('result-selected');

                this.search_field.val(stext);
                this.winnow_results();
                this.search_field_scale();

                return result;
            };
        }
    }
}
_chosen();