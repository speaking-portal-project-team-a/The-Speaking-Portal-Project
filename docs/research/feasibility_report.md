# Feasibility Report

## Introduction

We will design, develop, and implement a lip-syncing animation add-on for the Kukarella text-to-speech Table Reads web 
application so that the user can both watch and listen to an avatar speaking the user-provided text.

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

This library uses Viseme's to drive character text-to-speech animations. Viseme's are visual descriptions of phonemes in
a spoken languange which define the position of the face and mouth while someone is speaking.

This engine acceptes text or SSML text (Speech Synthesis Markup Language) which is a XML based markup language that lets
developers specify how input text can be converted into synthesised speech.

This text input is converted into a set viseme ID's and timed audio offset values. Each of these values can also be 
accompanied by speech using Microsoft's Neural text-to-speech library. In order to create these outputs the text is 
first process through an engine with three main components.

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

The output that would be interesting for this project would be the 2D SVG output. This would require the user to draw 
the SVG's for each Viseme ID.

### 2. RuBard

### 3. Artificial Intelligence Approach
Generative modeling is an unsupervised learning task in machine learning that involves automatically discovering and
learning the regularities or patterns in input data in such a way that the model can be used to generate or output
new examples that plausibly could have been drawn from the original dataset.  

There exists a generative model which is covered under the MIT license. This model, given an image of a face, along with
a speech divided into multiple segments, is able to generate a sequence of frames that depict the face speaking the
audio file.

This model works via two networks; the generator network, and the discriminator network.
1. Generator Network
The generator network consists of three main components: The face encoder, the audio encoder, and the face decoder. The
face and audio encoders are concatenated and fed into the face decoder. 
2. Discriminator Network
The discriminator network encodes the input face and audio into fixed representation. The face and audio encoder are the
same ones used within the generator network.

The proposed model was pretrained using 4 NVIDIA Titan X GPUs on the LRS 2 dataset. This dataset contains over 29 hours 
of different talking faces.

## Evaluation

### 1. Microsoft Azure Viseme

#### Pro

- This library maps text, phonames, and images in sequence
- Should be easy to render into a video
- Well-used and well-documented
  
#### Con

- Will require the use of Microsoft's Neural text-to-speech platorm
- May not integrate well with the already made text-to-speech platform
- There might be extra work in animation process that is unknown
- Requires mouth asset drawings
- Cost $$$
  
### 2. RuBard

#### Pro

- Simple and powerful. Lets user run `rhubarb -o output.txt my-recording.wav` from command line. This generates an 
output file from a .wav or .ogg file.
- Output is in `.txt`, `.tsv`, `.xml` or `.json` format
- MIT License

#### Con

- This library only handles animation mapping timestamps, another library will be required to generate an actual 
animation
- Library only handles lip-syncing. Animated facial expressions are not included.

*More to be added WIP*

### 3. Artificial Intelligence Approach

#### Pros
- **Generates talking video from a single face image**
- Would accept an audio file, and an image file as inputs.
- Pretrained model
- Works with multiple languages
- Can handle in-the-wild face poses and expressions.
- Can handle speech in any language and is robust to background noise.
#### Cons
- Matlab / Python dependencies do not directly align with Kukarella tech stack
  - This can be resolved by creating an api which would return the generated video to the Kukarella tech stack.
- Repository last updated September 2020
  - May require some package updates
  - A new and improved model is available, however it is not permitted for commercial use without contacting the 
  creators, and likely paying some form of usage fee
- Generated videos do not contain much emotion
  - This is likely to be the case with the other approaches as well, and further work will need to be done to understand
    how emotion can be added to the faces.
- Retraining the pretrained model would likely require resources not at our disposal.
## Conclusion

- which approach is best and why?

# Ideas 

- Possibly deliver everything as an API?
  - Would the user group in this case be an API?
- Use punctuation and sentiment analysis libraries for further features

## Questions

- Does client already have software in place to create phonames and timestamps ?

- What animations/avatars will we have access too ? What is the file type ?
