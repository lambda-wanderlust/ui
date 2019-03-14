const toggleMenuAbout = () => {
    menuAbout.classList.toggle('menu--open-about');
    
      
     };  
    
    const menuAbout = document.querySelector('.menu-about');
    
    const menuButtonAbout = document.querySelector('.menu-button-about');
    const body = document.querySelector('body');
    
     console.log(menuButtonAbout);

     menuButtonAbout.addEventListener('click', toggleMenuAbout,);
     

     

     // Detect all clicks on the document
     document.addEventListener("click", function(event) {
     
     // If user clicks inside the element, do nothing
     if (event.target.closest(".menu--open-about")) return;
     
     // If user clicks outside the element, hide it!
         menuAbout.classList.remove(".menu-about");
     });