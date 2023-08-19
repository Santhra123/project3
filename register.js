function firstname_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var exp=/^[a-zA-Z]+$/

if(num.value.match(exp))
{
 
document.getElementById("fname").innerHTML="";
return true;
}

else
{

document.getElementById("fname").innerHTML="<span style='color:red;'>First name contain only alphabets</span>";
num.focus();
field=document.getElementById('first_name')
field.value='';

return false;
}
}
function lastname_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^[a-zA-Z]+$/

if(num.value.match(exp))
{

document.getElementById("lname").innerHTML="";
return true;
}

else
{

document.getElementById("lname").innerHTML="<span style='color:red;'>Last name contain only alphabets</span>";
num.focus();
field=document.getElementById('last_name')
field.value='';

return false;
}
}
var today=new Date();
today.setFullYear(today.getFullYear()-7)
var formattedDate=today.toISOString().split('T')[0];
document.getElementById("date").setAttribute("max",formattedDate);

function calculate_age()
{
  
    var dob = document.getElementById("date").value;
    var dobDate = new Date(dob);
    var today = new Date();
  
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
  
    document.getElementById("age").value = age;
 
  }
  document.getElementById("date").addEventListener("input", calculate_age);
 


function phone_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^[0-9]{10}$/;

if(num.value.match(exp))
{

document.getElementById("phone").innerHTML="";
return true;
}

else
{

document.getElementById("phone").innerHTML="<span style='color:red;'>phone number is not valid</span>";
num.focus();
field=document.getElementById('phone_number')
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

else
{

document.getElementById("email").innerHTML="<span style='color:red;'>Email Id is not valid</span>";
num.focus();
field=document.getElementById('email_id')
field.value='';

return false;
}
}
function username_check(num)
{
// var exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var exp=/^[a-zA-Z0-9_]{3,20}$/;

if(num.value.match(exp))
{

document.getElementById("username").innerHTML="";
return true;
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

else
{

document.getElementById("pass").innerHTML="<span style='color:red;'>it must contain at least  one uppercase and digit, and be 8-20 characters long</span>";


num.focus();
field=document.getElementById('password')
field.value='';

return false;
}
}
function cpassword_check(num)
{
var password=document.getElementById('password').value;
var cpassword=document.getElementById('cpassword').value;
if(password===cpassword)
{
 
  document.getElementById("cpass").innerHTML="";
return true;
}

else
{

document.getElementById("cpass").innerHTML="<span style='color:red;'>passwords do not match</span>";


num.focus();
field=document.getElementById('cpassword')
field.value='';

return false;
}
}

// function city_check()
// {
// var stateDropdown = document.getElementById('state');
// var cityDropdown = document.getElementById('city');

// const stateCityMap = {
//   Kerala: ["Aluva", "Angamaly", "Mokkannur"],
//   Karnataka: ["udaipur", "City ", "City 2C"],
//   Rajasthan:["banglore", "mysore", "gulbarga"],

//   // Add more state-city mappings
// };

//   var selectedState = stateDropdown.value;
//   alert(selectedState)
//   const cities = stateCityMap[Kerala] || [];

//   cityDropdown.innerHTML = ''; // Clear previous options

//   for (const city of cities) {
//     const option = document.createElement('option');
//     option.value = city;
//     option.textContent = city;
//     cityDropdown.appendChild(option);
//   }
// }
// var city = {};
// city['kerala'] = ['Kochi', 'Alua', 'Angamaly'];
// city['Karnataka']= ["udaipur", "City ", "City 2C"];
// city['Rajasthan']=["banglore", "mysore", "gulbarga"];
// function  citycheck()
// {
  
   
//    var stateList = document.getElementById("state");
//    var cityList = document.getElementById("city");
//    var selectedState = stateList.options[stateList.selectedIndex].value;
//    cityList.innerHTML = "";

//    var cities = city[selectedState];
//    if (cities) {
//      for (var i = 0; i < cities.length; i++) {
//        var option = new Option(cities[i], i);
//        cityList.appendChild(option);
//      }
//   }
// }
// document.getElementById("state").addEventListener("focusout", citycheck);

var city = {};
  city['ker'] = ['Kochi', 'Alua', 'Angamaly'];
  city['goa'] = ['Panaji', 'Margo', 'Vasco da Gama'];
  city['kar'] = ['Bangalore', 'Mysore', 'Mandiya'];
  city['tam'] = ['Chennai', 'Coimbatore', 'Madurai'];
  
  function changeCityList() {
    var stateList = document.getElementById("select-state");
    var cityList = document.getElementById("select-city");
    var selectedState = stateList.options[stateList.selectedIndex].value;
    cityList.innerHTML = "";
  
    var cities = city[selectedState];
    if (cities) {
      for (var i = 0; i < cities.length; i++) {
        var option = new Option(cities[i], i);
        cityList.appendChild(option);
      }
    }
  }
  
 
 
  document.getElementById("select-state").addEventListener("focusout", changeCityList);
