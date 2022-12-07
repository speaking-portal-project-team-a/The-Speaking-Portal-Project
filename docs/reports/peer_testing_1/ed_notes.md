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
  - Adjusments made on front-end took a little bit, when system ran, `FileNotFound`  appeared
  - Finally system ran! No error thrown and there was no `.mp4` created
## Ideas to Break System

- Participate attempted to create a file with the word `Supercalifragilisticexpialidocious PHOTOSYNTHESIS Re0pro8ducti290on`
  
## Feedback

**What did you like?**

Animations work as expected with the provided text. The possible cases for the audio wavs are relevant and when a
corrupted file is provided, the program is able to catch it.

**What did you find as bugs or not working?**

The output mp4 did not update itself with the new audio file.

**How did you try to break it?**

With emojis in the text, and with random meaningless texts.

**What are your thoughts for the future of the project?**

Curious on how things will work together with the eyes, eyebrows, and other languages.

Transition between mouth positions, less sudden movements.

It would make sense for the mouth and the eyebrows' movements to match, blinking and any other body movements should be
fine if they are at random intervals.
