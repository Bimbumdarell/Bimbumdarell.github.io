const card = document.querySelector('.card');
window.onscroll = () => {
    if (window.scrollY > 300){

        card.classList.add('active');
    }
    else{
        card.classList.remove('active');
    }
};