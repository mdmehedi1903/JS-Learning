const stance = false;

console.log("Task 1")

const promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
            if(stance){
                resolve("Task 2")
            }else{
               reject("Failed!")
            }
    },2000)
})

console.log("Task 3")


promise
    .then(data=>console.log(data))
    .catch(err=>console.log(err))