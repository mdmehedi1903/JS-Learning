let input = document.getElementById('input');
let char = document.getElementById('char');
let word = document.getElementById('word');
let wordLeft = document.getElementById('wordLeft');
let reading = document.getElementById('reading');
let wordLimit = 10;

input.addEventListener('keyup', charCount)
input.addEventListener('keyup', countWords)

function charCount(){
    char.innerText  = input.value.length;
}

function countWords(){
    let words = input.value.match(/\b[-(]?(\w+)[-)]?\b/gi)
    if(words){
        word.innerHTML = words.length;
        wordLeft.innerHTML = wordLimit - words.length;
    }else{
        word.innerHTML = 0;
        wordLeft.innerHTML = wordLimit;
    }
    
    if(words){
        let secs = Math.floor((words.length * 60)/225)
        if(secs>59){
            let mins = Math.floor(secs/60)
            secs = secs - (mins * 60);

            reading.innerHTML = mins + " Mins " + secs + " Secs"
        }else{
            reading.innerHTML = secs + " Secs"
        }
    }else{
        reading.innerHTML = "0 " + " Secs"
    }
}