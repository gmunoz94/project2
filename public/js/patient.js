const patientFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#ptFirstName').value.trim();
    const last_name = document.querySelector('#ptLastName').value.trim();
    const email = document.querySelector('#ptEmail').value.trim();
    const phone_number = document.querySelector('#ptPhoneNumber').value.trim();
    const dateOfBirth = document.querySelector('#ptDOB').value.trim();

    console.log(first_name)

    if (first_name && last_name && email && phone_number && dateOfBirth) {
        const response = await fetch('/api/patient', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, phone_number, dateOfBirth }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/api/patient');
        } else {
            alert('Failed to add Patient')
        }
    }
}

document.querySelector('.add-patient').addEventListener('submit', patientFormHandler);

// const putFormHandler = async (event) => {
//     event.preventDefault();

//     const first_name = document.querySelector('#ptFirstName').value.trim();
//     const last_name = document.querySelector('#ptLastName').value.trim();
//     const email = document.querySelector('#ptEmail').value.trim();
//     const phone_number = document.querySelector('#ptPhoneNumber').value.trim();
//     const dateOfBirth = document.querySelector('#ptDOB').value.trim();

//     console.log(first_name)

//     if (first_name && last_name && email && phone_number && dateOfBirth) {
//         const response = await fetch('/api/patient/:id', {
//             method: 'PUT',
//             body: JSON.stringify({ first_name, last_name, email, phone_number, dateOfBirth }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             console.log('hello')
//             // document.location.replace('/');
//         } else {
//             alert('Failed to add Patient')
//         }
//     }
// }

// document.querySelector('#savebtn').addEventListener('submit', putFormHandler);