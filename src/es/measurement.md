---
title: Medición y optimización
summary: Enfocándose en optimizaciones paso a paso que incrementan la eficiencia de carbono en general
order: 8
tags: principle
language: es
---

La sustentabilidad no es una optimización, son miles. Un buen consejo es verlo de principio a fin y tomarlo paso a paso. Normalmente esforzándose en entender todos los componentes, desde la experiencia del usuario hasta el diseño del centro de datos o la red eléctrica, produce soluciones que mejoran la eficiencia de carbono significativamente.

Considere el esfuerzo necesario para eliminar el carbono contra las potenciales recompensas. Justo como cualquier otro movimiento de sustentabilidad global, será más difícil eliminar el carbono de algunos sectores que de otros. En el cómputo, algunos dominios de aplicaciones serán más difíciles de limpiar que otros. Algunas partes de la arquitectura de tu aplicación serán más difíciles de limpiar que otros.

La clave para el éxito en la optimización es elegir un criterio para la medición que resultará en señales claras sobre donde esforzarnos en la optimización. Por ejemplo, ¿es buena idea invertir dos semanas en reducir megabytes en comunicación de la red si las consultas a la base de datos resultan en 10 veces más carbono emitido?

Es muy poco común que podamos medir directamente el costo de carbono de una aplicación, pero siguiendo la cadena de recursos eventualmente podremos relacionarla a las emisiones de carbono, las cuales son una buena aproximación para el carbono.

## Carbono

Medir el carbono incorporado es un reto complejo, con componentes que necesitan ser estimados en lugar de ser medidos, pero con algo de esfuerzo, es posible.

Debido a la variabilidad de la intensidad del carbono y otras dependencias, el carbono total emitido puede cambiar dependiendo de la hora del día o de la región en la que la aplicación es ejecutada.

La misma aplicación medida en *diferentes momentos* resultará en diferentes cantidades de carbono. Esto puede ser una buena señal, especialmente si existe la posibilidad de cambiar las cargas de trabajo de acuerdo a la demanda o podría ser únicamente ruido si el objetivo es optimizar el consumo de energía.

## Energía

La energía consumida por tu aplicación puede variar cada vez que corre, esto puede ser algo que se pueda tomar como una señal de optimización, o puede ser algo que deba controlarse.

La misma aplicación corriendo en **diferente hardware** puede resultar en diferentes cantidades de energía consumida debido a las diferencias en la eficiencia de energía de los componentes del hardware.

Debido al principio de proporcionalidad de la energía, la misma aplicación corriendo en el mismo hardware pero **en otro momento** podría resultar en diferentes cantidades de energía consumida ya que la utilización del hardware es diferente entre las dos ejecuciones. Esto es, el hardware podría estar corriendo otras aplicaciones durante la segunda ejecución, y esto cambiaría la eficiencia de energía total del hardware.

En general, crear aplicaciones que consuman menos electricidad pero con el mismo rendimiento y resultados perceptibles es una buena estrategia para reducir el carbono.

Existen dispositivos, herramientas y bibliotecas disponibles que pueden ayudar a medir la energía consumida por una aplicación.

- [Joulemeter (depreciada)](https://www.microsoft.com/en-us/research/project/joulemeter-computational-energy-measurement-and-optimization/)
Estima el consumo de energía global del CPU, memoria y disco. Sin embargo, por cada aplicación sólo guardar la energía del CPU.

- [PowerAPI](http://powerapi.org/)
Una biblioteca de monitoreo de sistema, únicamente funciona con GNU/Linux y sólo calcula la energía del CPU, sin embargo, si calcula la energía utilizada por cada proceso.

- [Intel Power Gadget](https://software.intel.com/en-us/articles/intel-power-gadget)
Sólo funciona en procesadores Intel Core, únicamente calcula el consumo de energía del CPU y no separa esto en el consumo por cada proceso.

- [PowerCFG](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/)
Una herramienta para Windows 10 que permite obtener el consumo eléctrico por proceso.

Un análisis profundo de algunas herramientas de software y hardware utilizadas para medir el consumo de energía puede ser encontrada en el documento [Software development methodology in a Green IT environment](https://tel.archives-ouvertes.fr/tel-01724069/document).

## Costo

En algún punto, el costo de la electricidad está factorizado en la _mayoría_ de los servicios. Construir aplicaciones que corren tan barato como sea posible es usualmente un buen acercamiento a aplicaciones que emiten menos carbono.

## Networking

El costo de la electricidad en las redes no es considerado comúnmente. El número de servicios que ofrecen ancho de banda ilimitado por un único precio significa que hay poca presión para reducir el ancho de banda.

Medir y después reducir la cantidad y distancia que los datos deben recorrer es un buen enfoque para reducir el carbono.

## Rendimiento

Si se puede diseñar una aplicación que funcione mejor **con el mismo nivel de utilización** entonces es probable que reduzca el monto total de carbono.
