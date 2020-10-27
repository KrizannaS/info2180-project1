/* Add your JavaScript to this file */
function validate(){

var validation=/\S+@\S+\.\S+/;
var  inputx= validation.test(document.getElementById("email").value);
var  val= document.getElementById("email").value;


if(!inputx||inputx==null){
alert("Please enter a valid email address.");
}

else{

alert("Thank you! Your email address" +" " + val +"  has been to our mailing list!");
}
return inputx;
}
