---
title: Proporcionalidad de energía
summary: Maximizar la eficiencia energética del hardware
order: 5
tags: principle
language: es
---

[La proporcionalidad de energía](https://es.wikipedia.org/wiki/Energ%C3%ADa_proporcional_a_la_computaci%C3%B3n) es una medición de la relación entre la energía consumida en un sistema de cómputo y la proporción en la que trabajo útil es hecho (su utilización).

La utilización es una medición de la cantidad de recursos utilizados en una computadora, usualmente manejada como un porcentaje. Una computadora inactiva tiene un porcentaje bajo de utilización y no está siendo utilizada, una computadora corriendo a su máxima capacidad tiene un alto porcentaje y está siendo utilizada en su totalidad.

La relación entre poder y utilización no es _exactamente_ proporcional.

![alt_text](/assets/images/principles/energy-proportionality-1.png "Con una utilización de 0% la computadora aún requiere 100W, con una utilización del 50% requiere 180W y con una utilización del 100% requiere 200W. La relación entre el consumo de energía y la utilización no es lineal y no cruza el origen.")

Debido a esto, entre más se utiliza una computadora, más eficiente se vuelve en convertir electricidad a operaciones computacionales útiles. Ejecutar tu trabajo en los menores servidores posibles con la mayor proporción de utilización maximiza su eficiencia de energía.

Una computadora inactiva, incluso una con utilización cero, aún consume energía. Este *consumo estático de enegía* varía de acuerdo a la configuración y a los componentes de hardware, pero todos los componentes tienen algo de consumo estático de energía. Esta es una de las razones por las que las PCs, laptops y dispositivos móbiles cuentan con modos de ahorro de energía. Si el dispositivo está inactivo, eventualmente desencadenará un modo de hibernación y podrá el disco y la pantalla a dormir o incluso cambiará la frequencia del CPU. Estos modos de ahorro de energía disminuyen el consumo de electricidad, pero tienen desventajas como el reinicio lento cuando el dispositivo vuelve a activarse.

Los servidores usualmente no son configurados para un ahorro de energía agresivo o incluso mínimo. Muchos casos de uso de servidores requieren una capacidad completa tan rápido como sea posible en respuesta a requerimientos que fluctuan. This can leave many servers in idle modes during low demand periods. An idle server has a cost both from embedded carbon and its inefficient utilization.

El enfoque más eficiente y ecologíco es ejecutar tu trabajo en tan pocos servidores como sea posible con la **mayor proporción de utilización**.
