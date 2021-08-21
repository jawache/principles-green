---
title: Web Queue Worker
summary: Recomendaciones de los principios de Ingeniería de Software Verde aplicados a una arquitectura de "Web Queue Worker"
---

La arquitectura [Web-Cola-Trabajo](https://docs.microsoft.com/es-es/azure/architecture/guide/architecture-styles/web-queue-worker) define una parte web que maneja las solicitudes HTTP y una parte del trabajador que maneja el tiempo o las operaciones de procesamiento intensivo. Se utiliza una cola para la comunicación asincrónica entre la web y el trabajador.

Aplicando los principios de la Ingeniería de Software Verde, los siguientes son ejemplos de cambios que puede realizar en su arquitectura Web-Cola-Trabajo para optimizarla para la sostenibilidad.

## Optimice el tráfico de su red

Reduzca la cantidad de tráfico que crea su arquitectura por operación, así como la distancia que recorre cada solicitud y respuesta.

* Considere el uso de almacenamiento caché para guardar los encabezados, lo que permite que los cachés del navegador y los cachés de proxy tengan suficiente información para almacenar activos estáticos con confianza. El almacenamiento en caché de activos estáticos a nivel del navegador o del proxy permite que esas cachés manejen las solicitudes futuras de esos activos y reduce el tráfico de red a su aplicación.
* Considere usar una [CDN](https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos) para distribuir los activos estáticos de su aplicación más cerca de la fuente de una solicitud. Esta distribución de activos reduce la distancia que tienen que recorrer todas las solicitudes de activos estáticos a través de la red.
* Siempre que sea posible, reduzca el tamaño y optimice sus paquetes y activos estáticos.
     * Considere usar compresión y descompresión para los datos que transmite a través de la red. La compresión y descompresión generalmente requieren menos energía en general que la transmisión de datos sin comprimir a través de la red.

## Aumente la utilización de sus procesos

Actualice la distribución de la carga de trabajo y los recursos informáticos para que haya una mayor utilización de los recursos. Esto reduce la cantidad de energía que gastan sus recursos informáticos en un estado inactivo.

* Si usa máquinas virtuales para recursos de compute y tienen un uso moderado, considere reducir el tamaño de esas máquinas virtuales para aumentar su utilización. Las máquinas virtuales más pequeñas con una mayor utilización suelen utilizar menos energía que las máquinas virtuales más grandes con una menor utilización dada la misma carga de trabajo.
* Evalúe la migración de su carga de trabajo a una PaaS siempre que sea posible. Por lo general, las soluciones PaaS se ajustan mejor a distintas cargas de trabajo y pueden ejecutarlas con una alta utilización de los recursos informáticos subyacentes.
* Considere el uso de escalamiento automático para sus recursos informáticos sobre la asignación estática de los mismos. Estas capacidades le permiten aumentar y disminuir sus recursos informáticos en función de la demanda, al tiempo que mantiene una alta utilización de los recursos informáticos.

## Optimiza la base de datos

La optimización de la base de datos que utiliza y la forma en que se almacenan los datos puede reducir la energía utilizada para su ejecución y reducir el tiempo de inactividad a la espera de que se completen las consultas.

* Asegúrese de estar utilizando la mejor base de datos para interactuar con sus datos. Por ejemplo, si está ejecutando muchas consultas relacionales, una base de datos relacional es más adecuada y probablemente más eficiente de usar que una base de datos no relacional (también conocida como NoSQL).
* Si no hay una base de datos única diseñada para manejar todas las formas en que interactúa con su conjunto de datos, considere mantener copias redundantes de sus datos en diferentes bases de datos y usar cada una para el subconjunto de interacciones que mejor se adapte a esa base de datos.
* Considere usar [un índice](https://es.wikipedia.org/wiki/%C3%8Dndice_(base_de_datos)) si su base de datos lo ofrece.
* Considere evaluar y optimizar sus consultas.
* Considere usar una memoria caché de base de datos. En algunos casos, el almacenamiento en caché puede reducir las consultas redundantes y disminuir el uso de energía de la misma, especialmente para consultas complejas o con uso intensivo de recursos informáticos.

## Comprende los límites de latencia

En muchos casos, las aplicaciones web están diseñadas de forma predeterminada con expectativas de latencia muy bajas, asumiendo que la respuesta a una solicitud debe ocurrir inmediatamente o tan pronto como sea posible. Esta suposición puede limitar las opciones para reducir el uso de energía en su aplicación. Considere evaluar cómo se usa su aplicación y si pueden relajar los límites de latencia en algunas áreas, lo que puede aumentar sus opciones para reducir la huella de carbono de la aplicación.

* Considere separar ciertas operaciones fuera del ciclo de solicitud / respuesta. Por ejemplo, si hay una solicitud para enviar un correo electrónico que bloquea la respuesta hasta que se envía el correo electrónico, puede enviar el correo electrónico de forma asincrónica mediante un proceso de trabajo y desbloquear la respuesta.
* Considere la posibilidad de ejecutar procesos de trabajo con una prioridad menor que los procesos web. Esta priorización permite que los procesos de trabajo se ejecuten solo cuando los procesos web no necesitan recursos informáticos y mantiene una alta utilización.
* Considere ejecutar los procesos de trabajo en una región con menor intensidad de carbono.
* Considere retrasar el proceso de trabajo para que se ejecute cuando la intensidad de carbono sea la más baja.