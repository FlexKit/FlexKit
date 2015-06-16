// Call functions for touch devices
if(device.type) {
    replaceSelector(':hover|:active', '.touch', false);    // Replace :hover => .touch for touch devices
    $('body').on('touchstart', function(e) {
        $(e.target).addClass('touch');
    }).on('touchend touchmove', function(e) {
        $('*').removeClass('touch');
    });
}

if(device.type) {
    window.onbeforeunload = showLoading;
    window.onload = hideLoading;
}

function showLoading(e) {
    $('html').removeClass('loaded');
}
function hideLoading(e) {
    e.preventDefault();
    $('html').addClass('loaded');
}