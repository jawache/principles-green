---
title: Formuler au mieux la demande 
summary: Au lieu de façonner l’offre pour répondre à la demande, essayez de façonner la demande pour qu’elle corresponde à l’offre
order: 7
tags: principle
language: fr-fr
---

[Le déplacement de la demande] (principles/carbon-intensity/#heading-demand-shifting) est la stratégie qui consiste à déplacer l'exécution des applications vers des régions ou des périodes où l'intensité en carbone est moindre, ou en d'autres termes, lorsque l'offre d'électricité renouvelable est élevée.

Le modelage de la demande est une stratégie similaire, mais au lieu de déplacer la demande vers une région ou une période différente, nous modelons notre demande, afin qu'elle corresponde à l'offre existante.

![alt_text](/assets/images/principles/demand-shaping-1.png "Si l'offre est élevée, augmentez la demande - faites-en plus dans vos applications - si l'offre est faible, diminuez la demande - faites-en moins dans vos applications").

Les logiciels de vidéoconférence en sont un bon exemple. Plutôt que de diffuser en continu la meilleure qualité possible à tout moment, ils modifient souvent la demande en réduisant la qualité vidéo pour donner la priorité à l'audio.

Un autre exemple est le TCP/IP. La vitesse de transfert augmente en fonction de la quantité de données pouvant être diffusées par le câble. 

Un troisième exemple est l'amélioration progressive avec le web. L'expérience du web s'améliore en fonction des ressources et de la bande passante disponibles sur l'appareil de l'utilisateur final.

[Comment mesurer la consommation d'énergie de votre site web](https://devblogs.microsoft.com/sustainable-software/how-to-measure-the-power-consumption-of-your-frontend-application/)

La mise en forme de la demande implique deux choses :

1. La séparation des applications en composants qui peuvent être mis à l'échelle de manière indépendante. 
2. La hiérarchisation des applications nécessaires à la prise en charge des fonctionnalités. Si l'offre est faible, il faut d'abord couper ou réduire les applications peu prioritaires. 

Avec la mise en forme de la demande, si vous détectez que l'intensité de carbone est élevée, vous *peut* choisir de limiter les fonctionnalités de votre application à l'essentiel.

Vous pouvez également mettre en œuvre la mise en forme de la demande en fonction du comportement de l'utilisateur. Au lieu de forcer un utilisateur à choisir l'une ou l'autre voie, présentez-lui des options et laissez-le prendre la décision finale.