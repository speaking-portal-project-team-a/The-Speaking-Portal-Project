# The Speaking Portal Project

COSC 499 Capstone Software Engineering Project

Team A

- Veronica Jack (PM/Scrum Master)
- Edouard Eltherington (QA Lead)
- Logan Parker (Tech Lead)
- Matthew Kuelker (Client Liaison)

## Table of Contents

- [The Speaking Portal Project](#the-speaking-portal-project)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
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

The objective of the Speaking Portal Project is to design, develop, and deploy an API for the
[Kukarella text-to-speech (TTS) web application](https://www.kukarella.com/). This API will serve as an
animation-generating add-on for this system. The generated animation will allow a user to watch an avatar speak the
provided text.

## Tech Stack

This program was created with the following tech stack and packages:

- Node.Js 19.0.0
- Express 4.18.1
- Multer 1.4.5
- Rhubarb Lip Sync 1.13.0
- ffmpeg 5.1.2

Tested remotely via an AWS ec2 instance.

## Setup

You can use the API locally via the following steps:

1. Download and unzip the repository
2. Install [Node.Js](https://nodejs.org/en/)
3. Install [ffmpeg](https://ffmpeg.org/)
   - We recommend following the steps on [adamtheautomator.com](https://adamtheautomator.com/install-ffmpeg/) for your
   corresponding operating system. We also recommend the Powershell approach for Windows users.
4. Add the appropriate Rhubarb files to the repository
    1. Download [Rhubarb Lip Sync v1.13.0](https://github.com/DanielSWolf/rhubarb-lip-sync/releases/tag/v1.13.0) for
    your corresponding operating system
    2. Unzip and rename the folder to `rhubarb`
    3. Move the folder into the `speaking-portal-project` directory
    4. Delete the `extras` folder which is currently located at `speaking-portal-project\rhubarb\extras`
5. In the terminal, navigate to `speaking-portal-project`
6. Run `npm install` to ensure all packages are installed
7. Run `npm start` to start the API
8. Check in the terminal that the API is listening
9. Create the user's Kukarella files:
    1. Go to [Kukarella](https://www.kukarella.com/)
    2. Enter text, select a language, select a voice, and convert the text to audio
    3. Download the audio as a .wav file
    4. Download the text file
10. Use Postman or a similar platform to send a POST request (see [POST Request Properties](#post-request-properties))
to the local API that is currently listening for a request from step 7.
11. Wait for the API to process the request and return the video
12. Enjoy the animation!

## How it Works

### Overview

The Speaking Portal Project (SPP) is built to connect with Kukurella's Text-to-Speech platform as an API. The SPP is broken down into three main components: *The *API**, **The Phoneme Factory**, and **The Animation Factory**.

### API

Speaking Portal API creates an MP4 output animation from a synthesized speech file and text input based on Kukarella
TTS. Text input is first read and generated into phonemes output file via the rhubarb library. (Phonemes are the
smallest unit of sounds that uniquely identifies words from one another.) Once a phoneme file is created, it is
processed in a phoneme processor, which maps phonemes to  mouth assets. The mouth assets are then added onto an avatar
and rendered in a video file through ffmepg. The API, once request is received, initializes a node instance, creates a
`/tmp` directory for file I/O operations, and begins the animation process by sending all user inputs to main.

Here's a typical example of the JSON used in a POST request.

```markdown
{
  fieldname: 'audio',
  originalname: 'en-Amber.wav',
  encoding: '7bit',
  mimetype: 'audio/wave',
  destination: './tmp',
  filename: 'f8fc3bc5c3f0fbc70ab0899d0dc0c860',
  path: 'tmp\\f8fc3bc5c3f0fbc70ab0899d0dc0c860',
  size: 9049278
} {
  fieldname: 'text',
  originalname: 'en-text.txt',
  encoding: '7bit',
  mimetype: 'text/plain',
  destination: './tmp',
  filename: 'e05b5794e54ca3810b071b87bc1449e1',
  path: 'tmp\\e05b5794e54ca3810b071b87bc1449e1',
  size: 1363
} phonetic
```

#### POST Request Properties

The SPP API is the first step in the animation process. Kukurella requests are sent to the SPP API as a POST with the
following required properties:

| Field      | Type | Description     |
| :---:       |    :----:  |        :---   |
| `audio`      | Wav file       | A file containing audio of the voice the user wishes to use for the generated mp4 output |
| `text`   | Txt file       | A file containing a textual script of what is being communicated in the Wav file      |
| `recognizer`   | String        | The recognizer for the language processor. Options include default as `english` and non-default `phonetic`. The English-only recognizer is slower but more accurate. The phonetic recognizer is faster but not as accurate, and it supports over 200 languages.      |
| `avatar` |  String  | Specifies  avatar animation choice for video output. Options include default `barb` or non-default `boy` |

#### API Constraints

- This API only responds to POST calls
- This process is computationally intensive, as such expect a wait time etween requests. More user requests will result
in slower processing times
- The script text file should match the given audio file as closely as possible in terms of content. Failure to do so
could lead to errors.
- Port 3000 must be referenced in addition to the IP address.
- File creation permissions must be allowed, or new files will not be created in `/tmp` directory.

#### Possible API Errors

| Error Code | Description |
| :---      | :-----     |
| 400 Bad Request | Required fields are specified |
| 403 Forbidden | Request is recognized by the server but refused. Likely due to connecting to the wrong port |
| 500 Internal Server Error | The API has not been configured properly on the host server machine |

### The Phoneme Factory

The Phoneme Factory is the first step in the SPP animation process. The factory is in
charge of mapping spoken language from the `audio` and `text` inputs into a series of phonemes, which are units of sound
that distinguish one word from another.

#### Rhubarb Lip Sync

 The `audio`  file, `text` file, and `recognizer` selection is passed to the **Phoneme processor** which sends the data
 to an external command-line process called [**Rhubarb Lip Sync**](https://github.com/DanielSWolf/rhubarb-lip-sync).
 Rhubarb is an open-source command-line tool that can create 2D animations given any voice recording. In SPP, Rhubarb
 processes the `audio` and `text` file to create a JSON [output](#rhubarb-output) that outlines every phoneme along
 with a `start` and `end` time interval tag.

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

Rhubarb uses the `recognizer` input to select the engine to use to during the process of creating a phoneme file. When
```recognizer: english```,  Rhubarb will use the `pocketSphinx` engine to process the english audio. When
```recognizer: phonetic```, Rhubarb will use the `Phonetic` recognizer instead. It has been observed that the `Phonetic`
recognizer performs better.

Once the phoneme contents are created, they are sent to the next process.

## The Animation Factory

The animation factory uses the [phoneme output](#rhubarb-output) from the phoneme factory to logically select frames
from `speaking-portal-project/images` to generate the 2D animation. Each frame corresponds to exactly one phoneme,
avatar, blink value, and body position. This frame data is compiled into a [frame data output](#frame-data-output) file.

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

The [frame data output](#frame-data-output) includes a path to the image and the duration of the frame for the animation
video. This file is then sent to FFMPEG, a highly portable library capable of rendering image frames into an mp4
output. Once the video file is created, it is then returned to the user as a response from the API.

## Example

Below is an example of the Barb avatar speaking, blinking, and changing poses.

<img src = "docs/documentation/Images/AmberAnimated.gif" width="250px" height="300px">

## Limitations

- The phoneme generation process controlled via Rhubarb can be quite computationally intensive, and is the current
bottleneck for performance.
- Blink frequency is chosen using a random probability
- Avatar poses are chosen at random. A suggestion for future development would be to include sentiment analysis on the
text and choose appropriate poses; however, this depends on the poses provided by the artist.
