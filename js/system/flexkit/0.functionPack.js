// support for IE touch events
var events = 'ontouchstart' in window ? ['touchstart', 'touchmove touchend touchcancel'] : ['mousedown', 'mousemove mouseup'];
if(window.navigator.pointerEnabled){
    events = ['pointerdown', 'pointermove pointerup pointercancel lostpointercapture'];
}else if(window.navigator.msPointerEnabled){
    events = ['MSPointerDown', 'MSPointerMove MSPointerUp MSPointerCancel MSLostPointerCapture'];
}

function loadScript(url){
    var script;
    script = document.createElement('script');
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
}

function getJsonFromHashUrl(){
    var hash = window.location.hash;
    var query = hash.substr(hash.indexOf('?') + 1);
    var result = {};
    query.split("&").forEach(function(part){
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}