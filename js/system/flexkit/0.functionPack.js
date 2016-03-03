var events = (device.type && 'ontouchstart' in window) ? ['touchstart', 'touchmove touchend touchcancel'] : ['mousedown', 'mousemove mouseup'];
// support for IE touch events
if (window.navigator.pointerEnabled) {
    events = ['pointerdown', 'pointermove pointerup pointercancel lostpointercapture'];
} else if (window.navigator.msPointerEnabled) {
    events = ['MSPointerDown', 'MSPointerMove MSPointerUp MSPointerCancel MSLostPointerCapture'];
}

var FlexKit = function (element) {
    return new FlexKitInit(element);
};
window.FlexKit = window.$$ = FlexKit;

var FlexKitInit = function (element) {
    var elements = element;

    if (element && !element.length) {
        elements = [element];
    }

    this.elements = elements;
    return this;
};

FlexKitInit.prototype = {
    checkString : function (string) {
        return (typeof string === 'string' && string.length);
    },
    addClass    : function (className) {
        if (!this.elements.length && !this.checkString(className)) {
            return this;
        }
        var classArray = className.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            if (this.elements[i].classList) {
                for (var j = 0; j < classArray.length; j++) {
                    this.elements[i].classList.add(classArray[j]);
                }
            } else {
                this.elements[i].className += ' ' + className;
            }
        }

        return this.elements;
    },
    removeClass : function (className) {
        if (!this.elements.length && !this.checkString(className)) {
            return this;
        }
        var classArray = className.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            for (var j = classArray.length; j--;) {
                if (this.elements[i].classList) {
                    this.elements[i].classList.remove(classArray[j]);
                } else {
                    this.elements[i].className = this.elements[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
    },
    toggleClass : function (className) {
        if (!this.elements.length && !this.checkString(className)) {
            return this;
        }
        var classArray = className.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            if (this.elements[i].classList) {
                for (var j = classArray.length; j--;) {
                    this.elements[i].classList.toggle(classArray[j]);
                }
            } else {
                var classes = this.elements[i].className.split(' ');
                for (var k = classArray.length; k--;) {
                    var existingIndex = classes.indexOf(classArray[k]);

                    if (existingIndex >= 0) {
                        classes.splice(existingIndex, 1);
                    } else {
                        classes.push(classArray[k]);
                    }
                }

                this.elements[i].className = classes.join(' ');
            }
        }
    },
    hasClass    : function (className, reverse) {
        if (!this.elements.length && !this.checkString(className)) {
            return this;
        }
        reverse = reverse || false;
        var elementsTrue = [];
        var classArray = className.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            var checkClass;
            for (var j = classArray.length; j--;) {
                if (this.elements[i].classList) {
                    checkClass = this.elements[i].classList.contains(classArray[j]);
                } else {
                    checkClass = new RegExp('(^| )' + classArray[j] + '( |$)', 'gi').test(this.elements[i].className);
                }

                if (reverse ? checkClass : !checkClass) {
                    break;
                }
            }

            if (reverse ? checkClass : !checkClass) {
                continue;
            }
            elementsTrue.push(this.elements[i]);
        }
        return elementsTrue.length ? elementsTrue : this;
    },
    type        : function (typeName) {
        if (!this.elements.length && !this.checkString(typeName)) {
            return this;
        }
        var elementsTrue = [];
        var typeArray = typeName.trim().split(',');
        for (var i = this.elements.length; i--;) {
            for (var j = typeArray.length; j--;) {
                if (this.elements[i].type === typeArray[j].trim()) {
                    elementsTrue.push(this.elements[i]);
                }
            }
        }
        return elementsTrue.length ? elementsTrue : this;
    },
    text        : function (string) {
        for (var i = this.elements.length; i--;) {
            if (typeof string === 'string') {
                if (this.elements[i].textContent !== undefined) {
                    this.elements[i].textContent = string;
                } else {
                    this.elements[i].innerText = string;
                }
            } else if (typeof string === 'undefined') {
                if (this.elements[i].textContent !== undefined) {
                    return this.elements[i].textContent;
                } else {
                    return this.elements[i].innerText;
                }
            }
        }
        return this;
    },
    after       : function (el) {
        if (!this.elements.length && el.nodeType !== 1) {
            return this;
        }

        for (var i = this.elements.length; i--;) {
            this.elements[i].parentNode.insertBefore(el, this.elements[i].nextSibling);
        }
    },
    on          : function (events, callBack) {
        if (!this.elements || (typeof callBack !== 'function' && !this.checkString(events))) {
            return this;
        }
        var eventsArray = events.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            for (var j = eventsArray.length; j--;) {
                this.elements[i].addEventListener(eventsArray[j], callBack, false);
            }
        }

    },
    off         : function (events, callBack) {
        if (!this.elements || (typeof callBack !== 'function' && !this.checkString(events))) {
            return this;
        }
        var eventsArray = events.trim().split(' ');
        for (var i = this.elements.length; i--;) {
            for (var j = eventsArray.length; j--;) {
                this.elements[i].removeEventListener(eventsArray[j], callBack, false);
            }
        }

    },
    remove      : function () {
        for (var i = this.elements.length; i--;) {
            this.elements[i].parentNode.removeChild(this.elements[i]);
        }
        return this;
    }
};

FlexKit.getJsonHash = function () {
    var hash = window.location.hash;
    var query = hash.substr(hash.indexOf('?') + 1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
};

FlexKit.each = function (array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
    }
};

// Objects Extend
FlexKit.extend = function (out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj) {
            break;
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    extend(out[key], obj[key]);
                } else {
                    out[key] = obj[key];
                }
            }
        }
    }

    return out;
};

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

//(function() {
//    if (!document.getElementsByClassName) {
//        var indexOf = [].indexOf || function(prop) {
//            for (var i = 0; i < this.length; i++) {
//                if (this[i] === prop) return i;
//            }
//            return -1;
//        };
//        var getElementsByClassName = function(className,context) {
//            var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
//                var all = context.getElementsByTagName("*"),
//                    elements = [],
//                    i = 0;
//                for (; i < all.length; i++) {
//                    if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements,all[i]) === -1) elements.push(all[i]);
//                }
//                return elements;
//            })();
//            return elems;
//        };
//        document.getElementsByClassName = function(className) {
//            return getElementsByClassName(className,document);
//        };
//        Element.prototype.getElementsByClassName = function(className) {
//            return getElementsByClassName(className,this);
//        };
//    }
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
//}());