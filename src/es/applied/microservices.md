---
title: Microservicios
summary: Recommendations from the principles of Green Software Engineering applied to microservices
language: es
---

La arquitectura de [Microservicios](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) consiste en una colección de servicios pequeños y autónomos. Cada servicio es auto-contenido y debería implementar sólo una capacidad del negocio.

Applying the principles of Green Software Engineering, the following are examples of changes you can make to your microservices architecture to optimize it for sustainability.

## Optimizar el tráfico de su red

Reducir la cantidad de tráfico que su arquitectura crea por cada operación así como la distancia que cada petición y respuesta recorren.

* Consider using caching headers, which allows browser caches and proxy caches to have enough information to confidently cache static assets. Caching static assets at the browser or proxy level allows future requests for those assets to be handled by those caches and reduces network traffic to your application.
* Considere usar un CDN para distribuir los archivos estáticos de su aplicación a un lugar más cercano a la fuente de la petición. Esta distribución de archivos reduce la distancia en la red que los archivos estáticos deben recorrer para todas las peticiones.
* Cuando sea posible, reduce el tamaño y optimiza los paquetes y los archivos estáticos.
* Considere usar compresión y descompresión para los datos que transmite por la red. La compresión y descompresión generalmente requieren menos energía en total que transmitir datos no comprimidos por la red.

## Incremente su utilización de cómputo

Actualice la distribución de su carga de trabajo y sus recursos de cómputo para usar menos recursos con una utilización más alta. Esto reduce la cantidad de energía que sus recursos de cómputo necesitan en un estado inactivo o utilizando energía sin hacer trabajo.

* Si usa máquinas virtuales y estas tienen baja utilización, considere reducir el tamaño de esas máquinas virtuales para incrementar su utilización. Máquinas virtuales más pequeñas con mayor utilización usualmente requieren menos energía que máquinas virtuales más grandes con utilización más baja, dada la misma carga de trabajo.
* Evalúe migrar sus cargas de trabajo a PaaS cuando sea posible. Usualmente, las soluciones PaaS están dimensionadas más apropiadamente a su carga de trabajo y pueden correrlas con una alta utilización de los recursos subyacentes.
* Consider using auto-scaling or burst capabilities for your compute resources over statically allocating compute resources for maximum capacity at all times. These capabilities allow you to increase and decrease your compute resources based on demand while keeping the utilization high on those compute resources.
* If you have many logical layers in a physical tier, consider increasing your physical tiers and reorganizing where your logical layers run. The increased physical tiers with a more granular organization of logical layers allows you more flexibility to scale the logical layers independently. This flexibility allows you to keep utilization high on your compute resources and avoid idle logical layers.

## Reducir el número de sus microservicios

Una arquitectura de microservicios es una manera efectiva de enfocar un servicio alrededor de un dominio específico del negocio y repartir responsabilidad y conocimiento entre el equipo o sistema. Asegurar el nivel apropiado de abstracción es importante para ayudar a limitar la congestion, latencia y complejidad de la red.

* Considere combinar servicios, física o lógicalmente, cuando existan puntos de escalamiento similares para reducir el impacto de la arquitectura en general.
* Si dos o más microservicios están áltamente acoplados, considere co-situarlos para reducir la latencia y la congestión de la red.
* Utilice lenguajes y componentes tecnológicos que optimicen la eficiencia de un función específica de los microservicios. La independencia y abstracción de funcionalidad de la capa de la API significa que usted está libre de tomar decisiones técnicas que maximizen la utilización de los componentes por cada microservicio.
* Considere ejecutar los microservicios que requieren muchos recursos en regiones con una intensidad de carbono menor.

## Optimizar su base de datos

Optimizar cuál base de datos utiliza así como cuántos datos se guardan puede reducir la energía utilizada para mantener corriendo la base de datos así como reducir el tiempo de espera para que las consultas se completen.

* Asegúrese de usar la mejor base de datos para interactuar con su set de datos. Por ejemplo, si está ejecutando consultas relacionales en su set de datos, usar una base de datos relacional es más adecuado y seguramente más eficiente que una base de datos NoSQL.
* Si ninguna base de datos individual está diseñada para manejar todas las maneras en las que interactua con su set de datos, considere tener copias redundantes de sus datos en diferentes bases de datos y usar cada una para el subconjunto de interacciones más adecuado para esa base de datos.
* Considere usar índices si su base de datos lo permite.
* Considere evaluar y optimizar sus consultas.
* Considere usar caché para bases de datos. En algunos casos, el caché puede reducir consultas redundantes a la base de datos y reducir la energía usada por la base de datos, especialmente para consultas complejas o intensivas.

## Entender los límites de su latencia

En muchos casos, las aplicaciones web están diseñadas por defecto con expectativas de latencia muy baja, asumiendo que una respuesta a una petición debería ocurrir inmediatamente o tan pronto como sea posible. Esta suposición puede limitar sus opciones para reducir el uso de energía de su aplicación. Considere evaluar cómo su aplicación es utilizada y si puede suavizar los límites de latencia en algunas áreas, lo cual puede incrementar sus opciones para reducir el carbono.

* Considere separar ciertas operaciones fuera del ciclo de petición/respuesta. Por ejemplo, si se hace una petición para enviar un correo electrónico que bloquea la respuesta hasta que el correo electrónico es enviado, en su lugar puede enviar el correo electrónico de manera asíncrona usando un proceso alterno, desbloqueando la respuesta.
* Consider running worker processes a lower priority than web process. This prioritization allows worker processes to run only when compute resources are not needed by web processes and keeps utilization high.
* Consider running the worker processes in a region with lower carbon intensity.
* Consider delaying worker process to run when the carbon intensity is the lowest.
