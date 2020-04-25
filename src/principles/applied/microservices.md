---
title: Microservices
summary: Recommendations from the principles of sustainable software engineering applied to microservices
---

The [Microservices](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) architecture consists of a collection of small, autonomous services. Each service is self-contained and should implement a single business capability.

Applying the principals of sustainable software engineering, the following are examples of changes you can make to your microservices architecture to optimize it for sustainability.


## Optimize your network traffic

Reduce the amount of traffic your architecture creates per operation as well as the distance each request and response travels.

* Consider using caching headers, which allows browser caches and proxy caches to have enough information to confidently cache static assets. Caching static assets at the browser or proxy level allows future requests for those assets to be handled by those caches and reduces network traffic to your application.
* Consider using a CDN to distribute your application's static assets closer to the source of a request. This distribution of assets reduces the distance all requests for static assets has to travel over the network.
* Where possible, reduce the size and optimize your bundles and static assets.
    * Consider using compression and decompression for data you transmit over the network. Compression and decompression is usually takes less overall energy than transmitting uncompressed data over the network.


## Increase your compute utilization

Update your workload distribution and compute resources so that you use less resources at a higher utilization. This reduces the amount of energy your compute resources spend in an idle state, or using energy without doing work.

* If using virtual machines for compute resources and they have low utilization, consider reducing the size of those virtual machines to increase utilization. Smaller virtual machines with higher utilization usually use less energy than larger virtual machines with lower utilization given the same workload.
* Evaluate migrating your workload to a PaaS where possible. Typically, PaaS solutions are sized more appropriately for their workload and can run those workloads at a high utilization on their underlying compute resources.
* Consider using auto-scaling or burst capabilities for your compute resources over statically allocating compute resources for maximum capacity at all times. These capabilities allow you to increase and decrease your compute resources based on demand while keeping the utilization high on those compute resources.
* If you have many logical layers in a physical tier, consider increasing your physical tiers and reorganizing where your logical layers run. The increased physical tiers with a more granular organization of logical layers allows you more flexibility to scale the logical layers independently. This flexibility allows you to keep utilization high on your compute resources and avoid idle logical layers.

## Reduce your number of microservices

A microservices architecture is an effective way to focus a service around a specific business domain and decentralize ownership and knowledge throughout the team or system. Ensuring the appropriate level of abstraction is important to help limit network congestion, latency, and overall complexity. 

* Consider combining services, logically or physically, where similar scale points exist to reduce the footprint of the overall architecture.
* If two or more microservices are highly coupled, consider co-locating to reduce network congestion and latency.  
* Use languages and technology stacks that optimize the efficiency of a specific microservices function. The independence and abstraction of functionality to an API layer means you are free to make the technical decisions that maximize utlization in your technical stack for each microservice. 
* Consider running any resource-intensive microservices in a region with a lower carbon intensity. 


## Optimize your database

Optimizing which database you use as well as how the data is stored can reduce the energy used to run the database as well decrease idle time waiting for queries to complete.

* Ensure you are using the best database for interacting with your data set. For example, if you are running many relational queries on your data set, a relational database is better suited and likely more efficient to use than NoSQL database.
* If no single database is designed to handle all the ways you interact with you data set, consider keeping redundant copies of your data in different databases and using each database for the subset of interactions best suited for that database.
* Consider using index if your database offers it.
* Consider evaluating and optimizing your queries.
* Consider using a database cache. In some cases, caching can reduce redundant queries to the database and decrease energy usage by the database, especially for complex or compute-intensive queries.


## Understand your latency limits

In many cases, web applications are designed by default with very low latency expectations, assuming a response to a request should happen immediately or as soon as possible. This assumption can limit your options for reducing the energy usage in your application. Consider evaluating how your application is used and if you can relax the latency limits in some areas, which can increase your options for reducing carbon.

* Consider separating certain operations outside of the request/response cycle. For example, if there is a request to send an email that blocks the response until the email is sent, you can instead asynchronously send the email using a worker process and unblock the response.
* Consider running worker processes a lower priority than web process. This prioritization allows worker processes to run only when compute resources are not needed by web processes and keeps utilization high.
* Consider running the worker processes in a region with lower carbon intensity.
* Consider delaying worker process to run when the carbon intensity is the lowest.




