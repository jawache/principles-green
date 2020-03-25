---
title: Demand Shifting
summary: Be flexible regarding when and where you run workloads to take advantage of low carbon intensity electricity
order: 7
tags: principle
---

There is currently little in the way of storage or buffering in electrical grid systems. Normally electricity is produced so supply always meets demand. If the demand for electricity increases then supply needs to be increased from the *marginal power plant* which is typically a high carbon-emitting fossil fuel plant. If more energy is being generated from renewables than is needed to support demand, and all our storage options are full, then we curtail (throw away) that clean energy. 

If you can be flexible with when and where you run workloads then you can then choose to consume electricity when the carbon intensity is less and pause when carbon intensity is high. 

> [Studies](https://ieeexplore.ieee.org/document/6128960) have shown that these actions can result in a carbon reduction of as much as 45% to 99% depending on the number of renewables powering the grid.

Latency is a good signal for identifying workloads that can be flexible. Latency is the time interval between a trigger and its response. Whether a compute workload was triggered by a user clicking a button on a webpage or from a timer kicking off a batch job, the time it takes for that trigger to result in a response is the latency.

If you have specific latency requirements you are more inflexible. You may need to keep some servers underutilized to meet those requirements. You also may need to run those workloads at times or in regions with high carbon intensity but close to the end-user to keep latency low.

If you have less specific latency requirements (for instance, batch workloads that run for hours) then you are more flexible with respect to moving those workloads to a different time or regions where the carbon intensity is much lower.

If you detect that the carbon intensity is high then you may choose to limit the features in your application to just the essentials. The front-end may choose to only call essential APIs or may choose to continue to take data from a local cache rather than go directly back to the server.

Look at your application end-to-end, identify opportunities for being flexible regarding workloads and use the carbon intensity of electricity as a signal for when or if to run those workloads.