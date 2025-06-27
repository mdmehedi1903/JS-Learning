const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;

    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 1000);
});

// Consuming the promise
myPromise
  .then(result => {
    console.log(result); // Output: "Data fetched successfully!"
  })
  .catch(error => {
    console.error("Error: "+error);
  });
