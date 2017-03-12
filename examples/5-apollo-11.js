var consolate = require('../bin/index.js')

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

//comms(console.log, '\033c', 0)




