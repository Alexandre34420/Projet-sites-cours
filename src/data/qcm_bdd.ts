import type { QcmItem } from '../data';

export const qcmBddData: QcmItem[] = [
  {
    id: 301,
    subject: "Bases de Données & SQL",
    question: "Dans la méthode MERISE, quelle est la différence entre le MCD, le MLD et le MPD ?",
    options: [
      "Le MCD est le code SQL, le MLD est le schéma Entité/Association, et le MPD est l'analyse des besoins",
      "Le MCD est le modèle graphique Entité/Association, le MLD est la traduction en tables relationnelles, et le MPD est l'implémentation SQL dans un SGBD",
      "Il n'y a aucune différence, ce sont trois synonymes",
      "Le MCD gère les requêtes SELECT tandis que le MLD gère les INSERT"
    ],
    answer: "Le MCD est le modèle graphique Entité/Association, le MLD est la traduction en tables relationnelles, et le MPD est l'implémentation SQL dans un SGBD",
    explanation: "On passe du problème métier au MCD (Entités/Associations), puis on applique les règles de transformation pour obtenir le MLD (relations/tables), avant d'écrire le MPD en SQL."
  },
  {
    id: 302,
    subject: "Bases de Données & SQL",
    question: "À quelle condition une entité ou une table respecte-t-elle la 1ère Forme Normale (1FN) ?",
    options: [
      "Si elle possède au moins une clé étrangère",
      "Si tous ses attributs sont élémentaires (atomiques, non décomposables et non multivalués)",
      "Si sa clé primaire est composée de deux attributs",
      "Si elle ne contient aucune clé secondaire UNIQUE"
    ],
    answer: "Si tous ses attributs sont élémentaires (atomiques, non décomposables et non multivalués)",
    explanation: "En 1FN, une case ne peut pas contenir une liste de valeurs (ex: 'Laptop, Souris') ou un attribut composite non décomposé."
  },
  {
    id: 303,
    subject: "Bases de Données & SQL",
    question: "Soit la table Concert(NumConcert, NomScene, Duree, Capacite) où la clé primaire est composée de (NumConcert, NomScene). Sachant que la Capacite ne dépend que de NomScene, quelle forme normale n'est PAS respectée ?",
    options: [
      "La 1ère Forme Normale (1FN)",
      "La 2ème Forme Normale (2FN)",
      "La 3ème Forme Normale (3FN)",
      "Le modèle respecte déjà toutes les formes normales"
    ],
    answer: "La 2ème Forme Normale (2FN)",
    explanation: "La 2FN impose que tout attribut n'appartenant pas à l'identifiant dépende de la TOTALITÉ de l'identifiant et non d'une partie seulement (ici Capacite dépend uniquement de NomScene)."
  },
  {
    id: 304,
    subject: "Bases de Données & SQL",
    question: "Lors du passage du MCD au MLD, comment traduit-on une association binaire ayant pour cardinalités Employé (1,1) --- travailler --- (1,n) Société ?",
    options: [
      "On crée obligatoirement une troisième table Travailler(#id_employe, #id_societe)",
      "La clé primaire de Employé devient clé étrangère dans la table Société",
      "La clé primaire de Société (côté 1,n) devient une clé étrangère (#id_societe) dans la table Employé (côté 1,1)",
      "On fusionne les deux tables en une seule"
    ],
    answer: "La clé primaire de Société (côté 1,n) devient une clé étrangère (#id_societe) dans la table Employé (côté 1,1)",
    explanation: "D'après la 2ème règle de transformation : pour une relation (X,1)-(X,N), la clé primaire de la table à la cardinalité (X,N) migre comme clé étrangère dans la relation à la cardinalité (X,1)."
  },
  {
    id: 305,
    subject: "Bases de Données & SQL",
    question: "Lors du passage du MCD au MLD, comment traduit-on une association binaire ayant pour cardinalités (0,n) d'un côté et (1,n) de l'autre ?",
    options: [
      "On crée une table supplémentaire ayant comme clé primaire la concaténation des clés primaires des deux tables reliées",
      "On place une clé étrangère uniquement du côté (1,n)",
      "On place une clé étrangère uniquement du côté (0,n)",
      "On supprime l'association"
    ],
    answer: "On crée une table supplémentaire ayant comme clé primaire la concaténation des clés primaires des deux tables reliées",
    explanation: "C'est la 3ème règle de transformation : toute association (X,N)-(X,N) devient une nouvelle table dont la clé primaire est composée des deux clés étrangères, et qui récupère les attributs éventuels de l'association."
  },
  {
    id: 306,
    subject: "Bases de Données & SQL",
    question: "En SQL, quelles commandes appartiennent respectivement au LDD (Langage de Définition de Données) et au LMD (Langage de Manipulation de Données) ?",
    options: [
      "LDD : INSERT, UPDATE, DELETE | LMD : CREATE, ALTER, DROP",
      "LDD : CREATE, ALTER, DROP | LMD : INSERT, UPDATE, DELETE",
      "LDD : SELECT, FROM, WHERE | LMD : JOIN, GROUP BY",
      "LDD : PRIMARY KEY | LMD : FOREIGN KEY"
    ],
    answer: "LDD : CREATE, ALTER, DROP | LMD : INSERT, UPDATE, DELETE",
    explanation: "Le LDD (DDL) définit et modifie la structure des tables (CREATE, ALTER, DROP), tandis que le LMD (DML) manipule les lignes de données à l'intérieur des tables (INSERT, UPDATE, DELETE)."
  },
  {
    id: 307,
    subject: "Bases de Données & SQL",
    question: "On dispose des tables Scene(NomScene, Capacite) et Concert(NumConcert, Duree, #NomScene). Dans quelle table faut-il insérer les données en premier avec INSERT INTO ?",
    options: [
      "Dans la table Concert, puis dans la table Scene",
      "Dans la table Scene en premier, car Concert possède une clé étrangère qui fait référence à Scene",
      "L'ordre n'a aucune importance en SQL",
      "Il faut insérer dans les deux tables simultanément avec une seule requête"
    ],
    answer: "Dans la table Scene en premier, car Concert possède une clé étrangère qui fait référence à Scene",
    explanation: "À cause de la contrainte d'intégrité référentielle (FOREIGN KEY), le SGBD vérifie lors d'une insertion dans Concert que la valeur de NomScene existe déjà dans la table parente Scene."
  },
  {
    id: 308,
    subject: "Bases de Données & SQL",
    question: "Que se passe-t-il si l'on exécute la requête : UPDATE films SET annee = 1990; ?",
    options: [
      "Le SGBD renvoie une erreur de syntaxe car WHERE est obligatoire",
      "Seule la première ligne de la table films est modifiée",
      "L'année de TOUS les films de la table est remplacée par 1990",
      "Les films sortis en 1990 sont supprimés"
    ],
    answer: "L'année de TOUS les films de la table est remplacée par 1990",
    explanation: "Sans clause WHERE pour filtrer les lignes, l'instruction UPDATE modifie l'intégralité des enregistrements de la table !"
  },
  {
    id: 309,
    subject: "Bases de Données & SQL",
    question: "En algèbre relationnelle et SQL, quelle est la différence entre une Projection et une Sélection ?",
    options: [
      "La projection extrait des colonnes (SELECT col1, col2) tandis que la sélection filtre des lignes (WHERE condition)",
      "La projection filtre les lignes (WHERE) tandis que la sélection choisit les colonnes (SELECT)",
      "La projection trie les données (ORDER BY) et la sélection les regroupe (GROUP BY)",
      "La projection supprime les doublons et la sélection crée une jointure"
    ],
    answer: "La projection extrait des colonnes (SELECT col1, col2) tandis que la sélection filtre des lignes (WHERE condition)",
    explanation: "La projection opère verticalement sur les attributs (colonnes), alors que la sélection opère horizontalement sur les n-uplets (lignes) vérifiant un prédicat."
  },
  {
    id: 310,
    subject: "Bases de Données & SQL",
    question: "Quelle requête SQL permet d'obtenir correctement le nombre de noms d'articles différents (sans doublons) dans la table Article ?",
    options: [
      "SELECT DISTINCT COUNT(a_nom) FROM Article;",
      "SELECT COUNT(DISTINCT a_nom) FROM Article;",
      "SELECT SUM(DISTINCT a_nom) FROM Article;",
      "SELECT a_nom FROM Article GROUP BY COUNT(*);"
    ],
    answer: "SELECT COUNT(DISTINCT a_nom) FROM Article;",
    explanation: "Il faut placer DISTINCT à l'intérieur de COUNT() pour d'abord éliminer les doublons sur a_nom, puis compter le nombre de valeurs uniques restantes."
  }
];
