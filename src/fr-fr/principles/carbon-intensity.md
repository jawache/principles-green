---
title: Carbon Intensity
summary: Consommer de l'électricité avec la plus faible intensité de carbone
order: 3
tags: principle
language: fr-fr
---

L'intensité carbone de l'électricité est une mesure de la quantité d'émissions de carbone (CO<sub>2</sub>éq) produite par kilowatt-heure d'électricité consommée.

L'unité standard de l'intensité carbone est le gCO<sub>2</sub>eq/kWh ou grammes de carbone par kilowattheure.

Toute l'électricité n'est pas produite de la même manière. En différents endroits et à différents moments, l'électricité est produite à partir de diverses sources avec *différentes émissions de carbone*. Certaines sources, telles que le vent, le soleil ou l'hydroélectricité, sont propres, *sources renouvelables* qui n'émettent pas de carbone. D'autres *sources de combustibles fossiles* émettent des quantités variables de carbone pour produire de l'électricité. Par exemple, les centrales électriques au gaz émettent moins de carbone que les centrales au charbon.

Si votre ordinateur est branché directement sur un parc éolien, l'électricité qu'il consomme aurait une intensité carbonique de 0 gCO<sub>2</sub>éq/kWh puisqu'un parc éolien n'émet pas de carbone pour produire cette électricité. La plupart des gens ne peuvent pas se brancher directement sur un parc éolien, ils se branchent plutôt sur des réseaux électriques qui sont généralement alimentés en électricité par un ensemble de sources qui produisent des quantités variables de carbone. Par conséquent, lorsque vous vous branchez sur un réseau, votre intensité carbone est généralement supérieure à 0.

## Variabilité de l'intensité de carbone

- **L'intensité en carbone varie en fonction du lieu** car certaines régions ont un mix énergétique qui contient plus de sources d'énergie propre que d'autres régions. 
- **L'intensité de carbone varie également dans le temps** en raison de la nature variable des énergies renouvelables. Par exemple, lorsqu'il fait nuageux ou que le vent ne souffle pas, l'intensité en carbone **augmente** car une plus grande partie de l'électricité dans votre mix provient de sources qui émettent du carbone.

![alt_text](/assets/images/principles/carbon-intensity-1.png "L'intensité de carbone change au fil du temps, à mesure que les sources renouvelables augmentent ou diminuent.")

La demande d'électricité varie au cours de la journée, cette demande doit être satisfaite par l'offre. Une partie de cette offre _peut facilement_ contrôler l'énergie qu'elle produit, par exemple une centrale au charbon peut brûler moins de charbon. Une partie de cette offre _ne peut pas facilement_ contrôler l'énergie qu'elle produit, par exemple un parc éolien ne peut pas contrôler la quantité de vent qui souffle, il ne peut que jeter (réduire) l'électricité qui a été produite essentiellement gratuitement.

![alt_text](/assets/images/principles/carbon-intensity-2.png "Les sources d'énergie à base de combustibles fossiles sont généralement réduites en premier et les énergies renouvelables en dernier.")

Le fonctionnement des marchés de l'énergie est un sous-produit de la baisse de la demande d'électricité. En général, les sources d'énergie fossiles à fortes émissions sont réduites en premier, les énergies renouvelables étant réduites en dernier.

> Réduire la quantité d'électricité consommée dans vos applications peut contribuer à **réduire** l'intensité carbone du mix énergétique dans les réseaux locaux.


### Intensité marginale de carbone

Si vous choisissez de consommer plus d'énergie, cette énergie provient de la *centrale électrique marginale*. Cette centrale est capable de contrôler l'énergie qu'elle produit. Les énergies renouvelables ne peuvent pas contrôler le soleil ou le vent, c'est pourquoi les centrales marginales sont souvent alimentées par des combustibles fossiles. 

La centrale marginale émet du carbone, à tout moment nous avons l'intensité carbone du mix énergétique dans le réseau mais aussi l'intensité carbone de l'énergie qu'il faudrait mettre en ligne pour répondre à la nouvelle demande, c'est ce qu'on appelle l' *intensité carbone marginale*.

Les centrales électriques à combustible fossile sont rarement ramenées à 0, elles ont un seuil de fonctionnement minimum, certaines ne sont pas du tout redimensionnées ; elles sont considérées comme étant toujours en charge de base. De ce fait, nous pouvons parfois atteindre le scénario pervers où nous jetons (réduisons) l'énergie renouvelable qui a été créée gratuitement afin de consommer l'énergie des centrales à combustibles fossiles créées avec un combustible qui coûte de l'argent.

![alt_text](/assets/images/principles/carbon-intensity-3.png "Il y a des moments où l'intensité marginale de carbone atteint 0")

> L'intensité marginale de carbone pourrait être de 0 gCO<sub>2</sub>éq/kWh lorsque la nouvelle charge serait satisfaite par un approvisionnement provenant d'une source renouvelable qui, autrement, aurait été réduite.

### Déplacement de la demande

Il y a actuellement peu de stockage ou de tamponnage dans les réseaux électriques. Normalement, l'électricité est produite, de sorte que l'offre répond toujours à la demande. Si la quantité d'énergie produite à partir d'énergies renouvelables est supérieure à celle nécessaire pour répondre à la demande et que toutes nos options de stockage sont pleines, nous réduisons (jetons) cette énergie propre. Une solution consiste à déplacer les charges de travail vers des moments et des lieux où l'offre d'énergie renouvelable est plus importante, ce que l'on appelle le *déplacement de la demande*.

Si vous pouvez faire preuve de souplesse quant au moment et à l'endroit où vous effectuez les charges de travail, vous pouvez alors choisir de consommer de l'électricité lorsque l'intensité en carbone est moindre et de faire une pause lorsque l'intensité en carbone est élevée. Par exemple, former un modèle d'apprentissage machine à un autre moment ou dans une autre région où l'intensité de carbone est beaucoup plus faible.

> [Des études](https://ieeexplore.ieee.org/document/6128960) ont montré que ces actions peuvent entraîner une réduction du carbone allant de 45 à 99 % selon le nombre d'énergies renouvelables alimentant le réseau.

Examinez votre demande de bout en bout, identifiez les possibilités de flexibilité concernant les charges de travail et utilisez l'intensité carbone de l'électricité comme un signal pour savoir quand ou si vous devez exécuter ces charges de travail.

![alt_text](/assets/images/principles/demand-shifting-1.png "Dans cet exemple, la ligne rouge correspond à l'intensité en carbone de l'électricité. Si nous décalons un peu la charge de travail par rapport à l'heure de démarrage préférée, à savoir minuit, nous pouvons profiter d'une électricité à plus faible intensité en carbone.")

### Calcul de l'intensité carbone

Il existe plusieurs services qui vous permettent d'obtenir des données en temps réel concernant l'intensité de carbone actuelle des différents réseaux électriques, certains fournissent des estimations de l'intensité de carbone future, d'autres l'intensité de carbone marginale. 

- [Carbon Intensity API](https://carbonintensity.org.uk/): Ressource gratuite pour les données sur l'intensité en carbone au Royaume-Uni.
- [ElectricityMap](https://api.electricitymap.org/): Gratuit pour l'utilisation non commerciale dans un seul pays, solutions premium pour l'accès commercial et multi-pays.
- [WattTime](https://www.watttime.org/): Gratuit pour une seule région de réseau, solutions pour les émissions marginales multi-réseaux et en temps réel.