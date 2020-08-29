window.onload = () => {
    const sumButton = document.getElementById("sumButton");
    const subButton = document.getElementById("subButton");
    const multButton = document.getElementById("multButton");
    const divButton = document.getElementById("divButton");
    const clearButton = document.getElementById("clearButton");
    const deleteButton = document.getElementById("deleteButton");



    // clear all inputs
    clearButton.onclick = () => {
        document.getElementById("term").value = "0";
    }
    deleteButton.onclick = () => {
        valor = document.getElementById("term").value;
        if (valor.length == 1){
            document.getElementById("term").value = "0";
        }else{
            document.getElementById("term").value = valor.slice(0, -1);
        }
    }

}

function addNumber(element) {

    const term = document.getElementById("term");

    if (term.value === '0') {
        if(element.getAttribute('data-numero') == '.'){
            term.value += element.getAttribute('data-numero');
        } else {
            term.value = element.getAttribute('data-numero');
        }

    } else {
        //limite de 8 caracteres para o texto ficar arrumado
        if(term.value.length < 8){
            if(term.value.includes('.') != true && element.getAttribute('data-numero') == '.'){
                term.value += element.getAttribute('data-numero');
            }else if(element.getAttribute('data-numero') != '.'){
                term.value += element.getAttribute('data-numero');
            }
        }
    }

}