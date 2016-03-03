(function ($) {
    $$.ui.spinner = new function () {
        var spinnersCount = 0;

        this.show = function () {
            spinnersCount++;
            $('#spinner, #spinner-overlay').show();
        };

        this.hide = function () {
            spinnersCount--;
            if (spinnersCount < 0) {
                spinnersCount = 0;
            }
            if (spinnersCount === 0) {
                $('#spinner, #spinner-overlay').hide();
            }
        };
    };
})(jQuery);