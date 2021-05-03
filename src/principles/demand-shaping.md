---
title: Demand Shaping
summary: Build carbon-aware applications.
order: 7
tags: principle
---

[Demand shifting](/principles/carbon-intensity/#heading-demand-shifting) is the strategy of moving workloads to regions or times when the carbon intensity is less, or to put it another way when the supply of renewable electricity is high.

Demand shaping is a similar strategy, but instead of moving demand to a different region or time, we shape our demand, so it matches the existing supply.

![alt_text](/assets/images/principles/demand-shaping-1.png "If supply is high, increase the demand - do more in your applications - if the supply is low, decrease demand - do less in your applications.")

A great example of this is video conferencing software. Rather than streaming at the highest quality possible at all times, they often shape the demand by reducing the video quality to prioritize audio.

Another example is TCP/IP. The transfer speed ramps up in response to how much data can broadcast over the wire. 

A third example is progressive enhancement with the web. The web experience improves depending on the resources and bandwidth available on the end-users device. 
[How To Measure The Power Consumption of Your Frontend](https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-frontend-application/)

## Carbon-aware vs. carbon-efficient

Carbon efficiency can be transparent to the end-user. You can be more efficient at every level in converting carbon to useful functionality while still keeping the user experience the same.

But at some point, being transparently more carbon-efficient isn't enough. If the carbon cost of running an application right now is too high, we can change the user experience to reduce carbon emissions further. At the point the user is aware the application is running differently, it becomes a carbon-aware application.

Demand shaping carbon-aware applications is all about the supply of carbon. When the carbon cost of running your application becomes high, shape the demand to match the supply of energy. This can happen automatically, or the user can make a choice. 

## Eco-modes

Eco-modes are often used in life: for instance in cars or washing machines. When switched on, the performance changes as they consume fewer resources (gas/electricity) to perform the same task. It's not cost-free (otherwise, we would always choose eco-modes), so we make trade-offs. Because it's a trade-off, eco-modes are almost always presented to a user as a choice, and the user decides if they want to go with it and accept the compromises.

Software applications can also have eco-modes which when engaged changes application behavior in potentially two ways:

- **Intelligence**. Giving users information so they can make informed decisions.  
- **Automatic**. The application automatically makes more aggressive decisions to reduce carbon emissions.

## Summary

Demand shaping is related to a broader concept in sustainability, which is to reduce consumption. We can achieve a lot by becoming more efficient with resources, but at some point, we also just need to consume less. As Green Software Engineers to be carbon-efficient means perhaps when the carbon intensity is high, instead of demand shifting compute, we consider canceling it. Reducing the demands of our application and the expectations of our end users.
