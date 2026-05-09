const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu ul")
burger.onclick = () =>{
    burger.classList.toggle("burger-close")
    menu.classList.toggle("menu-open")
}
menu.onclick = () =>{
    burger.classList.remove("burger-close")
    menu.classList.remove("menu-open")
}