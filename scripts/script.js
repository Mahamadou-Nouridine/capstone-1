const menuBars = document.querySelector('.menu-bars')
const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('body')
const cross = document.querySelector('.cross')

const closeSide = () => {
    sidebar.classList.remove('open-side')
    body.style.overflow = 'unset'
}

const openSide = () => {
    sidebar.classList.add('open-side')
    body.style.overflow = 'hidden'
}

menuBars.addEventListener('click',openSide)
cross.addEventListener('click', closeSide)