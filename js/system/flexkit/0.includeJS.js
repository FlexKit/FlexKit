(function() {
    //var url = document.querySelector('[href*="themes"]').getAttribute('href'),
    //    websiteUrl = url.substring(url.indexOf('themes', 10), 0),
    //    themeIndex = url.indexOf('themes') + 7,
    //    themeName = url.substring(themeIndex, url.indexOf('/', themeIndex));

    if(window.jQuery && !jQuery().carousel) {
        loadScript("/js/plugin/jquery.carousel.min.js");
    }

    if(window.jQuery && !jQuery().chosen && document.getElementsByClassName("chosen-select").length || document.getElementsByClassName("chosen-select-deselect").length) {
        loadScript("/js/plugin/jquery.chosen.min.js");
    }

    if(!window.Hammer && device.type) {
        loadScript("/js/plugin/hammer.min.js");
    }
})();