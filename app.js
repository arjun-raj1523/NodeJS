function placeAnOrder(orderNumber){

    console.log("Order Number"+orderNumber);
    deliver(function(){
        console.log("Done");
    });
}
//simulate a 5 second operation
function deliver(callBack){
    setTimeout(callBack,3000);
}
//Place Order
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

