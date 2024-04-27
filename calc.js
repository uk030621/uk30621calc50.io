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


// Function to update the date dynamically
function updateDate() {
    const currentDate = new Date();
    const dateElement = document.getElementById("date");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
}

// Call updateDate function initially and set interval to update every second
updateDate();
setInterval(updateDate, 1000);