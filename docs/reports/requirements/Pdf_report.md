# Requirements Report

### High-level Description

The objective for the Speaking Portal Project is to design, develop, and deploy a lip-sync animation (LSA) API for the
Kukarella text-to-speech (TTS) web application. This API will serve as an animation generating add-on for
this system so that the user can both listen to and watch their avatar speak the user-provided text.

### User groups

In this project, there are two main user groups who will be using the software: users and developers. The users are the
general public who use the Kukarella web application; this could be anyone who would like to have a more immersive
text-to-speech experience where an animated avatar reads user text aloud. The developers are the Kukarella employees
who will be responsible for incorporating the API into their current system and adding more customizable assets for the
avatars in the future.

In the current Kukarella TTS web application, the first step is for the user to create one or more actors.
The user gives the actor a name, selects a voice from a list of voices they can preview, selects a language from the
list of approximately 150 languages, and selects or uploads an image of the actor. After creating the actor and
entering the text they want to listen to, the user presses the play button, and then waits for the application to
process and generate the audio.

Once our API is incorporated into this system, the enhanced experience of being able to both listen and watch the
avatar speak will only be available with specific avatars. After pressing the play button, the user will wait for the
Kukarella application and the API to process and generate a video of their avatar speaking the text with lips
synchronized to the sounds produced in its speech.

As for the developers, they will need to call the API within the Kukarella application. After receiving the user input
and after the text is converted to speech in an audio file, the developer will call our API. When calling our API, the
user-selected actor image, the user-selected language, the user-provided text, and the Kukarella-generated audio will
be passed in. Next, the API will provide the animated video as output, and the then it will be presented in the web
application's user interface along with the option to download the video file.

When Kukarella decides to add more avatars compatible with our API, the developer will need to include the head,
mouth, eye, and eyebrow assets, along with their general coordinates to the directory/database. In this way, the
developer can add, change, or remove the compatible avatars and allow further customization options for the user.

# Data Flow Diagrams

These diagrams are generalizations about how our system will interact with data from the user, Kukarella Web App, and our Animation Add-On. The level 0 DFD highlights a high overview of the system and the level 1 DFD breaks down the system in more detail. The system we are building is working alongside an existing system. Items highlighted in red represent the parts of the system that are already in place and items highlighted in blue are parts of the system that are being added by our new Animation Add-On.

## Level 0

The level 0 data flow diagrams give a high level view of how our system will be interacting with the user and the client’s existing system.

![DFD Level 0](dfd_0.png)

The user will first access Kukurella’s TTS front end and type in a text input. The user will also select a voice and an avatar they would like to use for their TTS animation. From the front-end the text and other user selections will be sent over to our Animation Add-On. The Animation Add-On will then query an avatar image, avatar coordinates, and mouth animation assets from a database. The Add-On will produce an animation of an avatar reading the user’s text in the user selected voice. This animation will be sent to Kukeralla's web application and then will be sent to the user.  

## Level 1

The level 1 DFD provides a more detailed breakdown of the data flow between the client’s system and the Animation Add-On.

![DFD Level 1](dfd_1.png)

In this diagram Kukeralla’s web application is broken down into a front-end and a TTS API. The Kurkarella TTS API creates the synthesized speech file from the user’s voice and text input. The Animation Add-On is broken down into two main components. The phoneme factory is in charge of mapping spoken language from an audio file into a series of phonemes which are units of sound that distinguish one word from another. In order to make this process as accurate as possible the phoneme factory also receives the user text file and language selection. Once the phoneme file is created it is sent off to a secondary process called the phoneme processor. This processor maps phonemes from the phoneme file to mouth assets received from a directory. There will be 1:1 mapping between phonemes and mouth assets. These assets will be added onto the avatar and rendered into a video file. The video file will be sent back to the front-end and available for the user to download onto their local machine.

# Functional Requirements 

In our conversations with the client, the following functional requirements were identified: 
Firstly, our users should be able to interact with the feature through a UI. Kukarella has already supplied all of the front-end UI requirements, however for testing our team will use a mock UI. This will assist with user testing and feedback while our codebase is still separate from Kukarella development. Early testing and examples from other groups proved that lip-syncing alone is not enough to produce a convincing animation—and as such facial expressions are required.  The client also noted that any voice or language selected should be able to seamlessly integrate with our animation output. This, along with user inputs and the generated audio from the Kukarella app would be required for this feature to work. Once supplied, the feature should be able to generate a downloadable MP4 on request. 

# Non-Functional Requirements and Environmental Constraints.

