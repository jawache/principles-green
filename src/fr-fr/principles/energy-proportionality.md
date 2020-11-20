---
title: Proportionnalité énergétique 
summary: Faire fonctionner les serveurs à un taux d'utilisation élevé
order: 5
tags: principle
language: fr-fr
---

[Proportionnalité énergétique] (https://en.wikipedia.org/wiki/Energy_proportional_computing) est une mesure de la relation entre la puissance consommée dans un système informatique et le rythme auquel un travail utile est effectué (son utilisation).

L'utilisation est une mesure de la quantité de ressources d'un ordinateur qui est utilisée, généralement exprimée en pourcentage. Un ordinateur inactif a un faible pourcentage d'utilisation et n'est pas utilisé, un ordinateur fonctionnant à sa capacité maximale a un pourcentage élevé et est pleinement utilisé.

La relation entre la puissance et l'utilisation n'est pas _exactement_ proportionnelle. 

![alt_text](/assets/images/principles/energy-proportionality-1.png "A 0% d'utilisation, l'ordinateur consomme toujours 100W, à 50% d'utilisation, il consomme 180W et à 100% d'utilisation, il consomme 200W. La relation entre la consommation d'énergie et l'utilisation n'est pas linéaire et ne croise pas l'origine").

Un ordinateur inactif, même à 0% d'utilisation, consomme toujours de l'électricité. Cette *puissance statique* varie en fonction de la configuration et des composants matériels, mais tous les composants ont une certaine puissance statique. C'est l'une des raisons pour lesquelles les PC, les ordinateurs portables et les appareils mobiles disposent de modes d'économie d'énergie. Si l'appareil est inactif, il finira par déclencher un mode d'hibernation et mettre le disque et l'écran en veille ou même changer la fréquence du CPU. Ces modes d'économie d'énergie permettent d'économiser de l'électricité, mais ils présentent d'autres avantages, comme un redémarrage plus lent lorsque l'appareil se réveille. 

Les serveurs ne sont généralement pas configurés pour des économies d'énergie importantes, voire minimales. De nombreux cas d'utilisation de serveurs exigent une pleine capacité le plus rapidement possible en réponse à des demandes qui évoluent rapidement. Cela peut laisser de nombreux serveurs en mode d'attente pendant les périodes de faible demande. Un serveur inactif a un coût à la fois en raison du carbone incorporé et de son utilisation inefficace. 

L'approche la plus efficace et la plus écologique consiste à travailler sur le moins de serveurs possible avec le **plus haut taux d'utilisation**.
