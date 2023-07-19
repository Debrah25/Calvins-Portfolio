let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}




let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');


window.onscroll=()=>{
    Selection.forEach(
        sec=> {
            let top=windows.scrollY;
            let offset = sec.offsetToP -150;
            let height = sec.offsetHeight;
            let id =secgetAttribute("id");

            if (top>= offset && top< offset + height ) {  
                navlinks.forEach(links=> {
                    links.classList.remove("active");
                    document.querySelector('header nav a [href*=' + id +']').classList.add('active')

                });

            };
        }
    );

    let header=document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY > 100);
};