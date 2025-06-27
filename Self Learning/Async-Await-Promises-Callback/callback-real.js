let paymentSuccess = true;let marks = 80;

function enroll(nextStep){
    console.log("Course enrollement is in progress."); 

    setTimeout(function(){
        if(paymentSuccess){
            nextStep(); // progress(getCertificate)
        }else{
            console.log("Payment Failed!")
        }}, 2000)}

function progress(nextStep){
    console.log("Course on progress...");

    setTimeout(function(){
        if(marks>=80){
            nextStep(); //getCertificate()
        }else{
            console.log("You could not get enought marks to get the certificate")
        }},3000)}

function getCertificate(){
    console.log("Preparing your certificate!");

    setTimeout(function(){
        console.log("Congrats! You got the certificate")
    }, 1000)}

enroll(()=>progress(getCertificate))
// enroll(progress) 
// progress(getCertificate)
 