The client stated the feature should be highly portable. This is due to Kukarella’s team wishing for a modular, easy-to-integrate approach for their codebase. As such we chose to package our feature as an API. Responsiveness was also required by the client. Our team has decided that three minutes of spoken audio should not take longer than a minute for the feature to process; although, this metric will be reassessed during the agile development phase. Lastly, our client noted that the appearance of the feature should be professional and competitive. This was later clarified to mean that our animations will need to be of high quality, with convincing lip synchronization and assets provided by professional graphic artists. It should be noted the client already has a professional artist and agreed to fund this portion of the project. Our team felt the animation should conform to the minimum 24-fps standard that the animation industry uses—as anything less could give a feeling of a stuttering or slow response.

# Tech Stack

There are numerous approaches which could be taken when determining what the best course of action for this
project could be. Due to this, Kukarella has left our choice of tech stack open. The only requirement they have is that
it must either integrate easily into their existing tech stack or it be an API which they may call and receive a
generated video from. Research done as a group has provided us with three separate tech stacks which could be used. The
tech stacks identified are outlined in the table below, and discussion and rational for our chosen tech stack (bolded)
will follow.

| Tech Stack               | Group Familiarity | Feasibile with selected approach | Easily integrates into tech stack                             | Quality Documentation Available |
|--------------------------|-------------------|----------------------------------|---------------------------------------------------------------|---------------------------------|
| **Node.Js + Typescript** | 2/4               | Yes                              | Yes - Aligns with Kukarella Tech & can be delivered as an API | Yes                             |
| Django + Python          | 1/4               | Yes                              | Yes - Deliverable as an API                                   | Yes                             |
| Laravel + PHP            | 1/4               | Yes                              | Yes - Deliverable as an API                                   | Yes                             |

## Node.Js + Typescript

### Pros:
- Our group has more familiarity with Node and Typescript compared to the other potential approaches
- The existing Kukarella tech stack is built using Node and Typescript. This enables our application to be
  built into Kukarellas existing systems rather than left as an external API, should they desire to do so in the 
  future.
- Both Node.Js and Typescript have outstanding documentation, as well as numerous resources for learning available online.

### Cons:
- Not all members of the group are familiar with Typescript (though all are familiar with Javascript).

## Django + Python

### Pros:
- Our group members are very familiar with Python
- Lots of external libraries are available
- Documentation is widely accessible
### Cons:
- Only one member of our group has experience with Django
- Does not align with the Kukarella tech stack, although it can be delivered as an API

## Laravel + PHP

### Pros:
- Laravel makes it very easy to spin up APIs

### Cons:
- Majority of our group is unfamiliar with PHP
- Not as much documentation available for PHP

For our implementation, we have decided to move forward in building our application using Node.Js and Typescript. We
feel it makes the most sense to stick with what a majority of us have experience with, especially if it is the same tech
stack that Kukarella uses within their own codebase. The reasoning behind our desire to maintain one homogenous tech
stack is that it will be easier for Kukarella engineers to maintain, should our system require any maintenance in the 
future, as they are already familiar with Node.js and TypeScript.

Given our current requirements, our application is purely a back-end application. This means we do not currently expect
to develop any front-end UI. Although unlikely, there is a small chance that front-end development may be required for
peer testing purposes, or for bonus deliverables should our team progress faster than expected. If tasks requiring front
-end development are identified, we will use simple HTML/CSS. Additionally, if aesthetic consistency is a concern for 
our client, we will use styling libraries upon request.

Another key part of our tech stack is the Rhubarb Lip Sync Library. Rhubarb is a command line tool which enables the
generation of phoneme and speech timings given an input which contains audio, text, and language. Rhubarb is open-source
and is regularly maintained - at the time of writing, its last update was June 14th, 2022. Rhubarb is covered under the
MIT open source license, meaning we are free to modify it as we see fit, as well as use it in commercial work.

# Test Strategy

## Unit Testing

Unit tests will be built for each newly developed feature. Test scripts will be built and run using the Jest framework for Node.js and TypeScript. Within each testing script, features will be broken down and tested accordingly. As of right now the plan is to have all unit testing scripts added into a single testing directory, although script organization may change as the project develops. 

## Continuous Integration

Continuous integration will be implemented using the CI/CD GitHub workflows. These workflows will be built to run tests and builds in a Node.Js environment. Initial CI testing will be focused on testing Node.Js package builds and will be ensuring all new package dependencies are accounted for in new code changes. These workflows will be triggered during each new pull request. If the tests fail, then the PR will need to be re-polished. If these tests pass, then new code can be merged into our repository. We may be integrating a framework called ‘SonarCloud’ which performs automated testing and code checking, although this software may require a fee. Continuous integration workflows will be frequently updated to ensure testing scripts are up-to-date.

## API Testing

This project also requires an API build which will require separate testing to ensure that our product integrates with the client’s system. Postman will be the framework used to build and run tests for our API. This framework allows mock client requests to be made directly to our API, and it ensures that our API is delivering contents correctly.
