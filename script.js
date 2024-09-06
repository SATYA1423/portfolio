// Tab switching function
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Remove "active" class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the selected tabcontent
    document.getElementById(tabName).style.display = "block";
    
    // Add "active" class to the clicked tab
    evt.currentTarget.className += " active";
  }
  
  // Default open tab
  document.getElementsByClassName("tablinks")[0].click();
  