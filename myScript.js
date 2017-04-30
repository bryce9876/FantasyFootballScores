/*----DROPDOWN MENU----*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function changeRound() {
    document.getElementById("myDropdown").classList.toggle("show");

    var executed = false;
      if (!executed) {
            executed = true;
      }
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




/*----UPDATE IFRAME----*/
function changeGame(gameNumber) {

	// Upate round value below depending on round
	var round = 7;
	var game1ID = 6001 + (round-1)*9;

	var initialURL = "http://live.fanfooty.com.au/game/matchcentre.html?id=";
	var gameXID = game1ID + gameNumber -1;

    document.getElementById('iframe').src = initialURL + gameXID;
}

