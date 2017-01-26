# Liste Marvel

**Objectif: Utiliser une API Marvel pour afficher une liste de superhéros avec React.**

Pour lancer l'app:  
1. cloner le repo  
2. *npm i*  
3. *npm start*  

## Techo utilisées
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [axios](https://github.com/mzabriskie/axios)

## Approche

J'ai choisi d'utiliser le template *create-react-app* et *react-bootstrap* pour leur simplicité et rapidité de mise en place et d'exécution.. *Axios*, étant beaucoup plus léger que jQuery et permettant l'utilisation de promesses, est ma library de choix pour appeler des APIs.  
Tout le code important pour cet exercice est dans **src/components**.  
* J'ai commencé par créer *CharactersContainer js*. Ce composant fait un appel à l'API à l'ouverture de la page puis *map* l'*array* obtenue dans *Character.js*. Il se charge aussi d'établir le *grid* système.
* *Character.js* prend l'objet du personnage en *props* puis s'occupe de le disposer dans un *react Thumbnail*.
* Le composant *ModalBody.js* n'est pas vraiment nécessaire ici, cependant il permet l'ajout éventuel d'un autre appel à l'API pour obtenir plus d'informations.
