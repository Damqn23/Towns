$(document).ready(function() {
	$('#btnShuffle').click(shuffleTowns);
	$('#btnDelete').click(deleteTown)
	$('#btnAdd').click(addTown)
});

// Function to delete a town from the select element
function deleteTown() {
    // Get the value from the input field
    let townName = $('#townName').val();

    // Clear the input field
    $('#townName').val('');

    // Flag to track if a town was removed
    let removed = false;

    // Iterate over each option in the select element
    for (let option of $('#towns option')) {
        // Check if the current option's text matches the townName
        if (option.textContent === townName) {
            // If found, set removed flag to true and remove the option
            removed = true;
            option.remove();
        }
    }

    // Display an appropriate message based on whether the town was removed
    if (removed) {
        showMessage(townName + " deleted.");
    } else {
        showMessage(townName + " not found.");
    }
}

// Function to display a message for a short time
function showMessage(msg) {
    // Set the text of the result element and make it visible
    $('#result').text(msg).css("display", "block");

    // Hide the message after 3 seconds with a 'blind' animation
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}

function addTown() { let townName = $('#townNameForAdd').val(); $('#townNameForAdd').val(''); $('#towns').append($('<option>').text(townName)); $('#result').text(townName + " added."); }
function shuffleTowns() { let towns = $('#towns option').toArray(); $('#towns').empty();

	shuffleArray(towns); $('#towns').append(towns); $('#result').text("Towns shuffled."); function shuffleArray(array) { for (var i = array.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var oldElement = array[i]; array[i] = array[j]; array[j] = oldElement; } } }
