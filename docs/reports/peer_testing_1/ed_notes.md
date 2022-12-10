# Peer Testing I Notes

## Series of Events

- Introduced myself to participant
- Explained overview of the project
- This is NOT a UI
- Went over some of our repo (Rhubarb Processor and Phoneme Factory)
- Went through the system tasks in order 

## Issues during testing

- One issue I had during testing was inlucluding the user `.wav` and `.mp3` into the system
  - The user created a `.wav` and `.mp3` from kukerella's front-end.
  - When system ran there was not output `.mp4` video, although when this task was repeated later on the mp4 output appeared

## Break the system

- Participate attempted to create a file with the word `Supercalifragilisticexpialidocious PHOTOSYNTHESIS Re0pro8ducti290on`
- System did not fail haha
- All text and audio file checks were valid both the phoneme factory and animation processor were able to make proper outputs

## Feedback

**What did you like?**

- The user really like the output videos
- Appreciated the phoneme logic in creating an animation
- Enjoyed that there was a working output animation to look at! 


**What did you find as bugs or not working?**

- Participant did not find anything that was not working
  - A couple hiccups in the admin's edits to the system

**How did you try to break it?**

Using complicated words and numbers in the text file to try and break the system 

**What are your thoughts for the future of the project?**

Mentioned that their should be improvement in the mouth transistions between frames, this would make the animation better

Noted that there should be improvmements in the images in the animation, rather then only mouth, have an avatar with body, face, etc

Lastly was worried about processing time for the system espescially when this system gets used by many users at once

## Brainstorming session

- Matt and myself participated in discussions with the other two groups
- All three groups mentioned that delivering this project as an API would be a concern:
  - One group mentioned they are using a library, `Gentle`, this library take a long time to install and process
  - Spinning out an image for a container would take forever!
  - Another group was still thinking about the API approach, but was not sure
  - Our idea was to make our system into a package that the developers at Kuk could integrate manually into their system
    - Concerns include, uncertainty on how child processes run on an external system, these have specific OS requirements
    - Performance is still a concern for our rhubarb processor
- Each group decided upon a different way to deliver the project at the end of the semester:
  - One group mentioned hosting the Animator on a privately hosted server
    - Concerns for this approach includes cost!

- All three groups seem to be takinig a different approach as of right now.
