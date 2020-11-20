---
title: N-Tier
summary: Recommandations issues des principes du génie logiciel durable appliqués à une architecture N-Tier
---

[N-tier](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) L’architecture N-tier organise votre application en couches logiques distinctes en fonction de leur responsabilité. Les couches s’exécutent sur une série de niveaux physiquement séparés qui représentent des ressources de calcul.

En appliquant les principes de l’ingénierie logicielle durable, voici des exemples de changements que vous pouvez apporter à votre architecture N-tier pour l’optimiser pour la durabilité.

## Optimisez votre trafic réseau

Reduce the amount of traffic your architecture creates per operation as well as the distance each request and response travels.

* Réduisez la quantité de trafic que votre architecture crée par opération ainsi que la distance parcourue par chaque demande et réponse.
* Pensez à utiliser des en-têtes de mise en cache, qui permettent aux caches de navigateur et aux caches proxy d’avoir suffisamment d’informations pour mettre en cache les assets statiques en toute confiance. La mise en cache des assets statiques au niveau du navigateur ou du proxy permet aux futures demandes de ces assets d’être traitées par ces caches et réduit le trafic réseau vers votre application.
* Envisagez d’utiliser un CDN pour distribuer les ressources statiques de votre application au plus près de la source d’une demande. Cette répartition des assets réduit la distance que toutes les demandes d’assets statiques doivent parcourir sur le réseau.
* Dans la mesure du possible, réduisez la taille et optimisez vos web bundles et vos assets statiques.
    * Pensez à utiliser la compression et la décompression pour les données que vous transmettez sur le réseau. La compression et la décompression nécessitent généralement moins d’énergie globale que la transmission de données non compressées sur le réseau.

## Augmentez votre utilisation des calculs

Mettez à jour la distribution de votre application et des ressources de calcul afin d’utiliser moins de ressources mais avec un taux d’utilisation plus élevé. Cela réduit la quantité d’énergie dépensée par vos ressources de calcul dans un état inactif ou qui gaspillent de l’énergie sans effectuer de travail.

* i vous utilisez des machines virtuelles pour les ressources de calcul et qu’elles sont peu utilisées, envisagez de réduire la taille de ces machines virtuelles pour augmenter ler utilisation. Les machines virtuelles plus petites avec une utilisation plus élevée consomment généralement moins d’énergie que les machines virtuelles plus grandes avec une utilisation inférieure pour la même application.
* Évaluez la migration de votre application vers un PaaS lorsque cela est possible. En règle générale, les solutions PaaS sont dimensionnées de manière plus appropriée pour leur applicationet peuvent exécuter ces applications avec une utilisation élevée sur leurs ressources de calcul sous-jacentes.
* Envisagez d’utiliser des capacités de mise à l’échelle automatique ou de rafale pour vos ressources de calcul plutôt que d’allouer statiquement des ressources de calcul pour une capacité maximale à tout moment. Ces fonctionnalités vous permettent d’augmenter et de réduire vos ressources de calcul en fonction de la demande tout en maintenant une utilisation élevée de ces ressources de calcul.
* Si vous avez de nombreuses couches logiques au sein d’un niveau physique, envisagez d’augmenter vos niveaux physiques et de réorganiser l’emplacement d’exécution de vos couches logiques. Augmenter le nombre de niveaux physiques avec une organisation plus granulaire des couches logiques vous offrent plus de flexibilité pour mettre à l’échelle les couches logiques indépendamment. Cette flexibilité vous permet de maintenir une utilisation élevée de vos ressources de calcul et d’éviter les couches logiques inactives.

## Optimisez votre base de données

L’optimisation de la base de données que vous utilisez ainsi que de la manière dont les données sont stockées peut réduire l’énergie utilisée pour exécuter la base de données ainsi que le temps d’inactivité d’attente pour la fin des requêtes.

* Assurez-vous d’utiliser la meilleure base de données pour interagir avec votre ensemble de données. Par exemple, si vous exécutez de nombreuses requêtes relationnelles sur votre ensemble de données, une base de données relationnelle est mieux adaptée et probablement plus efficace à utiliser qu’une base de données NoSQL.
* Si aucune base de données n’est conçue pour gérer toutes les façons dont vous interagissez avec votre ensemble de données, envisagez de conserver des copies redondantes de vos données dans différentes bases de données et d’utiliser chaque base de données pour le sous-ensemble d’interactions le mieux adapté à cette base de données.
* Pensez à utiliser index si votre base de données le propose.
* Envisagez d’évaluer et d’optimiser vos requêtes.
* Pensez à utiliser un cache de base de données. Dans certains cas, la mise en cache peut réduire les requêtes redondantes vers la base de données et diminuer la consommation d’énergie de la base de données, en particulier pour les requêtes complexes ou gourmandes en calculs.
