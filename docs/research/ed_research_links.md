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


## Important Questions that the come up for client
1. How should the animations represented ?
    - Series of image drawings ?
      - We should not be expected to draw!
    - How are emotions from text recognized ? This is important for an animation 


