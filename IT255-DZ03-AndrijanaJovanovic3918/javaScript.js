function add() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('result').value = n1 + n2;
}

function sub() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('result').value = n1 - n2;
}

function mul() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('result').value = n1 * n2;
}

function div() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    document.getElementById('result').value = n1 / n2;
}
