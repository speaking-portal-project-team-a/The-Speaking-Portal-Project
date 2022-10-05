# Feasibility Report

## Introduction

We will design, develop, and implement a lip-syncing animation add-on for the Kukarella text-to-speech Table Reads web application so that the user can both watch and listen to an avatar speaking the user-provided text.

Main objectives:

1) Convert text and audio into phonames with timestamps  
2) Create a live animation that combines, phonames, audio, and animation
3) Allow the user to view and download animation onto local machine

## Criteria and Constraints

- Time constraint: 8 month Capstone
- Labour constraint: Students
- Animation constraints:
  - We are not animators
  - Unaware of representation animation during speech
  - Cannot create animations

## Potential Approaches

### 1. Microsoft Azure Viseme

 Viseme is the visual depiction of a phoneme in a spoken languange. Defines the position of the face and month while someone is speaking

This is a library from Microsofts text-to-speech platform that enables users to create simple animated graphics that talk in real time. This library uses Visemes, which are visual depictions of a phoneme in a spoken language. This visemes can be used to control the movement of 2D and 3D models.

- This approach resolves the first two objectives

- Viseme Link: <https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-csharp&tabs=visemeid>

- Phoneme positions: <https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-javascript&tabs=visemeid#map-phonemes-to-visemes>

### 2. RuBard

### 3. Lip GAN

## Evaluation

### 1. Microsoft Azure Viseme

#### Pro

- Auto converts text into phoname text with timestamps
- Output is a series XML files

#### Con

- This library comes at a cost
- There might be extra work in animation process
  - The output is a Viseme ID with a timestamp
- May require the need to create mouth assets

### 2. RuBard

### 3. Lip GAN

## Conclusion

- which approach is best and why?

## Questions

- Does client already have software in place to create phonames and timestamps ?
