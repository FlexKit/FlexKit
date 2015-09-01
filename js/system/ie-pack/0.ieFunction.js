(function(){
    var ieUserAgent = navigator.userAgent.match(/MSIE (\d+)/);
    if(ieUserAgent && ieUserAgent[1] === 8){
        var el = document.getElementsByTagName('html');
        if(el.classList){
            if(el.classList.contains('ie8')){
                return false;
            }
            el.classList.add('ie8');
        }else{
            if(new RegExp('(^| )ie8( |$)', 'gi').test(el.className)){
                return false;
            }
            el.className += ' ie8';
        }
    }
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