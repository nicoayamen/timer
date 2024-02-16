// process.stdout.write('.');

let args = process.argv.slice(2).map(Number);

let validArgs = args.filter(num => !isNaN(num) && num > 0);

let sortedArgs = validArgs.sort((a, b) => a - b);

//console.log("!!!", sortedArgs)

for (let num of sortedArgs) {
  let timeDelay = num * 1000;

  setTimeout(() => {
    process.stdout.write(`BEEP!! TIMER FOR ${num} SECONDS IS DONE!`);
  }, timeDelay);

  setTimeout(() => {
    console.log("");
  }, timeDelay)
}