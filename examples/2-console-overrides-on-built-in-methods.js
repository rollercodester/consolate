var consolate = require('../lib/index.js')

consolate.init({
   error: {
      color: consolate.colors.red,
      prefix: {
         chars: 'ERROR:',
         color: consolate.colors.red
      }
   },
   info: {
      color: consolate.colors.cyan,
      prefix: {
         chars: 'INFO:',
         color: consolate.colors.lightCyan
      }
   },
   log: {
      color: consolate.colors.lightBlue,
      prefix: {
         chars: '-->',
         color: consolate.colors.darkGray
      }
   },
   trace: {
      color: consolate.colors.white
   },
   warn: {
      color: consolate.colors.yellow,
      prefix: {
         chars: 'WARNING:',
         color: consolate.colors.lightYellow
      }
   }
})

console.log()
console.error('The error method is now RED with anger!')

setTimeout(() => {
   console.log()
   console.info('The info method is now FYI in a CYAN kind of way.')
}, 1500)

setTimeout(() => {
   console.log()
   console.log('The log method now has a new twist.')
}, 3000)

setTimeout(() => {
   console.log()
   console.trace('This trace auto-adopts the error override along with its own customizaton')
}, 4500)

setTimeout(() => {
   console.log()
   console.warn('The warn method is now brave, even if it is a little YELLOW.')
   console.log()
}, 6000)


