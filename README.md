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

#### NASA


## API Reference
<a name="module_consolate.init"></a>

## consolate.init
The initialization function that must be called to enable consolate.

**Kind**: static constant of <code>[consolate](#module_consolate)</code>  

| Type | Description |
| --- | --- |
| <code>consolateOptions</code> | Options that drive consolate behavior. |

<a name="module_consolate..colors"></a>

## consolate~colors : <code>enum</code>
Color representations of ANSI output text codes that consolate supports.

**Kind**: inner enum of <code>[consolate](#module_consolate)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| reset | <code>number</code> | <code>0</code> | Not a color, per se...rather used to reset the active color back to default |
| default | <code>number</code> | <code>39</code> | The default color configured by your terminal |
| black | <code>number</code> | <code>30</code> |  |
| red | <code>number</code> | <code>31</code> |  |
| green | <code>number</code> | <code>32</code> |  |
| yellow | <code>number</code> | <code>33</code> |  |
| blue | <code>number</code> | <code>34</code> |  |
| magenta | <code>number</code> | <code>35</code> |  |
| cyan | <code>number</code> | <code>36</code> |  |
| lightGray | <code>number</code> | <code>37</code> |  |
| darkGray | <code>number</code> | <code>90</code> |  |
| lightRed | <code>number</code> | <code>91</code> |  |
| lightGreen | <code>number</code> | <code>92</code> |  |
| lightYellow | <code>number</code> | <code>93</code> |  |
| lightBlue | <code>number</code> | <code>94</code> |  |
| lightMagenta | <code>number</code> | <code>95</code> |  |
| lightCyan | <code>number</code> | <code>96</code> |  |
| white | <code>number</code> | <code>97</code> |  |

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




