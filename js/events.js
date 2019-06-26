function openModules(evt, eventName) {
  // Declare all variables
  var i, modulecontent, modules;

  // Get all elements with class="subModule" and hide them
  modulecontent = document.getElementsByClassName("subModule");
  for (i = 0; i < modulecontent.length; i++) {
    modulecontent[i].style.display = "none";
  }

  // Get all elements with class="modules" and remove the class "active"
  modules = document.getElementsByClassName("modules");
  for (i = 0; i < modules.length; i++) {
    modules[i].className = modules[i].className.replace(" active", "");
  }

 // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(eventName).style.display = "";
  evt.currentTarget.className += " active";
}

function openEvent(evt, eventDetails) {
  // Declare all variables
  var i, eventcontent, eventss;

  // Get all elements with class="eventContent" and hide them
  eventcontent = document.getElementsByClassName(" eventContent ");
  for (i = 0; i < eventcontent.length; i++) {
    eventcontent[i].style.display = " none ";
  }

  // Get all elements with class="events" and remove the class "active"
  eventss = document.getElementsByClassName(" events ");
  for (i = 0; i < eventss.length; i++) {
    eventss[i].className = eventss[i].className.replace(" active ", "");
  }

 // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(eventDetails).style.display = "";
  evt.currentTarget.className += " active ";
}

function openPronites(evt,pronitesName) {
  // Declare all variables
  var i, pronitescontent, pronitess;

  // Get all elements with class="pronitesContent" and hide them
  pronitescontent = document.getElementsByClassName("pronitesContent");
  for (i = 0; i < pronitescontent.length; i++) {
    pronitescontent[i].style.display = "none";
  }

  // Get all elements with class="pronites" and remove the class "active"
  pronitess = document.getElementsByClassName("pronites");
  for (i = 0; i < pronitess.length; i++) {
    pronitess[i].className = pronitess[i].className.replace(" active1", "");
  }

 // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pronitesName).style.display = "";
  evt.currentTarget.className += " active1";
}


function hideRules(){
  var i,rules;
  // Get all elements with class="eventContent" and hide them
  rules = document.getElementsByClassName(" eventContent ");
  for (i = 0; i < rules.length; i++) {
    rules[i].style.display = " none ";
  }
}

function hideSubModules(){
  var i,subModules;
  // Get all elements with class="subModule" and hide them
  subModules = document.getElementsByClassName(" subModule ");
  for (i = 0; i < subModules.length; i++) {
    subModules[i].style.display = " none ";
  }
}

//this function sets the image of the modules cards to the default image.

function setOriginalImage(){

document.getElementById('LITERARY-image').src="SVG/events/literary.svg";
document.getElementById('LCA-image').src="SVG/events/lights.svg";
document.getElementById('SPORTS-image').src="SVG/events/sports.svg";
document.getElementById('MUSIC-image').src="SVG/events/music.svg";
document.getElementById('DANCE-image').src="SVG/events/dance.svg";
document.getElementById('STAGE-image').src="SVG/events/stage craft.svg";
document.getElementById('VOGUE-image').src="SVG/events/vogue.svg";
document.getElementById('CLASS-image').src="SVG/events/music.svg";
document.getElementById('ART-image').src="SVG/events/art.svg";
document.getElementById('INFORMALS-image').src="SVG/events/informal.svg";


}
//this function changes the image of the active module card from the default image to the lighter version.

function setActiveImage(imageid){
	switch(imageid){

		case 'LITERARY-image':
			document.getElementById('LITERARY-image').src="SVG/events/literary light.svg";
			break;
		case 'LCA-image':
			document.getElementById('LCA-image').src="SVG/events/lights light.svg";
			break;
		case 'SPORTS-image':
			document.getElementById('SPORTS-image').src="SVG/events/sports light.svg";
			break;
		case 'MUSIC-image':
			document.getElementById('MUSIC-image').src="SVG/events/music light.svg";
			break;
		case 'DANCE-image':
			document.getElementById('DANCE-image').src="SVG/events/dance light.svg";
			break;
		case 'STAGE-image':
			document.getElementById('STAGE-image').src="SVG/events/stage craft light.svg";
			break;
		case 'VOGUE-image':
			document.getElementById('VOGUE-image').src="SVG/events/vogue light.svg";
			break;
		case 'CLASS-image':
			document.getElementById('CLASS-image').src="SVG/events/music light.svg";
			break;
		case 'ART-image':
			document.getElementById('ART-image').src="SVG/events/art light.svg";
			break;
		case 'INFORMALS-image':
			document.getElementById('INFORMALS-image').src="SVG/events/informal light.svg";
			break;



	}

}


//hide proniteContent on load.
function hidePronitesContent(){
  var i,rules;
  // Get all elements with class="pronitesContent" and hide them
  rules = document.getElementsByClassName(" pronitesContent ");
  for (i = 0; i < rules.length; i++) {
    rules[i].style.display = " none ";
  }
}

//loading the first module on load.
function loadFirstModule(){

	document.getElementById('LITERARY').style.display= "";
	document.getElementById("JAM").style.display= "";

}