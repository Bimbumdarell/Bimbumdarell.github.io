const card = document.querySelector('.card');
window.onscroll = () => {
    if (window.scrollY > 300){

        card.classList.add('active');
    }
    else{
        card.classList.remove('active');
    }
};
let elementsArray = document.querySelectorAll(".tile"); 
console.log(elementsArray); 
window.addEventListener('scroll', fadeIn );  
function fadeIn() { 
    for (var i = 0; i < elementsArray.length; i++) { 
        var elem = elementsArray[i] 
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20; 
        if (distInView < 0) { 
            elem.classList.add("inView"); 
        } else { 
            elem.classList.remove("inView"); 
        } 
    } 
} 
fadeIn();



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});