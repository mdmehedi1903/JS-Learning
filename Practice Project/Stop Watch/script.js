let time = document.querySelector('.time');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
let [mils, sec, min, hr] = [0,0,0,0]
let t = null;

start.addEventListener('click', startTimer)
reset.addEventListener('click', resetTimer)
pause.addEventListener('click', pauseInterval)

function startTimer(){
    if(t!==null){
        clearInterval(t)
        
    }
    t = setInterval(displayTime, 10)
}

function pauseInterval(){
    clearInterval(t)
}

function resetTimer(){
   
    [mils, sec, min, hr] = [0,0,0,0]
     clearInterval(t)
    time.innerHTML = "00 : 00 : 00 : 000"
}


function displayTime(){
    mils += 10;
    if(mils==1000){
        mils = 0;
        sec++;

        if(sec== 60){
            sec = 0;
            min++;
            if(min==60){
                min=0;
                hr++;
            }
        }
    }

    let m = mils < 10 ? "00" + mils : mils<100?"0"+mils:mils;
    let mn = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let h = hr < 10 ? "0" + hr : hr;

    time.innerHTML = `${h} : ${mn} : ${s} : ${m}`
}





