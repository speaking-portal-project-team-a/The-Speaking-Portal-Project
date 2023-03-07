# Audio Length Testing Report

The purpose of this report is to outline the efficiency of our system as it handles many user requests in parallel. Test cases have been set-up, considering different amounts of concurrent user requests and different user audio file lengths. This report will investigate these benchmarks on a localhost and an external AWS instance.

The performance will be evaluated on the average time it takes to process each request. These values are provided by JMeter (more information about the testing framework can be found here).

The test cases will be as follows:

## Local (One Request) (english + non-english)

- 10 seconds (x words)
- [x] 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Server (One Request)

- 10 seconds (x words)
- 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Local (10 Request) (english + non-english)

- 10 seconds (x words)
- [x] 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Server (10 Request)

- 10 seconds (x words)
- 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Local (100 Request) WILL NOT PROCEED WITH THIS TEST

- 10 seconds (x words)
- [x] 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Server (100 Request)

- 10 seconds (x words)
- 30 seconds (90 words)
- 60 seconds (x words)
- 120 seconds (x words)

## Results
