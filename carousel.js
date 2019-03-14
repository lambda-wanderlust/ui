class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.cards = this.carousel.querySelectorAll(".name-card");
        
        this.leftButton = this.carousel.querySelector(".left-button");
        this.rightButton = this.carousel.querySelector(".right-button");
        this.index = 0;
        this.cards[this.index].style.display = "block";

        this.rightButton.addEventListener("click", () => this.toggleRight());
        this.leftButton.addEventListener("click", () => this.toggleLeft());
    }
    toggleRight() {
        this.cards[this.index].style.display = "none";

        if (this.index ===  this.cards.length-1) {
            this.index = 0;
        } else {
            this.index++
        }
        this.cards[this.index].style.display = "block";
    }

    toggleLeft() {
        this.cards[this.index].style.display = "none";

        if (this.index === 0) {
            this.index = this.cards.length -1;
        } else {
            this.index--;
        }
        this.cards[this.index].style.display = "block";
    }
}

const carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => new Carousel(carousel));





