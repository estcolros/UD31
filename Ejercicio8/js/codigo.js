var num1 = 0.0;
var num2 = 0.0;
var result = 0.0;
var operador = "";
var tstring = "";


function retr(){

    var texto = $("#texto").val();
    var cadena = "";

    for (var i = 0; i < texto.length-1; i++) {
        cadena += texto[i];
        
    }
    $("#texto").val(cadena);

}

function ce() {

    $("#texto").val("");
    
}

function c() {
    num1 = 0.0;
    num2 = 0.0;
    result = 0.0;
    operador = "";
    tstring = "";
    $("#texto").val("");
    $("#resul").val("");
}


function op(elem) {
    var oper = $(elem).attr('id');
    console.log(oper)

    if ($("#texto").html() === 0){
        alert("Introduce un numero");
    }
    else{
        
        tstring=$("#texto").val();
        console.log(tstring);
        var text = "";
        var result = "";
        num1 = parseFloat(tstring);
        switch (oper){
            case "/":
                operador = "/";
                text = "";
                result = num1 + ' / ';
                break;
            case "raiz":
                text = Math.sqrt(num1);
                result = num1 + ' raiz= ' + Math.sqrt(num1);
                break;
            case "*":
                operador = "*";
                text="";
                result=num1 + ' * ';
                break;
            case "%":
                operador = "%";
                text="";
                result=num1 + ' % ';
                break;
            case "-":
                operador = "-";
                text="";
                result=num1 + ' - ';
                break;
            case "1/x":
                text=1 / num1;
                result='1 / ' + num1 + ' = ' + 1 / num1;
                break;
            case "+":
                operador = "+";
                text="";
                result=num1 + ' + ';
                break;
        }

        $("#texto").val(text)
        $("#resul").val(result)
    }
}

function num(oper){
    $("#texto").val($("#texto").val() + $(oper).attr('id')); 
}

function punto() {

    if ($("#texto").val() !== ""){
    
        $("#texto").val($("#texto").val() + ".");
    
    }
    
}

function mas() {
    if ($("#texto").val() !== ""){
        $("#texto").val("-" + $("#texto").val());
    }
}

function resultado(){
    tstring = "";
    tstring = $("#texto").val() + ".0";
    num2 = parseFloat(tstring);

    if (operador === "/"){
        $("#texto").val(eval(num1 / num2).toFixed(2));
        $("#resul").val($("#resul").val() + num2 + '= ' + eval(num1 / num2).toFixed(2));
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "*"){
        $("#texto").val(eval(num1 * num2).toFixed(2));
        $("#resul").val($("#resul").val() + num2 + '= ' + eval(num1 * num2).toFixed(2));
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "%"){
        $("#texto").val(eval(num1 % num2).toFixed(2));
        $("#resul").val($("#resul").val() + num2 + '= ' + eval(num1 % num2).toFixed(2));
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "-"){
        $("#texto").val(eval(num1 - num2).toFixed(2));
        $("#resul").val($("#resul").val() + num2 + '= ' + eval(num1 - num2).toFixed(2));
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "+"){
        $("#texto").val(eval(num1 + num2).toFixed(2));
        $("#resul").val($("#resul").val() + num2 + '= ' + eval(num1 + num2).toFixed(2));
        num1 = 0.0;
        num2 = 0.0;
    }
}