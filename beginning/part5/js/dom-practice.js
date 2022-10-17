/*eslint-env browser*/

//STEP 1
function alertMessage(){
    window.alert("You clicked me once");
}
//STEP 2
function init (){
    var cb = document.getElementById("domElement");
    cb.onclick = function(){
        window.alert("You clicked me twice");
    };


//STEP 3
var cbEL = document.getElementById("eventListener");
cbEL.addEventListener("click", printMessage);


function printMessage() {
    window.alert("You Clicked on me thrice");
};


//STEP 4

var cbEL2 = document.getElementById("eventListener2");
cbEL2.addEventListener("click", function () {
    window.alert("You clicked on me 4 times");
});
};

//STEP 5

window.addEventListener("load", init);
