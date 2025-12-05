function add(a,b){
    return (a+b);
}
function substract(a,b){
    return (a-b);
}
function multiply(a,b){
    return (a*b);
}
function divide(a,b){
    return (a/b);
}
function operate(a,b,sign){
    a=Number(a);
    b=Number(b);
    let output;
    switch (sign){
        case '+':
            output= add(a,b);
            break;
        case '-':
            output= substract(a,b);
            break;
        case 'x':
            output= multiply(a,b);
            break;
        case "÷":
            output= divide(a,b);
    }
    output*=1000;
    output=Math.round(output);
    output/=1000;
    if(output === Infinity) return "Cannot divide by zero";
    return output;
}

let a="",b="",sign="";
const operator="+-x÷";
const txtbar=document.querySelector(".input");

const input = document.querySelectorAll("button");
input.forEach(button => {
    button.addEventListener("click", ()=>{
        let value=button.textContent;
        if(!isNaN(Number(value))){
            if(sign === ""){
                txtbar.innerText="";
                a+=value;
                txtbar.innerText+=a;
            }
            else {
                if(b === "")txtbar.innerText+=" "+value;
                else txtbar.innerText+=value;
                b+=value; 
            }
        }
        else if(operator.includes(value)){
            if(b !== ""){
                let output=operate(a,b,sign);
                txtbar.innerText=output;
                if(!isNaN(output)){
                    a=output;
                    b="";
                    sign=value;
                    txtbar.innerText+=" "+sign;
                }
            }
            else{
                if (a === "" && !isNaN(txtbar.innerText)) a=txtbar.innerText;
                if(a !==""){
                    sign=value;
                    txtbar.innerText=a+" "+sign;
                }
            }
        }
        else if(value === "="){
            if(a !== "" && b !== "" && sign !== ""){
                let output=operate(a,b,sign);
                txtbar.innerText=output;
                a="";
                b="";
                sign="";
            }
        }
        else if(value === "AC"){
            txtbar.innerText="";
            a="";
            b="";
            sign="";
        }
        else if(value === "."){
            if(sign === "" && !a.includes(".") && a!=""){
                a+=value;
                txtbar.innerText+=value;
            }
            else{
                if(!b.includes(".") && b!=""){
                    if(b === "") txtbar.innerText+=" "+value;
                    else txtbar.innerText+=value;
                    b+=value;
                }
            }
        }
        else if(value === "back"){

        }
    });
})