const menu=document.querySelector('.menu');
const menuBody=document.querySelector('.menu__menu')
const burger=document.querySelector('.menu__burger');
const openMenu=e=>{
burger.classList.toggle('active');
menuBody.classList.toggle('active');
document.body.classList.toggle('lock');
menu.classList.toggle('active');
}
burger.addEventListener('click',openMenu)

window.onscroll=function () {
if (window.pageYOffset>0){
    menu.classList.add('fixed');
}
else {
    menu.classList.remove('fixed');
}
}
function navigation(e) {
    const elem=document.querySelector(e.target.getAttribute('href'));
    if (elem){
        const elemValue=elem.getBoundingClientRect().top + pageYOffset - menu.offsetHeight;
        window.scrollTo({
            top: elemValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
const headerLinks=document.querySelectorAll('a.navigation-link[href^="#"]');
headerLinks.forEach(function (item) {
item.addEventListener('click',navigation)
});
