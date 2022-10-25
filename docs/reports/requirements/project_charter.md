# Project Charter (version 0.1)

In an attempt to better understand the project requirements, this is a rough draft of the project charter.

## Project Identification

<table>
    <tr>
        <td>Project Name</td>
        <td>The Speaking Portal Project</td>
    </tr>
    <tr>
        <td>Client</td>
        <td>Nazim Ragimov, CEO of Kukarella</td>
    </tr>
    <tr>
        <td>Professor</td>
        <td>Gema Rodriguez Perez</td>
    </tr>
    <tr>
        <td>Teaching Assistant</td>
        <td>Pragya Bhandari</td>
    </tr>
    <tr>
        <td>Project Manager</td>
        <td>Veronica Jack</td>
    </tr>
    <tr>
        <td>Technical Lead</td>
        <td>Logan Parker</td>
    </tr>
    <tr>
        <td>Client Liaison</td>
        <td>Matthew Kuelker</td>
    </tr>
    <tr>
        <td>QA Lead</td>
        <td>Edouard Eltherington</td>
    </tr>
    <tr>
        <td>Start Date</td>
        <td>September 14, 2022<br>
    </tr>
    <tr>
        <td>End Date</td>
        <td>April ??, 2023</td>
    </tr>
</table>

## Project Overview

We will design, develop, and implement a lip-syncing animation add-on for the Kukarella text-to-speech Table Reads web application so that the user can both watch and listen to an avatar speaking the user-provided text.

## Objective

Using `[language(s)]`, the animation add-on `[API?]` for the Kukarella Table Reads web application will receive text from the user, the avatar selected by the user, and the audio from the Kukarella app. It will then produce an embedded video `[format?]` with <u>realistic animation</u> `[measurable success?]` of the selected avatar with <u>lips synced to the audio</u> `[measurable success?]` within <u>x minutes</u> `[measurable success?]`.

## Business Case

* To elevate the user experience of the Table Reads web application
* To attract new users

## Scope

* The project will include:
    * `[list of what we WILL be doing (what's IN the project)]`
* The project's optional features include:
    * `[list of optional features]`
* The project will NOT include:
    * `[list of what we do NOT need to worry about or do (what's OUT of the project)]`
* See the Team Agreement for more information about how the team will work.
* The project is part of the COSC 499 course and has no funding. It is an agreement that we, as students, are creating this project for the client for free. In exchange, we are receving a real-world project experience.
* This project will conclude when the final report is submitted to the professor on ?? April, 2023 which will be within ?? week(s) of submitting the final product to the client along with documentation.

## Term 1 Schedule & Deliverables

<table>
    <th>Week</th>
    <th>Description</th>
    <th>Due Date (usually* Friday)</th>
    <tr>
        <td>2</td>
        <td>Team formation, client introductions</td>
        <td>September 16, 2022</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Client kickoff meeting, group expectation setup</td>
        <td>September 23, 2022</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Requirements gathering, project outlining</td>
        <td>September 30, 2022</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Identify tech stack, solidify milestone features</td>
        <td>October 7, 2022</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Requirements presentation slides and video, group evaluation</td>
        <td>October 11* & 14, 2022</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Finalize requirements, requirements report (PDF), peer evaluation</td>
        <td>October 21, 2022</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Complete required tasks</td>
        <td>October 28, 2022</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Complete required tasks</td>
        <td>November 4, 2022</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Reading week</td>
        <td>No milestone</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Create heuristic evaluation, prototype video demo</td>
        <td>November 18, 2022</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Peer testing report</td>
        <td>November 25, 2022</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Plan for next term</td>
        <td>December 2, 2022</td>
</table>

## Term 1 Milestones

1. Requirements report + project requirements presentation (Oct. 11, 14, and 21)
2. Peer testing report + prototype video demo (Nov. 18)

## Assumptions

* The add-on will receive 1+ audio files in a variety of languages from the existing Kukarella web application
* The audio produced might not contain accurate pronunciations
* Kukarella will continue to be in business throughout this project

## Constraints & Risks

* 8 months; limited time to complete the project
* 4 student developers; limited human resource working on this project
* Developers have limited experience with the following list, so there is a chance that we've underestimated the work involved.
    * TypeScript, Node.js
    * animation
    * audio and animation synchronization via programming
* A team member is scheduled for surgery in Term 1, so there will be a drop in production around `[date]`

## Questions for Group and Client

The following questions will help define requirements and allow for the completion of this Project Charter

* Which avatar(s) will we be working with? Which one(s) do(es) the client want to become 'premium'?
* Where do we get the assets for the avatar(s)?
* Where do we get the assets for the mouths/lips?
* How will we measure the success of "realistic lip-syncing"? - Definition: is 'realistic' about the <u>quality</u> of the mouth assets matching the sounds?
* How will we measure the success for lip-sync timings? - Definition: do the assets line up with when the sounds are made and what is an acceptable marginf for error?
* What amount of time to produce the video file is successfull for the client? Are there units of time that are perfect, acceptable, unacceptable?
* What format is the audio file from the web app? MP3?
* What format is the video file that we will produce? MP4?
* Do we need to develop the front-end UI?
    * Do we simply have the API return an MP4?
    * Do we develop the UI to watch the embedded video?
    * Do we develop the UI to download the video?
* Which features are required?
* Which features are optional?
* Are we using TypeScript? Will we make a Python API? A command-line API?
