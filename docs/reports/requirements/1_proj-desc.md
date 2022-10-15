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

I will write my PDF report section here to later be incorporated into the full document.
