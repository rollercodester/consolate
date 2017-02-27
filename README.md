<!-- TITLE/ -->

<h1>Consolate</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/rollercodester/consolate" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/rollercodester/consolate/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/consolate" title="View this project on NPM"><img src="https://img.shields.io/npm/v/consolate.svg" alt="NPM version" /></a></span>

<!-- /BADGES -->


###Customize your Node.JS console like a dignitary.

<!-- DESCRIPTION/ -->

Create an unlimited number of intuitive log functions that Consolate adds to the console object&mdash;even override built-in functions (error, info, warn, etc.) And while you're at it, feel free to easily define colors and prefixes for each log function, too!

<!-- /DESCRIPTION -->


## Install

```bash
npm install --save consolate
```

## Usage

```javascript

import Consolate, { colors } from 'consolate'

Consolate({
  error: {
    color: colors.red
  },
  info: {
    color: colors.cyan,
    prefix: 'INFO: '
  },
  warn: {
    color: colors.yellow,
    prefix: 'WARNING: '
  },
  debug: {
    color: colors.magenta,
    prefix: 'DEBUG: '
  },
  totallyCool: {
    color: colors.lightRed,
    prefix: 'Totally Cool Log Entry: '
  }
})

console.error(new Error('Oops, RED with anger and no prefix needed!'))

console.info('Just FYI in a CYAN kind of way.')

console.warn('There is a YELLOW submarine closing in on our position, Captain!')

console.debug('First one to find a MAGENTA creepy-crawly wins the bug-bash!')

console.totallyCool('Even the Fonz would like this, even if LIGHTRED is kind of girly.')

//
// You can also combine strings, native objects, and object literals all on one log statement:
//
const favoriteEditor = 'Sublime'
console.info(
  'Favorite Editor:',
  favoriteEditor,
  { name: Sublime, version: { major: 3, minor: 0, build: 3126 } },
  'Now, how about an error?',
  new Error('An erro coming right up!'),
  'Okay, that is quite enough.'
)

```

## Colors export

- colors.black
- colors.blue
- colors.cyan
- colors.darkGray
- colors.green
- colors.lightBlue
- colors.lightCyan
- colors.lightGray
- colors.lightGreen
- colors.lightMagenta
- colors.lightRed
- colors.lightYellow
- colors.magenta
- colors.red
- colors.white
- colors.yellow


## TODOs:

- Make it browser friendly (currently is scoped for Node.JS console only)
