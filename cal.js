var buttons=document.getElementsByClassName("btn");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
var decimal=null;
var result=null;
var found=false; //to check decimal

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var data=this.getAttribute('id');
        if(data=="ac"){
            operand1=0;
            operand2=null;
            operator=null;
            result=null;
            display.innerText=0;
        }else if(data=="back"){
            if(display.innerText=="NOT DEFINE"){
                display.innerText=0;
            }
            var length=(display.innerText.length);
            if(length==1){
                display.innerText=0;
            }else{
                display.innerText=display.innerText.slice(0,length-1);
            }
            if(operand2!=null){
                operand2=parseFloat(display.innerText);
            }else{
                operand1=parseFloat(display.innerText);
            }
           
        }else if(data=="%" || data=="/" || data=="x" || data=="-"|| data=="+"){
            if(operand2==null){
                operator=data;
                display.innerText="";
            }
            else{
                if(operator=="%"){
                    result=eval("operand1 % operand2");
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
                    result=eval("operand1 / operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                    }
                }
                if(operator=="x"){
                    result=eval("operand1 * operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="+"){
                    result=eval("operand1 + operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="-"){
                    result=eval("operand1 - operand2");
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
                    result=eval("operand1 % operand2");
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
                        result=eval("operand1 / operand2");
                        display.innerText=result;
                        operand1=parseFloat(result);
                        operand2=null;
                        operator=null;
                    }
                }
                if(operator=="x"){
                    result=eval("operand1 * operand2");
                    display.innerText=result;
                    console.log(result);
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="+"){
                    result=eval("operand1 + operand2");
                    display.innerText=result;
                    operand1=parseFloat(result);
                    operand2=null;
                    operator=null;
                }
                if(operator=="-"){
                    result=eval("operand1 - operand2");
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
        else if(data=="."){
            found=false;
            for(var j=0;j<display.innerText.length;j++){
                if(display.innerText[j]=="."){
                    found=true;
                    break;
                }
            }
            if(found==false){
                if(display.innerText==0 ||display.innerText=="NOT DEFINE" || result!=null){
                    display.innerText="";
                 }
                display.innerText+=data;
            }
        }
        else{
            if(operator==null){
                if(display.innerText == 0 || display.innerText=="NOT DEFINE" || result!=null){
                    display.innerText="";
                    result=null;
                }
                display.innerText+=data;
                operand1=parseFloat(display.innerText);
                console.log(operand1);
            }else{
                if(display.innerText==0){
                    display.innerText="";
                }
                display.innerText+=data;
                operand2=parseFloat(display.innerText);
                console.log(operand2);
            }
        } 
    });
}