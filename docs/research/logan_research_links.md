# Research Links

Work on gathering some research related to the topics discusses in the last client meeting. Will discuss our findings during the next team meeting (Oct 3rd 2022).


The process that will be required is as follows (based on my current understanding of the project):

# Retrieve input text
- Kukarella has this functionality
# Generate phonemes from input text
- This generates a few questions for the client: 
  - Do they have this functionality built into their text-to-speech codebase already?
    - If not, how are they generating sounds from the input text
  - Are they using any open source libraries? Are we able to use any open source libaries?
# Map phonemes to speech timings
- The client is uncertain on whether they have this functionality. 
  - We need to find out if they do, and if they do, we need access to this
- each phoneme is mapped to specific mouth positions. Due to this, if we have the phoneme, and we have the timing, we 
should technically be able to easily render a video
# Use phonemes and timings together to render video
- There are a few different ways we can go about rendering the video.
- The way I see this working is by rendering each frame as an image with the correct mouth position being manipulated 
by our code using an SVG. 
  - We can then take each of these frames and create either a gif(no audio - defeats the purpose), or some form of video
  file, such as MP4 in order to produce our final result.
- MP4 Generation will be a whole beast on its own. CSS can be used to create animations, and I am wondering if it will 
be at all possible to use this functionality and export it to a MP4 filetype. 



# Phonetic Research

[Mouth Shapes For Phonemes](https://knowledge.autodesk.com/support/motionbuilder/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/MotionBuilder/files/GUID-E3D27BE8-1392-4CC0-BD5D-17EE3D016EC3-htm.html)
- Different languages will have different phonemes, so we will need to know which language we are dealing with. However,
once the english language is implemented, it should be relatively easy to build in new languages.
[Speech Synthesis](https://en.wikipedia.org/wiki/Speech_synthesis)
- I know its a wiki article, but there is information in here that is very useful. 
  - The main question which I have already raised is what synthesis technique kukarella uses? this is important for us 
    to figure out how we will need to proceed


# Video Generation Research

[olllld tutorial](https://web.archive.org/web/20120112090743/http://www.ultramegatech.com/blog/2010/09/record-html-canvas-animations-to-video)
- This gives me ideas for how we could generate MP4s from a CSS animation, however, we would still need to figure out
  how to sync the audio onto the video. Ideally, the video and audio are the same lengths and we don't have to more than
  simply attach the audio to the video.

- How is this going to work for multiple speakers? What is the video supposed to look like? do we just generate a 
  talking face? Should the rest of the body be visible? pose-able? These are questions we need to ask Kukarella, we need
  a concrete example of what a table read video is expected to look like.