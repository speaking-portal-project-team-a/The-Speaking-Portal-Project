# Audio Length Testing Report

The purpose of this report is to outline the efficiency of our system in its current state. The results will represented as a series of benchmarks. 

The test cases will focus on three different aspects:

1) User Audio File Size (10sec, 30sec, 60sec)
2) Concurrent User Requests(1 req, 10 req, 100 req)
3) Recognizer Type (english or non-enlish)

Benchmark Result Examples:

- Using the **english recognizer** the processor can concurrently process **1 x 30 second audio file(s)** in X.XX seconds.
- Using the **non-english recognizer** the processor can concurrently process **10 x 30 second audio file(s)** in X.XX seconds.

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

## Non English Recognizer

- [ ] 1 Request (Local)
- [ ] 10 Request (Local)
- [ ] 100 Request (Local)

- [ ] 1 Request (Server)
- [ ] 10 Request (Server)
- [ ] 100 Request (Server)

***Tests were run using 30 sec audio file only***

## Results

Output is formatted a JMeter Listener (JTL) files. More infomation on JMeter JTL logs can be found [here](https://www.tutorialspoint.com/jmeter/jmeter_listeners.htm).
