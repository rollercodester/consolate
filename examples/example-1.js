var consolate = require('../bin/index.js')
var colors = consolate.colors

consolate.init({
  info: {
    color: colors.cyan,
    prefix: {
      chars: 'INFO:',
      color: colors.lightCyan
    }
  },
  error: {
    color: colors.red,
    prefix: {
      chars: 'ERROR:',
      color: colors.lightRed
    }
  },
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

console.log();
console.log();

console.info('The built-in info method has been overridden');
console.error('Not to alarm you, but this is an error message\n');

console.log('We can animate while reporting on long running tasks...\n')

console.progress('Calling github to get source...');

setTimeout(function() {

  console.progress('Compiling source to create the build...');

  setTimeout(function() {
    console.success('Yay, build passed with no errors.\n');
  }, 5000);

}, 5000);

