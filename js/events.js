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