(function(){
    var previousDevice, _find, _user_agent;

    previousDevice = window.device;

    window.device = {};
    device.type = false;

    _user_agent = window.navigator.userAgent.toLowerCase();

    device.ios = function(){
        return device.iphone() || device.ipod() || device.ipad();
    };

    device.iphone = function(){
        return _find('iphone');
    };

    device.ipod = function(){
        return _find('ipod');
    };

    device.ipad = function(){
        return _find('ipad');
    };

    device.android = function(){
        return _find('android');
    };

    device.androidPhone = function(){
        return device.android() && _find('mobile');
    };

    device.androidTablet = function(){
        return device.android() && !_find('mobile');
    };

    device.blackberry = function(){
        return _find('blackberry') || _find('bb10') || _find('rim');
    };

    device.blackberryPhone = function(){
        return device.blackberry() && !_find('tablet');
    };

    device.blackberryTablet = function(){
        return device.blackberry() && _find('tablet');
    };

    device.windows = function(){
        return _find('windows');
    };

    device.windowsPhone = function(){
        return device.windows() && _find('phone');
    };

    device.windowsTablet = function(){
        return device.windows() && _find('touch');
    };

    device.fxos = function(){
        return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
    };

    device.fxosPhone = function(){
        return device.fxos() && _find('mobile');
    };

    device.fxosTablet = function(){
        return device.fxos() && _find('tablet');
    };

    device.meego = function(){
        return _find('meego');
    };

    device.mobile = function(){
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
    };

    device.tablet = function(){
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
    };

    device.noConflict = function(){
        window.device = previousDevice;
        return this;
    };

    _find = function(needle){
        return _user_agent.indexOf(needle)!== -1;
    };

    if(device.ipad() || device.iphone() || device.ipod() || device.android() || device.blackberry() || device.windowsTablet() || device.windowsPhone() || device.fxos() || device.meego() || (/tablet|mobile/i.test(document.body.className.substr(0)))){
        device.type = true;
    }

//    if(device.ios()){
//        if(device.ipad()){
//            _addClass("ios ipad tablet");
//        }else if(device.iphone()){
//            _addClass("ios iphone mobile");
//        }else if(device.ipod()){
//            _addClass("ios ipod mobile");
//        }
//    }else if(device.android()){
//        if(device.androidTablet()){
//            _addClass("android tablet");
//        }else{
//            _addClass("android mobile");
//        }
//    }else if(device.blackberry()){
//        if(device.blackberryTablet()){
//            _addClass("blackberry tablet");
//        }else{
//            _addClass("blackberry mobile");
//        }
//    }else if(device.windows()){
//        if(device.windowsTablet()){
//            _addClass("windows tablet");
//        }else if(device.windowsPhone()){
//            _addClass("windows mobile");
//        }else{
//            _addClass("desktop");
//        }
//    }else if(device.fxos()){
//        if(device.fxosTablet()){
//            _addClass("fxos tablet");
//        }else{
//            _addClass("fxos mobile");
//        }
//    }else if(device.meego()){
//        _addClass("meego mobile");
//    }else{
//        _addClass("desktop");
//    }

}).call(this);
