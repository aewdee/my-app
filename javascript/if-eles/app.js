let score = prompt("คะแนนของคุณ :");

if (score >= 80) {
    document.getElementById("result").innerHTML = "A"
} else if(score >= 70) {
    document.getElementById("result").innerHTML = "B"
} else if(score >= 60) {
    document.getElementById("result").innerHTML = "C"
} else if(score >= 50) {
    document.getElementById("result").innerHTML = "D"
} else {
    document.getElementById('result').innerHTML = "F"
}
