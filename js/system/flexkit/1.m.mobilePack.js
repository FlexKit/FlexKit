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
    //if(!document.getElementById('loader')) {
    //    var preLoad, horz, vert;
    //    preLoad = document.createElement('div');
    //    preLoad.id = 'loader';
    //    horz = document.createElement('span');
    //    horz.className = 'horz';
    //    preLoad.appendChild(horz);
    //    vert = document.createElement('span');
    //    vert.className = 'vert';
    //    preLoad.appendChild(vert);
    //    document.body.appendChild(preLoad);
    //}

    window.onbeforeunload = showLoading;
    window.onload = hideLoading;
}

function showLoading(e) {
    $('#loader').removeClass('hidden');
}
function hideLoading(e) {
    e.preventDefault();
    $('#loader').addClass('hidden');
}