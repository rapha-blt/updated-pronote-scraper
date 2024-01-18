
# Pronote Scraper

Programme node.js pour récupérer automatiquement des données sur pronote.

J'ai mis à jour avec pronote 2024 et pour l'authentification via l'ENT

Si vous utilisez d'autres types d'authentification faites une request




## Setup

Ouvrez le dossier dans un environnement de travail comme VS Code et créez un fichier **.env** et remplissez le de la façon suivante : 

```shell
ENT_LINK=https:// #Lien vers votre page de connexion ent
USERNAME= #votre identifiant
PASSWORD= #votre mot de passe
```

Attention il faut que votre page de connexion ressemble à celle-ci : 

![Screenshot](https://imgur.com/4f38lWp.png)

## Utilisation

Ouvrez le terminal naviguez vers le dossier du projet et initialisez le projet avec :

```shell
npm i
```

puis lancez le programme avec

```shell
node index.js
```

## Output

Vous devriez obtenir ceci dans la console (avec vos valeurs):

```shell
Moyenne générale élève: 00.00
Moyenne générale classe: 00.00
```
## Auteur

- [@rapha-blt](https://www.github.com/rapha-blt)

