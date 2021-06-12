
var errorCheck = false;
/* Function listing all the values, asking the user to confirm */

function userConfirm(showOrderDetails) {
    var showOrderDetails = "You have ordered the following: \n\n";
    showOrderDetails += "Item:" + document.getElementById("item").value + "\n";
    showOrderDetails += "Quantity:" + document.getElementById("itemQty").value + "\n";
    showOrderDetails += "Price per item:" + document.getElementById("itemPrice").value + "\n";
    showOrderDetails += "Total order price:" + document.getElementById("totalPrice").value + "\n\n";
    showOrderDetails += "Is this correct?";
    var confirmOrder = confirm(showOrderDetails);
    if (confirmOrder == false) {
        clearQtyCost();
        return false;
    } else if (errorCheck) {
        alert('Something\'s gone wrong, please check that all details are collect.');
        return false;
    } else {
        confirmOrder;
        true;
    }
}

// Function to check if any errors are present 
function sanityCheck(quantity) {
    var price = document.getElementsById("itemPrice").value;
    var total = "";
    if (quantity <= 0) {
        alert("Quantity cannot be less than 1.");
        errorCheck = true;
        return false;
    } if (quantity === "" || quantity === " " || quantity === null) {
alert("Quantity cannot be blank.");
errorCheck = true;
return false;
} else {
        total = Quantity * price;
        document.getElementById('totalPrice').value = total;
        errorCheck = false;
        true;
    }
    return;
}

// Function to clear item quantity and total price
function clearQtyCost() {
    document.getElementsById("itemQty").value = "1";
    document.getElementsById("totalPrice").value = "";
    return;
}
//Function to close current tab
function closeTab() {
    if (confirm("Close this tab?")) {
        close();
    }
}


/* Trail and Error Code:
/* Function for calculating the total cost and validating user input. For some reason the variables won't work when placed outside the functions. */


// Function to calculate price
function calculateTotal(quantity, price) {
    var quantity = document.getElementById("itemQty").value;
    var price = document.getElementById("itemPrice").value;
    document.getElementById("totalPrice").value = '$${quantity * price}';
    return;
}

