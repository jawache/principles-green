---
title: Embodied Carbon
summary: Build applications that run on older hardware
order: 4
tags: principle
---
The device you are reading this document on released some carbon in its creation, once it reaches the end of life disposing of it may release more. 
Embodied carbon (otherwise referred to as "Embedded Carbon") is the amount of carbon pollution emitted during the creation and disposal of a device. When calculating the total carbon pollution for the computers running your software, account for both the carbon pollution to run the computer and the embodied carbon of the computer.

Depending on the carbon intensity of your energy mix the embodied carbon cost of a device can be *significant* compared to the carbon cost of the electricity powering it.

For example, a [2019 R640 Dell Server](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf) has an amortized embedded carbon cost of 320 kg CO<sub>2</sub>eq/year. It’s also expected to consume 1760.3 kWh/year. The average carbon intensity in the EU is 0.276 kg CO<sub>2</sub>eq/kWh. 


> Therefore the total carbon cost is going to be 320 + (0.276 * 1760.3) = 805 kg of carbon/year of which 320 kg or about *40% is from the embodied carbon*. Embodied carbon is a significant contributor to the total emitted carbon of hardware.

By thinking of embodied carbon in this way, any device, even one that is not consuming electricity, is effectively releasing carbon over its lifetime.

A way to account for embodied carbon is to amortize the carbon over the expected life span of a device. For example, if it took 4 tons of carbon to build a server and we expect the server to have a 4-year lifespan, we can consider this equivalent to 1 ton of carbon being released per year during its lifespan.

![alt_text](/assets/images/principles/embodied-carbon-1.png "Embodied carbon of a server amortized over 4 years.")
 
If we just added one more year to the lifespan of our 2019 R640 Dell Server then the amortized carbon drops from 320kg CO<sub>2</sub>eq/year to 256 kg CO<sub>2</sub>eq/year.

![alt_text](/assets/images/principles/embodied-carbon-2.png "Embodied carbon of the same server amortized over 5 years.")

Hardware is retired either because it breaks down or because it struggles to handle modern workloads. Software cannot help with the first however if we focus on building applications that can run on older hardware, we can help with the second.

