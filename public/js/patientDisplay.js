var test = 0;
var profile = document.getElementById("profile");
var allOrders = document.getElementById("allOrders");
var pending = document.getElementById("pending");
var Complete = document.getElementById("Complete");

function displayProfile() {
    if (profile.style.display = "none") {
        profile.style.display = "block";
      //make the rest display none
      allOrders.style.display = "none";
      pending.style.display = "none";
      Complete.style.display = "none";
    } 
  }

  function allOrdersProfile() {
    if (allOrders.style.display = "none") {
        allOrders.style.display = "block";
        //make the rest display none
      profile.style.display = "none";
      pending.style.display = "none";
      Complete.style.display = "none";
    } 
  }

  function pendingProfile() {
    if (pending.style.display = "none") {
        pending.style.display = "block";
        //make the rest display none
        allOrders.style.display = "none";
        profile.style.display = "none";
        Complete.style.display = "none";
    } 
  }

  function completeProfile() {
    if (Complete.style.display = "none") {
        Complete.style.display = "block";
        //make the rest display none
        profile.style.display = "none";
        allOrders.style.display = "none";
        pending.style.display = "none";
    } 
  }