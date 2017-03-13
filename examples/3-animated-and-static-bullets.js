var consolate = require('../bin/index.js')
var colors = consolate.colors

consolate.init({
   success: {
      color: colors.green,
      bullet: {
         chars: '✔',
         color: colors.lightGreen,
         leftPadding: 1,
         rightPadding: 2
      }
   },
   progress: {
      color: colors.lightBlue,
      bullet: {
         cliSpinner: 'dots',
         color: colors.lightBlue,
         leftPadding: 1,
         rightPadding: 2
      },
      prefix: {
         color: colors.white,
         chars: 'WORKING:',
         leftPadding: 0,
         rightPadding: 1
      }
   }
})

console.log('Use consolate to animate while reporting on long running tasks...\n')
console.progress('Calling github to get source...')

setTimeout(function() {
   console.progress('Compiling source to create the build...')
}, 3000)

setTimeout(function() {
   console.progress('Executing unit tests against the new build...')
}, 6000)

setTimeout(function() {
   console.success('Yay, build passed with no errors.\n')
}, 9000)

