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


<https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-csharp&tabs=visemeid>

This library uses Viseme's to create drive character text-to-speech animations. Viseme's are visual descriptions of phonemes in a spoken languange which define the position of the face and mouth while someone is speaking.

This engine acceptes text or SSML text (Speech Synthesis Markup Language) which is a XML based markup language that lets developers specify how input text can be converted into synthesised speech.

This text input is converted into a set viseme ID's, audio offset, and speech which are used to observe the timed speech in sequence. This text-audio conversion uses Microsofts Neural Text-to-Speech. The text and speech is processed through an engine with three main compoents.

1. Text Analysis: Text is analyzed to extract phonames for each work.  
2. TTS Acoustic Predictor: The time duration for each phoname is predicted.
3. TTS Viseme Generator: The sequence of each phoname is predicted.

The outputs of this generator are as follows:

1. Viseme ID Sequence:

```
(Viseme), Viseme ID: 1, Audio offset: 200ms.
```

2. 2D SVG

```<svg width= "1200px" height= "1200px" ..>
  <g id= "front_start" stroke= "none" stroke-width= "1" fill= "none" fill-rule= "evenodd">
    <animate attributeName= "d" begin= "d_dh_front_background_1_0.end" dur= "0.27500
    ...
```

For 2D animations the output uses user made SVG's which can be easily incorporated onto any 2D animation.

### 2. RuBard

### 3. Lip GAN

## Evaluation

### 1. Microsoft Azure Viseme

#### Pro

- Auto converts text into phoname text with timestamps
- Output is a series XML files

#### Con

- Will require the use of Microsoft's speech to text platorm
- May not ingerate well with the your already made text-to-speech platform
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
