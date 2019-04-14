// VARIABLES DECLARATION

var savedValue;
var upperDisplaySavedValue;
var result = 0;
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var divide = document.getElementById("divide");
var plusOrMinus = document.getElementById("plusOrMinus");
var point = document.getElementById("point");
var clear = document.getElementById("clear");

// FUNCTIONS DECLARATION

// NUMBERS FUNCTIONS

one.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "1";
};
two.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "2";
};
three.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "3";
};
four.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "4";
};
five.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "5";
};
six.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "6";
};
seven.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "7";
};
eight.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "8";
};
nine.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "9";
};
zero.onclick = function () {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += "0";
};

// OPERANDS FUNCTIONS

document.getElementById("plus").onclick = function () {
    operand = "+";
    savedValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    document.getElementById("upperDisplay").innerHTML = savedValue + "+";
};
document.getElementById("minus").onclick = function () {
    operand = "-";
    savedValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    document.getElementById("upperDisplay").innerHTML = savedValue + "-";
};
document.getElementById("times").onclick = function () {
    operand = "*";
    savedValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    document.getElementById("upperDisplay").innerHTML = savedValue + "*";
};
document.getElementById("divide").onclick = function () {
    operand = "÷";
    savedValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    document.getElementById("upperDisplay").innerHTML = savedValue + "÷";
};

// CLEAR, PLUS OR MINUS, PERCENT, POINT AND EQUALS FUNCTIONS

document.getElementById("plusOrMinus").onclick = function () {
    if (document.getElementById("display").innerHTML > 0) {
        document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML;
    } else if (document.getElementById("display").innerHTML < 0) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(1, document.getElementById("display").innerHTML.length);
    }
};
document.getElementById("point").onclick = function () {

    document.getElementById("display").innerHTML += ".";
};
document.getElementById("equals").onclick = function () {
    if (operand == "+") {
        upperDisplaySavedValue = document.getElementById("display").innerHTML;
        result = parseFloat(savedValue) + parseFloat(document.getElementById('display').innerHTML);
        document.getElementById("display").innerHTML = result;
        document.getElementById("upperDisplay").innerHTML = savedValue + operand + upperDisplaySavedValue;
    } else if (operand == "-") {
        upperDisplaySavedValue = document.getElementById("display").innerHTML;
        result = parseFloat(savedValue) - parseFloat(document.getElementById('display').innerHTML);
        document.getElementById("display").innerHTML = result;
        document.getElementById("upperDisplay").innerHTML = savedValue + operand + upperDisplaySavedValue;
    } else if (operand == "*") {
        upperDisplaySavedValue = document.getElementById("display").innerHTML;
        result = parseFloat(savedValue) * parseFloat(document.getElementById('display').innerHTML);
        document.getElementById("display").innerHTML = result;
        document.getElementById("upperDisplay").innerHTML = savedValue + operand + upperDisplaySavedValue;
    } else if (operand == "÷") {
        upperDisplaySavedValue = document.getElementById("display").innerHTML;
        result = parseFloat(savedValue) / parseFloat(document.getElementById('display').innerHTML);
        document.getElementById("display").innerHTML = result;
        document.getElementById("upperDisplay").innerHTML = savedValue + operand + upperDisplaySavedValue;
    }
};
document.getElementById("clear").onclick = function () {
    document.getElementById("display").innerHTML = "";
    document.getElementById("upperDisplay").innerHTML = "";
};
