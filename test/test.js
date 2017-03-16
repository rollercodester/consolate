const assert = require('assert')
const consolate = require('../lib/index.js')
const colors = consolate.colors
const path = require('path')


describe('consolate', function() {

   beforeEach(() => {


   })

   afterEach(() => {

      consolate.restore()

   })

   it('should be okay with no options', function() {

      consolate.init()
      console.log()

   })

   it('should be okay with no prefix', function() {

      consolate.init({
         info: {
            color: colors.darkGray
         }
      })

      console.log()
      console.info('No prefix test')
      console.log()

   })

   it('should log in place', function() {

      consolate.init({
         info: {
            color: colors.lightRed,
            inPlace: true
         }
      })

      console.log('This line should be overwritten')
      console.info('Log in place test')
      console.log()

   })

   it('should animate a cli-spinner prefix for 10 seconds', function() {

      consolate.init({
         info: {
            color: colors.cyan,
            bullet: {
               cliSpinner: 'bouncingBall',
               color: colors.yellow
            }
         }
      })

      console.log('This line should be overwritten')
      console.info('Animated cli-spinner prefix test')

      setTimeout(() => {
         console.log('This should clear the spinner')
      }, 5000)

      console.log()

   })

   it('should monkey-patch existing log functions', function() {

      oldError = console.error
      oldInfo = console.info
      oldWarn = console.warn

      consolate.init({
         error: {
            color: colors.red,
            prefix: {
               chars: 'ERROR:',
               color: colors.lightRed,
               leftPadding: 1,
               rightPadding: 2
            }
         },
         info: {
            color: colors.cyan,
            prefix: {
               chars: 'INFO:',
               color: colors.lightCyan,
               leftPadding: 1,
               rightPadding: 2
            }
         },
         warn: {
            color: colors.yellow,
            prefix: {
               chars: 'WARN:',
               color: colors.lightYellow,
               leftPadding: 1,
               rightPadding: 2
            }
         }
      })

      assert.notEqual(oldError, console.error)
      console.log()
      console.error('Error test')

      assert.notEqual(oldInfo, console.info)
      console.info('Info test')

      assert.notEqual(oldWarn, console.warn)
      console.warn('Warn test')

      console.log()

      console.error = oldError
      console.info = oldInfo
      console.warn = oldWarn

   })

   it('should monkey-patch new log functions', function() {

      consolate.init({
         testDebug: {
            color: colors.magenta
         },
         testSuccess: {
            color: colors.green
         }
      })

      console.log()
      console.testDebug('Debug test')

      console.testSuccess('Success test')
      console.log()

   })

   it('should handle a mix of string, native object, and object literal arguments', function() {

      consolate.init({
         debug: {
            color: colors.magenta
         }
      })

      const objLiteral1 = {
         testKey1: 'testKey1Value',
         testKey2: {
            testKey2ChildKey1: 'testKey2ChildKey1Value',
            testKey2ChildKey2: 'testKey2ChildKey2Value'
         }
      }

      const objLiteral2 = {
         foo: 'bar'
      }

      const error1 = new Error('Error1')
      const error2 = new Error('Error2')

      console.log()
      console.debug('String1:', 'String2', objLiteral1, 'String3', error1, 'String4', objLiteral2, error2)
      console.log()

   })

   it('should restore the console to its previous state', function() {

      oldError = console.error
      oldInfo = console.info
      oldWarn = console.warn

      consolate.init({
         error: {
            color: colors.red,
            prefix: {
               chars: 'ERROR:',
               color: colors.lightRed,
               leftPadding: 1,
               rightPadding: 2
            }
         },
         info: {
            color: colors.cyan,
            prefix: {
               chars: 'INFO:',
               color: colors.lightCyan,
               leftPadding: 1,
               rightPadding: 2
            }
         },
         warn: {
            color: colors.yellow,
            prefix: {
               chars: 'WARN:',
               color: colors.lightYellow,
               leftPadding: 1,
               rightPadding: 2
            }
         }
      })

      consolate.restore()

      assert.equal(oldError, console.error)
      assert.equal(oldInfo, console.info)
      assert.equal(oldWarn, console.warn)

   })

   it('should load options from default yaml file', function() {

      consolate.init()
      assert(console.yamlConfigMethod1)
      assert(console.yamlConfigMethod2)

   })

   it ('should load options from passed in file path', function() {

      consolate.init(path.resolve(__dirname, 'test-consolate.yml'))
      assert(console.yamlConfigTestMethod1)
      assert(console.yamlConfigTestMethod2)

   })

   /*
   it('should format log string with correct color, prefix, and end with a reset', function() {

      const testPrefix = 'TEST: '
      const testMessage = 'This is the test message.'
      const testColor = colors.red

      const logString = buildLogString(testPrefix, testMessage, testColor)
      const compareString = `\x1b[${testColor}m${testPrefix}${testMessage}\x1b[${colors.reset}m`

      assert.equal(logString, compareString)

      console.log()

   })
   */

})
