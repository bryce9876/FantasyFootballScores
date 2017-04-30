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
	var round = 7;
	var game1ID = 6001 + (round-1)*9;

	var initialURL = "http://live.fanfooty.com.au/game/matchcentre.html?id=";
	var gameXID = game1ID + gameNumber -1;

    document.getElementById('iframe').src = initialURL + gameXID;
}





/*

function withinTimeRange(startHour, startMin, day){
	var length = 3;  // Approximate length of a match;
	var currentdate = new Date(); 
	var currentDay = currentdate.getDay();
	var currentHour = currentdate.getHours();
	var currentMin = currentdate.getMinutes();

	if (currentDay != day) return false;
	if (startHour == currentHour  &&  startMin <= currentMin){
		return true;
	}
	if (startHour < currentHour  &&  currentHour < (startHour + 3)){
		return true;
	}
	if (currentHour == (startHour + 3)  &&  startMin >= currentMin){
		return true;
	}
	return false;
}

if ()
  case (withinTimeRange(18, 10, 4)):
    
    break;
  case (y < 60):
    //
    break;
  case (y < 130):
    //
    break;
}


alert("day is " + (currentdate.getDay()) + " and hours is "
	+ currentdate.getHours() + " and min is " + currentdate.getMinutes());
*/