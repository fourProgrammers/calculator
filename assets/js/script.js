window.onload = () => {
    const sumButton = document.getElementById("sumButton");
    const subButton = document.getElementById("subButton");
    const multButton = document.getElementById("multButton");
    const divButton = document.getElementById("divButton");
    const clearButton = document.getElementById("clearButton");




    // clear all inputs
    clearButton.onclick = () => {
        document.getElementById("term").value = "0";
    }

}

function addNumber(element) {

    const term = document.getElementById("term");

    if (term.value == 0) {

        term.value = element.getAttribute('data-numero');

    } else {

        term.value += element.getAttribute('data-numero');

    }

}