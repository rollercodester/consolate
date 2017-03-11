export default class Spinner {

	constructor(key, consoleFunc, consoleType, logMessage, cliSpinner, buildLogStringFunc) {

		this.key = key
		this.consoleFunc = consoleFunc
		this.consoleType = Object.assign({}, consoleType)
		this.logMessage = new String(logMessage)
		this.cliSpinner = cliSpinner
		this.buildLogString = buildLogStringFunc
		this.nextFrameIndex = 0
		this.stopRendering = false

	}

	getKey = () => this.key

	render = (firstTime) => {

		if (this.stopRendering) {

			return

		}

		// advance frame
		this.consoleType.bullet.chars = this.cliSpinner.frames[this.nextFrameIndex++]

		// build render string
		let logString = this.buildLogString(this.consoleType, this.logMessage, !firstTime)

		// render
		this.consoleFunc(logString)

		if (this.nextFrameIndex === this.cliSpinner.frames.length) {

			// loop the frames (i.e. reset)
			this.nextFrameIndex = 0

		}

		setTimeout(this.render, this.cliSpinner.interval)

	}

	start = () => this.render(true)

	stop = () => { this.stopRendering = true }

	update = (message) => { this.logMessage = new String(message) }

}

//
//
// private helper methods
//
//

const escapeColor = (color) => { return `\x1b[${color}m` }

const prepend = (prependObj, logString, colors) => {

	const { color = 39, chars = '', leftPadding = 0, rightPadding = 1 } = prependObj
	return `${escapeColor(color)}${' '.repeat(leftPadding)}${chars}${' '.repeat(rightPadding)}${logString}`

}