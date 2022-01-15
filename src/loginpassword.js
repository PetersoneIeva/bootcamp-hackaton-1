/*Login information check*/

let password = new Array("parole123", "GiveMeNuts2", "ACbootcamp2022", "RussianRulette9@5");
let user = new Array("SauleNirvana", "skat@skat.lv", "vecpuisis123", "mazohists@gmail.com", "DzivniekuAktivists", "atlidzibasmekletajs@firma.org")
let button = document.getElementById("buttonLogin");
let inputUser = document.getElementById("inputUser");
let input = document.getElementById("passwordLogin");

button.addEventListener("click", function(){
    if (password.includes(input.value) && user.includes(inputUser.value)) {
        document.getElementById('success').innerHTML = "You're login information is correct!";
       }
    else if (password.includes(input.value)) {
        document.getElementById('userError').innerHTML = "Incorrect username or e-mail";
    }
    else if (user.includes(inputUser.value)) {
        document.getElementById('passwordError').innerHTML = "Incorrect password";
    }
    else {
        document.getElementById('success').innerHTML = "Unrecognizable login information!";
        document.getElementById('success').classList.remove("form-message-success");
        document.getElementById('success').classList.add("form-message-error");
    };
});
