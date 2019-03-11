
class Card {
    constructor(cardElement){
    
      this.cardElement = cardElement; 
      console.log(this.cardElement);
      this.cardElement.addEventListener('mouseover', () => {this.hover()});

    }
    hover(){
        
        this.cardElement.classList.toggle('hover');

    }


}
const cards = document.querySelector('.card');
console.log(cards);

