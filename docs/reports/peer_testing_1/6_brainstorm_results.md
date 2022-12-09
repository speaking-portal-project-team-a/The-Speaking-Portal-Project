# Peer Testing I Report

## 6) Brainstorm Results

Our report might look a bit different from the breakdown provided because we did half the number of peer testing sessions so that we could also have a brainstorming session with the other teams, which we will need a section for as well.

Three groups from the speaking portal project met to discuss how to deliver the final product to the client. Unlike most capstone projects, the speaking portal project requires the the final delivarable to be a backend service with no UI requirements. After some discussion with the client they were open to many solutions such as an API or software package that can be easilty integrated into their existing code base.

The orginal plan for our team (group A) was to wrap our product into an API, with the goal of having the client make requests, providing text file and audio file, to our system which would return an animated mp4 back to their system. As of right now our group has doubts in sucesfflly integrating our product as an API. We are planning on delivaring the final product as a package instead.

The other groups shared some of their ideas for integrating their system to the client. One group mentioned rasied concerns about running their product as an API because they are using libraries that require significant installations and processing time. Using the  

- Matt and myself participated in discussions with the other two groups
- All three groups mentioned that delivering this project as an API would be a concern:
  - One group mentioned they are using a library, `Gentle`, this library take a long time to install and process
  - Spinning out an image for a container would take forever!
  - Another group was still thinking about the API approach, but was not sure
  - Our idea was to make our system into a package that the developers at Kuk could integrate manually into their system
    - Concerns include, uncertainty on how child processes run on an external system, these have specific OS requirements
    - Performance is still a concern for our rhubarb processor
- Each group decided upon a different way to deliver the project at the end of the semester:
  - One group mentioned hosting the Animator on a privately hosted server
    - Concerns for this approach includes cost!

- All three groups seem to be takinig a different approach as of right now.