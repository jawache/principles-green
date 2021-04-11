---
title: Microservicios
summary: Recomendaciones de los principios de Ingeniería Verde de Software aplicadas a los microservicios
language: es
---

La arquitectura de [Microservicios](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) consiste en una colección de servicios pequeños y autónomos. Cada servicio es auto-contenido y debería implementar solo una capacidad del negocio.

Aplicando los principios de Ingeniería Verde de Software, los siguientes son ejemplos de cambios que usted puede hacer a su arquitectura de microservicios para optimizarla para sustentabilidad.

## Optimice el tráfico de su red

Reduzca la cantidad de tráfico que su arquitectura crea por cada operación así como la distancia que cada petición y respuesta recorren.

* Considere usar encabezados de caché, lo cual permite que el caché de los navegadores y los proxies tengan suficiente información para almacenar archivos estáticos. Usar el caché a nivel del navegador o el proxy permite que las peticiones futuras para esos archivos sean manejadas por esos cachés y reduce el tráfico de la red hacia su aplicación.
* Considere usar un CDN para distribuir los archivos estáticos de su aplicación a un lugar más cercano a la fuente de la petición. Esta distribución de archivos reduce la distancia en la red que los archivos estáticos deben recorrer para todas las peticiones.
* Cuando sea posible, reduce el tamaño y optimiza los paquetes y los archivos estáticos.
* Considere usar compresión y descompresión para los datos que transmite por la red. La compresión y descompresión generalmente requieren menos energía en total que transmitir datos no comprimidos por la red.

## Incremente su utilización de cómputo

Actualice la distribución de su carga de trabajo y sus recursos de cómputo para usar menos recursos con una utilización más alta. Esto reduce la cantidad de energía que sus recursos de cómputo necesitan en un estado inactivo o utilizando energía sin hacer trabajo.

* Si usa máquinas virtuales y estas tienen baja utilización, considere reducir el tamaño de esas máquinas virtuales para incrementar su utilización. Máquinas virtuales más pequeñas con mayor utilización usualmente requieren menos energía que máquinas virtuales más grandes con utilización más baja, dada la misma carga de trabajo.
* Evalúe migrar sus cargas de trabajo a PaaS cuando sea posible. Usualmente, las soluciones PaaS están dimensionadas más apropiadamente a su carga de trabajo y pueden correrlas con una alta utilización de los recursos subyacentes.
* Considere preferir auto-escalamiento o rendimiento ampliable para sus recursos de cómputo sobre recursos estáticos para usar la capacidad máxima siempre que sea posible. Estas capacidades permiten incrementar o decrementar los recursos basándose en la demanda mientras se mantiene la utilización en un nivel alto de los recursos.
* Si acaso tiene muchas capas lógicas en su nivel físico, considere incrementar sus niveles físicos y organizar dónde las capas lógicas son ejecutadas. Un mayor número de niveles físicos con una organización más granular de capas lógicas permite más flexibilidad para escalar las capas lógicas independientemente. Esta flexibilidad permite mantener una utilización alta en sus recursos y evitar capas lógicas inactivas.

## Reduzca el número de sus microservicios

Una arquitectura de microservicios es una manera efectiva de enfocar un servicio alrededor de un dominio específico del negocio y repartir responsabilidad y conocimiento entre el equipo o sistema. Asegurar el nivel apropiado de abstracción es importante para ayudar a limitar la congestión, latencia y complejidad de la red.

* Considere combinar servicios, física o lógicamente, cuando existan puntos de escalamiento similares para reducir el impacto de la arquitectura en general.
* Si dos o más microservicios están altamente acoplados, considere co-situarlos para reducir la latencia y la congestión de la red.
* Utilice lenguajes y componentes tecnológicos que optimicen la eficiencia de un función específica de los microservicios. La independencia y abstracción de funcionalidad de la capa de la API significa que usted está libre de tomar decisiones técnicas que maximicen la utilización de los componentes por cada microservicio.
* Considere ejecutar los microservicios que requieren muchos recursos en regiones con una intensidad de carbono menor.

## Optimice su base de datos

Optimizar cuál base de datos utiliza así como cuántos datos se almacenan puede reducir la energía utilizada para mantener corriendo la base de datos así como reducir el tiempo de espera para que las consultas se completen.

* Asegúrese de usar la mejor base de datos para interactuar con su set de datos. Por ejemplo, si está ejecutando consultas relacionales en su set de datos, usar una base de datos relacional es más adecuado y seguramente más eficiente que una base de datos NoSQL.
* Si ninguna base de datos individual está diseñada para manejar todas las maneras en las que interactúa con su set de datos, considere tener copias redundantes de sus datos en diferentes bases de datos y usar cada una para el subconjunto de interacciones más adecuado para esa base de datos.
* Considere usar índices si su base de datos lo permite.
* Considere evaluar y optimizar sus consultas.
* Considere usar caché para bases de datos. En algunos casos, el caché puede reducir consultas redundantes a la base de datos y reducir la energía usada por la base de datos, especialmente para consultas complejas o intensivas.

## Entienda los límites de su latencia

En muchos casos, las aplicaciones web están diseñadas por defecto con expectativas de latencia muy baja, asumiendo que una respuesta a una petición debería ocurrir inmediatamente o tan pronto como sea posible. Esta suposición puede limitar sus opciones para reducir el uso de energía de su aplicación. Considere evaluar cómo su aplicación es utilizada y si puede suavizar los límites de latencia en algunas áreas, lo cual puede incrementar sus opciones para reducir el carbono.

* Considere separar ciertas operaciones fuera del ciclo de petición/respuesta. Por ejemplo, si se hace una petición para enviar un correo electrónico que bloquea la respuesta hasta que el correo electrónico es enviado, en su lugar puede enviar el correo electrónico de manera asíncrona usando un proceso alterno, desbloqueando la respuesta.
* Considere ejecutar sus procesos dependientes a una prioridad más baja que los procesos web. Esta priorización permite al proceso dependiente ser ejecutado únicamente cuando los recursos de cómputo no son necesitados por los procesos web y mantiene una alta utilización.
* Considere correr sus procesos dependientes en una región con una intensidad de carbono más baja.
* Considere retrasar sus procesos dependientes para ser ejecutados cuando la intensidad de carbono es la más baja posible.
