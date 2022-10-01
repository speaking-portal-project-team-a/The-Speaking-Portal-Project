# Research Links

Work on gathering some research related to the topics discusses in the last client meeting. Will discuss our findings during the next team meeting (Oct 3rd 2022).

### [Blender/Python Animation aproach (Ashish Jha)](https://www.youtube.com/watch?v=UmhoCumme0o)

- uses python for automated speech to text. 
- Parses a sentence for vowel phomemes. Sets an angle associated with said vowel phomeme
<br> **Pros** </br>
 - very simple
 - free and open source
<br>**cons**</br>
 - Script requires blender.
 - Wrong tool for the job, blender is a tool made for graphic artists, not plucky CS majors. 
 - requires addequate knowledge of blender. 

 ### [carykh's aproach to animation](https://www.youtube.com/watch?v=y3B8YqeLCpY)
*eduoard already researched this so I'm not going to go too in depth.*
- uses multiple timetables to communicate emotion,pose,topic,phoneme, and paragraph. 
- uses phomeme library called gentle 

![Chart](2d_stickguy_layout.jpg){:width=250px}

### [Adobe Animate](https://www.youtube.com/watch?v=3pjPJ1YI3GE) 
*Veronica touched on this but I'll put it here anyways* 
- Uses a visemes template with images for special phomemes 
- consolidate as a symbol, do more weird animate stuff
- use a source audio file text, Animate will do the legwork from there. 
<br>**Pros**</br>
- simple 
<br>**Cons**</br>
- requires adobe software, which costs money. 
- traditionally must be configured by hand.

### [3d Lip-sync with iclone](https://www.youtube.com/watch?v=g-Z6a9xP474)
 - uses a drag and drop aproach to quickly configure animation (This aproach alone isnt very good)
 - a supplemented script can be introduced. Using the Align function words can be aligned to audio file. 
<br>**Pros**</br>
- simple 
<br>**cons**</br>
- software costs money
- must be configured by hand. 

## The problem with Using animation Software... 
All current solutions require some kind of software environment to configure these animations. Items must be entered through a UI. This poses some problems however becuase:
 - UI based automation typically is slow and requires meticulous coding and pixel placement. 
 - a dedicated machine must have the scripts and animation software open 24/7 with no crashing.

**Possible solutions**
 - Code environment to automatically add animations to pre-select 3d models (Likely difficult.)
 - Use screen scraper style application with animation software. (Slow and requires dedicated machine... just not a good solution)
 - Somehow find a third option? Keep researching. 

**Additional thoughts**
- A vesmes seems like it may be required for any animation aproach we make. We'll do best to remember that. 
- Not only will we have to get the voice output from the API, but we will need user text as well. This is so that we can cue the program animations based on a string as well. The only trick with this is that we have to synchronize the string with the audio as well.
- Honestly this project seems a bit like a nightmare at this point. Reasearch is only confirming my fears of how difficult this may be. The tools are limited since this feild is competive and anything developed is for Commercial use.  Anything that looks promising is meant moreso for 3d artists. (Nothing seems to be easily accesible in a software library that will conviently do everything for us.)