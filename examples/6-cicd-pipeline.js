var consolate = require('../lib/index.js')
var colors = consolate.colors

consolate.init({
   pipeline: {
      color: colors.lightBlue
   },
   stage: {
      color: colors.cyan,
      prefix: {
         chars: 'STAGE',
         color: colors.cyan,
         leftPadding: 3
      }
   },
   stageSucceed: {
      color: colors.lightGreen,
      bullet: {
         chars: '',
         leftPadding: 5
      }
   },
   stageFail: {
      color: colors.lightRed,
      bullet: {
         chars: '',
         color: colors.lightRed,
         leftPadding: 5
      }
   },
   stepInProgress: {
      color: colors.magenta,
      bullet: {
         cliSpinner: 'dots',
         color: colors.lightMagenta,
         leftPadding: 6
      }
   },
   stepStart: {
      color: colors.lightGray,
      bullet: {
         chars: '...',
         color: colors.lightGray,
         leftPadding: 6
      }
   },
   stepSucceed: {
      color: colors.lightGray,
      bullet: {
         chars: '✔',
         color: colors.lightGreen,
         leftPadding: 6
      }
   },
   stepFail: {
      color: colors.lightRed,
      bullet: {
         chars: '✘',
         color: colors.lightRed,
         leftPadding: 6
      }
   },
   stepWarn: {
      color: colors.yellow,
      bullet: {
         chars: '▲',
         color: colors.yellow,
         leftPadding: 6
      }
   },
   taskInProgress: {
      color: colors.magenta,
      bullet: {
         cliSpinner: 'dots',
         color: colors.lightMagenta,
         leftPadding: 9
      }
   },
   taskSucceed: {
      color: colors.lightGray,
      bullet: {
         chars: '✔',
         color: colors.lightGreen,
         leftPadding: 9
      }
   },
   taskFail: {
      color: colors.lightRed,
      bullet: {
         chars: '✘',
         color: colors.lightRed,
         leftPadding: 9
      }
   },
   taskWarn: {
      color: colors.yellow,
      bullet: {
         chars: '▲',
         color: colors.yellow,
         leftPadding: 9
      }
   }
})

const DELAY_NONE = 0
const DELAY_SHORT = 1.5
const DELAY_MEDIUM = 2.5
const APP_NAME = 'Consolate Pretend Service'
const APP_VERSION = 'v1.4.2'
const APP_BUILD_VERSION = `${APP_VERSION}-a234bd98237`

let nextOffset = 0
let previousRenderTime = 0

const output = (method, msg, secondsDelay) => {

   nextOffset += previousRenderTime
   previousRenderTime = (secondsDelay * 1000)
   setTimeout(() => { method(msg) }, nextOffset)

}

output(console.log, "-------------------------------------------------", DELAY_NONE)
output(console.pipeline, `     ${APP_NAME} CI/CD Pipeline`, DELAY_NONE)
output(console.log, "-------------------------------------------------", DELAY_NONE)

//
// SOURCE
//
output(console.log, '', DELAY_NONE)
output(console.stage, "1: Source", DELAY_NONE)
output(console.stepInProgress, "Authenticating with SCM", DELAY_SHORT)
output(console.stepSucceed, "Authenticated with SCM", DELAY_NONE)
output(console.stepInProgress, "Pulling source from dev branch", DELAY_SHORT)
output(console.stepSucceed, "Source from dev branch pulled", DELAY_NONE)
output(console.stepInProgress, "Scanning for code standards issues", DELAY_SHORT)
output(console.stepWarn, "Found 3 code standards warnings", DELAY_NONE)
output(console.stepInProgress, "Scanning for code security issues", DELAY_SHORT)
output(console.stepSucceed, "No code security issues found", DELAY_NONE)
output(console.stepInProgress, "Scanning for code copyright issues", DELAY_SHORT)
output(console.stepSucceed, "No code copyright issues found", DELAY_NONE)
output(console.stepInProgress, `Tagging source commit with ${APP_BUILD_VERSION}`, DELAY_SHORT)
output(console.stepSucceed, `Source commit tagged with ${APP_BUILD_VERSION}`, DELAY_NONE)
output(console.stepInProgress, 'Saving results', DELAY_SHORT)
output(console.stepSucceed, 'Results saved', DELAY_NONE)
output(console.stageSucceed, "SOURCE IS GOOD TO GO!", DELAY_NONE)

