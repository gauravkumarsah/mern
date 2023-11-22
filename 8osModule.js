const os = require('os');

const osInfo = {
    userInfo: os.userInfo(),
    version: os.version(),
    something: os.EOL,
    
    
}
console.log('os', osInfo);
