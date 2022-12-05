# Peer Testing Notes

**Examiner**: Logan Parker

**Participant**: Quinn Marshall

# Introduction to Environment & Files:

- Participant seems to fully grasp project flow & understands how the system works. No particular remarks at this stage.

# Error Handling Test Cases:

Participant fully completed all test cases with ease, no issues popped up and the participant could not think of any 
additional tests which should be run.

# Resilience Test:

Participant made a few suggestions for ways to break the system:
- Audio of a certain pitch?
    - Rhubarb requires wav files within a specific range, so this is a good suggestion!
- Mismatched text & audio?
    - Because rhubarb uses the text file strictly to enhance, the mismatched text & audio will still produce a semi 
  reasonable output
- Gibberish text / audio, and symbols?
    - Because the text to speech is handled by kukarella, it is quite robust and produces appropriate outputs, rhubarb 
  handles these cases quite well

Feedback

- Could do with more animation files
    - We are at the mercy of Kukarella artist for this!
- Participant felt all looked good, and could not think of any additional improvements / things to change at the current
moment
- Realism was brought up, but participant mentioned & is correct that this is a next-semester goal
