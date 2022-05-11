const alarm = function (time) {
  if (time < 0 || isNaN(time)) {
    return;
  }

  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
};

const args = process.argv.slice(2); // Take in command line argument, removing 1st 2 elements passed // i.e node timer1.js 3 5 7 -1

for (let arg of args) {
  alarm(arg);
}
