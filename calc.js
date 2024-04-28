// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate() {
    try {
        // Evaluate the expression using Math.js
        let result = math.evaluate(document.getElementById('display').value);
        
        // Check if the result is a number
        if (!isNaN(result)) {
            // Round the result to two decimal places
            result = parseFloat(result.toFixed(2));
            document.getElementById('display').value = result;
        } else {
            // Display "Error" if the result is not a number
            document.getElementById('display').value = "Error";
        }
    } catch (error) {
        // Display "Error" if there's an error during evaluation
        document.getElementById('display').value = "Error";
    }
}

/*
// script.js
function updateDateTime() {
    var datetimeElement = document.getElementById('datetime');
    var now = new Date();
    var dateTimeString = now.toLocaleString(); // Adjust format as needed
    datetimeElement.innerHTML = (dateTimeString);
}

window.onload = function() {
    updateDateTime(); // Initial update
    setInterval(updateDateTime, 1000); // Update every second
};*/

/*
// Function to update the date dynamically
function updateDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("date");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
}

// Call updateDate function initially and set interval to update every second
updateDate();
setInterval(updateDate, 1000);*/

function updateDateTime() {
    const currentDate = new Date();
    const dateElement = document.getElementById("datetime");
    
    // Options for formatting the date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    // Format the date and time separately
    const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
    
    // Update the date element with both date and time
    dateElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Call updateDateTime function initially
updateDateTime();

// Set interval to update every second
setInterval(updateDateTime, 1000);
