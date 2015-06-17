var events = (device.type && 'ontouchstart' in window) ? ['touchstart', 'touchmove touchend touchcancel'] : ['mousedown', 'mousemove mouseup'];
// support for IE touch events
if(window.navigator.pointerEnabled) {
    events = ['pointerdown', 'pointermove pointerup pointercancel lostpointercapture'];
} else if(window.navigator.msPointerEnabled) {
    events = ['MSPointerDown', 'MSPointerMove MSPointerUp MSPointerCancel MSLostPointerCapture'];
}

function loadScript(url) {
    var script;
    script = document.createElement('script');
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
}

function getJsonFromHashUrl() {
    var hash = window.location.hash;
    var query = hash.substr(hash.indexOf('?') + 1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}

(function() {
    if(!document.getElementsByClassName) {
        var indexOf = [].indexOf || function(prop) {
                for(var i = 0; i < this.length; i++) {
                    if(this[i] === prop) return i;
                }
                return -1;
            };
        var getElementsByClassName = function(className, context) {
            var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
                var all = context.getElementsByTagName("*"),
                    elements = [],
                    i = 0;
                for(; i < all.length; i++) {
                    if(all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements, all[i]) === -1) elements.push(all[i]);
                }
                return elements;
            })();
            return elems;
        };
        document.getElementsByClassName = function(className) {
            return getElementsByClassName(className, document);
        };
        Element.prototype.getElementsByClassName = function(className) {
            return getElementsByClassName(className, this);
        };
    }
//    if (!document.addEventListener) {
//        var addEventListener = function(event, callback, el) {
//            el.attachEvent("on"+event, callback);
//        };
//        document.addEventListener = function(event, callback) {
//            return addEventListener(event, callback, document);
//        };
//        Element.prototype.addEventListener = function(event, callback) {
//            return addEventListener(event, callback, this);
//        };
//    }
//    if (!document.removeEventListener) {
//        var removeEventListener = function(event, callback, el) {
//            el.detachEvent("on"+event, callback);
//        };
//        document.removeEventListener = function(event, callback) {
//            return removeEventListener(event, callback, document);
//        };
//        Element.prototype.removeEventListener = function(event, callback) {
//            return removeEventListener(event, callback, this);
//        };
//    }
}());