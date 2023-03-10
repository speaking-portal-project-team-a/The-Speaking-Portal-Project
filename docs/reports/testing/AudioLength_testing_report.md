# Speaking Protal Performance Testing Report I

The purpose of this report is to outline the efficiency of our system in its current state. The results will be represented as a series of benchmarks.

The test cases will focus on two variables:

1) Number of concurrent User Requests (1 req, 10 req, 100 req)
2) Recognizer Type (English or non-English)

For simplification purposes each user request in all test cases will include the same 30 second audio file and text file of 90 words. The file sizes were selected to represent what the average user would send on Kukarella's site. Further testing will be required to see how different audio file and text file sizes behave on our system. However, we expect to see an increase in processing time as sizes increase.

The first variable that will be examined is the number of concurrent user requests being processed. Testing on this variable is important when considering scale. In real-time our system will need to be capable of processing many requests on a server at the same time. Results from the tests will show how our system behaves under different amounts of user load.

The other variable that will be examined is the Recognizer Type. From previous testing our team has noticed that our processing time decreases when using the non-English recognizer instead of the English recognizer. However, there is a quality trade-off when using non-English recognizer as the mouth to audio synchronization is worse. Results from testing will indicate the performance benefits the non-English has and help the team decide whether to use in the final implementation of the system.

Benchmark Result Examples:

- Using the **English recognizer** the processor can concurrently process **1 x 30 second audio file(s)** in X.XX seconds.
- Using the **non-English recognizer** the processor can concurrently process **10 x 30 second audio file(s)** in X.XX seconds.

The performance will be evaluated on the average time it takes to process each request. These values are provided by JMeter.

The test cases will be as follows:

## English Recognizer

- [x] 1 Request (Local)
- [x] 10 Request (Local)
- [ ] 100 Request (Local)

- [ ] 1 Request (Server)
- [ ] 10 Request (Server)
- [ ] 100 Request (Server)

***Tests were run using 30 sec audio file only***

## Non-English Recognizer

- [x] 1 Request (Local)
- [x] 10 Request (Local)
- [ ] 100 Request (Local)

- [x] 1 Request (Server)
- [x] 10 Request (Server)
- [ ] 100 Request (Server)

***Tests were run using 30 sec audio file only***

## Results

Output is formatted as a JMeter Listener (JTL) file. More information on JMeter JTL logs can be found [here](https://www.tutorialspoint.com/jmeter/jmeter_listeners.htm).  These files are located in `/The-Speaking-Portal-Project/docs/reports/testing/jMeter/results`. Below are the results summerized into benchmarks.

### Localhost: Non-English Recognizer

- Using the **non-English recognizer** the localhost can concurrently process **1 x 30 second audio file(s)** in 9.436 seconds.

- Using the **non-English recognizer** the localhost can concurrently process **10 x 30 second audio file(s)** on average in 142.956 seconds.

### Localhost: English Recognizer

- Using the **English recognizer** the localhost can concurrently process **1 x 30 second audio file(s)** in 21.277 seconds.

- Using the **English recognizer** the localhost can concurrently process **10 x 30 second audio file(s)** in 198.754 seconds.

### Server: Non-English Recognizer

- Using the **non-English recognizer** the server can concurrently process **1 x 30 second audio file(s)** in 24.555 seconds.

- Using the **non-English recognizer** the server can concurrently process **10 x 30 second audio file(s)** in 90.463 seconds.
  - Fastest Response Time: 84.284 seconds
  - Slowest Response Time: 112.984 seconds

### Server: English Recognizer

- ???

- ???

## Conclusion

Results show promising response time results for a single request on both localhost and server. We are seeing responses as fast as 9.436 seconds on localhost for the non-English recognizer. This indicates that with the resources available we can reach a good performance benchmark.

The results for the AWS server instance highlight some issues that should be examined further. The response time for a single request (24.55 seconds) is 62% slower than the localhost response time. For processing 10 concurrent requests on AWS instance the response time on average is 90.463 seconds. This response time is slow for an environment that is significantly more powerful than a localhost. In addition, @mkuelker noted that CPU utilization on this test only reached 32%. Lastly, the last two responses (thread 9, thread 10) typically give a response time that was 23% longer than the rest of the threads.
