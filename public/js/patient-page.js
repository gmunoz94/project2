const putFormHandler = async (event) => {
    event.preventDefault();
    const patient_id = document.querySelector('#ptId').value.trim();
    const first_name = document.querySelector('#ptFirstName').value.trim();
    const last_name = document.querySelector('#ptLastName').value.trim();
    const email = document.querySelector('#ptEmail').value.trim();
    const phone_number = document.querySelector('#ptPhoneNumber').value.trim();
    const dateOfBirth = document.querySelector('#ptDOB').value.trim();
    console.log('hi:)')
    console.log(first_name)

    if (first_name && last_name && email && phone_number && dateOfBirth) {
        const response = await fetch(`/api/patient/${patient_id}`, {
            method: 'PUT',
            body: JSON.stringify({ first_name, last_name, email, phone_number, dateOfBirth }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('hello')
            console.log(first_name)
            // document.location.replace('/');
        } else {
            alert('Failed to add Patient')
        }
    }
}

document.querySelector('.update-form').addEventListener('submit', putFormHandler);

const orderFormHandler = async (event) => {
    event.preventDefault();
    const patient_id = document.querySelector('#ptId').value.trim();
    const email = document.querySelector('#ptEmail').value.trim();

    
    console.log('hi:)')
    console.log(first_name)

    if (first_name && last_name && email && phone_number && dateOfBirth) {
        const response = await fetch(`/api/patient/${patient_id}`, {
            method: 'PUT',
            body: JSON.stringify({ first_name, last_name, email, phone_number, dateOfBirth }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('hello')
            console.log(first_name)
            // document.location.replace('/');
        } else {
            alert('Failed to add Patient')
        }
    }
}

document.querySelector('.update-form').addEventListener('submit', putFormHandler);