# Working with Speaking Portal REST API

## What does this API Do? 

Speaking Portal API creats an MP4 output animation from a synthesized speech file and text input based on Kukarella TTS. Text input is first read and generated into phonemes output file via the rhubarb librarby. (Phonemes are the smallest unit of sounds that uniquely identifies words from one another.) Once a phoneme file is created, it is processed in a phoneme processeor, which maps phonemes to a mouth assets. The mouth assets are then added onto an avatar and rendered in a video file through ffmepg.

Here's a typical example of the JSON used in a POST request.

```
{
  fieldname: 'audio',
  originalname: 'en-Amber.wav',
  encoding: '7bit',
  mimetype: 'audio/wave',
  destination: './tmp',
  filename: 'f8fc3bc5c3f0fbc70ab0899d0dc0c860',
  path: 'tmp\\f8fc3bc5c3f0fbc70ab0899d0dc0c860',
  size: 9049278
} {
  fieldname: 'text',
  originalname: 'en-text.txt',
  encoding: '7bit',
  mimetype: 'text/plain',
  destination: './tmp',
  filename: 'e05b5794e54ca3810b071b87bc1449e1',
  path: 'tmp\\e05b5794e54ca3810b071b87bc1449e1',
  size: 1363
} phonetic
```


<br/>

Request data will be equal to the listed call in JSON posted above. Here are the following fields listed:

<br/>

| Field      | Type | Description     |
| :---:       |    :----:  |        :---:   |
| Audio      | Wav file       | A file containing audio of the voice the  user wishes to use for the generated mp4 output |
| Text   | Txt file       | A file containing a textual script of what is being communicated in the Wav file      |
| Recognizer   | String        | Specifies if language processor should use english recognizer, (which is slower, but more accurate, and only works for english),<br> or the phonetic recognizer (which is faster, but not as acurate,  and supports over 200 languages,)       |

<br>
The response will return an MP4 file of the newly generated animation, which could resemble the following image below: 


</br>
<img src = "Images/AmberAnimated.gif" width="250px" height="300px">



<br>

Some critical constraints regarding the use of this API: 
 - This API only responds to POST calls
 - This process is computationally intensive, as such expect a wait time between requests
 - The script text file should match the given audio file as closely as possible in terms of content. Failure to do so could lead to errors. 
 - Port 3000 must be referenced in addition to the IP address. (At the time of writing this document no DNS has been configured for this API)


<br/>

Possible errors: 


| Error Code | Description |
| :---:      | :-----:     |
| 400 Bad Request | Required fields are specified |
| 403 Forbidden | Request is recognized by the server but refused. Likely due to connecting to the wrong port |
| 500 Internal Server Error | The API has not been configured properly on the host server machine | 





