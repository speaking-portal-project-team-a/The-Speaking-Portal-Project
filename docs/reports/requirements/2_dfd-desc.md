# Data Flow Diagrams


## Level 0 DFD 

![](dfd_0.png)




- Four main groups listed in this DFD: user, kukurella Web App, Animation Process, and Assets library
- The web app is already in place, will be creating an animation add-on that receives inputs from this web app
- Assets library will include avatar images mouth assets, and coordinates to indicate where to place mouth assets onto the avatar 

## Level 1 DFD

![](dfd_1.png)

- The kukurella web app can be divided into a web app and an api endpoint that we will be touching
- The API will provide User text, language, and audio for our phoneme generation process
- The phoneme factory will provide the animation processor with a phoneme text file
- The animation processor will map phonemes with mouth assets found in the assets directory
- The processor will then sequence these mouth assets over a 2d animation avatar
- The output will be an animation file that will be sent back to the front-end

