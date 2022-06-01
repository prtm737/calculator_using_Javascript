function valueButton (e) {

    calculatorform.screen.value += e.value;

};

function Clear() {

    calculatorform.screen.value = null

};

function calculate() {

    calculatorform.screen.value = eval(calculatorform.screen.value);

};

function Backspace() {

    var rel = calculatorform.screen.value;

    rel = rel.substring(0, rel.length - 1);

    


}


