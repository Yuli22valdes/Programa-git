let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.classList.remove('bx-x');
navbar.classList.remove('active');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('x');
    navbar.classList.remove('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const openModal =  document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.Inicio-content,.heading',{ origin:"top" });
ScrollReveal().reveal('.Inicio-img img, .Preparaciòn-img, .Historia-img, .Comida-img, .Producto-img',{ origin:"bottom" });

ScrollReveal().reveal('.Producto-text, .Comida-text, .Historia-text, .Preparaciòn-text',{ origin:"left" });

ScrollReveal().reveal('.Producto-text, .Comida-text, .Historia-text, .Preparaciòn-text',{ origin:"right" });
window.onscroll =() =>{

    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset  = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
    
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.Inicio-content,.heading',{ origin:"top" });
ScrollReveal().reveal('.Inicio-img img, .Preparaciòn-img, .Historia-img, .Comida-img, .Producto-img',{ origin:"bottom" });

ScrollReveal().reveal('.Producto-text, .Comida-text, .Historia-text, .Preparaciòn-text',{ origin:"left" });

ScrollReveal().reveal('.Producto-text, .Comida-text, .Historia-text, .Preparaciòn-text',{ origin:"right" });

