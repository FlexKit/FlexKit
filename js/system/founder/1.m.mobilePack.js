//console.log(device.type);
//console.log(device.tablet());
//console.log(device.mobile());

// Call functions for touch devices
if(device.type){
    replaceSelector(':hover', ':active', false);    // Replace :hover => .touch for touch devices
}
tableResponsive();    // Responsive table

// Add device class
//if(!device.type){
//    $('[data-desktop]').each(function(){
//        $(this).addClass(' ' + $(this).data('desktop'));
//    });
//}else if(device.tablet()){
//    $('[data-tablet]').each(function(){
//        $(this).addClass(' ' + $(this).data('tablet'));
//    });
//}else if(device.mobile()){
//    $('[data-mobile]').each(function(){
//        $(this).addClass(' ' + $(this).data('mobile'));
//    });
//}
//window.onresize = _resizeClass();
//function _resizeClass(){
//    if(!device.type){
//        if($(window).width()>=800){
//            $('[data-desktop]').each(function(){
//                $(this).addClass(' '+$(this).data('desktop'));
//            });
//        }else if($(window).width()<800 && $(window).width()>=480){
//            $('[data-tablet]').each(function(){
//                $(this).addClass(' '+$(this).data('tablet'));
//            });
//        }else if($(window).width()<480){
//            $('[data-mobile]').each(function(){
//                $(this).addClass(' '+$(this).data('mobile'));
//            });
//        }
//    }
//}

// Function calls
//======================================================

// TODO rewrite on native javascript
///////// Responsive table /////////
function tableResponsive(){
    $('table.responsive').each(function(){
        var $tableTr = $('tr', this);
        var $tableTh = $('th', this);
        var allHeadersSaved = new Array();

        $tableTh.each(function(){
            var headerContent = $(this).text();
            allHeadersSaved.push(headerContent);
        });

        $.each(allHeadersSaved, function(i, v){
            $tableTr.find('td:eq('+i+')').prepend('<span class="table-head">'+v+'</span>');
        });
    });
}

// Replace 'Selector' on 'New Selector'
var sheet, rule, selectors, newSelectorRule, newRule, j, f;
function replaceSelector(oldSelector, newSelector, removeSelector){
    var pattern = new RegExp(oldSelector+'\\b'),
        patternRemove = removeSelector ? new RegExp(removeSelector+'\\b') : removeSelector;
    try{

        for(var i = 0; i<document.styleSheets.length; i++){
            sheet = document.styleSheets[i];

            if(sheet.cssRules!=null && sheet.cssRules.length!=0){
                for(j = 0; j<sheet.cssRules.length; j++){
                    rule = sheet.cssRules[j];

                    if(rule.type===CSSRule.STYLE_RULE){
                        changeRule(rule, pattern, newSelector, oldSelector, rule.type, patternRemove);
                    }else if(rule.type===CSSRule.MEDIA_RULE){
                        for(f = 0; f<rule.cssRules.length; f++){
                            changeRule(rule.cssRules[f], pattern, newSelector, oldSelector, rule.type, patternRemove);
                        }
                    }
                }
            }
        }
    }catch(e){
        alert(e);
    }
}

function changeRule(rule, pattern, newSelector, oldSelector, type, patternRemove){
    selectors = rule.selectorText;

    if(/.btn|button|[type="button"]|[type="submit"]|a\b/.test(rule.selectorText) && rule.style.getPropertyValue("transition")){
        rule.style.removeProperty("transition")
    }

    // Iterate over the selectors and test them against the pattern
    if(patternRemove && patternRemove.test(rule.selectorText)){
        var selectorsWithActive = rule.selectorText.split(',');

        for(k = 0; k<=selectorsWithActive.length; k++){
            // Add string to the new selector if it didn't match
            if(patternRemove.test(selectorsWithActive[k])){
                selectorsWithActive.splice(k, 1);
                k--;
                continue;
            }
        }

        selectors = selectorsWithActive.join();
        if(!selectorsWithActive.length && type===CSSRule.STYLE_RULE){
            sheet.deleteRule(j);
            j--;
            return;
        }
        if(!selectorsWithActive.length && type===CSSRule.MEDIA_RULE){
            sheet.cssRules[j].deleteRule(f);
            f--;
            return;
        }
    }

    if(!pattern.test(rule.selectorText)){
        return;
    }

    newSelectorRule = selectors.replace(new RegExp(oldSelector, 'g'), newSelector);

    // Remove the rule, and add the new one if we've got something
    // added to the new selector
    newRule = rule.cssText.replace(/([^{]*)?/, newSelectorRule+' ');
    if(type===CSSRule.STYLE_RULE){
        sheet.deleteRule(j);
        sheet.insertRule(newRule, j);
    }
    if(type===CSSRule.MEDIA_RULE){
        sheet.cssRules[j].deleteRule(f);
        sheet.cssRules[j].insertRule(newRule, f);
    }
}

if(device.type){
    $('body').append('<span class="loading-page"></span>');
    window.onbeforeunload = showLoading;
    window.onload = hideLoading;
    $('.loading-page').hammer().on('tap', hideLoading);
}

function showLoading(){
    $('.loading-page').show();
}
function hideLoading(){
    event.preventDefault();
    $('.loading-page').hide();
}

if(document.getElementsByClassName('menu-btn').length){
    var menuOverlay = document.createElement("div");
    menuOverlay.className = "mobile-overlay menu-overlay";
    document.body.appendChild(menuOverlay);
}
if(document.getElementsByClassName('dropdown-btn').length){
    var dropdownOverlay = document.createElement("div");
    dropdownOverlay.className = "mobile-overlay dropdown-overlay";
    document.body.appendChild(dropdownOverlay);
}

$('.menu-btn, .dropdown-btn')
    .each(function(){
        var menu = $(this).data('menu'),
            position = $(this).data('menu-position'),
            height = $(this).data('menu-height');
        if($(this).hasClass('menu-btn')){
            $(menu).addClass('mobile-menu '+position);
        }else if($(this).hasClass('dropdown-btn')){
            $(menu).addClass('dropdown-menu '+position).height(height);
        }
    })
    .hammer().on('tap', function(){
        var menu = $(this).data('menu');
        $('.mobile-overlay').removeClass('open');
        if(!$(this).hasClass('active')){
            $('.menu-btn, .dropdown-btn').removeClass('active');
            $('.mobile-menu, .dropdown-menu, .menu-overlay').removeClass('open');
            if($(this).hasClass('menu-btn')){
                $('.menu-overlay').addClass('open');
            }else if($(this).hasClass('dropdown-btn')){
                $('.dropdown-overlay').addClass('open');
            }
        }
        $(this).toggleClass('active');
        $(menu).toggleClass('open');
    });

$('.sub-menu-btn')
    .hammer().on('tap', function(){
        $(this).toggleClass('active').nextAll('ul').toggleClass('open');
    });

$('.mobile-overlay')
    .on('touchstart', function(){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.mobile-menu, .dropdown-menu, .mobile-overlay').removeClass('open');
    });