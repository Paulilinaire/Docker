# TP conteneur

## Partie 1

- En utilisant votre machine Windows, lancez le service Docker, s’il n’est pas lancé.

- Créer une conteneur Docker sur votre machine du jeu 2048 (voir screen jeux_2048).
    ```
   docker search game-2048
   docker pull jgreat/2048
   ```

- Vérifier que l’image est bien présente sur votre machine.
    ```
   docker images
   ```

- Lancer ce jeu sur un port disponible au travers d’un conteneur que vous allez appeler «jeu-votre-nom ». 
    ```
   docker run -d -p 8080:80 --name 2048game jgreat/2048
   ```

- Vérifier que le conteneur est bien lancé avec la commande adaptée.
    ```
    docker ps
    ```

- Créer un second conteneur qui va lancer le même jeu mais avec un nom différent «jeu2-votre-nom ».
    ```
   docker run -d -p 8081:80 --name 2048game2 jgreat/2048
   ```

- Les 2 jeux sont fonctionnels en même temps sur votre machine, effectuez la commande pour vérifier la présence des conteneurs.
    ```
   docker ps
   ```

- Ouvrez les 2 jeux sur votre navigateur. 
    `http://localhost:8080/`
    `http://localhost:8081/`

- Stopper les 2 conteneurs et assurez-vous que ces 2 conteneurs sont arrêtés.
    ```
   docker stop 2048game
   docker stop 2048game2
   docker ps 
   ```


- Relancez le conteneur «jeu2-votre-nom » et aller vérifier dans votre navigateur s’il fonctionne bien. Effectuez la commande pour voir s’il a bien été relancé. Puis stopper le. 
    ```
   docker run -d -p 8083:80 --name 2048game3 jgreat/2048
   ```

- Supprimez l’image du jeu 2048 et les conteneurs associés.
    ```
    docker rm 2048game3
    docker rm 2048game2
    docker rm 2048game
    docker rmi jgreat/2048
    ```

- Vérifiez que les suppressions ont bien été faite.
    ```
   docker images
   ```


## Partie 2


- Récupérer une image docker nginx.
    ```
   docker pull nginx
   ```

- Créer un conteneur en vous basant sur cette image en lui attribuant le nom suivant : « nginx-web».
    ```
    docker run -d -p 8080:80 --name nginx-web nginx
    ```

- Assurez-vous que l’image est bien présente et que le conteneur est bien lancé.
    ```
   docker images
   ```

- Ce serveur nginx web (nginx-web) devra être lancé sur un port disponible.

- Vérifier que le serveur est bien lancé au travers du navigateur.
    ```
   docker ps
   ```

- Une page web avec «Welcome to nignx » devrait s'afficher (voir nginx.png). 

- Effectuer la commande vous permettant de rentrer à l’intérieur de votre serveur nginx.
    ```
    docker exec -it nginx-web /bin/bash
    ```

- Une fois à l’intérieur, aller modifier la page html par défaut de votre serveur nginx en changeant le titre de la page en :  
Welcome «votre prenom ».
    ```
    cd /usr/share/nginx/html
   apt upgrade
   apt update
   apt install nano
   nano index.html
   ```

- Relancez votre serveur et assurez-vous que le changement à bien été pris en compte, en relançant votre navigateur.

- Refaite la même opération mais en utilisant le serveur web apache et donc il faudra créer un autre conteneur.
    ```
    docker search apache
    docker pull httpd
    docker run -d -p 8020:80 --name serveur-apache httpd
    ```

- Il faut supprimer le contenu complet de l'index.html et y mettre : "Je suis heureux et je m'appelle votre prenom".
    ```
    docker exec -it serveur-apache /bin/bash
    cd /usr/local/apache2/htdocs/
    apt upgrade
    apt update
    apt install nano
    nano index.html
   ```

- Le changement doit appaître dans votre navigateur.

## Partie 3


- Répétez 3 fois la même opération que pour le début de la partie 2, il faudra juste appelez vos conteneurs :

- « nginx-web2 ».
    ```
    docker run -d -p 8081:80 --name nginx-web2 nginx
    ```

- « nginx-web3 ».
    ```
    docker run -d -p 8082:80 --name nginx-web3 nginx
    ```

- « nginx-web4 ».
    ```
    docker run -d -p 8083:80 --name nginx-web4 nginx
    ```

- Il faudra faire en sorte que les pages html présente dans les fichiers ci-dessous s’affiche dans chacun des navigateurs en lien avec vos conteneurs :

- html5up-editorial-m2i.zip pour nginx-web2
    ```
    docker cp C:\Users\Administrateur\Desktop\Docker\exos\files_tp_conteneur\html5up-editorial-m2i.zip nginx-web2:/usr/share/nginx/html
    docker exec -it nginx-web2 /bin/bash
    cd /root
    apt install unzip
    unzip /root/html5up-editorial-m2i.zip -d ./ => pour décompresser fichier zip
    mv html5up-editorial-m2i/* usr/share/nginx/html => move le fichier vers le dossier html de nginx
    ```

- html5up-massively.zip pour nginx-web3
    ```
    docker cp C:\Users\Administrateur\Desktop\Docker\exos\files_tp_conteneur\html5up-editorial-m2i.zip nginx-web2:/usr/share/nginx/html
    docker exec -it nginx-web3 /bin/bash
    cd /root
    apt install unzip
    unzip /root/html5up-massively.zip -d ./usr/share/nginx/html
    ```

- html5up-paradigm-shift.zip pour nginx-web4
    ```
    docker cp C:\Users\Administrateur\Desktop\Docker\exos\files_tp_conteneur\html5up-paradidgm-shift.zip nginx-web2:/usr/share/nginx/html
    docker exec -it nginx-web4 /bin/bash
    cd /root
    apt install unzip
    unzip /root/html5up-paradidgm-shift.zip -d ./usr/share/nginx/html
    ```

- Stopper, ensuite, ces différents conteneurs.
    ```
    exit
    docker stop nginx-web nginx-web2 nginx-web3 nginx-web4
    ```
