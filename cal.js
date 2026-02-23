function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if(isNaN(num1)||isNaN(num2)){
        document.getElementById("result").innerText = "Enter valid numbers!";
        return;
    }
    switch(operation)
    {
        case 'add' :
            result = num1 + num2;break;
         case 'sub' :
            result = num1 - num2;break;
         case 'mul' :
            result = num1 * num2;break;
         case 'div' :
            result = num2!==0?num1/num2:"cannot divide by Zero!";break;          
    }
    document.getElementById("result").innerText="Result:" +result;
}
function clearFields(){
    document.getElementById('num1').value=" ";
    document.getElementById('num2').value=" ";
    document.getElementById('result').innerText=" ";
}