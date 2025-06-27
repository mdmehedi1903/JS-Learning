let paymentSuccess = true;
let marks = 80;
function enroll(){
    console.log("Course enrollement is in progress"); 

    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve()
            }else{
                reject("Payment Failed")
            }}, 2000)
    })

    return promise;
}


function progress(){
    console.log("Course on progress...");
    const promise = new Promise((resolve,reject)=> {
        setTimeout(function(){
            if(marks>=80){
                resolve()
            }else{
                reject('You could not get enought marks to get the certificate')
            }
        }, 3000)
    })
    return promise;
}



function getCertificate(){
    console.log("Preparing your certificate!");

    const promise = new Promise((resolve)=> {
        setTimeout(function(){
            resolve("Congrats! You got the certificate")
        }, 1000)
    })
        
        // const promise = Promise.resolve("Congrats! You got the certificate!");
         return promise;
    }


 
    



enroll()
    .then(progress)
    .then(getCertificate)
    .then(value=> console.log(value))
    .catch(e=>console.log(e))