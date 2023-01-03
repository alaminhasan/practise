
var input = document.getElementById("input").value;
console.log(input);
var button  = document.getElementById("button");


function validation (){
    let text;
    if(input<1 || input>10){
        text = "This is not Valid number";
    }
    else{
        text="this is valid number";
    }
    document.getElementById("para").innerHTML= text;

}

button.addEventListener("click", validation);