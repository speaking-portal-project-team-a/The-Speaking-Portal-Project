# List of Usability Tasks

## Users

As a user, you are a member of the general public who is using the Kukarella web application; you are someone who would
like to have a more immersive text-to-speech experience where an animated avatar reads user text aloud.

In your pursuit of having an animated text-to-speech experience, you will use our team's premium Kukarella account, which was provided by the client.

### User Scenario 1: Language Test

1. On the Kukarella web app

    1. Enter text in a language other than English (you may use Google Translate, but your feedback will be more
    valuable if you are familiar with the language)
    2. Choose a voice for that language
    3. Convert your input to a .wav and .txt file
    4. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video

Repeat this scenario with a different language each time.

### User Scenario 2: Voice Test

1. On the Kukarella web app

    1. Enter text in a language
    2. Select a voice for that language (try a different one each time you repeat this scenario)
    3. Convert your input to a .wav and .txt file
    4. Inform the examiner which avatar you'd like to use: Barb or Boy

2. Let the examiner do the back-end work that would happen if the API was integrated
    a. Send the .wav file, .txt file, language, and avatar selection to the API
    b. Wait for the API to generate the video

3. Watch the video

Repeat this scenario with a different voice each time.

### User Scenario 3: Voice Effects

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

Repeat this scenario with different effects each time.

### User Scenario 4: Mix and Match

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

Repeat this scenario with different parameters each time for the text, language, voice, and effects.

## Developers

As a developer, you are a Kukarella employee who will be responsible for incorporating the API into your current system
and will be adding more avatars in the future.

### Developer Scenario 1: API Integration

Read the README, and then identify:

1. How many parameters are sent to the API?
2. What are the parameters that are sent to the API?

### Developer Scenario 2: Character Assets

1. Famliarize yourself with the program structure.
2. Identify where the character image assets are saved.
3. Tell the examiner about the character image file naming scheme and how the names relate to the images
4. If you were going to add a new character, how would you do it?
