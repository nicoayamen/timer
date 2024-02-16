// process.stdout.write('.');

// to assign the indices we need to run timer
let args = process.argv.slice(2).map(Number);

// filter the args array by our conditional
let validArgs = args.filter(num => !isNaN(num) && num > 0);

// sort numerically 
let sortedArgs = validArgs.sort((a, b) => a - b);

//console.log("!!!", sortedArgs)

for (let num of sortedArgs) {
  // as it loops, we take the number and multiply 1000ms
  let timeDelay = num * 1000;

  // use the above var to set the delay for timeout 
  setTimeout(() => {
    process.stdout.write(`BEEP!! TIMER FOR ${num} SECONDS IS DONE!`);
  }, timeDelay);

  // each time time delay finishes, creates a new line for next iteration 
  setTimeout(() => {
    console.log("");
  }, timeDelay)
}