//
// BUILD
//
output(console.log, '', DELAY_NONE)
output(console.stage, "2: Build", DELAY_NONE)
output(console.stepInProgress, "Copying service manifest to container", DELAY_SHORT)
output(console.stepSucceed, "Service manifest copied", DELAY_NONE)
output(console.stepInProgress, "Installing service dependencies", DELAY_SHORT)
output(console.stepSucceed, "Service dependencies installed", DELAY_NONE)
output(console.stepInProgress, "Copying source to container", DELAY_SHORT)
output(console.stepSucceed, "Source to container copied", DELAY_NONE)
output(console.stepInProgress, "Compiling source", DELAY_SHORT)
output(console.stepSucceed, "Source compiled", DELAY_NONE)
output(console.stepInProgress, "Executing unit tests", DELAY_SHORT)
output(console.stepSucceed, "Unit tests passed", DELAY_NONE)
output(console.stepInProgress, "Starting service", DELAY_SHORT)
output(console.stepSucceed, "Service started", DELAY_NONE)
output(console.stepInProgress, "Checking container health", DELAY_SHORT)
output(console.stepSucceed, "Container is healthy", DELAY_NONE)
output(console.stepInProgress, "Checking service health", DELAY_SHORT)
output(console.stepSucceed, "Service is healthy", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stageSucceed, "BUILD IS GOOD TO GO!", DELAY_NONE)

//
// PUBLISH
//
output(console.log, '', DELAY_NONE)
output(console.stage, "3: Publish", DELAY_NONE)
output(console.stepInProgress, "Authenticating with remote repository", DELAY_SHORT)
output(console.stepSucceed, "Authenticated with remote repository", DELAY_NONE)
output(console.stepInProgress, `Tagging image with ${APP_BUILD_VERSION}`, DELAY_SHORT)
output(console.stepSucceed, `Image tagged with repository with ${APP_BUILD_VERSION}`, DELAY_NONE)
output(console.stepInProgress, "Pushing image to remote repository", DELAY_SHORT)
output(console.stepSucceed, "Image pushed to remote repository", DELAY_NONE)
output(console.stepInProgress, "Performing local repository clean-up", DELAY_SHORT)
output(console.stepSucceed, "Local repository clean", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stageSucceed, "PUBLISH IS GOOD TO GO!", DELAY_NONE)

//
// TEST
//
output(console.log, '', DELAY_NONE)
output(console.stage, "4: Test", DELAY_NONE)
output(console.stepInProgress, `Requesting TEST environment for ${APP_BUILD_VERSION}`, DELAY_SHORT)
output(console.stepSucceed, "Request approved...provisioning in-progess", DELAY_NONE)
output(console.stepInProgress, "Waiting for provisioning of environment to complete", DELAY_SHORT)
output(console.stepSucceed, "Environment provisioning complete", DELAY_NONE)
output(console.stepInProgress, "Verifying service deployment", DELAY_SHORT)
output(console.stepSucceed, "Service deployment verified", DELAY_NONE)
output(console.stepInProgress, "Scanning for security issues", DELAY_SHORT)
output(console.stepSucceed, "No security issues found", DELAY_NONE)
output(console.stepInProgress, "Scanning for privacy issues", DELAY_SHORT)
output(console.stepSucceed, "No privacy issues found", DELAY_NONE)
output(console.stepInProgress, "Scanning for accessibility issues", DELAY_SHORT)
output(console.stepSucceed, "No accessibility issues found", DELAY_NONE)
output(console.stepInProgress, "Loading test suite", DELAY_SHORT)
output(console.stepSucceed, "Test suite loaded", DELAY_NONE)
output(console.stepStart, "Executing test suite", DELAY_NONE)
output(console.taskInProgress, "Executing test case #1", DELAY_SHORT)
output(console.taskSucceed, "Test case #1 passed", DELAY_NONE)
output(console.taskInProgress, "Executing test case #2", DELAY_SHORT)
output(console.taskSucceed, "Test case #2 passed", DELAY_NONE)
output(console.taskInProgress, "Executing test case #3", DELAY_SHORT)
output(console.taskSucceed, "Test case #3 passed", DELAY_NONE)
output(console.taskInProgress, "Executing test case #4", DELAY_SHORT)
output(console.taskWarn, "Test case #4 passed with warnings", DELAY_NONE)
output(console.taskInProgress, "Executing test case #5", DELAY_SHORT)
output(console.taskSucceed, "Test case #5 passed", DELAY_NONE)
output(console.stepWarn, "Test suite passed with warnings", DELAY_NONE)
output(console.stepInProgress, "Request environment teardown", DELAY_SHORT)
output(console.stepSucceed, "Request approved...teardown in-progress", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stageSucceed, "TEST IS GOOD TO GO!", DELAY_NONE)

