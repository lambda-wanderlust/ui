// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Info {
  constructor(info) {
    this.info = info; 
    this.teamImg = this.info.querySelector('.team-img');
    this.information = this.info.querySelector('.info');
    
    //this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.teamImg.addEventListener('mousenter', () => this.hover());
    this.teamImg.addEventListener('click', () => this.expandInfo());
    
      
    
    
    
  }

  expandInfo() {
    console.log ('its working');
    this.information.classList.toggle('info-open');
    
  }

  hover(){
    console.log ('i am hovering')
    this.teamImg.class.style = ".7"
  }

};





let infoDiv = document.querySelectorAll('.name-card');
infoDiv.forEach(info => new Info (info));
console.log(infoDiv);

