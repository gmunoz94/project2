var test = 0;
var profile = document.getElementById("profile");
var allOrders = document.getElementById("allOrders");
var pending = document.getElementById("pending");
var Complete = document.getElementById("Complete");
var New = document.getElementById("new");

function displayProfile() {
    if (profile.style.display = "none") {
        profile.style.display = "block";
      //make the rest display none
      allOrders.style.display = "none";
      pending.style.display = "none";
      Complete.style.display = "none";
      New.style.display = "none";
    } 
  }


  function newProfile() {
    if (New.style.display = "none") {
        New.style.display = "block";
        //make the rest display none
        pending.style.display = "none";
        Complete.style.display = "none";
    } 
  }