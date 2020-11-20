---
title: Microservices
summary: Recommandations issues des principes du génie logiciel durable appliqués aux micro-services
---

[Microservices](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) L’architecture des microservices consiste en un ensemble de petits services autonomes. Chaque service est autonome et doit implémenter une seule capacité métier.
En appliquant les principes de l’ingénierie logicielle durable, voici des exemples de changements que vous pouvez apporter à votre architecture de microservices pour l’optimiser pour la durabilité.


## Optimisez votre trafic réseau

Réduisez la quantité de trafic que votre architecture crée par opération ainsi que la distance parcourue par chaque demande et réponse.

* Pensez à utiliser des en-têtes de mise en cache, qui permettent aux caches de navigateur et aux caches proxy d’avoir suffisamment d’informations pour mettre en cache les assets web statiques en toute confiance. La mise en cache des assets statiques au niveau du navigateur ou du proxy permet aux futures demandes de ces assets d’être traitées par ces caches et de réduire ainsi le trafic réseau vers votre application.
* Envisagez d’utiliser un CDN pour distribuer les ressources statiques de votre application au plus près de la source d’une demande. Cette répartition des assets web réduit la distance que toutes les demandes d’assets statiques doivent parcourir sur le réseau.
* Dans la mesure du possible, réduisez la taille et optimisez vos web bundles et vos assets web statiques.
    * Pensez à utiliser la compression et la décompression pour les données que vous transmettez sur le réseau. La compression et la décompression nécessitent généralement moins d’énergie globale que la transmission de données non compressées sur le réseau.

## Augmentez votre utilisation des calculs

Mettez à jour la distribution de votre charge de travail et des ressources de calcul afin d’utiliser moins de ressources mais avec un taux d’utilisation plus élevé. Cela réduit la quantité d’énergie dépensée par vos ressources de calcul dans un état inactif ou qui gaspillent de l’énergie sans effectuer de travail.

* Si vous utilisez des machines virtuelles pour les ressources de calcul et qu’elles sont peu utilisées, envisagez de réduire la taille de ces machines virtuelles pour augmenter ler utilisation. Les machines virtuelles plus petites avec une utilisation plus élevée consomment généralement moins d’énergie que les machines virtuelles plus grandes avec une utilisation inférieure pour la même charge de travail.
* Évaluez la migration de votre charge de travail vers un PaaS lorsque cela est possible. En règle générale, les solutions PaaS sont dimensionnées de manière plus appropriée pour leur charge de travail et peuvent exécuter ces charges de travail avec une utilisation élevée sur leurs ressources de calcul sous-jacentes.
* Envisagez d’utiliser des capacités de mise à l’échelle automatique ou de rafale pour vos ressources de calcul plutôt que d’allouer statiquement des ressources de calcul pour une capacité maximale à tout moment. Ces fonctionnalités vous permettent d’augmenter et de réduire vos ressources de calcul en fonction de la demande tout en maintenant une utilisation élevée de ces ressources de calcul.
* Si vous avez de nombreuses couches logiques au sein d’un niveau physique, envisagez d’augmenter vos niveaux physiques et de réorganiser l’emplacement d’exécution de vos couches logiques. Augmenter le nombre de niveaux physiques avec une organisation plus granulaire des couches logiques vous offrent plus de flexibilité pour mettre à l’échelle les couches logiques indépendamment. Cette flexibilité vous permet de maintenir une utilisation élevée de vos ressources de calcul et d’éviter les couches logiques inactives.


## Réduisez votre nombre de microservices

Une architecture de microservices est un moyen efficace de concentrer un service autour d’un domaine métier spécifique et de décentraliser la propriété et les connaissances au sein de l’équipe ou du système. Il est important de garantir le niveau d’abstraction approprié pour limiter la congestion, la latence et la complexité globale du réseau. 

* Envisagez de combiner des services, logiquement ou physiquement, là où des points de mise à l’échelle similaires existent pour réduire l’empreinte de l’architecture globale.
* Si deux microservices ou plus sont fortement couplés, envisagez la colocalisation pour réduire la congestion et la latence du réseau.
* Utilisez des langages et des piles technologiques qui optimisent l’efficacité d’une fonction de microservices spécifique. L’indépendance et l’abstraction des fonctionnalités d’une couche API signifie que vous êtes libre de prendre les décisions techniques qui maximisent l’utlisation dans votre pile technique pour chaque microservice.
* Envisagez d’exécuter des microservices gourmands en ressources dans une région à faible intensité de carbone.

## Optimisez votre base de données

L’optimisation de la base de données que vous utilisez ainsi que de la manière dont les données sont stockées peut réduire l’énergie utilisée pour exécuter la base de données ainsi que le temps d’inactivité d’attente pour la fin des requêtes.

* Assurez-vous d’utiliser la meilleure base de données pour interagir avec votre ensemble de données. Par exemple, si vous exécutez de nombreuses requêtes relationnelles sur votre ensemble de données, une base de données relationnelle est mieux adaptée et probablement plus efficace à utiliser qu’une base de données NoSQL.
* Si aucune base de données n’est conçue pour gérer toutes les façons dont vous interagissez avec votre ensemble de données, envisagez de conserver des copies redondantes de vos données dans différentes bases de données et d’utiliser chaque base de données pour le sous-ensemble d’interactions le mieux adapté à cette base de données.
* Pensez à utiliser index si votre base de données le propose.
* Envisagez d’évaluer et d’optimiser vos requêtes.
* Pensez à utiliser un cache de base de données. Dans certains cas, la mise en cache peut réduire les requêtes redondantes vers la base de données et diminuer la consommation d’énergie de la base de données, en particulier pour les requêtes complexes ou gourmandes en calculs.


## Comprenez vos limites en termes de latence

Dans de nombreux cas, les applications Web sont conçues par défaut avec des attentes de latence très faibles, en supposant qu’une réponse à une demande se produise immédiatement ou dès que possible. Cette hypothèse peut limiter vos options de réduction de la consommation d’énergie dans votre application. Envisagez d’évaluer la façon dont votre application est utilisée et, si vous pouvez assouplir les limites de latence dans certaines zones, ce qui peut augmenter vos options de réduction de l’empreinte carbone.

* Envisagez de placer certaines opérations en dehors du cycle de demande / réponse. Par exemple, s’il y a une demande d’envoi d’un e-mail qui bloque la réponse jusqu’à ce que l’e-mail soit envoyé, vous pouvez à la place envoyer l’e-mail de manière asynchrone à l’aide d’un processus de travail et débloquer la réponse.
* Considérez que l’exécution des processus de travail a une priorité inférieure à celle des processus Web. Cette hiérarchisation permet aux processus de travail de s’exécuter uniquement lorsque les ressources de calcul ne sont pas nécessaires aux processus Web et maintient une utilisation élevée.
* Envisagez d’exécuter les processus de travail dans une région à faible intensité de carbone.
* Envisagez de retarder l’exécution du processus de travail lorsque l’intensité en carbone est la plus faible.
