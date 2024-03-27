**Exercice : Utilisation basique de conteneurs Docker**

**Objectif :** Créer, exécuter et explorer des conteneurs Docker.

**Étapes :**

1. **Vérification de l'installation :**
   - Assurez-vous d'avoir Docker installé sur votre machine.

2. **Recherche d'une image sur le hub Docker :**
   - Rechercher l' image nginx sur le hub Docker.Par exemple, recherchons une image "nginx" :
   ```
   docker search nginx
   ```

3. **Téléchargement d'une image :**
   - téléchargez l'image nginx sur votre machine.
   ```
   docker pull nginx
   ```

4. **Exécution d'un conteneur :**
   - Exécutez un conteneur basé sur l'image que vous avez téléchargée.
     Démarrer un conteneur détaché, expose le port 80 du conteneur sur le port 8080 de votre machine, et donne un nom au conteneur.
   ```
   docker run -d -p 8080:80 --name exo3 nginx
   ```

5. **Vérification du conteneur en cours d'exécution :**
   - Avec une commande vérifiez que le conteneur est en cours d'exécution.
   ```
   docker ps
   ```

   - Ouvrez un navigateur web et accédez à `http://localhost:8080` pour voir si la page d'accueil de Nginx s'affiche.

6. **Exploration du conteneur :**
   - Utilisez une commande pour accéder à une session interactive à l'intérieur du conteneur.
   ```
   docker exec -it exo3 /bin/bash
   ```

   - Explorez le système de fichiers à l'intérieur du conteneur.
   Note : le gestionnaire de package sur nginx est apt
   ```
   cd /usr/share/nginx/html
   apt upgrade
   apt update
   apt install nano
   nano index.html
   ```

   - Modifier la page index.html du serveur nginx.


7. **Arrêt et suppression du conteneur :**
   - Arrêtez le conteneur.
   ```
   docker stop exo3
   ```

   - Supprimez le conteneur.
   ```
   docker rm exo3
   ```

Cet exercice devrait vous donner une idée de base de la création, de l'exécution, et de l'exploration de conteneurs Docker sans se concentrer sur les Dockerfiles ou Docker Compose.