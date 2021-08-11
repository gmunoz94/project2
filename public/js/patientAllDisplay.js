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
        allOrders.style.display = "none";

    } 
  }

  const orderFormHandler = async (event) => {
    event.preventDefault();
    const patient_id = document.querySelector('#ptId').value.trim();
    const order_date = document.querySelector('#orderDate').value.trim();
    const type = document.querySelector('#orderType').value.trim();
    const status = document.querySelector('#orderStatus').value.trim();

    console.log(order_date)

    if (patient_id && type && status && order_date) {
        const response = await fetch('/api/orders/', {
            method: 'POST',
            body: JSON.stringify({ patient_id, type, status, order_date }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace('/');
        } else {
            alert('Failed to add Order')
        }
    }
}

document.querySelector('#orderSubmit').addEventListener('click', orderFormHandler);