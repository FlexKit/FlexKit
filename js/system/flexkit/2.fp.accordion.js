function _accordion() {
    $(".accordion").accordion({
        heightStyle : "content",
        icons       : {
            "header"       : "icon-arrow-right2",
            "activeHeader" : "icon-arrow-down2"
        } // or false
    }).each(function() {
        var $this = $(this),
            dataIcon = $this.data('accordion-icons');
        if(dataIcon == false) {
            $this.accordion("option", "icons", false);
        }
        if(dataIcon !== false && typeof dataIcon !== 'undefined') {
            var iconClass = dataIcon.split(/\s*,\s*/);
            $this.accordion("option", "icons", {"header" : iconClass[0], "activeHeader" : iconClass[1]});
        }
    }).find('.ui-accordion-header a').click(function() {
        window.location = $(this).attr('href');
        return false;
    });
}

_accordion();