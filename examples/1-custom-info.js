var consolate = require('../bin/index.js')

consolate.init({
   info: {
      color: consolate.colors.cyan,
      prefix: {
         chars: 'INFO:',
         color: consolate.colors.lightCyan
      }
   }
})

console.info('This line is being output by my customized "info" log method!')
console.log('\n')