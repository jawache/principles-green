---
title: Carbono incorporado
summary: Construir aplicaciones que sean eficientes con el hardware
order: 4
tags: principle
language: es
---
El dispositivo en el que estás leyendo este documento liberó algo de carbono en su creación, una vez que alcanza el fin de su vida útil desecharlo podría producir más.
El carbono incorporado es la cantidad de contaminación por carbono emitida durante la creación y desecho de un dispositivo. Para calcular la contaminación por carbono de las computadoras corriendo tu software, toma en cuenta tanto la contaminación por correr la computadora como el carbono incorporado de la computadora.

Dependiendo de la intensidad de carbono de la mezcla de energía, el costo de carbono incorporado de un dispositivo puede llegar a ser *significante* comparado al costo de la electricidad que lo mantiene funcionando.

Por ejemplo, un [servidor Dell R640 2019](https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-poweredge-r640.pdf) tiene un costo amortizado de carbono de 320 kg CO<sub>2</sub>eq/año. También se espera que consuma 1760.3 kWh/año. La intensidad de carbono promedio en la unión Europea es 0.276 kg CO<sub>2</sub>eq/kWh.

> Por lo tanto, el costo total de carbono será 320 + (0.276 * 1760.3) = 805 kg de carbono por año, de lo cual 320 kg o aproximadamente *40% corresponde al carbono incorporado*. El carbono incorporado es un contribuyente al carbono total emitido por el hardware.

Al pensar en el carbono incorporado en esta manera, cualquier dispositivo, incluso uno que no está consumiendo electricidad, efectivamente libera carbono durante su ciclo de vida.

## No desperdiciando hardware

Para el momento de adquirir una computadora, ya emitió mucho carbono. Ellas también tienen una fecha de expiración, las computadoras se hacen viejas, no pueden manejar los trabajos actuales, y necesitan se actualizadas. Si se ve de esta manera, el hardware es un representante del carbono, así que como un Ingeniero de Software Verde, es necesario es **eficiente con el hardware** si nuestra meta es ser **eficiente con el carbono**.

Se pueden hacer muchas cosas para ser eficiente con el hardware, pero una cosa que se puede hacer es ayudar a extender la fecha de expiración en el hardware. Las computadoras no se gastan, no tienen partes móbiles, sólo se vuelven obsoletas. Se vuelven obsoletas porque continuamente estamos creando software que reta los límites.

## Extendiendo la vida útil del hardware

Una manera de considerar el carbono incorporado es amortizando el carbono sobre la expectativa de vida de un dispositivo. Por ejemplo, si tomó 4 toneladas de carbono construir un servidor y el servidor tiene una expectativa de 4 años, podemos considerar a esto como el equivalente de liberar 1 tonelada de carbono por cada año de su vida útil.

![alt_text](/assets/images/principles/embodied-carbon-1.png "Carbono incorporado de un servidor amortizado sobre 4 años.")

Si tan sólo añadimos un año a la vida útil de nuestro servidor Dell R640 2019, el carbono amortizado disminuye desde 320kg CO<sub>2</sub>eq/año hasta 256 kg CO<sub>2</sub>eq/año.

![alt_text](/assets/images/principles/embodied-carbon-2.png "Carbon incorporado del mismo servidor amortizado sobre 5 años.")

El hardware es retirado ya sea porque se descompone o porque se le dificulta manejar las cargas de trabajo actuales. El software no puede ayudar con el primer punto, pero si podemos construir aplicaciones que puedan correr en hardware más antiguo, podemos ayudar con el segundo.
