
const body = document.querySelector('body');
body.addEventListener('click',function(event){

    console.log('clicked')
    menuAbout.classList.remove(toggleMenuAbout);
    event.stopPropagation();
});








const toggleMenuAbout = () => {
    menuAbout.classList.toggle('menu--open-about');
    
      
     };  
    
    const menuAbout = document.querySelector('.menu-about');
    
    const menuButtonAbout = document.querySelector('.menu-button-about');
    
    
     console.log(menuButtonAbout);

     menuButtonAbout.addEventListener('click', toggleMenuAbout,);
     








     


