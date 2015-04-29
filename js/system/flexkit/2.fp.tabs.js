function _tabs() {
    $(".tabs").tabs();
}
_tabs();

function tabsResize(menu) {
    var $menu = $(menu).get(0);
    var groupItem = document.createElement('li');
    groupItem.className = 'hide';
    groupItem.innerHTML = '<a class="ui-tabs-anchor" href="javascript:;">Other <i class="icon-arrow-down5"></i></a><ul></ul>';
    var groupItemUL = groupItem.lastElementChild;
    $menu.appendChild(groupItem);

    var menuChildren = $menu.children, menuChildrensWidth = 0, arrayItemWidth = [];

    for(var i = 0; i < menuChildren.length - 1; i++) {
        menuChildrensWidth = menuChildrensWidth + menuChildren[i].offsetWidth;
    }
    tabsResizing();

    window.addEventListener("resize", tabsResizing);
    //$menu.onresize = function () {
    //    tabsResizing();
    //};

    function tabsResizing() {

        var menuWidth = $menu.offsetWidth;
        var elCount = groupItemUL.childElementCount;

        while(menuWidth > menuChildrensWidth + arrayItemWidth[elCount - 1] + (elCount !== 1 ? groupItem.offsetWidth : 0)) {
            if(!groupItemUL.childElementCount) {
                return false;
            }
            menuChildrensWidth = menuChildrensWidth + arrayItemWidth[groupItemUL.childElementCount - 1];
            $menu.insertBefore(groupItemUL.firstElementChild, groupItem);
            arrayItemWidth.pop();
            if(!groupItemUL.childElementCount) {
                groupItem.classList.add('hide');
            }
        }

        while(menuWidth < menuChildrensWidth + groupItem.offsetWidth) {
            groupItem.classList.remove('hide');
            var menuChildren = $menu.children;
            var i = $menu.childElementCount - 2;
            arrayItemWidth.push(menuChildren[i].offsetWidth);
            menuChildrensWidth = menuChildrensWidth - menuChildren[i].offsetWidth;
            if(!groupItemUL.childElementCount) {
                groupItemUL.appendChild(menuChildren[i]);
            } else {
                groupItemUL.insertBefore(menuChildren[i], groupItemUL.childNodes[0]);
            }
        }
    }
}
