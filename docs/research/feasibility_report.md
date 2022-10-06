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

This library uses Viseme's to drive character text-to-speech animations. Viseme's are visual descriptions of phonemes in a spoken languange which define the position of the face and mouth while someone is speaking.

This engine acceptes text or SSML text (Speech Synthesis Markup Language) which is a XML based markup language that lets developers specify how input text can be converted into synthesised speech.

This text input is converted into a set viseme ID's and timed audio offset values. Each of these values can also be accompanied with speech using Microsoft's Neural text-to-speech library. In order to create these outputs the text is first process through an engine with three main components.

1. **Text Analysis**: Text is analyzed to extract phonames for each work.  
2. **TTS Acoustic Predictor**: The time duration for each phoname is predicted.
3. **TTS Viseme Generator:** The sequence of each phoname is predicted.

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

The output that would be intresting for this project would be the 2D SVG output. This would require the user to draw the SVG's for each Viseme ID.

### 2. RuBard

### 3. Lip GAN

## Evaluation

### 1. Microsoft Azure Viseme

#### Pro

- This library maps text, phonames, and images in sequence
- Should be easy to render into a video
- Well used and well-documented
  
#### Con

- Will require the use of Microsoft's Neural text-to-speech platorm
- May not ingerate well with the your already made text-to-speech platform
- There might be extra work in animation process that is unknown
- Requires mouth asset drawings 
- Cost $$$
  
### 2. RuBard

#### Pro 

- Simple and powerful. Lets user run `rhubarb -o output.txt my-recording.wav` from command line. This generates an output file from a .wav or .ogg file. 
- Output is in `.txt`, `.tsv`, `.xml` or `.json` format
- MIT License 

#### Con
- This library only handles animation mapping timestamps, another library will be required to generate an actual animation 
- Library only handles lip syncing. Animated facial expresions are not included. 

*More to be added WIP* 

### 3. Lip GAN

## Conclusion

- which approach is best and why?

# IDEAS
- Possibly deliver everything as an API?
- Use punctuation and sentament analysis libraries for 


## Questions

- Does client already have software in place to create phonames and timestamps ?


