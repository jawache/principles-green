---
title: Intensidad de carbono
summary: Consuma electricidad con la mínima intensidad de carbono
order: 3
redirect_url: https://learn.greensoftware.foundation/carbon-awareness/
tags: principle
---

La intensidad de carbono de la electricidad es una medida de cuantas emisiones de carbono (CO<sub>2</sub>eq) se producen por kilovatio hora de electricidad consumida.

La unidad estándar de intensidad de carbono es gCO<sub>2</sub>eq/kWh o gramos de carbono equivalente por kilovatio hora.

No toda la electricidad se produce de la misma forma. En distintas ubicaciones a distintas horas, la electricidad se produce usando una variedad de fuentes con _distintas emisiones de carbono_. Algunas fuentes, como eólica, solar, o hidroeléctrica, son _fuentes de energía renovable_ limpias que no emiten carbono. Otras _fuentes basadas en combustibles fósiles_ emiten distintas cantidades de carbono para producir electricidad. Por ejemplo, las centrales termoeléctricas de gas emiten menos carbono que las centrales termoeléctricas de carbon.

Si su computadora está enchufada directamente a un parque eólico, entonces la electricidad que consume tendría una intensidad de carbono de 0 gCO<sub>2</sub>eq/kWh ya que un parque eólico no emite carbono para producir electricidad. La mayoría de gente no se pueden conectar directamente a un parque eólico, en su lugar se conectan a redes eléctricas que se suelen proveer de electricidad de una mezcla de fuentes que producen distintas cantidades de carbono. Por lo tanto, cuando se conecta a una red su intensidad de carbono es normalmente un número mayor que 0.

## Variabilidad de la intensidad de carbono

- **La intensidad de carbono cambia con la ubicación** ya que algunas regiones tienen una mezcla de energía que contiene más fuentes de energía limpia que otras regiones.
- **La intensidad de carbono también cambia con el tiempo** debido a la naturaleza variable de las energías renovables. Por ejemplo, Cuando está nublado o no sopla el viento, la intensidad de carbono se incrementa ya que hay más electricidad proveniente de fuentes que emiten carbono en su mezcla.

![alt_text](/assets/images/principles/carbon-intensity-1.png 'La intensidad de carbono cambia con el tiempo al tiempo que las fuentes renovables se incrementan o decrementan.')

La demanda de electricidad varía a lo largo del día, esa demanda debe ser cubierta por la oferta. Alguna de esa oferta _puede fácilmente_ controlar la potencia que produce, p. ej. una planta de carbon puede quemar menos carbón. Alguna de esa oferta _no puede fácilmente_ controlar la potencia que produce, p. ej. un parque eólico no puede controlar cuanto sopla el viento, solo puede descartar (disminuir) electricidad que se había generado esencialmente de forma gratuita.

![alt_text](/assets/images/principles/carbon-intensity-2.png 'Las fuentes de energía de origen fósil habitualmente son las primeras que disminuyen su producción y las renovables las últimas.')

Como subproducto de la manera en la que los mercados energéticos funcionan, a medida que la demanda de electricidad disminuye, habitualmente las fuentes basadas en combustibles fósiles de grandes emisiones reducen su producción primero y las renovables la reducen de últimas.

> Reducir la cantidad de electricidad consumida por tu aplicación puede ayudar a **disminuir** la intensidad de carbono en la mezcla de las redes eléctricas locales.

### Intensidad de carbono marginal

Si elige consumir más energía, esa energía provendrá de una _central eléctrica de punta_. Esa central eléctrica puede controlar la cantidad de energía que produce, las renovables no pueden controlar el sol o el viento, así que las centrales eléctricas de punta suelen usar combustibles fósiles.

La central eléctrica marginal emite carbono, en cualquier momento tenemos la intensidad de carbono de la mezcla energética de la red eléctrica pero también la intensidad de carbono de la energía que debería habilitarse para cubrir la demanda, es lo que llamamos _intensidad de carbono marginal_.

Las centrales eléctricas que consumen combustibles fósiles rara vez pueden reducir su producción a 0, tienen un límite mínimo de funcionamiento, algunas no pueden reducir su producción en absoluto y son consideradas centrales de base. Por este motivo, a veces podemos alcanzar el escenario perverso donde descartamos energía renovable que fue creada de forma gratuita para consumir energía proveniente de centrales termoeléctricas basadas en combustibles fósiles creada con combustibles que han costado dinero.

![alt_text](/assets/images/principles/carbon-intensity-3.png 'Hay momentos cuando la intensidad de carbono marginal alcanza 0')

> La intensidad de carbono puede ser 0 gCO<sub>2</sub>eq/kWh cuando la nueva carga puede ser proveída con oferta de una fuente renovable que de otro modo habría sido descartada.

### Desplazamiento de la demanda

En la actualidad no tenemos muchos métodos para almacenar o amortiguar los sistemas de redes eléctricas. Normalmente la electricidad se produce de modo que la oferta siempre cubra la demanda. Si se genera más energía de fuentes renovables que la necesaria para soportar la demanda, y todas nuestras opciones de almacenamiento están llenas, entonces descartamos (tiramos) esa energía limpia. Una solución es desplazar las cargas de trabajo a horas y ubicaciones donde haya mayor suministro de energías renovables, esto se llama _desplazamiento de la demanda_.

Si puede ser flexible con el cuando y donde ejecuta sus cargas de trabajo, entonces puede elegir consumir electricidad cuando la intensidad de carbono es menor y parar cuando la intensidad de carbono es alta. Por ejemplo, entrenar un modelo de aprendizaje de máquinas a una hora distinta o en una región distinta donde la intensidad de carbono sea mucho menor.

> [Estudios](https://ieeexplore.ieee.org/document/6128960) han mostrado que estas acciones pueden resultar en una reducción de emisiones de carbono entre el 45% y 99% dependiendo del número de renovables en la red.

Mire su aplicación de extremo a extremo, identifique oportunidades para ser flexible respecto a las cargas de trabajo y use la intensidad de carbono de la electricidad como señal para cuando ejecutar esas cargas de trabajo.

![alt_text](/assets/images/principles/demand-shifting-1.png 'En este ejemplo la linea roja es la intensidad de carbono de la electricidad, si desplazamos la carga de trabajo un poco al futuro desde su hora preferida de ejecución, podemos sacar provecho de una intensidad de carbono de la electricidad menor.')

### Calculando la intensidad de carbono

Hay múltiples servicios disponibles que le permiten obtener datos en tiempo real sobre la intensidad de carbono actual de diferentes redes eléctricas, algunos proveen estimaciones de intensidad de carbono en el futuro, algunos proveen la intensidad de carbono marginal.

- [Carbon Intensity API](https://carbonintensity.org.uk/): Recurso gratuito para intensidad de carbono en el Reino Unido.
- [ElectricityMap](https://api.electricitymap.org/): Gratuito para uso no comercial de un sñolo país, soluciones premium para uso comercial y acceso a múltiples países.
- [WattTime](https://www.watttime.org/): Gratuito para una sola región de red, soluciones premium para multi-red y emisiones marginales en tiempo real.
