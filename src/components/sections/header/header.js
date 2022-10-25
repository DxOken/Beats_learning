const open = document.querySelector('.header__btn_open'),
    close = document.querySelector('.header__btn_close'),
    menu = document.querySelector('.header__menu'),
    btns = document.querySelector('.header__btns')

if (window.location.hash === '' || window.location.hash === '#home') {
    menu.firstElementChild.classList.add('selected')
} else {
    menu.childNodes.forEach((item) => {
        if (item.firstChild.href === window.location.href) {
            item.classList.add('selected')
        }
    })
}

menu.childNodes.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.childNodes.forEach((item) => {
            item.classList.remove('selected')
        })
        menuItem.classList.add('selected')
        window.location.replace(menuItem.firstChild.href)

        if (window.innerWidth <= 1170) {
            close.click()
        }
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1170 && close.hidden === false) {
        open.hidden = !open.hidden
        close.hidden = !close.hidden

        menu.classList.remove('opened')
        btns.classList.remove('opened')
    }
})

open.addEventListener('click', () => {
    open.hidden = !open.hidden
    close.hidden = !close.hidden

    menu.classList.add('opened')
    btns.classList.add('opened')
})

close.addEventListener('click', () => {
    open.hidden = !open.hidden
    close.hidden = !close.hidden

    menu.classList.remove('opened')
    btns.classList.remove('opened')

})

