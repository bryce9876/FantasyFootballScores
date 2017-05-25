/*----DROPDOWN MENU----*/
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




/*----UPDATE IFRAME----*/
function changeGame(gameNumber) {

	// Upate round value below depending on round
	var round = 10;
  var total_byes = 1;
	var game1ID = 6001 + (round-1)*9 - total_byes;

  // When fanfooty starts working with https, change below to https too
	var initialURL = "https://live.fanfooty.com.au/game/matchcentre.html?id=";
	var gameXID = game1ID + gameNumber -1;
  alert(gameXID);

    document.getElementById('iframe').src = initialURL + gameXID;
}

