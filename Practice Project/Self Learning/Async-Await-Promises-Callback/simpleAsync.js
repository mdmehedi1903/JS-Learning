console.log("Line 1");

let i = 0;
let sum = 0;


(() => {
    while (i < 100000000) { 
        i++;
        sum = sum + i;
    }
    console.log("Final Sum is:", sum);
})();

console.log("Line 3");
