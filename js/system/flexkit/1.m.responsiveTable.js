///////// Responsive table /////////
function tableResponsive() {
    $('table.responsive').each(function() {
        var $tableTr = $('tr', this);
        var $tableTh = $('th', this);
        var allHeadersSaved = new Array();

        $tableTh.each(function() {
            var headerContent = $(this).text();
            allHeadersSaved.push(headerContent);
        });

        $.each(allHeadersSaved, function(i, v) {
            $tableTr.find('td:eq(' + i + ')').prepend('<span class="table-head">' + v + '</span>');
        });
    });
}