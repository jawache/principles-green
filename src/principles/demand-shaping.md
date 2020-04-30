---
title: Demand Shaping
summary: Instead of shaping supply to match demand, try shaping demand to match supply.
order: 7
tags: principle
---

[Demand shifting](/principles/carbon-intensity/#heading-demand-shifting) is the strategy of moving workloads to regions or times when the carbon intensity is less, or to put it another way when the supply of renewable electricity is high.

Demand shaping is a similar strategy, but instead of moving demand to a different region or time, we shape our demand, so it matches the existing supply.

![alt_text](/assets/images/principles/demand-shaping-1.png "If supply is high, increase the demand - do more in your applications - if the supply is low, decrease demand - do less in your applications.")

A great example of this is video conferencing software. Rather than streaming at the highest quality possible at all times, they often shape the demand by reducing the video quality to prioritize audio.

Another example is TCP/IP. The transfer speed ramps up in response to how much data can broadcast over the wire. 

A third example is progressive enhancement with the web. The web experience improves depending on the resources and bandwidth available on the end-users device. 

Demand shaping involves two things:

1. The separation of workloads into components that can be scaled independently. 
2. The prioritization of workloads needed to support features. If supply is low, scale back the low priority workloads first. 

With demand shaping, if you detect that the carbon intensity is high, then you *may* choose to limit the features in your application to just the essentials.

You could also implement demand shaping as user behavior *nudges*. Instead of forcing a user into one path or the other, present them with options and let them make the final decision.