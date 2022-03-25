let submenuParents = document.querySelectorAll('.menu-header__regular-link')
for (var i = 0; i < submenuParents.length; i++) {
    if (submenuParents[i].children[1] && submenuParents[i].children[1].className == "menu-header__sublist") {
        let width = submenuParents[i].offsetWidth / 2
        let submenuWidth = submenuParents[i].children[1].offsetWidth / 2
        submenuParents[i].children[1].style.left = `${width - submenuWidth}px`
    }
}
