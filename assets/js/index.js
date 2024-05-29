

 document.addEventListener('scroll',()=>{
    const fadeIn = document.querySelectorAll('.fade-in');
    const position = fadeIn.getBoundingClientRect();
    if(position.top >= 0 && position.bottom <= window.innerHeight){
        fadeIn.style.opacity = 1
    }else{
        fadeIn.style.opacity = 0
    }
})
;
