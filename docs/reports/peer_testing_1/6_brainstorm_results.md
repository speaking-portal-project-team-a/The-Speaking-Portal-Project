# Peer Testing I Report

## 6) Brainstorm Results

Our report might look a bit different from the breakdown provided because we did half the number of peer testing sessions so that we could also have a brainstorming session with the other teams, which we will need a section for as well.

All groups from the speaking portal project met to discuss how to deliver the final product to the client. Unlike most capstone projects, the speaking portal project requires the final deliverable to be a backend service with no UI requirements. After some discussion with the client, they were open to many solutions such as an API or software package that can be easily integrated into their existing code base.
The original plan for our team (group A) was to wrap our product into an API, with the goal of having the client make requests, providing text file and audio file, to our system which would return an animated mp4 back to their system. As of right now our group has doubts in successfully integrating our product as an API. Our system uses child processes that run externally to our system (ffmpeg and Rhubarb) making it difficult to extract data from directly. These external processes also have command line processed that have spefic O and have complicated installations. As a backup we are planning on delivering the final product as a package that can be easily integrated in the clients existing backend services manually. In the brainstorming session with other groups, we shared these thoughts and concerns and wanted to hear the other groups were planning, in the hope to share knowledge and help each other succeed. 
The other two groups were also concerned about delivering the final product as an API. One group mentioned that their process uses libraries that require significant installations and processing time. Spinning their process as an API would therefore be unrealistic. As an alternative this group was planning on asking the client if they could host a private server to run their process indefinitely, rather than it being a service. The issue with this method would be the costs associated with hosting a service on a private server the maintenance required to keep the process running. The other group was sticking to the API approach and currently researching ways to replace existing libraries have limitations in data extraction, installation, and processing times. In conclusion all three groups agreed that implementation the product as a package would be a good alternative, but as of right now will stick to trying to make the final product as an API due to its portability and ease-of-use for the client. 


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