---
title: Embodied Carbon
summary: Even if you are not consuming electricity, you have still emitted carbon and must account for it
order: 4
tags: principle
---

When calculating the total carbon emissions for the computers running your software, account for both the carbon emissions to run the computer and the embodied carbon of the computer. Embodied carbon (otherwise referred to as "Embedded Carbon") is the amount of carbon released by something outside of its operation. For example, the device you are reading this document on released some carbon in its creation, once it reaches the end of life disposing of it may release more.

A way to account for embodied carbon is to amortize the carbon over the expected life span of a device. For example, if it took 4 tons of carbon to build a server and we expect the server to have a 4-year lifespan, we can consider this equivalent to 1 ton of carbon being released per year during its lifespan.

![alt_text](/assets/images/principles/embodied-carbon-1.png "Embodied carbon of a server amortized over 4 years.")

Depending on the carbon intensity of your energy mix the embodied carbon cost can be significant compared to the carbon cost of the electricity powering the server.

> For example, a [2019 R640 Dell Server](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf) if run in the EU with it's average carbon intensity of 0.276 kg CO2eq/kWh emits 805 kg of carbon/year, of which 320 kg or about **40% is from the embodied carbon**. Embodied carbon is a significant contributor to the total emitted carbon of hardware.

By thinking of embodied carbon in this way, any device, even one that is not consuming electricity, is effectively releasing carbon over its lifetime. If something is releasing carbon over its lifetime through embodied carbon, then it’s important to make sure it’s being used. 