function _chosen(){
    if($(".chosen-select").length || $(".chosen-select-deselect").length){
        $(".chosen-select").chosen({
            no_results_text : "Oops, nothing found!",
            width           : "100%"
        });
        $(".chosen-select-deselect").chosen({
            allow_single_deselect : true
        });
    }
}
_chosen();