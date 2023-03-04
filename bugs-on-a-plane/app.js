var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        return diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

  
        alert("firstName: " + firstName + "\nlastName: " + lastName + "\nage: " + age + "\ngender: " + gender + "\ntravel-location: " + location + "\ndiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    
    // document.getElementById("submit").addEventListener("click", formAlert); 
    

}
submit.addEventListener("click", formAlert);
