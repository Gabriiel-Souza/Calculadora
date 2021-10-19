var valor1 = 0;
var valor2 = 0;
var tipoConta = 0;

function limpar() {
    valor1 = 0;
    valor2 = 0;
    tipoConta = 0;
    document.getElementById("numbers").textContent = "Digite os números";
}

function trocarSinal() {
    if (document.getElementById("numbers").textContent == "Digite os números") {
        document.getElementById("numbers").textContent = "0";
    } else {
        var text = document.getElementById("numbers").textContent;
        var lastIndex = text.length-1;
        if (text[lastIndex] == ".") {
            text += "0";
        }
        
        var valor;

        if (text.includes(".")) {
            valor = parseFloat(text);
        } else {
            valor = parseInt(text);
        }
        
        valor*= -1;
        document.getElementById("numbers").textContent = `${valor}`;
    }
}
function digitarNum(num) {
    var num;
    if (valor2 != 0 && tipoConta == 0) {
        document.getElementById("numbers").textContent = null;
    }
    var numbers = document.getElementById("numbers").textContent;
    if (numbers == "Digite os números" || numbers == "0") {
        document.getElementById("numbers").textContent = null;
    }
    document.getElementById("numbers").textContent += num;
}

function digitarVirgula() {
    if (!document.getElementById("numbers").textContent.includes(".")) {
        document.getElementById("numbers").textContent += ".";
    }
}

function conta(tipo) {
    var text = document.getElementById("numbers").textContent;
        var lastIndex = text.length-1;
        if (text[lastIndex] == ".") {
            text += "0"   
        }
    if (text.includes(".")) {
        valor1 = parseFloat(text);
    } else {
        valor1 = parseInt(text);
    }
    document.getElementById("numbers").textContent = "0";
    tipoConta = tipo;
}

function porcentagem() {
    var text = (document.getElementById("numbers").textContent);
    var valor = 0;
    if (text != "Digite os números") {
        var lastIndex = text.length-1
        if (text[lastIndex] == ".") {
            text += "0"   
        }
        if (text.includes(".")) {
            valor = parseFloat(text);
        } else {
            valor = parseInt(text);
        }
    }
    valor /= 100;
    document.getElementById("numbers").textContent = `${valor}`;
}

function resultado() {
    var text = document.getElementById("numbers").textContent;
        var lastIndex = text.length-1;
        if (text[lastIndex] == ".") {
            text += "0"   
        }
    if (text.includes(".")) {
        valor2 = parseFloat(text);
    } else {
        valor2 = parseInt(text);
    }
    var result = 0
    switch (tipoConta) {
        case 1:
            if (valor2 != 0) {
                result = valor1 / valor2;
            } else {
                result = "Erro";
            }
        break;
        case 2:
            result = valor1 * valor2;
        break;
        case 3:
            result = valor1 - valor2;
        break;
        case 4:
            result = valor1 + valor2;
        break;
    }
    console.log(`Valor1: ${valor1}, Valor2: ${valor2}`);
    document.getElementById("numbers").textContent = `${result}`;
    tipoConta = 0
}