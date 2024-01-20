function validateAndSubmit() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventDescription = document.getElementById('eventDescription').value;

    
    if (eventName && eventDate && eventLocation && eventDescription) {
       
        alert('Event created successfully!\nName: ' + eventName + '\nDate: ' + eventDate +
              '\nLocation: ' + eventLocation + '\nDescription: ' + eventDescription);
    } else {
        alert('Please fill in all fields before submitting.');
    }
}
