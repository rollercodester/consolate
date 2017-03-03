import assert from 'assert'
import Consolate, { colors, buildLogString } from '../bin/index.js'


describe('consolate', () => {

  let oldError
  let oldInfo
  let oldWarn
  let oldDebug
  let oldSuccess

  beforeEach(() => {

    oldError = console.error
    oldInfo = console.info
    oldWarn = console.warn
    oldDebug = console.debug
    oldSuccess = console.success

  })

  afterEach(() => {

    console.error = oldError
    console.info = oldInfo
    console.warn = oldWarn
    console.debug = oldDebug
    console.success = oldSuccess

  })

  it('should be okay with no options', () => {

    new Consolate()

    console.log()

  })

  it('should be okay with no prefix', () => {

    Consolate({
      info: {
        color: colors.darkGray
      }
    })

    console.log()
    console.info('No prefix test')

    console.log()

  })

  it('should monkey-patch existing log functions', () => {

    Consolate({
      error: {
        color: colors.red,
        prefix: 'ERROR: '
      },
      info: {
        color: colors.cyan,
        prefix: 'INFO: '
      },
      warn: {
        color: colors.yellow,
        prefix: 'WARNING: '
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

  })

  it('should monkey-patch new log functions', () => {

    const oldDebug = console.debug
    const oldSuccess = console.success

    Consolate({
      debug: {
        color: colors.magenta,
        prefix: 'DEBUG: '
      },
      success: {
        color: colors.green,
        prefix: 'SUCCESS: '
      }
    })

    assert.notEqual(oldDebug, console.debug)
    console.log()
    console.debug('Debug test')

    assert.notEqual(oldSuccess, console.success)
    console.success('Success test')

    console.log()

  })

  it('should handle a mix of string, native object, and object literal arguments', () => {

    const oldDebug = console.debug
    const oldSuccess = console.success

    Consolate({
      debug: {
        color: colors.magenta,
        prefix: 'DEBUG: '
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

  it('should format log string with correct color, prefix, and end with a reset', () => {

    const testPrefix = 'TEST: '
    const testMessage = 'This is the test message.'
    const testColor = colors.red

    const logString = buildLogString(testPrefix, testMessage, testColor)
    const compareString = `\x1b[${testColor}m${testPrefix}${testMessage}\x1b[${colors.reset}m`

    assert.equal(logString, compareString)

    console.log()

  })

})
