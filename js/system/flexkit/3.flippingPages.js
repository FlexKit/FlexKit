// Пролистывание страниц указанного списка
// Flipping pages specified list
var $btnNext = $('.flip-btn.next'),
    $btnPrev = $('.flip-btn.prev'),
    faNav = $btnPrev.data('list-name') || $btnNext.data('list-name'),
    btnCode = $btnPrev.data('btn-code') || $('.flip-btn.next').data('btn-code');

if(typeof faNav === 'string') {
    var currentUrl = window.location.href,
        $nextPage = $(faNav).find('li:has([href="' + currentUrl + '"])').next(),
        $prevPage = $(faNav).find('li:has([href="' + currentUrl + '"])').prev();

    if(typeof btnCode === 'string') {
        $btnPrev.html($prevPage.find(btnCode).html());
        $btnNext.html($nextPage.find(btnCode).html());
    }

    if(!$prevPage.length) {
        $btnPrev.attr('disabled', true);
    }
    if(!$nextPage.length) {
        $btnNext.attr('disabled', true);
    }

    $('body').on('click', '.flip-btn.prev', function() {
        prevAction();
    }).on('click', '.flip-btn.next', function() {
        nextAction();
    });

    if(device.type) {
        $('body').hammer().on('swipeleft', function() {
            nextAction();
        }).on('swiperight', function() {
            prevAction();
        });
    }
}

function nextAction() {
    var url = $nextPage.find('.page-title').attr('href');
    goPage(url);
}

function prevAction() {
    var url = $prevPage.find('.page-title').attr('href');
    goPage(url);
}
function goPage(url) {
    if(typeof url === 'string') {
        window.location.href = url;
    }
}