let submenuParents = document.querySelectorAll('.menu-header__regular-link')
for (var i = 0; i < submenuParents.length; i++) {
    if (submenuParents[i].children[1] && submenuParents[i].children[1].className == "menu-header__sublist") {
        let width = submenuParents[i].offsetWidth / 2
        let submenuWidth = submenuParents[i].children[1].offsetWidth / 2
        submenuParents[i].children[1].style.left = `${width - submenuWidth}px`
    }
}

//Бургер, Сайдбар, Иконка в сайдбаре
const burgerMenu = (icon, menu_body, menu_item) => {
    const iconMenu = document.querySelector(icon)
    const menuBody = document.querySelector(menu_body)
    const mobileItem = document.querySelector(menu_item);
    const overlay = document.querySelector('.overlay')
    //Burger Menu
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
            overlay.classList.toggle('_active')
            document.body.classList.toggle('_lock')
        })
    }

    mobileItem.addEventListener('click', function (e) {
        iconMenu.classList.remove('_active')
        overlay.classList.remove('_active')
        menuBody.classList.remove('_active')
        document.body.classList.remove('_lock')
    })
}

$(document).ready(function () {
    burgerMenu('.menu-icon', '.header-mobile', '.mobile-close')

    let accordionsOne = document.querySelectorAll('.accordion-one__item')
    accordionsOne.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const icon = self.querySelector('.accordion-one__icon')
            const content = self.querySelector('.accordion-one__text')
            if (content.classList.contains('_active')) {
                icon.classList.remove('_active')
                content.classList.remove('_active')
                content.style.maxHeight = null;
                content.setAttribute('aria-expanded', false)
                content.setAttribute('aria-hidden', true)
            } else {
                icon.classList.toggle('_active')
                content.classList.toggle('_active')
                content.style.maxHeight = `${content.scrollHeight}px`
                content.setAttribute('aria-expanded', true)
                content.setAttribute('aria-hidden', false)
            }
        })
    })


})




