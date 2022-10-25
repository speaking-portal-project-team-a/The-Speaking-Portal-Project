# Research Links

**Instructions**

Work on gathering some research related to the topics discusses in the last client meeting. Will discuss our findings during the next team meeting (Oct 3rd 2022).

**Format**

For each source, 1-3 points are added which are either quotes or summaries of what can be found in each.

## Table of Contents

- [Adobe Creative Cloud](#adobe-creative-cloud)
- [CMUSphinx](#cmusphinx)
- [Animatronic Mouth](#animatronic-mouth)
- [TypeScript Basic Animation](#typescript-basic-animation)
- [Microsoft Neural TSS](#microsoft-neural-tss) (recommended read)
- [AI LipGAN](#ai-lipgan) (recommended read)
- [Rhubarb](#rhubarb-lip-sync) (recommended read)
- [Papagayo](#papagayo)

<br>

### Adobe Creative Cloud

[Adobe Character Animation](https://www.adobe.com/creativecloud/video/discover/animation-lip-sync.html)

- Adobe Character Animation can let you upload audio and sync it with an existing puppet, while adding gestures and other movements manually

- Mouth shapes are Adobe Photoshop and Illustrator documents.

### CMUSphinx

[About CMUSphinx](https://cmusphinx.github.io/wiki/about/)

[PocketSphinx GitHub Repo](https://github.com/cmusphinx/pocketsphinx)

- open source large vocabulary, speaker-independent continuous speech recognition engines

- The pocketsphinx command-line program reads audio and attemps to recognize speech in it using the default acoustic and language model.

- Support for several languages like US English, UK English, French, Mandarin, German, Dutch, Russian and ability to build a models for others

### Animatronic Mouth

[Instructables article](https://www.instructables.com/Simple-Animatronic-Mouth-Using-3D-Printing-Arduino/#:~:text=of%20mouth%20poses.-,Setup,-In%20order%20to)

- python program uses the NLTK library, which looks up the words in the CMU pronouncing dictionary.

- to keep the code simple, the sounds they stuck to were A, O, B, G, S, Th, L and F. 

- tell the mouth to pose for specific phonemes using the phonemePose() function, queue a few of these poses up according to a sentence you have in mind and add a delay between each pose

### TypeScript Basic Animation

[StackExchange post](https://codereview.stackexchange.com/questions/124634/basic-animation-in-typescript)

- Example (quality is questionable) of JavaScript to TypeScript to flash an element

### Microsoft Neural TSS

[Azure Neural Text-to-Speech extended to support lip sync with viseme](https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/azure-neural-text-to-speech-extended-to-support-lip-sync-with/ba-p/2356748)

[Get facial positions with viseme](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-speech-synthesis-viseme?pivots=programming-language-python&tabs=visemeid)

- feature that allows developers to synchronize the mouth and face poses with TTS – the viseme events (viseme is the visual description of a phoneme in a spoken language)

- turns the input text into Viseme ID and Audio offset which are used to represent the key poses in observed speech, such as the position of the lips, jaw and tongue when producing a particular phoneme

- need to subscribe to the VisemeReceived event in Speech SDK. Availalbe in C#, C++, Java, JavaScript, Python, and Objective-C

### AI LipGAN

[Automate your Lip-Sync Animations With This AI (LipGAN)](https://medium.com/deepgamingai/automate-your-lip-sync-animations-with-this-ai-lipgan-ad35551ae62d)

[Towards Automatic Face-to-Face Translation](https://doi.org/10.1145/3343031.3351066)

- LipGAN allows us to alter the lip-movements of a person in a video to match a given target audio clip

- an automatic pipeline to automatically translate a video of a person speaking in language A into a target language B

- Code, models and demo video are made publicly available

### Rhubarb Lip Sync

[Rhubarb Lip Sync Repo](https://github.com/DanielSWolf/rhubarb-lip-sync)

- quickly create 2D mouth animation from voice recordings

- can use Rhubarb Lip Sync’s command line interface (CLI), currently available for Windows and OS X, to generate files in various output formats

- In addition to the six basic mouth shapes (Ⓐ-Ⓕ), there are three extended mouth shapes: Ⓖ, Ⓗ, and Ⓧ. These are optional.

### Papagayo

[Papagayo Repo](https://github.com/nishad/Papagayo)

- lip-sync application from 2014 for animators built as a Qt application and can be modified as long as you follow the terms in the License.txt file