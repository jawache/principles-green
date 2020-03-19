---
title: Measurement & Optimization
summary: Focus on end-to-end optimizations that increase the overall carbon efficiency
order: 8
tags: principle
---

You must understand the carbon efficiency of all parts of your application in order to understand where effort should be prioritized. For example, is it worthwhile to spend two weeks reducing megabytes from network communication if the database queries are causing ten times more carbon to be emitted?

The most impactful optimizations will come from those responsible for developing and running applications understanding the carbon emissions of an application across the full stack, from the front-end to the data center. 

A key to success in optimization is to choose a measurement criterion which will give clear signals as to where best to put optimization efforts.

## Carbon

Measuring emitted carbon is a complex challenge, with parts of the stack that need to be estimated rather than measured, but with some effort, it’s possible.

Because of the variability of carbon intensity and other dependencies, the total carbon emitted may change depending on the time of day or region the application is run. 

The same application measured at *different times* will result in different amounts of carbon. This could be a good signal, especially if you are open to demand-shifting workloads or it could be noise if you are focussing on energy optimizations.


## Energy

The energy consumed by your application may vary every time it runs, this may be something you want to take as an optimization signal, or this may be something you want to control for.

The same application run on **different hardware** may result in different amounts of energy consumed because of the differences in energy efficiency between the hardware components.

Because of the energy proportionality principle, the same application run on the same hardware but at **different times** may result in different amounts of energy consumed because the utilization of the hardware is different between the two runs. That is, the hardware might be running other applications during the second run, and this changes the hardware’s overall energy efficiency.

Overall, though, creating applications that consume less electricity for the same human-perceptible performance and output is a good proxy for carbon reduction.

There are devices, tools and libraries available that help you measure the energy consumed by an application.

- [Joulemeter (depreciated)](https://www.microsoft.com/en-us/research/project/joulemeter-computational-energy-measurement-and-optimization/) 
Estimates the power consumption globally from the CPU, memory and disk however for a single application only stores the energy from the CPU. 

 
- [PowerAPI](http://powerapi.org/)
A system monitoring library only works for GNU/Linux and only calculates CPU energy, it does, however, calculate the energy used per process. 

 
- [Intel Power Gadget](https://software.intel.com/en-us/articles/intel-power-gadget)
Only works on Intel Core processors, only calculates power consumption due to the CPU and does not break this out on a per-process basis. 
 
A thorough analysis of the various software and hardware tools to measure energy consumption can be found in the paper [Software development methodology in a Green IT environment](https://tel.archives-ouvertes.fr/tel-01724069/document).


## Cost

At some point, the cost of electricity is factored into _most_ services. Building applications that run as cheaply as possible is usually a good proxy for applications that emit less carbon.

## Networking

The cost of electricity in networking is often not considered. The number of services that offer unlimited bandwidth for a single price means there is little price pressure to reduce bandwidth.  

Measuring and then reducing the amount and distance your data must travel is a good proxy for reducing carbon.

## Performance

If you can architect an application that performs better **for the same level of utilization**, then this is likely to reduce overall carbon.

