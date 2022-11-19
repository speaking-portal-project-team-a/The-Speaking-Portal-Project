# Research Links

Work on gathering some research related to the topics discusses in the last client meeting. Will discuss our findings during the next team meeting (Oct 3rd 2022).

## LAZYKH

Youtube animator who designed lip synched animations.

### Rundown

- Animations are representated as a series of images

- Coordinates csv that indicated where the mouth movements should be placed on the animation

- Has pose rules to change the animation image as the text is being read
  - period indicated a pose change

- Input:
  - Text file
    - Each line has an emotion
  - Spoken audio file
- Output:
  - mp4 video
- Issues:
  - Only works on MacOS
- Uses an external Library called Gentle
  - This library coordinates **phoneme timestamps**  
  - Output of this library is a timestamp that is needed to speak each phoname
- Animation needs:
  - Timestamp of phoname
  - Image of phoname onto animation
    - We might only need to animate a mouth
  - Image of pose
- Render a series of images into a video

- **important conclusion**
  - This example runs animations as a series of images, keeps timestamps on each image to change the image
  - Noted that duplicated images where not removed ?
    - Rather then running every image, switch between images

## Azure Neural Text-to-Speech

- Link: <https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/azure-neural-text-to-speech-extended-to-support-lip-sync-with/ba-p/2356748>

- Viseme Link: <https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-csharp&tabs=visemeid>

- Phoneme positions: <https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-javascript&tabs=visemeid#map-phonemes-to-visemes>\
-

### Viseme

- Viseme is the visual depiction of a phoneme in a spoken languange. Defines the position of the face and month while someone is speaking
- Visemes can be used to control the movement of 2D and 3D avatar models

### 2D animations

1. Design a character/Avatar
2. Use Scalable Vector Graphics (SVGs) for each Viseme ID to get the face position
3. Each SVG frame is represented in XML format along with temporal time tag for the frame 

```
<svg width= "1200px" height= "1200px" ..>
  <g id= "front_start" stroke= "none" stroke-width= "1" fill= "none" fill-rule= "evenodd">
    <animate attributeName= "d" begin= "d_dh_front_background_1_0.end" dur= "0.27500
    ...
```


## Idea

- User Text
- Map text into phoneme text
- Find temporal time tag for each phoneme
- Attach teporal tag with SVG image
  - The goal of this semester could be to have the ability to take text and, in live, show the phoname tag with the temporal output

## Important Questions that the come up for client

1. How should the animations represented ?
    - Series of image drawings ?
      - We should not be expected to draw!
    - How are emotions from text recognized ? This is important for an animation
