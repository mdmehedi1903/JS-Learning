let i = 0;
let x = setInterval(()=> {
    i++;
    console.log(i)

    if(i==5){
        clearInterval(x)
    }

}, 1000)