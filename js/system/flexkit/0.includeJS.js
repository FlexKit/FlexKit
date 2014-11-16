var url = document.querySelector('[href*="themes"]').getAttribute('href'),
    websiteUrl = url.substring(url.indexOf('themes', 10), 0),
    themeIndex = url.indexOf('themes') + 7,
    themeName = url.substring(themeIndex, url.indexOf('/', themeIndex));

if(!jQuery().carousel){
    loadScript(websiteUrl+"themes/"+themeName+"/js/plugin/jquery.carousel.min.js");
}

if(!jQuery().chosen && $(".chosen-select").length || $(".chosen-select-deselect").length){
    loadScript(websiteUrl+"/themes/"+themeName+"/js/plugin/jquery.chosen.min.js");
}

if(!jQuery().hammer && device.type){
    loadScript(websiteUrl+"/themes/"+themeName+"/js/plugin/hammer.min.js");
}

var script;
function loadScript(url) {
    script = document.createElement('script');
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
}