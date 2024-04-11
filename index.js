function addingEventListener() {message ('I like your message!')
}
function addingEventListener() {
    const input = document.getElementById('myButton');
    
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    } else {
        console.error('Button element not found');
    }
}

// Call the outer function to execute addEventListener() and activate the event listener
addingEventListener();

/*function addingEventListener(mybutton) {
    const button = document.getElementById('myButton');
    
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    } else {
        console.error('Button element not found');
    }
}

// Call the outer function to execute addEventListener() and activate the event listener
addingEventListener()*/