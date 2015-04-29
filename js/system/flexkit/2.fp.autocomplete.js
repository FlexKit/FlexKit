function _autocomplete() {
    $(".autocomplete").each(function() {
        var tags = $(this).data('tags').split(/\s*,\s*/);
        $(this).autocomplete({
            source : tags
        });
    });
}
_autocomplete();