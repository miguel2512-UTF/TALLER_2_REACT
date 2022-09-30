const botonMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

console.log(menu)
console.log(botonMenu)

botonMenu.addEventListener('click', ()=>{
    menu.classList.toggle("menu-spread")
})

window.addEventListener('click', e=>{
    if (menu.classList.contains('menu-spread') && e.target != menu && e.target != botonMenu && e.target != logo) {
        menu.classList.toggle("menu-spread")
    }
})