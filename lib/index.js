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

const init = (options = {}) => {

	const keys = Object.keys(options)

	for (let key of keys) {

		const item = options[key]

		if (item.color) {

			//
			//
			// perform monkey-patching magic
			//
			//

			const consoleFunc = console[key] || console.log

			console[key] = (...args) => {

				log(consoleFunc, item.color, item.prefix, args)

			}

		}

	}

}

const colors = {
	reset: 0,
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

const log = (consoleFunc, color, prefix, args) => {

	if (args.length > 0) {

		let spacer = ''

		const msg = args.reduce((acc, val) => {

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

		const logString = buildLogString(prefix, msg, color)

		consoleFunc(logString)

	} else {

		console.log()

	}

}

const buildLogString = (prefix, msg, color) => {

	return `\x1b[${color}m${prefix ? prefix : ''}${msg}\x1b[${colors.reset}m`

}

let testLogString

if (process.env.NODE_ENV === 'test') {

	testLogString = buildLogString

} else {

	testLogString = () => { console.log('For internal testing only.') }

}

export { colors, testLogString }
export default init