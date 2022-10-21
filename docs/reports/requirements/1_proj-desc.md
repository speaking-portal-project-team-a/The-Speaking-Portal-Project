# Project Description

## Instructions

Section 1 of the Requirements Report

A high-level description (about one paragraph) of the software you are building and who the target user groups are.
Separately, explain how each user group is expected to use the software differently. (Recall that in order for two
users to be considered as being in two different user groups, they must use the system differently either via a
functional or non-functional system requirement.)

## Presentation Slides

### [Slide 1] Speaking Portal Project

Introduce the project name, the team, and the team members

### [Slide 2] Current System: Kukarella Table Reads Web App

Before we get into our project, we need to clarify the systme that is already in place.

1. When you go to the Kukarella Table Reads web page, the user can create an actor, which involves giving it a name,
selecting a language, and selecting voice.

2. The user can then select an avatar for their actor, which can be uploaded or selected from a list.

3. The user then adds the text they want, and they click the play button. The current system then speaks the text
(Text-to-Speech)

### [Slide 3] Project Descrpition

Explain that I will now go into the project description

### [Slide 4] What we are doing

Our project is to design, develop, and deploy a lip-syncing animation API for Kukarella's text-to-speech Table Reads
web application.

### [Slide 5] How each user group will use the software

We essentially have two user groups:

1. The user is the person who would like their text read to them by their selected avatar

2. The Kukarella Developer is more of an agent who will need to incorporate our API

Note: the User section will be color-coded to show what's already in place and what we're adding to the system

- User
  - The user inputs:
    - An actor (selects avatar, voice, & language)
    - Enter text
    - Press play
  - The user waits for the system and add-on to process
  - The user listens and watches the generated video of the animated actor speaking

- Kukarella Developer
  - To incorporate our add-on, the developer will need to
    - make a call to our API after the Kukarella app generates the audio file and before the user listens to it
    - organize the avatar graphic assets in a directory (heads with faces, variety of lips for each viseme for each
    avatar, and coordinates for each head’s mouth)

## PDF Report

### High-level Description (about one paragraph)

The objective for the Speaking Portal Project is to design, develop, and deploy a lip-sync animation (LSA) API for the
Kukarella Table Reads text-to-speech (TTS) web application. This API will serve as an animation generating add-on for
this system so that the user can both listen to and watch their avatar speak the user-provided text.

### User groups

In this project, there are two main user groups who will be using the software: general users and developers. The
general users are the general public who use the Kukarella web application; this could be anyone who would like to
have a more immersive text-to-speech experience where an animated avatar reads aloud user text.
employees who will be responsible for incorporating the API into their current system and adding more customizable
assets for the avatars in the future.

In the current Kukarella Table Reads TTS web application, the first step is for the user to create one or more actors.
The user gives the actor a name, selects a voice from a list of voices they can preview, selects a language from the
list of approximately 150 languages, and selects or uploads an image of the actor. After creating the actor and
entering the text they want to listen to, the user presses the play button, and then waits for the application to
process and generate the audio.

Once our API is incorporated into this system, if the user would like to both watch and listen to their avatar speak
the provided text, the only difference in the user interface is that the user will select one of the "premium" avatar
images for their actor. After pressing the play button, the user will wait for the Kukarella application and the API to
process and generate a video of their avatar speaking the text with lips synchronized to the sounds produced in their
generated speech.

As for the developers, they will need to call the API within the Kukarella application. After receiving the user input
and after the text is converted to speech in an audio file, the developer will call our API instead of providing the
audio file as output for the user to listen to. When calling our API, the user-selected language, user-provided text,
and the Kukarella-generated audio will be passed in, and then the API will provide the animated video as output. At
this point, the Kukarella developer shows the video in the web application's user interface.

When Kukarella decides to add more "premium" avatars, the developer will need to include the head, mouth, eye, and
eyebrow assets, along with their general coordinates to the directory/database. In this way, the developer can add,
change, or remove the "premium" avatars and allow further customization options for the user.
