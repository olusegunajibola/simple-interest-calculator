function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var t2 = new Date().getFullYear() + parseInt(t);
    var result = document.getElementById("result");

    if (p <= 0) {
        alert("Please enter positive values for principal!");
        document.getElementById("principal").focus();
    }
    else {
        var output = p * r * t / 100; // Calculate interest
        // result.innerHTML = "Interest earned is: " + "$" + output.toFixed(2) ;
        result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + output + "</mark>" + ",\<br\> in the year " + "<mark>" + t2 + "</mark>." + "\<br\>";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

// function compute() {
//     var principal = document.getElementById("principal").value;
//     var rate = document.getElementById("rate").value;
//     var years = document.getElementById("years").value;
//     var interest = principal * years * rate / 100;
//     var year = new Date().getFullYear() + parseInt(years);
//     var amount = parseInt(principal) + parseFloat(interest);
//     var result = document.getElementById("result");

//     if (principal <= 0) {
//         alert('Please enter a positive number!');
//         document.getElementById("principal").focus();
//     }
//     else {
//         result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
//     }
// }

// function updateRate() {
//     var rateval = document.getElementById("rate").value;
//     document.getElementById("rate_val").innerText = rateval;
// }
