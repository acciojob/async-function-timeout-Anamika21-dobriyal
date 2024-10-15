//your JS code here. If required.
// Function to introduce a delay using async/await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission
async function handleSubmit() {
    // Get the text and delay values from the input fields
    const text = document.getElementById('text').value;
    const delayValue = document.getElementById('delay').value;

    // Ensure the delayValue is a number and greater than 0
    if (isNaN(delayValue) || delayValue <= 0) {
        document.getElementById('output').innerText = "Please enter a valid delay time in milliseconds.";
        return;
    }

    // Clear the output div before starting
    document.getElementById('output').innerText = '';

    // Introduce a delay before displaying the message
    await delay(parseInt(delayValue));

    // Display the user input in the output div after the delay
    document.getElementById('output').innerText = text;
}

// Attach the event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);
