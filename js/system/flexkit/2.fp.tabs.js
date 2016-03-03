;(function ($) {
    $$.ui.tabs = new function () {

        this.init = function () {
            $(".tabs").tabs({
                create : function (event, ui) {
                    //$$.ui.tabs.resize('.ui-tabs-nav', this);
                }
            });
        };

        this.resize = function (menu, tabs) {
            if (menu && !tabs) {
                $(menu).parent()
                    .on("tabsactivate", subMenuPos)
                    .on("tabsrefresh", tabsResizing);
                var $menu = $(menu).get(0);
            } else {
                $(tabs)
                    .on("tabsactivate", subMenuPos)
                    .on("tabsrefresh", tabsResizing);
                var $menu = $(tabs).find(menu).get(0);
            }
            var groupItem = document.createElement('li');
            groupItem.className = 'hide';
            groupItem.innerHTML = '<a class="ui-tabs-anchor" href="javascript:;">Other <i class="icon-arrow-down5"></i></a><ul></ul>';
            var groupItemUL = groupItem.lastElementChild;
            $menu.appendChild(groupItem);

            var menuChildren = $menu.children, menuChildrensWidth = 0, arrayItemWidth = [];

            for (var i = 0; i < menuChildren.length - 1; i++) {
                menuChildrensWidth = menuChildrensWidth + menuChildren[i].offsetWidth;
            }
            tabsResizing();

            window.addEventListener("resize", tabsResizing);
            $(document).on('change', '#menu-show', function () {
                setTimeout(tabsResizing, 500);
            });

            function tabsResizing() {

                var menuWidth = $menu.offsetWidth;

                while (menuWidth > menuChildrensWidth + arrayItemWidth[groupItemUL.childElementCount - 1] + (groupItemUL.childElementCount !== 1 ? groupItem.offsetWidth : 0)) {
                    if (!groupItemUL.childElementCount) {
                        return false;
                    }
                    menuChildrensWidth = menuChildrensWidth + arrayItemWidth[groupItemUL.childElementCount - 1];
                    $menu.insertBefore(groupItemUL.firstElementChild, groupItem);
                    arrayItemWidth.pop();
                    if (!groupItemUL.childElementCount) {
                        groupItem.classList.add('hide');
                    }
                }

                while (menuWidth < menuChildrensWidth + groupItem.offsetWidth) {
                    groupItem.classList.remove('hide');
                    var menuChildren = $menu.children;
                    var i = $menu.childElementCount - 2;
                    arrayItemWidth.push(menuChildren[i].offsetWidth);
                    menuChildrensWidth = menuChildrensWidth - menuChildren[i].offsetWidth;
                    if (!groupItemUL.childElementCount) {
                        groupItemUL.appendChild(menuChildren[i]);
                    } else {
                        groupItemUL.insertBefore(menuChildren[i], groupItemUL.childNodes[0]);
                    }
                }
                subMenuPos();
            }

            function subMenuPos() {
                setTimeout(function () {
                    $(groupItem).removeClass('top');
                    var heightContent = $(menu).nextAll('.ui-tabs-panel:visible').outerHeight(true);
                    if ($(groupItem).find('ul').height() > heightContent) {
                        $(groupItem).addClass('top');
                    }
                }, 500);
            }
        };
    };
})(jQuery);
