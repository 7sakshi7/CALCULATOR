function gethistory(){
    return document.getElementById('history-value').innerText;
}
console.log(gethistory());

function printhistory(num){
    document.getElementById('history-value').innerText=num;
}

function getoutput(){
    return document.getElementById('output').innerText;
}

function printoutput(num){
    if(num == ""){
        document.getElementById('output').innerText= num;
    }
    else
    document.getElementById('output').innerText= getFormattedNumber(num);
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reversenumber(num){
    return Number(num.replace(/,/g,''));
}
let operator = document.getElementsByClassName('operator');
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        console.log(`opeartor is clicked ${this.id}`);
        if(this.id=="clear"){
            printhistory("");
            printoutput("");
        }
        else if(this.id=="backspace"){
            var n = reversenumber(getoutput()).toString();
            if(n){
                n=n.substr(0,n.length-1);
                printoutput(n);
            }
        }
        else{
            var n = getoutput();
            var history = gethistory();
            if(n=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(n!="" || history!=""){
                n = n==""? n:reversenumber(n);
                history = history+n;
                if(this.id=="="){
                    var result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history = history+this.id;
                    printhistory(history);
                    printoutput("");
                }

            }

        }
    })
}

let number = document.getElementsByClassName('number');
let n ="";
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var outputv = reversenumber(getoutput());
        if(Number.isInteger(outputv)){
            outputv+=this.id;
            printoutput(outputv);

        }
        // n+=this.id;
        // document.getElementById('output').innerText=n;
        console.log(`number is clicked ${this.id}`);
    })
}