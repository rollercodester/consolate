[![npm](http://img.shields.io/npm/v/consolate.svg)](https://www.npmjs.org/package/consolate)
[![travis](https://travis-ci.org/rollercodester/consolate.svg?branch=master)](https://travis-ci.org/rollercodester/consolate)
[![Dependency Status](https://david-dm.org/rollercodester/consolate.svg)](https://david-dm.org/rollercodester/consolate)

# consolate
#### Customize your Node.JS console like a dignitary.
Easily create intuitive log functions on the console object&mdash;even override built-in console functions (error, info, warn, etc.) And while you're at it, feel free to easily define colors, prefixes, and bullets that can automatically animate [cli-cursors](https://www.npmjs.com/package/cli-spinners).

## Examples

* [Super-simple Custom Console Method](#example1)
* [Overriding Built-in Console Methods](#example2)
* [Animated vs Static Bullets](#example3)
* [Smart Log Argument Handling](#example4)
* [NASA](#example5)


<a name="example1"></a>

#### Super-simple Custom Console Method

![examples/1-simple-custom-method.js](https://cloud.githubusercontent.com/assets/1450389/23828435/20fe2f50-0686-11e7-962f-fbf2702ea259.gif)

```javascript
var consolate = require('consolate')

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
```

<a name="example2"></a>

#### Overriding Built-in Console Methods

![examples/2-console-overrides-on-built-in-methods.js](https://cloud.githubusercontent.com/assets/1450389/23828470/7610d2f8-0687-11e7-8410-fdf2b567775a.gif)

```javascript
var consolate = require('consolate')

consolate.init({
   error: {
      color: consolate.colors.red,
      prefix: {
         chars: 'ERROR:',
         color: consolate.colors.red
      }
   },
   info: {
      color: consolate.colors.cyan,
      prefix: {
         chars: 'INFO:',
         color: consolate.colors.lightCyan
      }
   },
   log: {
      color: consolate.colors.lightBlue,
      prefix: {
         chars: '-->',
         color: consolate.colors.darkGray
      }
   },
   trace: {
      color: consolate.colors.white
   },
   warn: {
      color: consolate.colors.yellow,
      prefix: {
         chars: 'WARNING:',
         color: consolate.colors.lightYellow
      }
   }
})

console.log()
console.error('The error method is now RED with anger!')

setTimeout(() => {
   console.log()
   console.info('The info method is now FYI in a CYAN kind of way.')
}, 1500)

setTimeout(() => {
   console.log()
   console.log('The log method now has a new twist.')
}, 3000)

setTimeout(() => {
   console.log()
   console.trace('This trace auto-adopts the error override along with its own customizaton')
}, 4500)

setTimeout(() => {
   console.log()
   console.warn('The warn method is now brave, even if it is a little YELLOW.')
   console.log()
}, 6000)

```

<a name="example3"></a>

#### Animated vs Static Bullets

![examples/3-animated-and-static-bullets.js](https://cloud.githubusercontent.com/assets/1450389/23828520/e8a89fd4-0688-11e7-9c95-aa3959920f46.gif)

```javascript
var consolate = require('consolate')
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
```

<a name="example4"></a>

#### Smart Log Argument Handling

![examples/4-smart-log-argument-handling.js](https://cloud.githubusercontent.com/assets/1450389/23828602/ff012a0a-068b-11e7-9a9f-26624ad0b5c6.gif)

```javascript
var consolate = require('consolate')

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
```

<a name="example5"></a>

#### Apollo 11

![examples/5-apollo-11.js](https://cloud.githubusercontent.com/assets/1450389/23831546/e052dc52-06e0-11e7-8739-b9e6967546ae.gif)

```javascript
var consolate = require('consolate')

consolate.init({
   capsuleCommunicator: {
      color: consolate.colors.white,
      prefix: {
         chars: 'Charlie Duke (CAPCOM):\t',
         color: consolate.colors.lightBlue
      }
   },
   commander: {
      color: consolate.colors.white,
      prefix: {
         chars: 'Neil Armstrong (CDR):\t',
         color: consolate.colors.yellow
      }
   },
   commandModulePilot: {
      color: consolate.colors.white,
      prefix: {
         chars: 'Michael Collins (CMP):\t',
         color: consolate.colors.yellow
      }
   },
   countdown: {
      color: consolate.colors.cyan,
      bullet: {
         cliSpinner: 'noise',
         color: consolate.colors.red,
         leftPadding: 6,
         rightPadding: 6
      },
      prefix: {
         chars: 'Countdown:\t',
         color: consolate.colors.cyan
      }
   },
   liftoff: {
      color: consolate.colors.cyan,
      bullet: {
         cliSpinner: 'star',
         color: consolate.colors.yellow,
         leftPadding: 23,
         rightPadding: 1
      }
   },
   lunarModulePilot: {
      color: consolate.colors.white,
      prefix: {
         chars: 'Buzz Aldrin (LMP):\t',
         color: consolate.colors.yellow
      }
   },
   publicAffairsOfficer: {
      color: consolate.colors.white,
      prefix: {
         chars: 'Public Affairs Officer:\t',
         color: consolate.colors.lightGray
      }
   }
})

let nextOffset = 0
let previousRenderTime = 0

const comms = (source, msg, delay) => {

   nextOffset += previousRenderTime
   previousRenderTime = delay

   setTimeout(() => {
      source(msg)
   }, nextOffset)

}

console.log()
comms(console.publicAffairsOfficer, 'We are approaching the 60-second mark on the Apollo 11 Mission.', 2000)
comms(console.publicAffairsOfficer, 'Neil Armstrong just reported back. It\'s been a real smooth countdown.', 2000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston.', 2000)
comms(console.capsuleCommunicator, 'Slightly less than 1 minute to ignition, and everything is GO.', 3000)
comms(console.commandModulePilot, 'Roger.', 2000)
comms(console.publicAffairsOfficer, 'We have passed the 50-second mark.', 2000)
comms(console.publicAffairsOfficer, 'Our transfer is complete on an internal power with the launch vehicle at this time.', 2000)
comms(console.publicAffairsOfficer, 'All the second stage tanks now pressurized.', 2000)
comms(console.publicAffairsOfficer, '40 seconds away from the Apollo 11 liftoff.', 2000)
comms(console.publicAffairsOfficer, '35 seconds and counting.', 2000)
comms(console.publicAffairsOfficer, 'Astronauts reported back, feels good.', 2000)
comms(console.publicAffairsOfficer, 'T-25 seconds.', 2000)
comms(console.publicAffairsOfficer, '20 seconds and counting.', 2000)
comms(console.publicAffairsOfficer, 'T-15 seconds, guidance is internal.', 2000)
comms(console.publicAffairsOfficer, 'Ignition sequence starts.', 1000)
comms(console.countdown, '12', 1000)
comms(console.countdown, '11', 1000)
comms(console.countdown, '10', 1000)
comms(console.countdown, '9', 1000)
comms(console.countdown, '8', 1000)
comms(console.countdown, '7', 1000)
comms(console.countdown, '6', 1000)
comms(console.countdown, '5', 1000)
comms(console.countdown, '4', 1000)
comms(console.countdown, '3', 1000)
comms(console.countdown, '2', 1000)
comms(console.countdown, '1', 1000)
comms(console.countdown, 'Zero', 1000)
comms(console.publicAffairsOfficer, 'All engines running.', 2000)
comms(console.commandModulePilot, 'Ignition.', 1000)
comms(console.capsuleCommunicator, 'We confirm ignition, and the thrust is GO.', 1000)
comms(console.publicAffairsOfficer, 'LIFTOFF.', 1000)
comms(console.publicAffairsOfficer, 'We have a liftoff, 32 minutes past the hour.', 3000)
comms(console.publicAffairsOfficer, 'Liftoff on Apollo 11. Tower cleared.', 1000)
comms(console.liftoff, ' ', 10000)
comms(console.publicAffairsOfficer, 'Neil Armstrong reporting their roll and pitch program.', 500)
comms(console.publicAffairsOfficer, 'Which puts Apollo 11 on a proper heading.', 3000)
comms(console.publicAffairsOfficer, 'Plus 30 seconds.', 5000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston at 1 minute.', 2000)
comms(console.capsuleCommunicator, 'Trajectory and guidance look good, and the stage is good. Over.', 5000)
comms(console.commander, 'Apollo 11. Roger.', 5000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston. Thrust is good. Everything\'s still looking good.', 5000)
comms(console.commander, 'Roger.', 5000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston. Around 3-1/2 minutes. Your\'re still looking good.', 1000)
comms(console.capsuleCommunicator, 'Your predicted cut-off is right on the nominal.', 5000)
comms(console.commander, 'Roger. Apollo 11 is GO.', 5000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston. You are GO at 5 minutes.', 5000)
comms(console.commander, 'Roger. We\'re GO.', 5000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston. We show cut-off & copy the numbers in NOUN 62.', 8000)
comms(console.capsuleCommunicator, 'Apollo 11, Houston. Do you read?', 8000)
comms(console.capsuleCommunicator, 'Apollo 11, this is Houston. Do you read? Over.', 5000)
comms(console.lunarModulePilot, 'Roger, Houston. Apollo 11. We\'re reading a VI of 35579 & EMS was plus 3.3. Over.', 5000)
comms(console.capsuleCommunicator, 'Roger. Plus 3.3 on the EMS. And we copy the VI.', 5000)
comms(console.commander, 'Hey, Houston, Apollo 11. That Saturn gave us a magnificent ride.', 5000)
comms(console.capsuleCommunicator, 'Roger, 11. We\'ll pass that on.', 1000)
comms(console.capsuleCommunicator, 'And, it certainly looks like you are well on your way now.', 4000)
comms(console.commander, 'We have no complaints with any of the three stages on that ride. It was beautiful.', 3000)
comms(console.capsuleCommunicator, 'Roger. We copy. No transients at staging of any significance. Over.', 4000)
comms(console.commander, 'That\'s right. It was all a good ride.', 3000)
comms(console.capsuleCommunicator, 'Houston. Roger. Out.', 2000)
```

## API Reference
<a name="module_consolate.colors"></a>

## consolate.colors : <code>enum</code>
Color representations of ANSI output text codes that consolate supports.

**Kind**: static enum of <code>[consolate](#module_consolate)</code>  
**Read only**: true  
<a name="module_consolate.init"></a>

## consolate.init
The initialization function that must be called to enable consolate.

**Kind**: static constant of <code>[consolate](#module_consolate)</code>  

| Type | Description |
| --- | --- |
| <code>consolateOptions</code> | Options that drive consolate behavior. |

<a name="module_consolate..consolateOptions"></a>

## consolate~consolateOptions : <code>Object</code>
The consolate options object that defines output methods and their respective settings and/or overrides existing log methods and their behavior.

**Kind**: inner typedef of <code>[consolate](#module_consolate)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The name of an output method (built-in or user-defined), which consolate will use to create a log method (of same name) on the console object. |
| value | <code>outputMethodSettings</code> | The settings to apply to the respecive output method. |

<a name="module_consolate..outputMethodSettings"></a>

## consolate~outputMethodSettings : <code>Object</code>
An object that represents the settings for the output method that has the same name as this object's key.

**Kind**: inner typedef of <code>[consolate](#module_consolate)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| inPlace | <code>boolean</code> | Specifies that when a series of calls are made for this output method, all subsequent output will be rendered on the same line after the initial call—in effect overwriting the previous console output. |
| color | <code>colors</code> | The color to use for the output text. |
| prefix | <code>prefix</code> | The prefix option (if any) to use for this output method. |
| bullet | <code>bullet</code> | The bullet option (if any) to use for this output method. |

<a name="module_consolate..prefix"></a>

## consolate~prefix : <code>Object</code>
Specifies preferences (if any) for including an automatic prefix to all console output for an output method.

**Kind**: inner typedef of <code>[consolate](#module_consolate)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chars | <code>string</code> | One or more characters to use as the prefix. |
| color | <code>colors</code> | The color to use for the prefix text. |
| leftPadding | <code>number</code> | The number of spaces to pad on the left side of the prefix. |
| rightPadding | <code>number</code> | The number of spaces to pad on the right side of the prefix. |

<a name="module_consolate..bullet"></a>

## consolate~bullet : <code>Object</code>
Specifies preferences (if any) for including an automatic left-aligned bullet to all console output for an output method.

**Kind**: inner typedef of <code>[consolate](#module_consolate)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cliSpinner | <code>string</code> | For an animated bullet, this is the spinner name to use per the [cli-spinners](https://www.npmjs.com/package/cli-spinners) library. Note: The animation will continue until a different output method is called, which will then overwrite the animation output, thus stopping and clearing it. |
| chars | <code>string</code> | For a static (non-animated) bullet, this is one or more characters to use as the bullet. This property is ignored if cliSpinner is specified. |
| color | <code>colors</code> | The color to use for the bullet text. |
| leftPadding | <code>number</code> | The number of spaces to pad on the left side of the bullet. |
| rightPadding | <code>number</code> | The number of spaces to pad on the right side of the bullet. |




