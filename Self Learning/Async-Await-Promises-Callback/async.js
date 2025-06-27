console.log("Start");

function heavyTaskPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Heavy Task Done (after 5s)");
    }, 5000);
  });
}

async function run() {
  const result = await heavyTaskPromise(); // Waits here non-blockingly
  console.log(result);
}

run();

console.log("End");




async function myFunc() {
  return "Hello World"
}

myFunc().then(result=>console.log(result))