# List of Usability Tasks

[Google Form](https://forms.gle/GUEYYzDdRwFAgYWn6)

Examiner notes for setup:

- On the local machine, delete all image assets for Boy
- During testing, the API calls will be sent to our server so that we can test the API's performance when it receives multiple requests.

## Users

As a user, you are a member of the general public who is using the Kukarella web application; you are someone who would
like to have a more immersive text-to-speech experience where an animated avatar reads your text aloud.

In your pursuit of having an animated text-to-speech experience, you will use our team's premium Kukarella account,
which was provided by the client.

### User Scenario 1: English Baseline

1. On the Kukarella web app

    1. Enter text in English
    2. Choose a voice
    3. Convert your input to a .wav and .txt file
    4. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated into Kukarella
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video and provide feedback in the Google Form as you go

### User Scenario 2: Language Test

1. On the Kukarella web app

    1. Enter text in a language other than English (you may use Google Translate, but your feedback will be more
    valuable if you are familiar with the language)
    2. Choose a voice for that language
    3. Convert your input to a .wav and .txt file
    4. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated into Kukarella
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video and provide feedback in the Google Form as you go

### User Scenario 3: Voice Test

1. On the Kukarella web app

    1. Enter text in a language you're familiar with
    2. Select a voice for that language (try a different one each time you repeat this scenario)
    3. Convert your input to a .wav and .txt file
    4. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video

### User Scenario 4: Voice Effects

1. On the Kukarella web app

    1. Enter text in a language
    2. Select a voice for that language that supports effects
    3. Play around with the following effects to see if the animated avatar looks natural with each:
        - Pitch
        - Pause
        - Speed
        - Say As
        - Emphasis
        - Volume
        - Mute
        - Breath
        - Whisper
    4. Convert your input to a .wav and .txt file
    5. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video

### User Scenario 5: Mix and Match

1. On the Kukarella web app

    1. Enter text in a language (you may use another language; your feedback will be more valuable if you are familiar
     with the language)
    2. Select a voice for that supports effects (try a language that doesn't match the text you entered)
    3. Play around with the following effects:
        - Pitch
        - Pause
        - Speed
        - Say As
        - Emphasis
        - Volume
        - Mute
        - Breath
        - Whisper
    4. Convert your input to a .wav and .txt file
    5. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video

## Developers

As a developer, you are a Kukarella employee who will be responsible for incorporating the API into your current system
and will be adding more avatars in the future.

### Developer Scenario 1: API Integration

Read the README, and then identify:

1. The instructions in the README are clear
2. Which parameters are sent to the API?

### Developer Scenario 2: Character Assets

1. Identify where the character image assets are saved.
2. Does the naming scheme of the character image assets make senese?
3. What does the naming scheme tell you about the images?
4. If an artist provided you with the Adobe Illustrator file for a new character, I could add the new character's assets.
5. Using the README, create and add the image assets for Boy. Did you succeed?  *Note: this usability task can only be completed if the tester has Adobe Illustrator installed on their computer. Team A only has one computer with this program, so this is dependent on the Peer Testing II schedule.*
