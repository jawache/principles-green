# Energy Proportionality

**Run servers at a high rate of utilization.**

[Energy proportionality](https://en.wikipedia.org/wiki/Energy_proportional_computing) is a measure of the relationship between power consumed in a computer system and the rate at which useful work is done (its utilization).

Utilization is a measure of how much of a computer’s resources are being used, usually given as a percent. An idle computer has a low utilization percentage and isn’t being utilized, a computer running at its maximum capacity has a high percentage and is being fully utilized.

The relationship between power and utilization is not _exactly_ proportional. 

![alt_text](./images/energy-proportionality-1.png "Idle computers still have a significant static power draw")

An idle computer, even one at zero percent utilization, still draws electricity. This *static power draw* varies by configuration and by hardware components, but all components have some static power draw. This is one of the reasons PCs, laptops, and mobile devices have power-save modes available. If the device is idle it will eventually trigger a hibernation mode and put the disk and screen to sleep or even change the frequency of the CPU. These power-save modes save on electricity, but they have other trade-offs, such as a slower restart when the device wakes up. 

Servers are usually not configured for aggressive or even minimal power-saving. Many server use-cases demand full capacity as quickly as possible in response to rapidly changing demands. This can leave many servers in idle modes during low demand periods. An idle server has a cost both from embedded carbon and its inefficient utilization. 

The most efficient and green approach is to run your work on as few servers as possible with the **highest rate of utilization**.
