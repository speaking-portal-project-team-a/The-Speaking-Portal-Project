# Rhubarb Lip Sync Testing with Kukarella Audio

## Purpose

The purpose of this testing is to ensure that the Rhubarb Lip Sync command line tool is compatible with Kukarella audio
and text files. The Rhubarb tool receives a .WAV and .txt file, and then it produces the text file with the phoneme
timings.

## Testing Text

For Testing the voices in different languages, I used the following texts found online:

- an excerpt paragraph from [5 Sample Paragraphs For Reading Test in English](https://www.shareyouressays.com/paragraphs/5-sample-paragraphs-for-reading-test-in-english/1532)
- an excerpt from a [Russian news article about a music album](https://www.mk.ru/culture/2022/10/25/aha-na-novom-albome-smenili-sintezatory-na-orkestr.html)
- an excerpt from a [French news article about James Webb space telescope](https://www.france24.com/fr/sciences/20221020-le-t%C3%A9lescope-james-webb-capture-les-grandioses-piliers-de-la-cr%C3%A9ation)
- an excerpt from a [Japanese news article about the Tokyo International Film Festival](https://www3.nhk.or.jp/news/html/20221025/k10013869141000.html)

## Method

1. Testing all the voices and languages would be too time consuming. Instead, to test the voices, I selected unique names.
For example, I tested "Guy" but not "Guy B." or "Guy C." Using the team account, I created separate projects for each
testing language: English, French, Russian, and Japanese.

2. After entering the appropriate text for each project, I converted the text to speech and downloaded all .wav files.

3. I ran through commands for each name. [How to run Rhubarb Lip Sync](https://github.com/DanielSWolf/rhubarb-lip-sync#:~:text=How%20to%20run%20Rhubarb%20Lip%20Sync)
    1. For English:

        ```cl
        rhubarb -o test-en-out\en-name.txt -r pocketSphinx -d test-text\en-text.txt --extendedShapes GX test-en-wav\Name.wav
        ```

    2. For non-English (Japanese for the example):

        ```cl
        rhubarb -o test-jp-out\jp-ayumi.txt -r phonetic -d test-text\jp-text.txt --extendedShapes GX test-jp-wav\Ayumi.wav
        ```

## Findings

All voices and languages tested below were succesfull. Rhubarb processed and produces the desired phoneme file.

English voices tested:

- Allison
- Amber
- Ana
- Aria
- Ashley
- Ayaan
- Benjamin
- Brandon
- Cadby
- Christopher
- Cora
- Dillon
- Doyle
- Elizabeth
- Emily C.
- Eric
- Guy
- Henry C.
- Hudson
- Ivy
- Jacob
- Jenny
- Jessa
- Joanna
- Joey
- Justin
- Kendra
- Kevin
- Kevin C.
- Kimberly
- Lisa
- Matthew
- Michael
- Michelle
- Olivia
- Salli
- Sara
- Sawyer
- Sebastian
- Seth
- Tommy
- Wendell
- Zira

Russia voices tested:

- Brayden
- Damion
- Dariya
- Dmitry
- Ekaterina
- Irina
- Maxim
- Pavel
- Ruben
- Svetlana
- Tatyana
- Varvara
- Viktor

Japanese voices tested:

- Ayumi
- Emi
- Haruka
- Henley
- Ichiro
- Irma
- Jenny M.
- Keita
- Mizuki
- Nanami
- Sol
- Takumi
- Tristan

French voices tested:

- Alain
- Brigitte
- Celeste
- Celine
- Claire
- Claude
- Coralie
- Denise
- Eloise
- Erik
- Henri
- Hortense
- Jacqueline
- Jenny M.
- Jerome
- Josephine
- Julie
- Lamont
- Léa
- Mathieu
- Maurice
- Nicolas
- Paul
- Raymond
- Renee
- Yves
- Yvette

## Conclusion

Although this test is not comprehensive and does not include all voices and languages offered by Kukarella, this test
tells us that Kukarella files tend to be compatible with Rhubarb, and there is little to no worry that our API will
need to be restricted to certain voices or languages.
