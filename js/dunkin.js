var myIndex = 0;
carousel();

function carousel() {
  var x = document.getElementsByClassName("dunkin");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  // Use modulus to toggle between images
  myIndex = (myIndex + 1) % x.length;
  x[myIndex].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}