
const events = [
    { name: 'Event 1', date: '2024-01-25', location: 'Location 1' },
    { name: 'Event 2', date: '2024-02-15', location: 'Location 2' },
    { name: 'Event 3', date: '2024-03-10', location: 'Location 3' },
];


function displayEvents() {
    const eventListContainer = document.getElementById('eventList');

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');

        const detailsButton = document.createElement('button');
        detailsButton.innerHTML = 'Details';
        detailsButton.classList.add('details-btn');
        detailsButton.addEventListener('click', () => showEventDetails(event));

        eventElement.innerHTML = `<div>${event.name}</div><div>${event.date}</div><div>${event.location}</div>`;
        eventElement.appendChild(detailsButton);

        eventListContainer.appendChild(eventElement);
    });
}


function showEventDetails(event) {
    alert(`Event Details:\nName: ${event.name}\nDate: ${event.date}\nLocation: ${event.location}`);
}

displayEvents();
