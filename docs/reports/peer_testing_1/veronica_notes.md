# Peer Testing I Notes

- Admin: Veronica Jack

- Participant: Minh Bui

## Series of Events

- Explained the purpose of our program

- Let participant explore the audio files to get used to the names of the files, the contents of each, and how VLC
works on my computer

- Showed Kukarella to explain where we got our audio and text files

- Went through task list

- Had the user create their own audio and text files from Kukarella

- Asked the user to attempt to break the system

## Issues during testing

- the `.mp4` file did not replace itself during testing, so we had to make sure to delete the file between runs

## Ideas to Break System

- what about high-pitched or high-frequency audio files? Result: unable to run because I didn't have software to make
high-pitched audio files.
- what if the speech in the audio was difficult to hear? (similar to `cursed.wav` and `signalloss.wav`) - Result: reran
 cursed and signalloss
- what if the text is gibberish? For example, "asjdfklsdafjd;kfj". Result: it worked fine, no errors
- does the program handle emojis in the text file? Result: The emoji was just no sound

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
