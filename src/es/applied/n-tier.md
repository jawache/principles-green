---
title: N-Tier
summary: Recomendaciones de los principios de la Ingeniería de Software Verde aplicados a una arquitectura N-Tier
---

La arquitectura [N-tier](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) organiza su aplicación en distintas capas lógicas en función de sus responsabilidades. Las capas se ejecutan en una serie de niveles separados físicamente que representan recursos de computo.

Aplicando los principios de la Ingeniería de Software Verde, los siguientes son ejemplos de cambios que puede realizar en su arquitectura de N-Tier para optimizar la sostenibilidad.

## Optimiza el tráfico en la red

Reduzca la cantidad de tráfico que crea su arquitectura por operación, así como la distancia que recorre cada solicitud y respuesta.

* Considere el uso de encabezados de almacenamiento en caché, lo que permite que los cachés del navegador y los cachés de proxy tengan suficiente información para almacenar en caché los activos estáticos. El almacenamiento en caché de activos estáticos a nivel del navegador o del proxy permite que esas cachés manejen las solicitudes futuras de esos activos y se reduzca el tráfico de red hacia su aplicación.
* Considere utilizar una Red de Entrega de Contenido (CDN por sus siglas en inglés) para distribuir los activos estáticos de su aplicación más cerca de la fuente de una solicitud. Esta distribución de activos reduce la distancia que tienen que recorrer todas las solicitudes de activos estáticos a través de la red.
* Siempre que sea posible, opmitice y reduzca el tamaño de sus paquetes y activos estáticos.
    * Considere usar compresión y descompresión para los datos que transmite a través de la red. La compresión y descompresión generalmente requieren menos energía en general que la transmisión de datos sin comprimir a través de la red.

## Imcrementa la utilización de recursos de computo

Actualice la distribución de la carga de trabajo y los recursos informáticos para que utilice menos dispositivos con un mayor utilización. Esto reduce la cantidad de energía que gastan sus recursos informáticos en un estado inactivo o en el uso de energía sin trabajar.

* Si usa máquinas virtuales para recursos de compute y tienen un uso moderado, considere reducir el tamaño de esas máquinas virtuales para aumentar su utilización. Las máquinas virtuales más pequeñas con una mayor utilización suelen utilizar menos energía que las máquinas virtuales más grandes con una menor utilización dada la misma carga de trabajo.
* Evalúe la migración de su carga de trabajo a una PaaS siempre que sea posible. Por lo general, las soluciones PaaS se ajustan mejor a distintas cargas de trabajo y pueden ejecutarlas con una alta utilización de los recursos informáticos subyacentes.
* Considere el uso de escalamiento automático para sus recursos informáticos sobre la asignación estática de los mismos. Estas capacidades le permiten aumentar y disminuir sus recursos informáticos en función de la demanda, al tiempo que mantiene una alta utilización de los recursos informáticos.
* Si tiene muchas capas lógicas en un nivel físico, considere expandir sus niveles físicos y reorganizar dónde se ejecutan sus capas lógicas. Los niveles físicos aumentados con una organización más granular de capas lógicas le permiten más flexibilidad para escalarlas de forma independiente. Esta flexibilidad le permite mantener una alta utilización de sus recursos informáticos y evitar capas lógicas ociosas.

## Optimiza la base de datos

La optimización de la base de datos que utiliza y la forma en que se almacenan los datos puede reducir la energía utilizada para su ejecución y reducir el tiempo de inactividad a la espera de que se completen las consultas.

* Asegúrese de estar utilizando la mejor base de datos para interactuar con sus datos. Por ejemplo, si está ejecutando muchas consultas relacionales, una base de datos relacional es más adecuada y probablemente más eficiente de usar que una base de datos no relacional (también conocida como NoSQL).
* Si no hay una base de datos única diseñada para manejar todas las formas en que interactúa con su conjunto de datos, considere mantener copias redundantes de sus datos en diferentes bases de datos y usar cada una para el subconjunto de interacciones que mejor se adapte a esa base de datos.
* Considere usar [un índice](https://es.wikipedia.org/wiki/%C3%8Dndice_(base_de_datos)) si su base de datos lo ofrece.
* Considere evaluar y optimizar sus consultas.
* Considere usar una memoria caché de base de datos. En algunos casos, el almacenamiento en caché puede reducir las consultas redundantes y disminuir el uso de energía de la misma, especialmente para consultas complejas o con uso intensivo de recursos informáticos.
