const firstClassPlusButton = document.getElementById("firstClassPlusBtn");
const firstClassMinusBtn = document.getElementById("firstClassMinusBtn");
const economyMinusBtn = document.getElementById("economyClassMinusBtn");
const economyPlusBtn = document.getElementById("economyClassPlusBtn");
const firstClassTicket = document.getElementById("firstClassTicketQuantity");
const economyClassTicket = document.getElementById("economyClassTicketQuantity");
const bookingButton=document.getElementById("bookNowBtn");


//function to Calculate totalCost
function subTotal() {
    var FirstClassPrice = firstClassTicket.value * 150;
    var EconomyClassPrice = economyClassTicket.value * 100;
    var subTotal = (document.getElementById("subTotalAmount").innerText = FirstClassPrice + EconomyClassPrice);
    var vat = (document.getElementById("vatCount").innerText = Math.round(subTotal * 0.1));
    var total = (document.getElementById("totalAmount").innerText = subTotal + vat);
}
//Increase ticket amount
function increaseTicket(id) {
    id.value++;
    
}
//decrease Ticket amount
function decreaseTicket(id) {
    let number = Number(id.value);

    if (!number || number < 0) {
        id.classList.add('error');
    } else {
        id.value--;
    }
}

firstClassPlusButton.addEventListener('click', function () {
    increaseTicket(firstClassTicket);
  subTotal();
});

firstClassMinusBtn.addEventListener('click', function () {
    decreaseTicket(firstClassTicket);
    subTotal();
});


economyPlusBtn.addEventListener('click', function () {
    increaseTicket(economyClassTicket);
   subTotal();
});

economyMinusBtn.addEventListener('click', function () {
    decreaseTicket(economyClassTicket);
   subTotal();
});


bookingButton.addEventListener('click',function(){
    var destinationConfirm= document.getElementById("destination").value;
    var date= document.getElementById("departureDate").value;
    var total = (document.getElementById("totalAmount").innerText);
    if(destinationConfirm!=''&& date!=''){
    alert("your trip to "+destinationConfirm+" is confirmed on "+date+" and your total cost is $"+total);
    }

});



