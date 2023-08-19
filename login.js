
function username_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^[a-zA-Z0-9_]{3,20}$/;

if(num.value.match(exp))
{

document.getElementById("username").innerHTML="";
return true;
}
else if(num.value.trim() === "")
{
document.getElementById("username").innerHTML="<span style='color:red;'>Username is required</span>";
num.focus();
return false;
}
else
{

document.getElementById("username").innerHTML="<span style='color:red;'>Username cannot contain  special characters</span>";
num.focus();
field=document.getElementById('user_name')
field.value='';

return false;
}
}
function password_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^(?=.*\d)(?=.*[A-Z]).{8,20}$/;

if(num.value.match(exp))
{

document.getElementById("pass").innerHTML="";
return true;
}
else if(num.value.trim() === "")
{
document.getElementById("pass").innerHTML="<span style='color:red;'>Password is required</span>";
num.focus();
return false;
}
else
{

document.getElementById("pass").innerHTML="<span style='color:red;'>it must contain at least  one uppercase and digit, and be 8-20 characters long</span>";


num.focus();
field=document.getElementById('password')
field.value='';

return false;
}
}
    

  
 