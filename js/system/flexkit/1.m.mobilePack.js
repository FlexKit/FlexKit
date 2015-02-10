// Call functions for touch devices
if(device.type){
    replaceSelector(':hover|:active', '.touch', false);    // Replace :hover => .touch for touch devices
    $('body').on('touchstart', function(e){
        $(e.target).addClass('touch');
    }).on('touchend touchmove', function(e){
        $('*').removeClass('touch');
    });
}

if(device.type){
    window.onbeforeunload = showLoading;
    window.onload = hideLoading;
}

function showLoading(){
    $('html').removeClass('loaded');
}
function hideLoading(){
    event.preventDefault();
    $('html').addClass('loaded');
}