console.log("Start");

function heavyTask() {
  // Simulate blocking 5-second task
  const end = Date.now() + 5000;
  while (Date.now() < end) {}
  console.log("Heavy Task Done");
}

heavyTask(); // Blocks everything

console.log("End");
