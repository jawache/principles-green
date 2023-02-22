---
title: Moldeo de la demanda
summary: Crear aplicaciones que sean conscientes del carbono que emiten.
order: 7
redirect_url: https://learn.greensoftware.foundation/carbon-awareness#demand-shaping
tags: principle
---

<!-- TODO: Definir si desplazamiento de la demanda es apropiado Y cambiar el link al header dentro de carbon-intensity -->

[El desplazamiento de la demanda](/principles/carbon-intensity/#heading-demand-shifting) es una estrategia en la cual se reubican cargas de trabajo a diferentes regiones u horarios en los cuales la intensidad de carbono es menor, o visto de otra manera cuando la oferta de electidad renovable es alta.

El moldeo de la demanda es una estrategia similiar, solo que en lugar de mover la demanda a una región o tiempo diferente, la demanda se ajusta para que coincida con el suministro existente.

![alt_text](../assets/images/principles/demand-shaping-1.png 'Si la oferta es alta, aumente la demanda; haga más en sus aplicaciones; si la oferta es baja, disminuya la demanda; haga menos en sus aplicaciones.')

Un gran ejemplo de esto es el software de videoconferencia. En lugar de transmitir con la mayor calidad posible en todo momento, es posible reducir la demanda al reducir la calidad del video para priorizar el audio.

Otro ejemplo es TCP/IP. La velocidad de transferencia aumenta en respuesta a la cantidad de datos que se pueden transmitir por cable.

Un tercer ejemplo es la mejora progresiva con la web. La experiencia web mejora según los recursos y el ancho de banda disponibles en el dispositivo de los usuarios finales.
[Cómo medir el consumo de energía de su interfaz](https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-frontend-application/)

## Consciente de carbono vs. Eficiente en carbono

La eficiencia del carbono puede ser transparente para el usuario final. Puede ser más eficiente en todos los niveles al convertir el carbono en una funcionalidad útil y, al mismo tiempo, mantener la misma experiencia del usuario.

Pero hay un umbral en el que ser más eficientes en carbono no es suficiente. Si el costo de carbono de ejecutar una aplicación en este momento es demasiado alto, podemos cambiar la experiencia del usuario para reducir aún más las emisiones de carbono. En el momento en que el usuario se da cuenta de que la aplicación se está ejecutando de manera diferente, se convierte en una aplicación consciente del carbono.

La demanda de aplicaciones conscientes del carbono tiene que ver con el suministro de carbono. Cuando el costo en términos de carbono de ejecutar su aplicación sea alto, configure la demanda para que se ajuste con el suministro de energía. Esto puede suceder automáticamente o el usuario puede elegir.

## Eco-modes

Los modos ecológicos se utilizan a menudo, por ejemplo, en automóviles o lavadoras. Cuando este modo se active, el rendimiento cambia a medida que consumen menos recursos (gas / electricidad) para realizar la misma tarea. No es gratuito (de lo contrario, siempre elegiríamos modos ecológicos), por lo que hacemos concesiones. Debido a que es una compensación, los modos ecológicos casi siempre se presentan a un usuario como una opción, y el usuario decide si quiere usarlo y aceptar los compromisos.

Las aplicaciones de software también pueden tener modos ecológicos que, cuando se activan, cambian el comportamiento de la aplicación de dos formas potenciales:

- **Inteligencia**. Brindar información a los usuarios para que puedan tomar decisiones informadas.
- **Automática**. La aplicación toma automáticamente decisiones más agresivas para reducir las emisiones de carbono.

## Resumen

El moldeo de la demanda está relacionada con un concepto más amplio de sostenibilidad, que es reducir el consumo. Podemos lograr mucho volviéndonos más eficientes con los recursos, pero en algún momento, también necesitamos consumir menos. Como ingenieros de software ecológicos, ser eficientes en carbono significa que quizás cuando la intensidad del carbono es alta, en lugar de cambiar la demanda de cómputo, consideremos cancelarlo. Reducir las demandas de nuestra aplicación y las expectativas de nuestros usuarios finales.
