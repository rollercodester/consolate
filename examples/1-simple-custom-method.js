var consolate = require('../lib/index.js')

consolate.init({
   arrow: {
      color: consolate.colors.cyan,
      prefix: {
         chars: '>>>>>----->',
         color: consolate.colors.lightCyan
      }
   }
})

console.arrow('My customized "arrow" log method!')

setTimeout(() => {
	console.arrow('Just think of the possibilities :-)')
}, 1500)

setTimeout(() => {
	console.arrow('And we haven\'t even scratched the surface.')
}, 3000)

setTimeout(() => {
	console.arrow('Okay, one more time before moving on.')
	console.log()
}, 4500)
