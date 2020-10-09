function formValid()
{
var ufirstid = document.registration.firstname;
var ulastid = document.registration.lastname;
var passid = document.registration.passid;
var utelephone = document.registration.telephone;
var uemail = document.registration.email;
var udateofbirth = document.registration.dateofbirth;

if(firstname_validation(ufirstid,5,12))
{
if(lastname_validation(ulastid,4,15))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(allnumeric(utelephone))
{
if(ValidateEmail(uemail))
{
} 
}
} 
}
}
}
return false;
}

function fitstname_validation(ufirstid,mx,my)
{
var ufirstid_len = ufirstid.value.length;
if (ufirstid_len == 0 || ufirstid_len >= my || ufirstid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
ufirstid.focus();
return false;
}
return true;
}

function lastname_validation(ulastid,lx,ly)
{
var ulastid_len = ulastid.value.length;
if (ulastid_len == 0 || ulastid_len >= ly || ulastid_len < lx)
{
alert("User Id should not be empty / length be between "+lx+" to "+ly);
ulastid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function allnumeric(utelephone)
{ 
var numbers = /^[0-9]+$/;
if(utelephone.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
utelephone.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}