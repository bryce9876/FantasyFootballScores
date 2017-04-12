/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function changeRound() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

function changeGame(gameNumber) {
	switch(gameNumber) {
    case 1:
        document.getElementById("game1").src = 'http://www.fanfooty.com.au/game/preview.php?id=6028' 
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 6:
        
        break;
    case 7:
        
        break;
    case 8:
        
        break;
    case 9:
        break;
}