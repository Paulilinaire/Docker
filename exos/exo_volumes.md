# Exercirce Volume

- Créer un volume
    ```
    docker volume create website
   ```

- Créer un container utilisant l'image apache liant le volume à celui-ci
    ```
    docker run --name server-website-apache -d -p 5000:80 -v website:/usr/local/apache2/htdocs httpd
    ```

- Le volume doit accueillir notre website afin de pouvoir le récupérer en cas de changement de  serveur
    ```
    docker cp C:\Users\Administrateur\Desktop\my-website\. server-website-apache:/usr/local/apache2/htdocs/
    ```
    (copie du contenu du dossier "." dans le bureau, dans le container server-website-apache)


- Nous souhaitons maintenant lancer le website sur un serveur nginx 
     ```
    docker run --name server-website-nginx -d -p 3000:80 -v website:/usr/share/nginx/html nginx
   ```
   (Du coup, my-website run sur localhost 5000 avec apache et sur localhost 3000 avec nginx)