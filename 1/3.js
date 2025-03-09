// Practical:
// Write an asynchronous function fetchData() that returns a promise.Simulate a data fetching operation using setTimeout().The promise should resolve with a message "Data fetched successfully!" after 2 seconds.Use async / await to handle the promise.Example:
// async function fetchData() {
// Simulate data fetching with setTimeout
// }
// Expected output:
// "Data fetched successfully!" (after 2 seconds)

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2-second delay
  });
}

async function main() {
  const result = await fetchData();
  console.log(result); // Expected output: "Data fetched successfully!" after 2 seconds
}

main();
