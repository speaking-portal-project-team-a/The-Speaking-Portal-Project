# The Speaking Portal Project

COSC 499 Capstone Software Engineering Project

Team A:

- Veronica Jack (PM/Scrum Master)
- Edouard Eltherington (QA Lead)
- Logan Parker (Tech Lead)
- Matthew Kuelker (Client Liaison)

## Table of Contents

- [The Speaking Portal Project](#the-speaking-portal-project)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Project Timeline](#project-timeline)
    - [Deliverables](#deliverables)
  - [Tech Stack](#tech-stack)
  - [Setup](#setup)
  - [How it Works](#how-it-works)
    - [Overview](#overview)
    - [API](#api)
    - [The Phoneme Factory](#the-phoneme-factory)
      - [Rhubarb Output](#rhubarb-output)
  - [The Animation Factory](#the-animation-factory)
    - [Frame Data Output](#frame-data-output)
  - [Limitations](#limitations)

## General Information

The objective of the Speaking Portal Project is to design, develop, and deploy a lip-sync animation API for the
[Kukarella text-to-speech (TTS) web application](https://www.kukarella.com/). This API will serve as an
animation-generating add-on for this system so that the user can both listen to and watch their avatar speak the user
provided text.

## Project Timeline

| Milestones                             | Due Date      |
|----------------------------------------|---------------|
| 1. Requirements Report & Presentation  | Oct. 21, 2022 |
| 2. Peer Testing Report I & Video Demo  | Dec. 02, 2022 |
| 3. Peer Testing Report II & Video Demo | Mar. 8, 2023 |
| 4. Final Report & Presentation         | Apr. 1st, 2023 |

### Deliverables

Milestone 1 (completed):

1. Preliminary research ✅
2. Feasibility report for client ✅
3. Requirements presentation ✅
4. Requirements report ✅

Milestone 2 (completed):

1. Program receives inputs from local machine ✅
2. Program generates output file with phoneme timings ✅
3. Program returns a corresponding series of mouth images ✅
4. Creation of testing procedure for peer testing ✅

Milestone 3 (completed):

1. Convert program to an API to be hosted and tested ✅
2. API generates video (MP4) from series of mouth images ✅
3. Confirmation of possible integration with Kukarella's environment ✅

Milestone 4:

1. Improve the animation (realism with eye, head, and body motion) ✅ (awaiting artist art)
2. Final codebase refactoring
3. Final integration into Kukarella's environment (to be completed by Kukarella)

## Tech Stack

This program was created with the following tech stack and packages:

- Node.Js 19.0.0
- Express 4.18.1
- Multer 1.4.5
- Rhubarb Lip Sync 1.13.0
- ffmpeg 5.1.2

Tested remotely via an AWS ec2 instance.


## Setup

```markdown
TODO: Finalize a local configuration plan before final delivery

TODO: Decide if Ruhbarb-Lip-Sync should installed into project
```

1. Install [Node.Js](https://nodejs.org/en/)
2. Download the repository
3. Receive Kukarella files
    1. Go to [Kukarella](https://www.kukarella.com/)
    2. Enter text, select a language, select a voice, and convert to audio
    3. Download the audio as a .wav file
    4. Download the text file
4. Move the Kukarella files to `speaking-portal-project\rhubarb`
5. In the terminal, navigate to `speaking-portal-project`
6. Install ffmpeg
   1. Follow the steps on [adamtheautomator.com](https://adamtheautomator.com/install-ffmpeg/) for your corresponding
   operating system. We recommend the Powershell approach for Windows users.
7. Run `npm install`
8. Run `npm start`

## How it Works

### Overview

The Speaking Portal Project (SPP) is built to connect with Kukurella's Text-to-Speech platform as an API. The SPP is broken down into three main components: **API**, **Phoneme Factory**, and the **Animation Factory**.

### API

The SPP API is the first step in the animation process. Kukurella requests are sent to the SPP API as a POST with the following required properties:

- `audio`: .wav file upload
- `text`: .txt file upload
- `recognizer`: audio and text language selection
- `characterSelect`: animation avatar choice

The API, once request is received, initializes a node instance, creates a `/tmp` directory for file I/O operations, and begins the animation process by sending all user inputs to main.

### The Phoneme Factory

The Phoneme Factory is the first step in the SPP animation process. The factory is in
charge of mapping spoken language from the `audio` and `text` inputs into a series of phonemes, which are units of sound that
distinguish one word from another.

How is this done ?

 The `audio`  file, `text` file, and `recognizer` selection is passed to the **Phoneme processor** which sends the data to an external command-line process called [**Rhubarb Lip Sync**](INSERT-LINK). Rhubarb is an open-source package that can create 2d animations given any voice recording. In SPP, Rhubarb processes the `audio` and `text` file to create a JSON [output](#rhubarb-output) that outlines every phoneme along with a `start` and `end` time interval tag.

#### Rhubarb Output

```JSON
"mouthCues": [
    { "start": 0.00, "end": 0.08, "value": "X" },
    { "start": 0.08, "end": 0.23, "value": "B" },
    { "start": 0.23, "end": 0.37, "value": "C" },
    { "start": 0.37, "end": 0.44, "value": "G" },
    { "start": 0.44, "end": 1.42, "value": "B" },
    ... ]
    
```

 Rhubarb uses the `recognizer` input to select the engine to use to during the process of creating a phoneme file. When ```recognizer: english```,  Rhubarb will use the `pocketSphinx` engine to process the english audio. When ```recognizer: phonetic```, Rhubarb will use the `Phonetic` recognizer instead. It has been observed that the `Phonetic` recognizer performs better.

Once the phoneme contents are created, they are sent off to a another process.

## The Animation Factory

The animation factory uses the [phoneme output](#rhubarb-output) from the phoneme factory to logically select frames from `speaking-portal-project/images` for 2d animation. Each frame corresponds to exactly one phoneme, avatar, blink value, and body position. This frame data is compiled into an [frame data output](#frame-data-output) file.

### Frame Data Output

```JSON
file ./images/character01/X_eyes2.png
outpoint 0.08
file ./images/character01/B_eyes0.png
outpoint 0.20
file ./images/character01/C_eyes0.png
outpoint 0.07
file ./images/character01/G_eyes0.png
outpoint 0.07
file ./images/character01/B_eyes0.png
outpoint 0.98
```

The [frame data output]((#frame-data-output)) includes a path to the image and duration of frame in animation video.

To create a video, this file is sent to FFMPEG, a highly portable library capable of rendering image frames into an mp4 output.

Once the video file is created in FFMPEG, it is then returned to the user as a response from the API.

## Limitations

- The phoneme generation process controlled via Rhubarb can be quite computationally intensive, and is the current bottleneck for performance.
- Blink frequency is chosen using a random probability
- Avatar poses are chosen at random. A suggestion for future development would be to include sentiment analysis on the text and choose appropriate poses: however, this also depends on which poses are provided by the artist.
