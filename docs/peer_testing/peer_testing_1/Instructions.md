# Peer Testing Instructions
Examiner: Hello! Here are some instructions for peer testing. We have you complete a few basic tasks to test out our new
language processor.

### Introduction to Environment and Input Files 
Examiner: In this directory (show rhubarb dir) please feel free to open and explore the files.

For example, `en-Amber.wav` is an english audio file that reads the text from `en-text.txt`.

*Give the user 3 minutes to attempt to complete the task before moving on.*
### Starting Test for Rhubarb
Examiner: First, please open `index.ts`. In the terminal navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter
`npm start`. If for any reason the file does not load immediately notify me, the examiner.

**Have user view `output.json` and `output.mp4` files and rename.**
### Missing File Test
Examiner: Please set `case_number = 0` in `index.ts` and delete `en-Amber.wav` file from the `rhubarb` directory. When you are ready,
navigate in the terminal to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter `npm start`

**Have user view `output.json` and `output.mp4` files and rename.**

*Give the user 2 minutes to attempt to complete the task before moving on.*

### Wrong File Test
Examiner: Please set `case_number = 3` in `index.txt`, and move `badformat.mp3` into the rhubarb folder next to 
`en-amber.wav`. When you are ready, navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter 
`npm start`.

**Have user view `output.json` and `output.mp4` files and rename.**

*Give the user 5 minutes to attempt to complete the task before moving on.*

### Corrupted File Test 
Examiner: Please set `case_number = 4` in `index.txt` and move `corruptedfile.wav` into the rhubarb folder next 
to `en-amber.wav`.  When you are ready navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter 
`npm start`

**Have user view `output.json` and `output.mp4` files and rename.**

*Give user 2 minutes to attempt to complete task before moving on.*

### Unique File Test
Examiner: You will notice the following extra files: `chipmunk.wav`, `reverse.wav`, `signalloss.wav`, and `cursed.wav`.
You may preview the files before deciding which file to run in testing. Once you have decided on a file, please set 
`case_number = 5|6|7|8` (choose one integer to set), and move the corresponding audio file into the rhubarb
folder next to `en-amber.wav`. When you are ready, navigate to the previously described directory and enter `npm start` 

**Have user view `output.json` and `output.mp4` files and rename.**

### Resilience Test
Examiner: Describe how you conceptually would attempt to "break" the testing program using audio file inputs and text file inputs.

*If the user can carry out their plan in under 5 minutes then let them attempt to break the testing system*


### Closing
*Examiner will conclude the test and thank the participant for their time. Re-download the testing branch from the repo 
to reset the testing system for the next participant and reset the rhubarb folder.*