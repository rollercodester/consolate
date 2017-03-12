/*

The MIT License (MIT)

Original Library
  - Copyright (c) Ryan Howard @rollercodester

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import cliSpinners from 'cli-spinners'
import crypto from 'crypto'
import Spinner from './spinner'


//
// save off native log methods so
// they can be restored upon exit
//
const origAssert = console.assert
const origDir = console.dir
const origError = console.error
const origInfo = console.info
const origLog = console.log
const origTime = console.time
const origTimeEnd = console.timeEnd
const origTrace = console.trace
const origWarn = console.warn


/**
 * @exports consolate
 * @typicalname consolate
 */


let _inPlaceHash
let _spinner


/**
 * Color representations of ANSI output text codes that consolate supports.
 * @enum {number}
 * @readonly
 */
const colors = {
  /** Not a color, per se...rather used to reset the active color back to default **/
  reset: 0,
  /** The default color configured by your terminal **/
  default: 39,
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  lightGray: 37,
  darkGray: 90,
  lightRed: 91,
  lightGreen: 92,
  lightYellow: 93,
  lightBlue: 94,
  lightMagenta: 95,
  lightCyan: 96,
  white: 97
}

exports.colors = colors

/**
 * The initialization function that must be called to enable consolate.
 * @param {consolateOptions} - Options that drive consolate behavior.
 */
export const init = (options = {}) => {

  let keys = Object.keys(options)

  for (let key of keys) {

    if (['assert', 'dir', 'time', 'timeEnd'].includes(key)) {

      process.stdout.write(`WARN: The ${key} method cannot be overriden by consolate.\n\n`)
      delete options[key]

    } else {

      const consoleType = options[key]

      if (consoleType) {

        //
        //
        // perform monkey-patching magic
        //
        //

        const consoleFunc = console[key] || origLog

        console[key] = (...args) => {

          consoleOut(key, consoleFunc, consoleType, args)

        }

      }

    }

  }

}

/**
 * The consolate options object that defines output methods and their respective settings and/or overrides existing log methods and their behavior.
 * @typedef {Object} consolateOptions
 * @property {string} key - The name of an output method (built-in or user-defined), which consolate will use to create a log method (of same name) on the console object.
 * @property {outputMethodSettings} value - The settings to apply to the respecive output method.
 */

/**
 * An object that represents the settings for the output method that has the same name as this object's key.
 * @typedef {Object} outputMethodSettings
 * @property {boolean} inPlace - Specifies that when a series of calls are made for this output method, all subsequent output will be rendered on the same line after the initial call—in effect overwriting the previous console output.
 * @property {colors} color - The color to use for the output text.
 * @property {prefix} prefix - The prefix option (if any) to use for this output method.
 * @property {bullet} bullet - The bullet option (if any) to use for this output method.
 */

/**
 * Specifies preferences (if any) for including an automatic prefix to all console output for an output method.
 * @typedef {Object} prefix
 * @property {string} chars - One or more characters to use as the prefix.
 * @property {colors} color - The color to use for the prefix text.
 * @property {number} leftPadding - The number of spaces to pad on the left side of the prefix.
 * @property {number} rightPadding - The number of spaces to pad on the right side of the prefix.
 */

/**
 * Specifies preferences (if any) for including an automatic left-aligned bullet to all console output for an output method.
 * @typedef {Object} bullet
 * @property {string} cliSpinner - For an animated bullet, this is the spinner name to use per the [cli-spinners]{@link https://www.npmjs.com/package/cli-spinners} library. Note: The animation will continue until a different output method is called, which will then overwrite the animation output, thus stopping and clearing it.
 * @property {string} chars - For a static (non-animated) bullet, this is one or more characters to use as the bullet. This property is ignored if cliSpinner is specified.
 * @property {colors} color - The color to use for the bullet text.
 * @property {number} leftPadding - The number of spaces to pad on the left side of the bullet.
 * @property {number} rightPadding - The number of spaces to pad on the right side of the bullet.
 */

