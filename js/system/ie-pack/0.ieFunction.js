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
}());