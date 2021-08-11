const putFormHandler = async (event) => {
    event.preventDefault();
    const patient_id = document.querySelector('#ptId').value.trim();
    const first_name = document.querySelector('#ptFirstName').value.trim();
    const last_name = document.querySelector('#ptLastName').value.trim();
    const email = document.querySelector('#ptEmail').value.trim();
    const phone_number = document.querySelector('#ptPhoneNumber').value.trim();
    const dateOfBirth = document.querySelector('#ptDOB').value.trim();

    if (first_name && last_name && email && phone_number && dateOfBirth) {
        const response = await fetch(`/api/patient/${patient_id}`, {
            method: 'PUT',
            body: JSON.stringify({ first_name, last_name, email, phone_number, dateOfBirth }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/api/patient/${patient_id}}`);
        } else {
            alert('Failed to add Patient')
        }
    }
}

document.querySelector('.update-form').addEventListener('submit', putFormHandler);

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