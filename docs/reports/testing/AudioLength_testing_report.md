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

- [x] 1 Request (Server)
- [x] 10 Request (Server)
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

- Using the **non-English recognizer** the localhost can concurrently process **10 x 30 second audio file(s)** on average in 142.956 seconds. (2min 21sec)

### Localhost: English Recognizer

- Using the **English recognizer** the localhost can concurrently process **1 x 30 second audio file(s)** in 21.277 seconds.

- Using the **English recognizer** the localhost can concurrently process **10 x 30 second audio file(s)** in 198.754 seconds (3min 18sec).

### Localhost: Results Table

|             | English         | Non-English     |
|-------------|-----------------|-----------------|
| 1 Request   | 21.277 seconds  | 9.436 seconds   |
| 10 Request  | 198.754 seconds | 142.956 seconds |

### Server: Non-English Recognizer

- Using the **non-English recognizer** the server can concurrently process **1 x 30 second audio file(s)** in 24.555 seconds.

- Using the **non-English recognizer** the server can concurrently process **10 x 30 second audio file(s)** in 90.463 seconds (1min 30 sec)
  - Fastest Response Time: 84.284 seconds
  - Slowest Response Time: 112.984 seconds

### Server: English Recognizer

- Using the **English recognizer** the server can concurrently process **1 x 30 second audio file(s)** in 26.302 seconds.

- Using the **English recognizer** the server can concurrently process **10 x 30 second audio file(s)** in 127.489 seconds 
  - Fastest Response Time: 119.321 seconds
  - Slowest Response Time: 155.679 seconds

### Server: Results Table

|             | English | Non-English    |
|-------------|---------|----------------|
| 1 Request   |26.302 seconds| 24.55 seconds  |
| 10 Request  |127.489 seconds| 90.463 seconds |

## Conclusion

Results show a promising response time for a single request on both localhost and server. We are seeing responses as fast as 9.436 seconds on localhost for the non-English recognizer. This indicates that with the resources available we can reach a good performance benchmark.

The results for the AWS server instance highlight show some improvement in computing multiple requests in parallel. The response time for a single request (24.55 seconds) is 62% slower than the localhost response time. This reduction in performance is likely due to the latency between the server and client (Ed's computer) that does not occur when running the process directly on a localhost. Improvements from the server are present when running 10 concurrent requests. On average it takes 90.463 seconds for the server to process each request. Keep in mind that this happens in parallel, so after around 90.463 seconds 10 requests are processed. This result showed a 36% improvement in processing 10 requests compared to the localhost.

The tests on the AWS instance, although showed improvements when compared to the localhost, also raise some concern. For processing 10 requests it took the server 90.463 seconds, which in a real implementation would be considered slow. In addition, the server tests show a 23% longer response time for last two user requests (thread 9, thread 10). The reason for this is still unclear. Lastly, @mkuelker indicated that the max CPU usage on the server side only reach 32%.

In terms of the English Recognizer and Non-English recognizer there are some differences. When running 10 concurrent requests on the server and the localhost there was a 29% increase in performance when using the non-English recognizer. This pattern seems to increase as more concurrent requests are processed. We should consider using the non-English recognizer in improving the performance of the system.
