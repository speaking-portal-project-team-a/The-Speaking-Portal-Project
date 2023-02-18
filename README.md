# The Speaking Portal Project

COSC 499 Capstone Software Engineering Project

Team A:

- Veronica Jack (PM/Scrum Master)
- Edouard Eltherington (QA Lead)
- Logan Parker (Tech Lead)
- Matthew Kuelker (Client Liaison)

## Table of Contents

- [General Information](#general-information)
- [Project Timeline](#project-timeline)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [How it Works](#how-it-works)
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

The Kurkarella TTS app creates the synthesized speech file from the user’s voice and text input. The Animation Add-On
is broken down into two main components: the phoneme factory and the animation processor. The phoneme factory is in
charge of mapping spoken language from an audio file into a series of phonemes, which are units of sound that
distinguish one word from another. In order to make this process as accurate as possible, the phoneme factory also
receives the user text file and language selection.

Once the phoneme file is created, it is sent to the secondary process called the phoneme processor. This processor maps phonemes from the phoneme file 
to a specific timestamp, and associates that timestamp with an asset file containing the phoneme, an avatar pose, and state of blinking. There is a 1:1 
mapping between phonemes and mouth assets. These assets are then compiled, realism is added for the rest of the body, and it is all rendered into a video file using ffmpeg. The video file is then returned to 
the front end, and is available for the user to download onto their local machine.

## Limitations

- The phoneme generation process controlled via Rhubarb can be quite computationally intensive, and is the current bottleneck for performance.
- Blink frequency is chosen using a random probability
- Avatar poses are chosen at random.
