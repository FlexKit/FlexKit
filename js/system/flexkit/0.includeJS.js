var url = document.querySelector('[href*="themes"]').getAttribute('href'),
    websiteUrl = url.substring(url.indexOf('themes', 10), 0),
    themeIndex = url.indexOf('themes') + 7,
    themeName = url.substring(themeIndex, url.indexOf('/', themeIndex));

if(!jQuery().carousel){
    var carousel = document.createElement("script");
    carousel.src = websiteUrl+"themes/"+themeName+"/js/plugin/jquery.carousel.min.js";
    document.body.appendChild(carousel);
}

if(!jQuery().chosen && $(".chosen-select").length || $(".chosen-select-deselect").length){
    var chosen = document.createElement("script");
    chosen.src = websiteUrl+"/themes/"+themeName+"/js/plugin/jquery.chosen.min.js";
    document.body.appendChild(chosen);
}

if(!jQuery().hammer && device.type){
    var hammer = document.createElement("script");
    hammer.src = websiteUrl+"/themes/"+themeName+"/js/plugin/hammer.js";
    document.body.appendChild(hammer);
}