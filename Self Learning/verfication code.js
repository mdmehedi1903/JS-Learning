
let Interval = setInterval(()=> {
 let number = Math.floor(1000+Math.random()*9000);
  if(number == 9999){
    clearInterval(Interval)
    console.log(`Wow this is ${number} the last number`)
  }else{
    console.log(number)
  }
},1) 