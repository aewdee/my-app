let round = prompt('จะเล่นกีรอบ');
var sum = 0
for(var i = 0; i < round; i++){
    var answer = prompt('หัว หรือ ก้อย');
    var random_answer =''
    if(Math.floor(Math.random()*10) <= 4){
        //หัว
        random_answer = 'หัว'
    } else {
        //ก้อย
        random_answer = 'ก้อย'
    }
    if (answer == random_answer) {
        alert('ตอบถูก !')
        document.getElementById('game-list').innerHTML += 'ตอบถูก :' + random_answer + ':' + answer + '<br>';
        sum = sum + 1;
    } else {
        alert('ตอบผิด !')
        document.getElementById('game-list').innerHTML += 'ตอบผิด :' + random_answer + ':' + answer + '<br>';
    }
    console.log(random_answer + ':' + answer);
}
document.getElementById('score').innerHTML = 'คุณได้ ' + sum + 'คะแนน';