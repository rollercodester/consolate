[![npm](http://img.shields.io/npm/v/consolate.svg)](https://www.npmjs.org/package/consolate)
[![travis](https://travis-ci.org/rollercodester/consolate.svg?branch=master)](https://travis-ci.org/rollercodester/consolate)
[![Dependency Status](https://david-dm.org/rollercodester/consolate.svg)](https://david-dm.org/rollercodester/consolate)

# consolate
#### Customize your Node.JS console like a dignitary.
Easily create intuitive log functions on the console object&mdash;even override built-in console functions (error, info, warn, etc.) And while you're at it, feel free to easily define colors, prefixes, and bullets that can automatically animate [cli-cursors](https://www.npmjs.com/package/cli-spinners).

## API Reference
![examples/1-custom-info.js](https://cloud.githubusercontent.com/assets/1450389/23826774/b70fc2e8-0658-11e7-9a85-9b4506bc8626.gif)

**Example**  
```js
var consolate = require('consolate')consolate.init({   info: {      color: consolate.colors.cyan,      prefix: {         chars: 'INFO:',         color: consolate.colors.lightCyan      }   }})console.log('\n')console.info('This line is being output by my customized "info" log method!')console.log('\n')
```
<a name="module_consolate.init"></a>

## consolate.init
![examples/2-animated-and-static-bullets.js](https://cloud.githubusercontent.com/assets/1450389/23827156/c595eeba-0661-11e7-9954-61b5478edc61.gif)

**Kind**: static constant of <code>[consolate](#module_consolate)</code>  

| Type | Description |
| --- | --- |
| <code>consolateOptions</code> | Options that drive consolate behavior. |

**Example**  
```js
var consolate = require('consolate')consolate.init({   success: {      color: consolate.colors.green,      bullet: {         chars: '✔',         color: consolate.colors.lightGreen,         leftPadding: 1,         rightPadding: 2      }   },   progress: {      color: consolate.colors.lightBlue,      bullet: {         cliSpinner: 'dots',         color: consolate.colors.lightBlue,         leftPadding: 1,         rightPadding: 2      },      prefix: {         color: consolate.colors.white,         chars: 'WORKING:',         leftPadding: 0,         rightPadding: 1      }   }})console.log('We can animate while reporting on long running tasks...');console.progress('Calling github to get source...');setTimeout(function() {   console.progress('Compiling source to create the build...');   setTimeout(function() {      console.success('Yay, build passed with no errors.');   }, 3000);}, 3000);
```
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

