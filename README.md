# Jeu Traduction



* Installation :

Pour installer le jeu on peut, soit mettre tous les fichiers dans un même répertoire sur
un serveur http et accéder par la suite à l'url de la page JeuTraduction.html, soit tester
localement en ouvrant la page JeuTraduction.html avec un Navigateur (Chrome, Safari, ...).

* Fonctionnement technique :

 Au début, on charge le fichier des verbes à traduire (80 ko c’est pas énorme comme utilisation mémoire) et on initialise la page d'accueil de l'application. Lorsque l'utilisateur appui sur le bouton commencer, on prend un mot aléatoirement, on cherche sa traduction et on met à jour les indications de la réponse (nombre de lettres et première lettre de la réponse).
 En appuyant sur valider pour une bonne réponse on incrément le score, dans le cas échéant on le décrément et on affiche la bonne réponse. Une recherche d’un nouveau mot et de sa traduction se fait par la suite pour continuer le jeu.
 Un score nul est synonyme de la fin de la partie avec échec, par contre un utilisateur gagne lorsqu’il arrive à terme de la partie avec un score de 20 points. L’utilisateur peut alors recommencer une nouvelle partie


* Amélioration :

Ce jeu nécessite une amélioration au niveau de la représentation et du control du jeu.
Personnellement, je vois que l'intégration du désigne patterns MVC fourni par le Framework
Angular.JS va surement améliorer cette application simpliste.

* Temps de Réalisation :

 La conception et le développement de l'application m'a pris 3.5 heures mais j'aurais pu le faire en beaucoup moins de temps avec Angulars.JS.


#Moncef Lahouar