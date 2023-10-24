const Number1 = parseInt(prompt("[Insert first Calculation Number]"));
const Operator = prompt("[Insert the operator]");
const Number2 = parseInt(prompt("[Insert The Second Number]"));

switch(Operator){
    case "+":
        document.write(`Hasilnya adalah ${Number1+Number2}`);
        break;

    case "-":
        document.write(`Hasilnya adalah ${Number1-Number2}`);
        break;

    case "x":
        document.write(`Hasilnya adalah ${Number1*Number2}`);
        break;

    case ":":
        document.write(`Hasilnya adalah ${Number1/Number2}`);
        break;
     default:
        document.write("tolong ulangi")
}
