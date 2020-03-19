---
title: Carbon Intensity
summary: Consume electricity with the lowest carbon intensity
order: 3
tags: principle
---

The carbon intensity of electricity is a measure of how much carbon (CO<sub>2</sub>eq) emissions are produced per kilowatt-hour of electricity consumed.

The standard unit of carbon intensity is gCO<sub>2</sub>eq/kWh or grams of carbon per kilowatt-hour.

Not all electricity is produced in the same way. In different locations and at different times, the electricity is produced using a variety of sources with *different carbon emissions*. Some sources, such as wind, solar, or hydroelectric, are clean, *renewable sources* that emit no carbon. Other *fossil fuel sources* emit varying amounts of carbon to produce electricity. For example, gas-burning power plants emit less carbon than coal-burning power plants.

If your computer is plugged directly into a wind farm, then the electricity it consumes would have a carbon intensity of 0 gCO<sub>2</sub>eq/kWh since a wind farm emits no carbon to produce that electricity. Most people can’t plug directly into wind farms, they instead plug into power grids that are usually supplied with electricity from a mix of sources that produce varying amounts of carbon. Therefore, when plugged into a grid your carbon intensity is usually a number greater than 0. 

## Variability of Carbon Intensity

- **Carbon intensity changes by location** since some regions have an energy mix that contains more sources of clean energy than other regions. 
- **Carbon intensity also changes over time** due to the variable nature of renewable energy. For example, when it’s cloudy or the wind isn’t blowing, carbon intensity **increases** since more of the electricity in your mix is coming from sources that emit carbon.


![alt_text](/images/principles/carbon-intensity-1.png "Carbon intensity changes over time as renewable sources increase or decrease.")

Demand for electricity varies during the day, that demand needs to be met by supply. Some of that supply _can easily_ control the power it produces, e.g. a coal power plant can burn less coal. Some of that supply _can’t easily_ control the power it produces, e.g. a wind farm can’t control how much the wind blows, it can only throw away (curtail) electricity that was made essentially for free.

![alt_text](/images/principles/carbon-intensity-2.png "Fossil Fuel sources of power are usually scaled back first and renewables scaled back last.")

As a by-product of the way energy markets work as demand for electricity goes down usually the high emitting fossil fuel sources of power are scaled back first with renewables scaled back last.

> Reducing the amount of electricity consumed in your applications can help to **decrease** the carbon intensity of the energy mix in local grids.


### Marginal Carbon Intensity

If you choose to consume more energy, that energy comes from the *marginal power plant*. That power plant is one that can control the energy it outputs, renewables cannot control the sun or the wind so marginal power plants are often powered by fossil fuels. 

The marginal plant emits carbon, at any moment we have the carbon intensity of the energy mix in the grid but also the carbon intensity of the energy that would have to be brought online to meet new demand, that's called the *marginal carbon intensity*.

Fossil fueled power plants rarely scale down to 0, they have a minimum functioning threshold, some don’t scale at all they are considered consistent always-on baseload. Because of this, we can sometimes reach the perverse scenario where we throw away (curtail) renewable energy that was created for free in order to consume energy from fossil fuel power plants created with a fuel that costs money.

![alt_text](/images/principles/carbon-intensity-3.png "There are moments when the marginal carbon intensity reaches 0")

> The marginal carbon intensity could be 0 gCO<sub>2</sub>eq/kWh when new load would be met with supply from a renewable source that would otherwise have been curtailed.


### Calculating Carbon Intensity

There are several services available which allow you to obtain real-time data regarding the current carbon intensity of different electricity grids, some provide estimates of future carbon intensity, some provide the marginal carbon intensity. 

- [Carbon Intensity API](https://carbonintensity.org.uk/): Free resource for carbon intensity data in the UK.
- [ElectricityMap](https://api.electricitymap.org/): Free for non-commercial single country use, premium solutions for commercial and multi-country access.
- [WattTime](https://www.watttime.org/): Free for a single grid region, premium solutions for multi-grid and real-time marginal emissions.