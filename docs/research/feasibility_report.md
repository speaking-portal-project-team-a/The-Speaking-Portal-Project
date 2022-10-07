# Feasibility Report

## Introduction

We will design, develop, and implement a lip-syncing animation add-on for the Kukarella text-to-speech Table Reads web 
application so that the user can both watch and listen to an avatar speaking the user-provided text.

Main objectives:

1) Convert text and audio into phonemes with timestamps  
2) Create a video of an animated avatar that combines the audio, text, phonemes, and visemes
3) Allow the user to view the video online and download it to their local machine

Note: Depending on the decided approach, #1 and #2 could be combined into creating an animated avatar based on the
audio and avatar alone.

## Criteria and Constraints

- Time constraint: 8 month Capstone
- Labour constraint: 4 students
- Other constraints:
  - none of us have animation experience
  - we have limited knowledge of linguistics
  - we might be underestimating the work required to animate an avatar to appear "realistic"

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

### 2. Three-Step Direct Approach

In this approach, the main objectives are each completed in their own step. The approach involves audio recognition
models, hard-coding an animation from still images, and hard-coding the user interface for showing the video with a
download option.

For the first step, we found a specific library released under the MIT Licence (free of charge and without limitation)
that analyzes audio files with their dialog texts to automatically generate lip sync information.

It uses two recognizers: one speech recognition library for English, and the other that is language-independent because
it recognizes individual sounds and syllables. After analyzing the audio, it produces a file (TSV, XML, or JSON) that
provides you with timestamps along with which mouth shape to display.

For example:

```
{
  "metadata": {
    "soundFile": "C:\\Users\\user\\Desktop\\test.wav",
    "duration": 0.47
  },
  "mouthCues": [
    { "start": 0.00, "end": 0.05, "value": "X" },
    { "start": 0.05, "end": 0.27, "value": "D" },
    { "start": 0.27, "end": 0.31, "value": "C" },
    { "start": 0.31, "end": 0.43, "value": "B" },
    { "start": 0.43, "end": 0.47, "value": "X" }
  ]
}
```

For step two, we would use 2 libraries to create a series of images with the appropriate mouth on the selected avatar's
face, and then generate a video from the still images with its audio.

Finally, for step three, we would create a simple web element to view and download the video file. 

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
  
### 2. Three-Step Direct Approach

#### Pro

- No cost (free with MIT License)
- The library for step 1...
    - is simple and powerful with a command-line interface
    - various output formats available: `.txt`, `.tsv`, `.xml`, and `.json`
    - can be integrated with animation software, such as Adobe After Effecs, Spine, and more
    - is currently being used by video game developers
    - can be used for multiple languages
    - provides 9 mouth positions (rather than the basic 6)
    - runs quickly, based on our testing
- Feasible for animated or "selected" avatars from the Kukarella Table Reads options
- Step 2's library for creating a video from multiple still images ensures we have complete control over the avatar's
expressions (no weird or creepy faces)

#### Con

- It is unclear how the libraries' process times will scale to larger audio and text files
- This approach is not feasible for any images of real people or any images uploaded by the user
- Step 2 requires face and mouth assets (lip images for each sound and for each specific avatar, along with each
avatar's face with no mouth)
- The resulting video will only have mouth movements on a still face; animated facial expressions are not included
<i>(potential optional feature!)</i>
- Step 1's library can only receive `.wav` or `.ogg` files for input, and file conversion can result in file corruption
if the Kukarella TTS output is not one of these formats

#### **Aside: Gentle**
*This library offers a similar but limited functionality to the library above for step 1. That being said:*
 - *it doesn't have built in lip sync mapping.*
 - *doesn't read or write as many file types.*
*It's still worth mentioning however in case we need a library for speech-to-text timestamps*

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

- Does the Kukarella TTS app already have software in place to create phonames and timestamps?

- What animations/avatars will we have access too ? What is the file type?

- What is the current output file type for the audio produced from the Kukarella TTS app?