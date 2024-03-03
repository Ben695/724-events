# Débogage du Site d'Agence d'Événementiel

## Introduction

Ce projet consiste à identifier et corriger les bugs du site web d'une agence d'événementiel, en utilisant une approche systématique pour améliorer la stabilité et la performance de l'application. Le but est de fournir une expérience utilisateur fluide et sans erreur, en se concentrant sur la correction des problèmes liés à l'affichage, la navigation, et les fonctionnalités dynamiques de l'application.

## Processus de Débogage

### Étape 1 : Mise en Place de l'Environnement de Développement

- Configuration de l'environnement React avec Node.js et Yarn.
- Clonage du repository et installation des dépendances.
- Lancement de l'application en mode développement et exécution des tests initiaux.

### Étape 2 : Installation de React Developer Tools

- Installation de React Developer Tools pour naviguer dans l'arbre des composants React et observer la propagation des états et des contextes.

### Étape 3 : Réparation des Bugs

- Identification et correction des bugs en se basant sur les échecs des tests et les comportements anormaux observés lors de l'utilisation de l'application.
- Vérification que tous les tests passent avec succès après les corrections.

### Étape 4 : Rédaction du Cahier de Recette

- Élaboration d'une liste de scénarios de tests pour confirmer le bon fonctionnement de toutes les fonctionnalités attendues.
- Assurance que l'application répond aux besoins du client et qu'elle est prête pour la mise en production.

## Technologies Utilisées

- React
- Node.js
- Yarn
- Jest pour les tests unitaires et d'intégration

## Guide de Démarrage

Pour démarrer avec ce projet, suivez les instructions ci-dessous :

1. **Clonez le dépôt** :

    ```bash
    git clone https://github.com/Ben695/724-events.git
    ```

2. **Installez les dépendances** :

    ```bash
    cd src
    yarn install
    ```

3. **Lancez l'application** :

    ```bash
    yarn start
    ```

4. **Exécutez les tests** :

    ```bash
    yarn test --watch
    ```