//
// PERF
//
output(console.log, '', DELAY_NONE)
output(console.stage, "5: Performance", DELAY_NONE)
output(console.stepInProgress, `Requesting PERF environment for ${APP_BUILD_VERSION}`, DELAY_SHORT)
output(console.stepSucceed, "Request approved...provisioning in-progess", DELAY_NONE)
output(console.stepInProgress, "Waiting for provisioning of environment to complete", DELAY_SHORT)
output(console.stepSucceed, "Environment provisioning complete", DELAY_NONE)
output(console.stepInProgress, "Verifying service deployment", DELAY_SHORT)
output(console.stepSucceed, "Service deployment verified", DELAY_NONE)
output(console.stepInProgress, "Loading performance suite", DELAY_SHORT)
output(console.stepSucceed, "Performance suite loaded", DELAY_NONE)
output(console.stepStart, "Executing performance suite", DELAY_NONE)
output(console.taskInProgress, "Executing perf case #1", DELAY_MEDIUM)
output(console.taskSucceed, "Perf case #1 improved 5% over margin", DELAY_NONE)
output(console.taskInProgress, "Executing perf case #2", DELAY_MEDIUM)
output(console.taskWarn, "Perf case #2 degraded 1% under margin", DELAY_NONE)
output(console.taskInProgress, "Executing perf case #3", DELAY_MEDIUM)
output(console.taskWarn, "Perf case #3 degraded 2% under margin", DELAY_NONE)
output(console.taskInProgress, "Executing perf case #4", DELAY_MEDIUM)
output(console.taskFail, "Perf case #4 degraded 15% under margin (perf case marked as non-critical)", DELAY_NONE)
output(console.taskInProgress, "Executing perf case #5", DELAY_MEDIUM)
output(console.taskSucceed, "Perf case #5 passed within margin", DELAY_NONE)
output(console.stepWarn, "Perf suite passed with acceptable degredations", DELAY_NONE)
output(console.stepInProgress, "Request environment teardown", DELAY_SHORT)
output(console.stepSucceed, "Request approved...teardown in-progress", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stageSucceed, "PERF IS GOOD TO GO!", DELAY_NONE)

//
// RELEASE
//
output(console.log, '', DELAY_NONE)
output(console.stage, "6: Release", DELAY_NONE)
output(console.stepInProgress, `Requesting GO/NO-GO decision for ${APP_BUILD_VERSION} release to production`, DELAY_SHORT)
output(console.stepSucceed, "Request auto-approved", DELAY_NONE)
output(console.stepInProgress, "Requesting deployment of service", DELAY_SHORT)
output(console.stepSucceed, "Request approved...deployment in-progress", DELAY_NONE)
output(console.stepInProgress, "Waiting for deployment into production", DELAY_SHORT)
output(console.stepSucceed, "Deployment into production completed", DELAY_NONE)
output(console.stepInProgress, "Verifying health of service in production", DELAY_SHORT)
output(console.stepSucceed, "Service verified as healthy", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stageSucceed, "RELEASE IS GOOD TO GO!", DELAY_NONE)

//
// POST-RELEASE
//
output(console.log, '', DELAY_NONE)
output(console.stage, "7: Post-Release", DELAY_NONE)
output(console.stepInProgress, "Authenticating with SCM", DELAY_SHORT)
output(console.stepSucceed, "Authenticated with SCM", DELAY_NONE)
output(console.stepInProgress, "Pulling source from dev branch", DELAY_SHORT)
output(console.stepSucceed, "Source from dev branch pulled", DELAY_NONE)
output(console.stepInProgress, "Pulling source from master branch", DELAY_SHORT)
output(console.stepSucceed, "Source from master branch pulled", DELAY_NONE)
output(console.stepInProgress, "Merging local dev branch into local master", DELAY_SHORT)
output(console.stepSucceed, "Local dev branch merged into local master", DELAY_NONE)
output(console.stepInProgress, "Pushing merge to remote repository", DELAY_SHORT)
output(console.stepSucceed, "Merge pushed to remote repository", DELAY_NONE)
output(console.stepInProgress, "Saving results", DELAY_SHORT)
output(console.stepSucceed, "Results saved", DELAY_NONE)
output(console.stepInProgress, "Generating release report", DELAY_SHORT)
output(console.stepSucceed, "Release report generated", DELAY_NONE)
output(console.stepInProgress, "Sending out release notifications", DELAY_SHORT)
output(console.stepSucceed, "Release notifications sent", DELAY_NONE)
output(console.stageSucceed, "POST-RELEASE IS GOOD TO GO!", DELAY_NONE)
output(console.log, '', DELAY_NONE)
output(console.log, "=================================================", DELAY_NONE)
output(console.pipeline, `  ${APP_NAME} ${APP_VERSION} is now LIVE!`, DELAY_NONE)
output(console.log, "=================================================", DELAY_NONE)