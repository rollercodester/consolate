var consolate = require('../bin/index.js')


consolate.init({
   debug: {
      color: consolate.colors.magenta,
      prefix: {
         chars: 'DEBUG:',
         color: consolate.colors.lightMagenta
      }
   }
})

//
//
// You can combine strings, native objects, and
// object literals all on one log statement:
//
//

const MY_FAVORITE_TEXT_EDITOR = 'Sublime'

console.log('Have you ever needed to log *different* types in a single call?')

setTimeout(() => {
   console.log('\nIf so, well you\'re in luck. Drum roll please...')
}, 1500)

setTimeout(() => {

   console.log()
   console.debug(
      'Let\'s see how consolate handles 11 different args in one call.\nSurely, it will break.',
      '\n[reply from consolate]: Hey, don\'t call me Shirley.',
      '\nChange of subject...my favorite text editor is:',
      `${MY_FAVORITE_TEXT_EDITOR}.`,
      '\nAbout Sublime...',
      {
         name: 'Sublime',
         version: {
            major: 3,
            minor: 0,
            build: 3126
         }
      },
      'Now, how about we throw in an error for good measure?',
      new Error('One error coming right up!'),
      'What else can we pile on? How about the consolate colors object? Ooooh, yes!',
      consolate.colors,
      'Okay, I think you will agree that that is quite enough for just one log call!'
   )

}, 4000)
