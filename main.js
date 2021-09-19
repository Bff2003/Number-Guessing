function  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let numero = randomIntFromInterval(1, 100);

$('#userInput').change (function(){
    let num = parseInt($('#userInput')[0]['value']);
    if(num > numero)
        $('#mainInput')[0]['value'] = "O seu numero é maior ao numero pretendido";
    else if(num < numero)
        $('#mainInput')[0]['value'] = "O seu numero é menor ao numero pretendido";
    else if(num == numero)
        $('#mainInput')[0]['value'] = "Parabens! Você Acertou!";
});