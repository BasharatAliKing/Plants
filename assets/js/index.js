var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var sidebar = document.getElementById("sidebar");
var head = document.getElementById("head");
var side=document.getElementById("side");
var close = document.getElementById("close")
sidebar.addEventListener("click",sidebarclick);
close.addEventListener("click",closeside);

function sidebarclick(){
  console.log("Clicked...");
   head.appendChild(side);
  //  console.log(head);
}
function closeside(){
  console.log("clicked...");
  side.remove();
}