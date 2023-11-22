// GLOBALS - NO WINDOW

// __dirname : path to current directory
// __filename : file name
// require : funcation to use modules
// module : info abuot the current module
// process : info about env where the program is being executed

const intervalId = setInterval(() => {
    console.log('hello world');
  }, 1000);
  
  setTimeout(() => clearInterval(intervalId), 5000);
  