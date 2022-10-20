# SLIDE CONTENT
## Tech Stack

Due to the various approaches that could be taken for this project, our client has left us with the choice of what tech 
stack to use. Through our research, two options presented themselves: Node.js + Typescript & Python + Django. Because of
the familiarity our group already has with languages used in the existing tech stack we have chosen to use Node + 
Typescript for our backend implementation.

### Front-End
HTML & CSS
In order to maintain simplicity, any front-end development which may be required should be done in simple HTML/CSS
Styling must stay consistent with Kukarella’s - if additional frameworks such as React are required, they may be added.
Kukarella does not currently request a front-end, though did mention it may be an additional feature if time permits.
### Back-End
Node.js & Typescript
Our backend code will be built using Typescript - this provides us with strict control over types, and aligns with the 
already existing code within the Kukarella system. We will be using Node.js in order to allow us to build our service as
an easily maintainable API. The library “Rhubarb Lip Sync” is currently required for our backend implementation. This is
a command line tool controllable by various programming languages. Its last update was June 14, 2022

# PDF CONTENT
# Tech Stack

There are numerous approaches which could be taken when determining what the best course of action for this
project could be. Due to this, Kukarella has left our choice of tech stack open. The only requirement they have is that
it is either easily integrated into their existing tech stack, or built as an API which they may call and receive a
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
- The existing Kukarella tech stack is build using Node and Typescript. This means, if desired, our application could be
  built into Kukarellas existing systems rather than being left as an external API.
- Both Node and Typescript have outstanding documentation, as well as numerous resources for learning available online.

### Cons:
- Not all members of the group are familiar with Typescript (though all are familiar with Javascript).

## Django + Python

### Pros:
- Python is very familiar to many of our group members
- Lots of external libraries are available
- Documentation is widely accessible
### Cons:
- Only one member of our group has experience with Django
- Does not align with the Kukarella tech stack (though can be delivered as an API)

## Laravel + PHP

### Pros:
- Laravel makes it very easy to spin up APIs

### Cons:
- Majority of our group is unfamiliar with PHP
- Not as much documentation available for PHP

For our implementation, we have decided to move forward in building our application using Node.Js and Typescript. We
feel it makes the most sense to stick with what a majority of us have experience with, especially if it is the same tech
stack that Kukarella uses within their own codebase. The reasoning behind our desire to maintaining one homogenous tech
stack is that should our system require any maintenance in the future, it will be easier for Kukarella engineers to
maintain provided they are already familiar with the tech it is built using.

Given our current requirements, our application is purely a backend application. This means we do not currently expect
to develop any front-end UI. Should future tasks be identified which require front-end development, we will use simple
HTML/CSS, alongside any styling libraries which may be required by the client in order to maintain their cohesive look.

Another key part of our tech stack is the Rhubarb Lip Sync Library. Rhubarb is a command line tool which enables the
generation of phoneme and speech timings given an input which contains audio, text, and language. Rhubarb is open-source
and is regularly maintained - at the time of writing, its last update was June 14th, 2022. Rhubarb is covered under the
MIT open source license, meaning we are free to modify it as we see fit, as well as use it in commercial work.
