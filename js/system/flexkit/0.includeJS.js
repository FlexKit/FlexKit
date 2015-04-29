(function() {
    var url = document.querySelector('[href*="themes"]').getAttribute('href'),
        websiteUrl = url.substring(url.indexOf('themes', 10), 0),
        themeIndex = url.indexOf('themes') + 7,
        themeName = url.substring(themeIndex, url.indexOf('/', themeIndex));

    if(!jQuery().carousel) {
        loadScript(websiteUrl + "themes/" + themeName + "/js/plugin/jquery.carousel.min.js");
    }

    if(!jQuery().chosen && document.getElementsByClassName("chosen-select").length || document.getElementsByClassName("chosen-select-deselect").length) {
        loadScript(websiteUrl + "/themes/" + themeName + "/js/plugin/jquery.chosen.min.js");
    }

    if(!window.Hammer && device.type) {
        loadScript(websiteUrl + "/themes/" + themeName + "/js/plugin/hammer.min.js");
    }
})();