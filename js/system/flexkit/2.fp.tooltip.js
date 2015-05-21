function _tooltip(){
    // call tooltip plugin
    var $tooltip = $(".tooltip");
    $tooltip.find('a').removeAttr('title');
    $tooltip.tooltip({
        items: ".tooltip[title], [data-tooltip-element], [data-tooltip-content]",
        track : true,
        position : {
            my: "left top+20",
            at: "left bottom"
        },
        content : function(){
        var $this = $(this),
            content = $this.data('tooltip-content'),
            element = $this.data('tooltip-element');
            if ($this.is('[title]')) {
                return $this.attr('title');
            }
            if (typeof content !== 'undefined') {
                return eval('('+content+')');
            }
            if(typeof element !== 'undefined'){
                return $(element).html();
            }
        }
    });
    $tooltip.each(function(){
        var $this = $(this),
            tooltipPosition = $this.data('tooltip-position');
            $this.tooltip("option", {
                tooltipClass : $this.data('tooltip-classes')
            });
        showTooltip($this, tooltipPosition);
    });

function showTooltip(el, position){
    var my = '', at = '', arrowWidth = 10;
    switch(position){
        case 'right' :
            my = "left+"+arrowWidth+" center";
            at = "right center";
            break;

        case 'left' :
            my = "right-"+arrowWidth+" center";
            at = "left center";
            break;

        case 'top' :
            my = "center bottom-"+arrowWidth+"";
            at = "center top";
            break;

        case 'bottom' :
            my = "center top+"+arrowWidth+"";
            at = "center bottom";
            break;

        default :
            return false;
    }

    el.tooltip("option", {
        track        : false,
        position     : {
            my    : my,
            at    : at,
            using : function(position, feedback){
                $(this).css(position);
                $("<span>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
            }
        }
    });
}
}
_tooltip();