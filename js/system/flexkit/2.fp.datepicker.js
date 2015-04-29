function _datepicker() {
    if(!device.type) {
        $(".datepicker").datepicker({dateFormat : "dd/mm/yy"});
    } else {
        $(".datepicker").prop('type', 'date');
    }
}
_datepicker();