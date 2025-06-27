// ##Alternate 1
function display(some){
    console.log(some)
}



function calculation(num1,num2,display){
    let sum = num1+num2;
    if(display) display(sum)
    return sum;
}


let result = calculation(5,3, display)


// ##Alternate 2
function calculation2(num1,num2,display){
    let sum = num1+num2;
    if(display) display(sum)
    return sum;
}


calculation(33,3, (value)=> {
    console.log(value)
})
