---
title: Web Queue Worker
summary: Recommendations from the principles of Green Software Engineering applied to a Web Queue Worker architecture
---

The [Web-Queue-Worker](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/web-queue-worker) architecture defines a web portion that handles HTTP requests and a worker portion that handles time or processing-intensive operations. A queue is used for asynchronous communication between the web and the worker.

Applying the principles of Green Software Engineering, the following are examples of changes you can make to your Web-Queue-Worker architecture to optimize it for sustainability.

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
