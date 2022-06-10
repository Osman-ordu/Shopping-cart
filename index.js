'use strict'

//   ----->    Action to be taken on clicked cards
for (let i = 0; i < card.length; i++) {
    addButtons[i].addEventListener("click", function(e){
        const image = card[i].querySelector(".card-img-center").src;
        const title = card[i].getElementsByClassName("card-title")[0].textContent;
        const price = card[i].getElementsByClassName("price")[0].textContent;
        
  
        const shopping = new Shopping(image,title,price);
        const ui = new UI();
        addButtons[i].classList.add("disabled");
        addButtons[i].textContent = "In Card";
        
        
  
        ui.showNotification();
        ui.createProductList(shopping);
        ui.removeCart();
        ui.cartCount();
        e.preventDefault();
    })
  }

  //   ----->    When the document is loaded
document.addEventListener("DOMContentLoaded", ()=> {
    const ui = new UI();  
    ui.cartToggle();
  }) 
  
  