

var new_div = document.createElement("div");
new_div.setAttribute("class","numbers-container");


var num;
for(var n=9; n>=0; n--){
    
    var buttons = document.createElement("button");
    num = document.createTextNode(n);
    buttons.appendChild(num);

    new_div.appendChild(buttons);

}

var main = document.getElementsByClassName("main-container");
main[0].appendChild(new_div);

//  event on button 

var value = document.getElementsByTagName("button");

for (let i=0; i<value.length; i++){
    document.write(value[i].innerHTML);
}