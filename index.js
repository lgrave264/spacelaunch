
//function to initiate the countdown
//NEW CODE
function countDown(){
    for(var x = 0; x <= 60; x+=5){
        delay(x)
    }
}

function delay(x){
    setTimeout(function(){
        if(x == 60){
            alert("Blast OFF!!!!!")
        }
        document.getElementById("count").innerHTML = x;
    },x * 1000);
}

//OLD CODE

// function countDown(){
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "45"
//     }, 5000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "40"
//     }, 10000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "35"
//     }, 15000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "30"
//     }, 20000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "25"
//     }, 25000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "20"
//     }, 30000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "15"
//     }, 35000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "10"
//     }, 40000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "5"
//     }, 45000);
//     setTimeout(function(){
//         document.getElementById("count").innerHTML = "0"
//         alert("BLASTOFF!!!!")
//     }, 50000);
// }