const buildLogMessage = (args) => {

  let logMessage

  if (args.length > 0) {

    let spacer = ''

    logMessage = args.reduce((acc, val) => {

      //origLog(`just entered the buildLogMessage reducer. acc: ${acc}; val: ${val}`)

      let newAcc

      if (typeof val === 'object') {

        let newVal = JSON.stringify(val, null, '   ')

        if (newVal === '{}') {

          newVal = val.toString()

        }

        newAcc = `${acc}\n${newVal}\n`
        spacer = ''

      } else {

        newAcc = `${acc}${spacer}${val}`
        spacer = ' '

      }

      return newAcc

    }, '')

    if (logMessage) {

      logMessage = `${cursor.hide}${logMessage}`

    }

  }

  return logMessage

}

const buildLogString = (consoleType, msg = '', deletePrevious) => {

  const consoleTypeCopy = Object.assign({}, consoleType)

  const { bullet, color: textColor = colors.default, prefix } = consoleTypeCopy

  let logString = `${escapeColor(textColor)}${msg}`

  if (prefix) {

    logString = prepend(prefix, logString, colors)

  }

  if (bullet) {

    logString = prepend(bullet, logString, colors)

  }

  logString = `${cursor.hide}${logString}${escapeColor(colors.reset)}${cursor.show}`

  if (deletePrevious) {

    logString = `${line.deletePrevious}${logString}`

  }

  return logString

}

const consoleOut = (key, consoleFunc, consoleType, args) => {

  const { inPlace, bullet } = consoleType
  const msg = buildLogMessage(args)
  const isSpinner = isBulletSpinner(bullet)

  if (msg) {

    if (!isSpinner) {

      const wasSpinning = stopSpinner()

      let logString = buildLogString(consoleType, msg)

      if (wasSpinning) {

        // when transitioning from a spinner, always clear its line
        logString = `${line.deletePrevious}${logString}`

      }

      if (inPlace) {

        const inPlaceHash = crypto.createHash('MD5').update(key).digest('hex')

        if (inPlaceHash === _inPlaceHash) {
          //
          // make sure delete wasn't already previously issued
          //
          if (!wasSpinning) {

            logString = `${line.deletePrevious}${logString}`

          }

        } else {

          _inPlaceHash = inPlaceHash

        }

      } else {

        _inPlaceHash = null

      }

      consoleFunc(logString)

    } else{

      startSpinner(key, consoleFunc, consoleType, msg)

    }

  } else {

    origLog()

  }

}

const cursor = {
  bookmark: '\x1b[s',
  hide: '\x1b[?25l',
  home: '\x1b[1000D',
  show: '\x1b[?25h',
  toggleBookmark: '\x1b[u',
  up: '\x1b[F'
}

const escapeColor = (color) => {

  return `\x1b[${color}m`

}

const isBulletSpinner = (bullet) => {

  if (bullet) {

    const spinnerName = bullet.cliSpinner || 'NOT_DECLARED'
    return cliSpinners.hasOwnProperty(spinnerName)

  } else {

    return false

  }

}

const line = {
  deleteCurrent: '\x1b[2K',
  deletePrevious: `${cursor.home}${cursor.up}\x1b[2K`
}

const prepend = (prependObj, logString, colors) => {

  const { color = colors.default, chars = '', leftPadding = 0, rightPadding = 1 } = prependObj
  return `${escapeColor(color)}${' '.repeat(leftPadding)}${chars}${' '.repeat(rightPadding)}${logString}`

}

const restore = (err) => {

  console.assert = origAssert
  console.dir = origDir
  console.error = origError
  console.info = origInfo
  console.log = origLog
  console.time = origTime
  console.timeEnd = origTimeEnd
  console.trace = origTrace
  console.warn = origWarn

  if (_spinner) {

    _spinner.stop()
    _spinner = null

  }

  if (err) {

    process.stderr.write(err)

  }

  process.stderr.write(cursor.show)

}

const startSpinner = (key, consoleFunc, consoleType, msg) => {

  if (_spinner && _spinner.getKey() === key) {

    _spinner.update(msg)

  } else {

    stopSpinner()

    const cliSpinner = cliSpinners[consoleType.bullet.cliSpinner]

    _spinner = new Spinner(key, consoleFunc, consoleType, msg, cliSpinner, buildLogString)
    _spinner.start()

  }

}

const stopSpinner = () => {

  let wasSpinning = false

  if (_spinner) {

    _spinner.stop()
    _spinner = null
    wasSpinning = true

  }

  return wasSpinning

}


//
//
//
// stoppage event hooks
//
//
//

process.on('uncaughtException', restore)
process.on('exit', restore)
process.on('SIGINT', restore)
