
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
function email_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(num.value.match(exp))
{

document.getElementById("email").innerHTML="";
return true;
}
else if(num.value.trim() === "")
{
document.getElementById("email").innerHTML="<span style='color:red;'>Email Id is required</span>";
num.focus();
return false;
}
else
{

document.getElementById("email").innerHTML="<span style='color:red;'>Email Id is not valid</span>";
num.focus();
field=document.getElementById('email_id')
field.value='';

return false;
}
}
function message_check(num)
{

if(num.value.trim() === "")
{
document.getElementById("mess").innerHTML="<span style='color:red;'>Message is required</span>";
num.focus();
return false;
}
}