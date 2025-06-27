let [hour, min, sec, mils] = [1,59,57,0]
let timer = 0;

let myInterval = setInterval(()=> {
  mils+=10;

   if(mils==1000){
      mils = 0;
      sec++; 
        if(sec==60){
          sec = 0;
          min++
          if(min==60){
            min=0;
            hour++;
          }
        }
    }

      let h = hour < 10 ? "0"+hour : hour;
      let m = min < 10 ? "0"+min : min;
      let s = sec < 10 ? "0"+sec : sec;
      let ms = mils < 10 ? "00"+mils: mils<100? "0"+mils : mils;


  
 
      console.log(`${h} Hr  : ${m} Min  :  ${s} Sec  :  ${ms} Msec`)
} ,10)    