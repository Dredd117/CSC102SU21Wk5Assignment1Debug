function checkCreds(){
    console.log("checkCreds() function started...")
var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var badgeNumb = document.getElementById("badgeID").value;

document.getElementById("loginStatus").innerHTML = "first name is: " + firstName + "last name is: " + lastName + "and the badge ID is : " + badgeNumb;
}