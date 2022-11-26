# Peer Testing Instructions
Examiner: Hello! Here are some instructions for peer testing. We have you complete a few basic tasks to test out our new langauge processor.

### Starting Test for Rhubarb
Examiner: First, please open `index.ts`. Navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter `npm start`. If for any reason the file does not load immediatly notify me, the examiner.

### Missing File Test
Examiner: Please enter the name of a file that does not exist. Any name will do. When you are ready, navigate in the terminal to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter `npm start`
(Do not worry about the `.txt` file extension.)
*Give user 2 minutes to attempt to complete task before moving on.*

### Wrong File Test
Examiner: Please select `badformat.mp3 ` and move it into the rhubarb folder next to `en-amber.wav`. Update the file path in `index.ts` When you are ready navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter `npm start`. (Do not worry about the `.txt` file extension.)
*Give user 5 minutes to attempt to complete task before moving on.*

### Corrupted File Test
Examiner: Please select `corruptedfile.wav` and move it into the rhubarb folder next to `en-amber.wav`. Update the file path in `index.ts` When you are ready navigate to `..\The-Speaking-Portal-Project\speaking-portal-project` and enter `npm start` (Do not worry about the `.txt` file extension.)
*Give user 2 minutes to attempt to complete task before moving on.*

### Unique File Test
Examiner: You will notice the following extra files: `chipmunk.wav`, `reverse.wav`, `signalloss.wav`, and `cursed.wav`. You may preview the files before deciding which file to run in testing. Once you have decided on a file navigate to the previously described directory and enter `npm start` (Do not worry about the `.txt` file extension.)

### Resilience Test
Examiner: Describe how you conceptually would attempt to "break" the testing program using audio file inputs and other means. 
*If user can carry out plan in under 5 minutes let them attempt to break the testing system*


### Closing
*Examiner will conclude test and thank participant for their time. Redownload testing branch from repo to reset the testing system for the next participant* 