window.onload = () => {
    const sumButton = document.getElementById("sumButton");
    const subButton = document.getElementById("subButton");
    const multButton = document.getElementById("multButton");
    const divButton = document.getElementById("divButton");
    const clearButton = document.getElementById("clearButton");
    const deleteButton = document.getElementById("deleteButton");
    const plusMinusButton = document.getElementById("plusMinusButton");
    const percentageButton = document.getElementById("percentageButton");


    // clear all inputs
    clearButton.onclick = () => {
        document.getElementById("term").value = "0";
        document.getElementById("label").innerText = " ";
    }
    
    deleteButton.onclick = () => {
        valor = document.getElementById("term").value;
        if (valor.length == 1){
            document.getElementById("term").value = "0";
        }else{
            document.getElementById("term").value = valor.slice(0, -1);
        }
    }
    
    plusMinusButton.onclick = () =>{
        valor = document.getElementById("term").value;
        document.getElementById("term").value = parseInt(valor) * (-1);
    }
    
    percentageButton.onclick = () =>{
        valor = document.getElementById("term").value;
        document.getElementById("term").value = parseFloat(valor) / 100;
    }
}

addNumber = (element) => {

    const term = document.getElementById("term");

    if (term.value === '0') {
        if(element.getAttribute('data-numero') == '.'){
            term.value += element.getAttribute('data-numero');
        } else {
            term.value = element.getAttribute('data-numero');
        }

    } else {
        //limite de 8 caracteres para o texto ficar arrumado
        if(term.value.length < 8) {
            if(term.value.includes('.') != true && element.getAttribute('data-numero') == '.') {
                term.value += element.getAttribute('data-numero');
            } else if(element.getAttribute('data-numero') != '.') {
                term.value += element.getAttribute('data-numero');
            }
        }
    }
}

addOperation = (element) => {

    const operation = element.getAttribute('data-operation');

    const term = document.getElementById("term");
    const label = document.getElementById("label");
    
    if(operation == '='){
        label.innerText += (" " + term.value);
        
        term.value = eval(label.innerText);

        label.innerText = "";
    } else {
        if(label.innerText == ""){
            label.innerText += (term.value + " " + element.getAttribute('data-operation'));
        } else {
            label.innerText += (" " + term.value + " " + element.getAttribute('data-operation'));
        }
        term.value = '0';
    }
}