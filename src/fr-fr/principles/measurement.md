---
title: Mesure et optimisation 
summary: Concentrez-vous sur les optimisations de bout en bout qui augmentent l’efficacité globale en empreinte carbone
order: 8
tags: principle
language: fr-fr
---

Vous devez comprendre l'efficacité carbone de toutes les parties de votre application afin de comprendre où l'effort doit être prioritaire. Par exemple, vaut-il la peine de passer deux semaines à réduire les mégaoctets des communications réseau si les requêtes de la base de données entraînent l'émission de dix fois plus de carbone ?

Les optimisations les plus efficaces viendront des responsables du développement et de l'exécution des applications, qui comprendront la pollution au carbone d'une application sur l'ensemble de la cheminée, du front-end au centre de données. 

Une des clés du succès de l'optimisation est de choisir un critère de mesure qui donnera des signaux clairs quant à l'endroit où les efforts d'optimisation doivent être déployés.

## Carbone

La mesure du carbone émis est un défi complexe, avec des parties de la cheminée qui doivent être estimées plutôt que mesurées, mais avec un certain effort, c'est possible.

En raison de la variabilité de l'intensité du carbone et d'autres dépendances, le carbone total émis peut varier en fonction de l'heure de la journée ou de la région où l'application est exécutée. 

La même application mesurée à *différents moments* produira des quantités de carbone différentes. Cela peut être un bon signal, surtout si vous êtes ouvert à des changements de charge de travail ou si vous vous concentrez sur l'optimisation de l'énergie, cela peut être du bruit.


## Énergie

L'énergie consommée par votre application peut varier à chaque fois qu'elle fonctionne, il peut s'agir d'un signal d'optimisation ou d'un élément que vous souhaitez contrôler.

La même application exécutée sur **un matériel différent** peut entraîner des quantités d'énergie différentes en raison des différences d'efficacité énergétique entre les composants du matériel.

En raison du principe de proportionnalité énergétique, une même application exécutée sur le même matériel mais à des moments **différents** peut entraîner des quantités d'énergie différentes parce que l'utilisation du matériel est différente entre les deux exécutions. En d'autres termes, le matériel peut exécuter d'autres applications pendant la deuxième exécution, ce qui modifie l'efficacité énergétique globale du matériel.

Dans l'ensemble, cependant, la création d'applications qui consomment moins d'électricité pour une même performance et un même rendement perceptible par l'homme est un bon indicateur de la réduction des émissions de carbone.

Il existe des dispositifs, des outils et des bibliothèques qui vous aident à mesurer l'énergie consommée par une application.

- [Joulemètre (amorti)](https://www.microsoft.com/en-us/research/project/joulemeter-computational-energy-measurement-and-optimization/) 
Estimation de la consommation électrique globale de l'unité centrale, de la mémoire et du disque ; cependant, pour une seule application, l'énergie de l'unité centrale est stockée. 

 
- [PowerAPI](http://powerapi.org/)
Une bibliothèque de surveillance du système ne fonctionne que pour GNU/Linux et ne calcule que l'énergie du CPU, elle calcule cependant l'énergie utilisée par processus. 

 
- [Intel Power Gadget](https://software.intel.com/en-us/articles/intel-power-gadget)
Ne fonctionne que sur les processeurs Intel Core, ne calcule que la consommation d'énergie due au CPU et ne la répartit pas par processus. 
 
Une analyse approfondie des différents outils logiciels et matériels permettant de mesurer la consommation d'énergie se trouve dans le document [Software development methodology in a Green IT environment](https://tel.archives-ouvertes.fr/tel-01724069/document)


## Coût

À un moment donné, le coût de l'électricité est pris en compte dans _la plupart_ des services. Construire des applications qui fonctionnent le moins cher possible est généralement un bon substitut pour les applications qui émettent moins de carbone.

## Mise en réseau

Le coût de l'électricité dans les réseaux n'est souvent pas pris en compte. Le nombre de services qui offrent une bande passante illimitée pour un prix unique signifie qu'il y a peu de pression sur les prix pour réduire la bande passante.  

Mesurer puis réduire la quantité et la distance que vos données doivent parcourir est un bon indicateur de la réduction du carbone.

## Performance

Si vous pouvez concevoir une application plus performante **pour le même niveau d'utilisation**, alors il est probable que cela réduise le carbone global.

