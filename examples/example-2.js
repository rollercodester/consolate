var consolate = require('../bin/index.js');
var colors = consolate.colors;

consolate.init(
  {
    info: {
      color: colors.cyan,
      prefix: {
        chars: 'INFO:',
        color: colors.lightCyan,
        leftPadding: 1,
        rightPadding: 2
      },
      inPlace: true
    },
    spin: {
      color: colors.white,
      prefix: {
        chars: 'Spin prefix:',
        color: colors.magenta,
        leftPadding: 1,
        rightPadding: 1
      },
      bullet: {
        cliSpinner: 'dots',
        color: colors.cyan,
        leftPadding: 1,
        rightPadding: 1
      }
    },
    log: {
      color: colors.yellow,
      inPlace: true
    },
    success: {
      color: colors.lightGreen,
      bullet: {
        chars: '✔',
        color: colors.lightGreen,
        leftPadding: 1,
        rightPadding: 1
      }
    },
    fail: {
      color: colors.lightRed,
      bullet: {
        chars: '✘',
        color: colors.lightRed,
        leftPadding: 1,
        rightPadding: 1
      }
    }
  }
);

const SHORT_PAUSE = 1000

console.log('This line should NOT be overwritten');
console.info('This is the first in-place');

setTimeout(() => {

	console.info('This is the second in-place');

	setTimeout(() => {

		console.info('This is the third in-place');
		console.log('This line should NOT be in-place.');

		setTimeout(() => {

			console.log('This should overwrite previous though.')
			console.spin('First spin message')

			setTimeout(() => {

				console.spin('Second spin message')

				setTimeout(() => {

					console.spin('Third spin message')

					setTimeout(() => {

						console.success('Now we want this one to squash the spin message')
						console.spin('Now start a new one!!!!!!')

						setTimeout(() => {

							console.fail('Oh no!')

						}, SHORT_PAUSE * 2)

					}, SHORT_PAUSE * 2)

				}, SHORT_PAUSE * 3)

			}, SHORT_PAUSE * 2)

		}, SHORT_PAUSE)

	}, SHORT_PAUSE)

}, SHORT_PAUSE)





