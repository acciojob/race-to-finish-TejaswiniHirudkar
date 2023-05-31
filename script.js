window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1000ms (1 second) and 6000ms (5 seconds)
}

const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime()))
];


Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error);
  });

