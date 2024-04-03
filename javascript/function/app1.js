function toCelsius(){
    let fahrenheit = prompt("Fahrenheit :");
    let value = (fahrenheit - 32) * 5 / 9;
    document.getElementById("answer_section").innerHTML = value.toFixed(2) + "°C";
}
//toCelsius()

// Retuen //
function seyHello(){
    return "Hello AA BB CC"
}

function getAge(){
    return 44
}
//alert(seyHello())
//alert(typeof getAge())
//alert(getAge() + 1)

// parameter and argument
// parameter คือตัวแปรที่ใช้ใน function
// argument คือข้อมูลที่ส่งให้ function

function seyHello(userName, lastName){
    return "Hello " + userName + " " + lastName;
}
//let userInput = prompt("Username :")
//alert(seyHello(userInput, "Jonganan"));



function toCelsius2(fahrenheit){
    let value = (fahrenheit - 32) * 5 / 9;
    return value.toFixed(2) + "°C";
}
function disPlay(elementId, value){
    document.getElementById(elementId).innerHTML = value;
}
//alert(toCelsius2(150))
//console.log(toCelsius2(150))
//disPlay("toCelsius2", toCelsius2(200));
let temp = prompt("fahrenheit");
disPlay("toCelsius2", toCelsius2(temp));