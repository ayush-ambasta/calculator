var buttons=document.getElementsByClassName("btn");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var data=this.getAttribute('id');
        if(data=="ac"){
            operand1=0;
            operand2=null;
            operator=null;
            display.innerText=0;
        }else if(data=="back"){
            if(display.innerText=="NOT DEFINE"){
                display.innerText="";
            }
            var length=(display.innerText.length);
            display.innerText=display.innerText.slice(0,length-1);
           
        }else if(data=="%" || data=="/" || data=="x" || data=="-"|| data=="+"){
            if(operand2==null){
            operator=data;
            display.innerText="";
            }
            else{
                if(operator=="%"){
                    var result=eval("operand1 % operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="/"){
                    if(operand2==0){
                        display.innerText="NOT DEFINE";
                        operator=null;
                        operand2=null;
                        operand1=0;
                    }else{
                    var result=eval("operand1 / operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                    }
                }
                if(operator=="x"){
                    var result=eval("operand1 * operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="+"){
                    var result=eval("operand1 + operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="-"){
                    var result=eval("operand1 - operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
            }
        }
        else if(data=="="){
            if(operand2!=null){
                if(operator=="%"){
                    var result=eval("operand1 % operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="/"){
                    if(operand2==0){
                        display.innerText="NOT DEFINE";
                        operator=null;
                        operand2=null;
                        operand1=0;
                    }else{
                    var result=eval("operand1 / operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                    }
                }
                if(operator=="x"){
                    var result=eval("operand1 * operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="+"){
                    var result=eval("operand1 + operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="-"){
                    var result=eval("operand1 - operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
            }else{
                display.innerText=operand1;
                operand2=null;
                operator=null;
            }
        }
        else{
            if(operator==null){
                if(display.innerText==0 || display.innerText=="NOT DEFINE"){
                    display.innerText="";
                }
                display.innerText+=data;
                operand1=parseFloat(display.innerText);
            }else{
                if(display.innerText==0){
                    display.innerText="";
                }
                display.innerText+=data;
                operand2=parseFloat(display.innerText);
            }
        }
    });
}