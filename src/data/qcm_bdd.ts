import type { QcmItem } from '../data';

export const qcmBddData: QcmItem[] = [
  // =========================================================================
  // --- NIVEAU DÉBUTANT (20 QUESTIONS : 301 à 320) ---
  // =========================================================================
  {
    id: 301,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
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
    difficulty: "debutant",
    question: "Dans un Modèle Conceptuel de Données (MCD), qu'appelle-t-on une 'Entité' ?",
    options: [
      "Un objet ou concept identifiable du monde réel ayant une existence propre (ex: Client, Produit)",
      "Une ligne de code SQL exécutée sur la base de données",
      "Un lien obligatoirement chiffré entre deux tables",
      "Le nom d'utilisateur qui se connecte au SGBD"
    ],
    answer: "Un objet ou concept identifiable du monde réel ayant une existence propre (ex: Client, Produit)",
    explanation: "Une entité représente un concept métier pertinent pour le système d'information, caractérisé par des attributs et identifié par une clé."
  },
  {
    id: 303,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Dans un MCD, comment représente-t-on graphiquement l'identifiant (clé primaire) d'une entité ?",
    options: [
      "En écrivant son nom en lettres capitales",
      "En soulignant son nom dans la liste des attributs de l'entité",
      "En le faisant précéder d'un astérisque (*)",
      "En le plaçant en bas du rectangle de l'entité"
    ],
    answer: "En soulignant son nom dans la liste des attributs de l'entité",
    explanation: "Dans le formalisme MERISE, l'identifiant d'une entité est conventionnellement souligné pour indiquer son unicité absolue."
  },
  {
    id: 304,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Dans le MCD, que représentent les cardinalités associées à une entité participant à une association ?",
    options: [
      "Le nombre d'octets que prend la table sur le disque dur",
      "Le nombre minimum et maximum de fois où une instance de l'entité peut participer à l'association",
      "Le nombre total de lignes de la table parente",
      "Le niveau de sécurité accordé à l'utilisateur"
    ],
    answer: "Le nombre minimum et maximum de fois où une instance de l'entité peut participer à l'association",
    explanation: "La cardinalité [Min, Max] exprime la participation minimale (0 ou 1) et maximale (1 ou n) d'une entité dans une association donnée."
  },
  {
    id: 305,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Soit la relation : [Artiste] 0,n ---- (Réaliser) ---- 1,1 [Film]. Comment se lit correctement la cardinalité côté Film ?",
    options: [
      "Un film peut être réalisé par 0 ou plusieurs artistes",
      "Un film est obligatoirement réalisé par 1 et 1 seul artiste",
      "Un artiste réalise au maximum 1 seul film",
      "Un film peut exister sans aucun artiste"
    ],
    answer: "Un film est obligatoirement réalisé par 1 et 1 seul artiste",
    explanation: "La cardinalité 1,1 côté Film signifie qu'un film participe au minimum 1 fois et au maximum 1 fois à l'association Réaliser."
  },
  {
    id: 306,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "En SQL, quelles commandes appartiennent respectivement au LDD (Définition) et au LMD (Manipulation) ?",
    options: [
      "LDD : INSERT, UPDATE, DELETE | LMD : CREATE, ALTER, DROP",
      "LDD : CREATE, ALTER, DROP | LMD : INSERT, UPDATE, DELETE",
      "LDD : SELECT, FROM, WHERE | LMD : JOIN, GROUP BY",
      "LDD : PRIMARY KEY | LMD : FOREIGN KEY"
    ],
    answer: "LDD : CREATE, ALTER, DROP | LMD : INSERT, UPDATE, DELETE",
    explanation: "Le LDD (DDL) gère la structure des objets (CREATE, ALTER, DROP), tandis que le LMD (DML) modifie le contenu des tables (INSERT, UPDATE, DELETE)."
  },
  {
    id: 307,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle instruction SQL permet de créer une nouvelle table nommée 'client' ?",
    options: [
      "MAKE TABLE client (...);",
      "NEW TABLE client (...);",
      "CREATE TABLE client (...);",
      "ADD TABLE client (...);"
    ],
    answer: "CREATE TABLE client (...);",
    explanation: "La syntaxe standard en SQL pour créer une table est CREATE TABLE nom_table (définition_colonnes...);"
  },
  {
    id: 308,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle commande SQL supprime définitivement une table et toute sa structure de la base de données ?",
    options: [
      "REMOVE TABLE nom_table;",
      "DROP TABLE nom_table;",
      "DELETE TABLE nom_table;",
      "CLEAR TABLE nom_table;"
    ],
    answer: "DROP TABLE nom_table;",
    explanation: "DROP TABLE supprime à la fois la définition de la table, ses index et toutes les données qu'elle contient."
  },
  {
    id: 309,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle commande SQL permet d'insérer une nouvelle ligne d'enregistrement dans une table ?",
    options: [
      "ADD ROW INTO nom_table;",
      "INSERT INTO nom_table VALUES (...);",
      "PUT INTO nom_table VALUES (...);",
      "APPEND nom_table (...);"
    ],
    answer: "INSERT INTO nom_table VALUES (...);",
    explanation: "L'instruction SQL d'insertion est INSERT INTO nom_table (colonnes) VALUES (valeurs);"
  },
  {
    id: 310,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle commande SQL permet de modifier les valeurs de colonnes pour des enregistrements existants ?",
    options: [
      "MODIFY nom_table SET ...;",
      "UPDATE nom_table SET ...;",
      "CHANGE nom_table SET ...;",
      "ALTER nom_table SET ...;"
    ],
    answer: "UPDATE nom_table SET ...;",
    explanation: "UPDATE nom_table SET col = nouvelle_valeur WHERE condition; est l'instruction de modification de données du LMD."
  },
  {
    id: 311,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle commande SQL permet de supprimer des enregistrements spécifiques d'une table ?",
    options: [
      "DROP FROM nom_table WHERE ...;",
      "DELETE FROM nom_table WHERE ...;",
      "REMOVE FROM nom_table WHERE ...;",
      "ERASE FROM nom_table WHERE ...;"
    ],
    answer: "DELETE FROM nom_table WHERE ...;",
    explanation: "DELETE FROM nom_table WHERE condition; supprime les lignes qui vérifient le filtre sans détruire la structure de la table."
  },
  {
    id: 312,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle commande SQL sert à interroger et extraire des informations contenues dans une table ?",
    options: [
      "GET",
      "EXTRACT",
      "SELECT",
      "FIND"
    ],
    answer: "SELECT",
    explanation: "SELECT est la commande fondamentale de consultation et d'interrogation (DQL) en SQL."
  },
  {
    id: 313,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Que signifie le caractère astérisque (*) dans la requête : SELECT * FROM Article;",
    options: [
      "Sélectionner uniquement les articles favoris",
      "Multiplier les données de la table",
      "Sélectionner toutes les colonnes de la table",
      "Sélectionner la première ligne uniquement"
    ],
    answer: "Sélectionner toutes les colonnes de la table",
    explanation: "L'astérisque (*) est un raccourci signifiant 'toutes les colonnes' de la table spécifiée dans le FROM."
  },
  {
    id: 314,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "À quoi sert la clause WHERE dans une requête SQL ?",
    options: [
      "À indiquer dans quel fichier sauvegarder les données",
      "À filtrer les lignes selon une ou plusieurs conditions",
      "À trier les colonnes par ordre alphabétique",
      "À créer une clé étrangère"
    ],
    answer: "À filtrer les lignes selon une ou plusieurs conditions",
    explanation: "La clause WHERE spécifie les critères de sélection que doivent respecter les lignes pour être conservées."
  },
  {
    id: 315,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle est la différence entre les types SQL CHAR(20) et VARCHAR(20) ?",
    options: [
      "CHAR(20) est à longueur fixe (complété par des espaces jusqu'à 20 caractères), alors que VARCHAR(20) est à longueur variable",
      "CHAR(20) ne stocke que des chiffres et VARCHAR(20) ne stocke que des lettres",
      "VARCHAR(20) ne peut pas dépasser 2 caractères",
      "Il n'y a aucune différence technique, ce sont des synonymes"
    ],
    answer: "CHAR(20) est à longueur fixe (complété par des espaces jusqu'à 20 caractères), alors que VARCHAR(20) est à longueur variable",
    explanation: "CHAR réserve toujours la taille maximale allouée, tandis que VARCHAR n'occupe en mémoire que la taille réelle de la chaîne insérée."
  },
  {
    id: 316,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quel type standard ANSI permet de stocker une date au format calendrier 'AAAA-MM-JJ' en SQL ?",
    options: [
      "TIME",
      "DATE",
      "DATETIME",
      "CALENDAR"
    ],
    answer: "DATE",
    explanation: "Le type SQL DATE stocke l'année, le mois et le jour sous le format standard 'AAAA-MM-JJ'."
  },
  {
    id: 317,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "À quoi sert le mot-clé DISTINCT dans une requête SELECT ?",
    options: [
      "À forcer l'affichage en majuscules",
      "À supprimer les doublons dans les résultats affichés",
      "À trier automatiquement les lignes de A à Z",
      "À compter le nombre total d'enregistrements"
    ],
    answer: "À supprimer les doublons dans les résultats affichés",
    explanation: "SELECT DISTINCT permet d'éliminer les lignes doublons pour ne retourner que des valeurs uniques."
  },
  {
    id: 318,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Quelle clause permet de trier les résultats d'une requête SQL par ordre décroissant sur la colonne 'prix' ?",
    options: [
      "SORT BY prix DESC",
      "ORDER BY prix DESC",
      "GROUP BY prix DOWN",
      "FILTER BY prix DESC"
    ],
    answer: "ORDER BY prix DESC",
    explanation: "ORDER BY nom_colonne DESC trie les résultats par ordre décroissant (ASC étant l'ordre croissant par défaut)."
  },
  {
    id: 319,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Que garantit la contrainte 'NOT NULL' sur une colonne lors de la création d'une table ?",
    options: [
      "La colonne ne pourra jamais contenir de valeur nulle (la saisie est obligatoire)",
      "La colonne doit obligatoirement être un nombre entier positif",
      "La colonne devient automatiquement la clé primaire",
      "La colonne ne peut pas contenir de doublons"
    ],
    answer: "La colonne ne pourra jamais contenir de valeur nulle (la saisie est obligatoire)",
    explanation: "NOT NULL interdit l'absence de valeur (valeur NULL) dans la colonne lors des insertions et des mises à jour."
  },
  {
    id: 320,
    subject: "Bases de Données & SQL",
    difficulty: "debutant",
    question: "Dans le Modèle Logique de Données (MLD relationnel), comment appelle-t-on respectivement une ligne et une colonne d'une table ?",
    options: [
      "Une ligne est un attribut et une colonne est un n-uplet (tuple)",
      "Une ligne est un n-uplet (tuple) et une colonne est un attribut",
      "Une ligne est une relation et une colonne est un schéma",
      "Une ligne est un identifiant et une colonne est une cardinalité"
    ],
    answer: "Une ligne est un n-uplet (tuple) et une colonne est un attribut",
    explanation: "En algèbre relationnelle, une table est une relation, chaque enregistrement (ligne) est un tuple/n-uplet, et chaque champ (colonne) est un attribut caractérisé par un domaine."
  },

  // =========================================================================
  // --- NIVEAU INTERMÉDIAIRE (20 QUESTIONS : 321 à 340) ---
  // =========================================================================
  {
    id: 321,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 322,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 323,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 324,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Qu'est-ce qu'une clé étrangère (FOREIGN KEY) dans une table relationnelle ?",
    options: [
      "Une clé secrète pour chiffrer les mots de passe des utilisateurs",
      "Une colonne faisant référence à la clé primaire d'une autre table pour assurer l'intégrité référentielle",
      "Une colonne qui accepte n'importe quelle valeur sans vérification",
      "Un identifiant généré par un autre serveur de base de données"
    ],
    answer: "Une colonne faisant référence à la clé primaire d'une autre table pour assurer l'intégrité référentielle",
    explanation: "Une clé étrangère stocke une valeur qui doit correspondre à une clé primaire existante dans la table cible, assurant la cohérence entre tables reliées."
  },
  {
    id: 325,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 326,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 327,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Que se produit-il lors de l'exécution de l'instruction : DELETE FROM Concert; sans clause WHERE ?",
    options: [
      "Le SGBD supprime uniquement le dernier concert ajouté",
      "Toutes les lignes de la table Concert sont supprimées mais la structure de la table est conservée",
      "La table et sa structure sont totalement détruites comme avec DROP TABLE",
      "Une erreur se produit car la table contient des colonnes obligatoires"
    ],
    answer: "Toutes les lignes de la table Concert sont supprimées mais la structure de la table est conservée",
    explanation: "DELETE sans WHERE vide intégralement la table de son contenu, sans pour autant supprimer la définition de la table."
  },
  {
    id: 328,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
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
    id: 329,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle est la principale différence entre une contrainte PRIMARY KEY et une contrainte UNIQUE ?",
    options: [
      "UNIQUE accepte une valeur NULL, alors que PRIMARY KEY impose obligatoirement NOT NULL et l'unicité",
      "PRIMARY KEY ne s'applique qu'aux chaînes de caractères",
      "Une table peut posséder plusieurs PRIMARY KEY mais une seule contrainte UNIQUE",
      "UNIQUE interdit de modifier les valeurs une fois insérées"
    ],
    answer: "UNIQUE accepte une valeur NULL, alors que PRIMARY KEY impose obligatoirement NOT NULL et l'unicité",
    explanation: "Une table n'a qu'une seule PRIMARY KEY (non nulle et unique). Elle peut avoir plusieurs contraintes UNIQUE, qui autorisent la valeur NULL (selon le standard SQL)."
  },
  {
    id: 330,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle clause permet de fixer une valeur par défaut 'PACA' pour la colonne 'region' lors de sa création ?",
    options: [
      "region VARCHAR(30) INITIAL 'PACA'",
      "region VARCHAR(30) DEFAULT 'PACA'",
      "region VARCHAR(30) AUTO 'PACA'",
      "region VARCHAR(30) SET 'PACA'"
    ],
    answer: "region VARCHAR(30) DEFAULT 'PACA'",
    explanation: "Le mot-clé DEFAULT permet de spécifier la valeur affectée automatiquement si la colonne est omise lors d'un INSERT."
  },
  {
    id: 331,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Comment ajouter une nouvelle colonne 'email VARCHAR(100)' à une table existante 'client' ?",
    options: [
      "UPDATE TABLE client ADD email VARCHAR(100);",
      "ALTER TABLE client ADD email VARCHAR(100);",
      "INSERT INTO client COLUMN email VARCHAR(100);",
      "MODIFY TABLE client ADD email VARCHAR(100);"
    ],
    answer: "ALTER TABLE client ADD email VARCHAR(100);",
    explanation: "ALTER TABLE client ADD nom_colonne type; est la commande LDD permettant d'ajouter une colonne sans perdre les données existantes."
  },
  {
    id: 332,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quel opérateur permet de vérifier si une valeur fait partie d'un ensemble de valeurs énumérées : WHERE ville ... ('Paris', 'Lyon', 'Marseille') ?",
    options: [
      "IN",
      "CONTAINS",
      "BETWEEN",
      "EXISTS"
    ],
    answer: "IN",
    explanation: "L'opérateur IN permet de tester l'appartenance d'une expression à une liste discrète de valeurs."
  },
  {
    id: 333,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle requête filtre les produits dont le prix est compris entre 50 et 100 inclus ?",
    options: [
      "WHERE prix INSIDE 50 TO 100",
      "WHERE prix BETWEEN 50 AND 100",
      "WHERE prix >= 50 OR prix <= 100",
      "WHERE prix IN (50, 100)"
    ],
    answer: "WHERE prix BETWEEN 50 AND 100",
    explanation: "BETWEEN min AND max teste si une valeur se situe dans un intervalle inclusif [min, max]."
  },
  {
    id: 334,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Comment teste-t-on correctement en SQL si la colonne 'telephone' ne contient aucune valeur ?",
    options: [
      "WHERE telephone = NULL",
      "WHERE telephone == NULL",
      "WHERE telephone IS NULL",
      "WHERE telephone EQUALS NULL"
    ],
    answer: "WHERE telephone IS NULL",
    explanation: "En SQL, la valeur NULL représente l'inconnu ; elle ne peut pas être comparée avec '='. Il faut obligatoirement utiliser 'IS NULL' ou 'IS NOT NULL'."
  },
  {
    id: 335,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle condition LIKE permet de trouver tous les prénoms commençant par la lettre 'M' ?",
    options: [
      "WHERE prenom LIKE 'M%'",
      "WHERE prenom LIKE '%M'",
      "WHERE prenom LIKE 'M_'",
      "WHERE prenom LIKE '[M]'"
    ],
    answer: "WHERE prenom LIKE 'M%'",
    explanation: "Le joker '%' remplace zéro, un ou plusieurs caractères quelconques. 'M%' désigne toute chaîne débutant par 'M'."
  },
  {
    id: 336,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Que recherche le joker '_' (trait de soulignement) dans la clause LIKE ?",
    options: [
      "N'importe quelle suite de plusieurs caractères",
      "Exactement un seul caractère quelconque",
      "Un caractère espace uniquement",
      "Le symbole underscore littéral"
    ],
    answer: "Exactement un seul caractère quelconque",
    explanation: "Dans une clause LIKE, '_' remplace strictement un seul caractère, contrairement à '%' qui en remplace un nombre indéterminé."
  },
  {
    id: 337,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle est la différence fondamentale entre COUNT(*) et COUNT(nom_colonne) ?",
    options: [
      "COUNT(*) compte toutes les lignes y compris les doublons et les valeurs nulles, alors que COUNT(col) ignore les valeurs NULL",
      "COUNT(col) est deux fois plus rapide que COUNT(*)",
      "COUNT(*) ne compte que les clés primaires",
      "Il n'y a aucune différence, les deux renvoient toujours le même résultat"
    ],
    answer: "COUNT(*) compte toutes les lignes y compris les doublons et les valeurs nulles, alors que COUNT(col) ignore les valeurs NULL",
    explanation: "COUNT(*) compte le nombre total de tuples de la sélection, tandis que COUNT(colonne) ignore les enregistrements pour lesquels cette colonne vaut NULL."
  },
  {
    id: 338,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle requête SQL permet d'obtenir correctement le nombre de noms d'articles différents (sans doublons) dans la table Article ?",
    options: [
      "SELECT DISTINCT COUNT(a_nom) FROM Article;",
      "SELECT COUNT(DISTINCT a_nom) FROM Article;",
      "SELECT SUM(DISTINCT a_nom) FROM Article;",
      "SELECT a_nom FROM Article GROUP BY COUNT(*);"
    ],
    answer: "SELECT COUNT(DISTINCT a_nom) FROM Article;",
    explanation: "Il faut placer DISTINCT à l'intérieur de COUNT() pour d'abord éliminer les doublons sur a_nom, puis compter le nombre de valeurs uniques restantes."
  },
  {
    id: 339,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "À quoi sert la clause GROUP BY dans une requête d'interrogation SQL ?",
    options: [
      "À fusionner plusieurs tables différentes en une seule",
      "À regrouper les lignes ayant des valeurs identiques sur une colonne pour calculer des agrégats (SUM, AVG, COUNT) sur chaque groupe",
      "À trier l'affichage par ordre alphabétique",
      "À restreindre l'accès à un groupe d'utilisateurs autorisés"
    ],
    answer: "À regrouper les lignes ayant des valeurs identiques sur une colonne pour calculer des agrégats (SUM, AVG, COUNT) sur chaque groupe",
    explanation: "GROUP BY partitionne les données en sous-ensembles homogènes afin d'appliquer des fonctions d'agrégation groupe par groupe."
  },
  {
    id: 340,
    subject: "Bases de Données & SQL",
    difficulty: "intermediaire",
    question: "Quelle est la différence entre les clauses WHERE et HAVING lors de l'utilisation de regroupements ?",
    options: [
      "WHERE filtre les lignes individuelles avant le GROUP BY, alors que HAVING filtre les groupes après calcul des agrégats",
      "WHERE ne s'utilise que sur les nombres et HAVING sur les textes",
      "HAVING s'exécute toujours avant le WHERE",
      "Il n'y a aucune différence, elles s'emploient indifféremment"
    ],
    answer: "WHERE filtre les lignes individuelles avant le GROUP BY, alors que HAVING filtre les groupes après calcul des agrégats",
    explanation: "WHERE s'applique sur les lignes d'origine avant tout regroupement ; HAVING s'applique sur les résultats des fonctions d'agrégation (ex: HAVING COUNT(*) > 5)."
  },

  // =========================================================================
  // --- NIVEAU EXPERT (20 QUESTIONS : 341 à 360) ---
  // =========================================================================
  {
    id: 341,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
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
    id: 342,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Soit une relation Film(IdFilm, Titre, IdRealisateur, NomRealisateur). Sachant que IdFilm -> IdRealisateur et que IdRealisateur -> NomRealisateur, quelle forme normale est violée ?",
    options: [
      "La 1FN",
      "La 2FN",
      "La 3FN (dépendance fonctionnelle transitive)",
      "Aucune, le schéma est optimal"
    ],
    answer: "La 3FN (dépendance fonctionnelle transitive)",
    explanation: "La 3FN interdit les dépendances transitives entre attributs non-clés (IdFilm -> IdRealisateur -> NomRealisateur). Il faut isoler le Réalisateur dans une table dédiée."
  },
  {
    id: 343,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Lors du passage d'un MCD au MLD, comment traduit-on une association binaire ayant pour cardinalités (1,1) d'un côté et (0,1) de l'autre ?",
    options: [
      "On crée impérativement une table d'association",
      "La clé primaire de la table côté (1,1) migre comme clé étrangère UNIQUE dans la table côté (0,1)",
      "On supprime la table côté (0,1)",
      "La clé côté (0,1) migre obligatoirement avec une contrainte CHECK"
    ],
    answer: "La clé primaire de la table côté (1,1) migre comme clé étrangère UNIQUE dans la table côté (0,1)",
    explanation: "Pour une relation (0,1)-(1,1), on fait migrer la clé primaire de l'entité toujours présente (1,1) vers l'entité optionnelle (0,1) avec une contrainte UNIQUE afin d'éviter les valeurs NULL dans la table obligatoire."
  },
  {
    id: 344,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Soit l'association porteuse : [Artiste] 0,n ---- (Participer : role) ---- 1,n [Film]. Comment est traduit l'attribut 'role' en MLD ?",
    options: [
      "Il devient une colonne de la table Artiste",
      "Il devient une colonne de la table Film",
      "Il devient un attribut de la table de liaison Participer(#id_artiste, #id_film, role)",
      "Il disparaît car les associations ne peuvent pas porter d'attributs en MLD"
    ],
    answer: "Il devient un attribut de la table de liaison Participer(#id_artiste, #id_film, role)",
    explanation: "Pour une association (0,n)-(1,n), la table de liaison résultante hérite des deux clés étrangères pour former sa clé primaire, ainsi que de tous les attributs portés par l'association."
  },
  {
    id: 345,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Comment se traduit une association ternaire (reliance entre 3 entités : Médecin, Patient, Médicament) avec cardinalités (0,n) sur chaque branche ?",
    options: [
      "En migrant les trois clés dans la table Patient",
      "En créant une relation dont la clé primaire est la concaténation des trois clés primaires des entités reliées",
      "En créant trois tables de jointure deux à deux",
      "C'est impossible, MERISE interdit les associations ternaires"
    ],
    answer: "En créant une relation dont la clé primaire est la concaténation des trois clés primaires des entités reliées",
    explanation: "Toute association n-aire (n >= 3) se traduit en MLD par une relation dédiée dont la clé primaire est composée des n clés étrangères des entités participantes."
  },
  {
    id: 346,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Soit l'association réflexive : [Employé] 0,n ---- (Encadrer) ---- 0,1 [Employé]. Comment est-elle traduite dans le MLD ?",
    options: [
      "On duplique la table Employé en deux tables différentes",
      "On ajoute une clé étrangère (#id_manager) dans la table Employé qui référence la clé primaire (id_employe) de cette même table",
      "On crée obligatoirement une nouvelle table Encadrer",
      "Une association réflexive ne peut pas être implémentée en SQL"
    ],
    answer: "On ajoute une clé étrangère (#id_manager) dans la table Employé qui référence la clé primaire (id_employe) de cette même table",
    explanation: "Comme la cardinalité maximale d'un côté vaut 1 (0,1), la clé de l'employé migre dans la même table sous un alias (clé étrangère réflexive / auto-référence)."
  },
  {
    id: 347,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Que provoque l'option 'ON DELETE CASCADE' sur une contrainte FOREIGN KEY lorsqu'une ligne parente est supprimée ?",
    options: [
      "Le SGBD bloque la suppression de la ligne parente",
      "Toutes les lignes filles qui référençaient cette ligne parente sont automatiquement supprimées",
      "La clé étrangère des lignes filles est automatiquement mise à NULL",
      "La base de données passe en mode lecture seule"
    ],
    answer: "Toutes les lignes filles qui référençaient cette ligne parente sont automatiquement supprimées",
    explanation: "ON DELETE CASCADE propage automatiquement la suppression du parent à tous ses enregistrements enfants dépendants."
  },
  {
    id: 348,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Que fait l'option 'ON DELETE SET NULL' sur une clé étrangère lors de la suppression de la ligne parente ?",
    options: [
      "Elle affecte la valeur NULL à la colonne de clé étrangère dans les lignes filles correspondantes",
      "Elle supprime définitivement les lignes filles",
      "Elle remplace la clé par la valeur 0",
      "Elle annule la transaction"
    ],
    answer: "Elle affecte la valeur NULL à la colonne de clé étrangère dans les lignes filles correspondantes",
    explanation: "ON DELETE SET NULL conserve les enregistrements enfants en remplaçant la référence devenue orpheline par NULL (nécessite que la colonne autorise NULL)."
  },
  {
    id: 349,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Quelle est la différence fondamentale entre les instructions 'TRUNCATE TABLE' et 'DELETE FROM table' ?",
    options: [
      "TRUNCATE est une commande LDD rapide qui désalloue les pages de données et réinitialise les auto-incréments, sans exécuter les triggers ligne par ligne",
      "TRUNCATE supprime la table et sa structure alors que DELETE ne touche qu'aux données",
      "DELETE est plus rapide que TRUNCATE sur de grands volumes",
      "TRUNCATE ne fonctionne que sur les tables sans index"
    ],
    answer: "TRUNCATE est une commande LDD rapide qui désalloue les pages de données et réinitialise les auto-incréments, sans exécuter les triggers ligne par ligne",
    explanation: "TRUNCATE vide la table instantanément au niveau du stockage physique (LDD), sans journaliser la suppression de chaque ligne, et réinitialise les compteurs AUTO_INCREMENT."
  },
  {
    id: 350,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Soit la requête : SELECT departement, ville, AVG(salaire) FROM Employe GROUP BY departement; Pourquoi cette requête produit-elle une erreur SQL standard ?",
    options: [
      "Parce qu'on ne peut pas utiliser AVG() avec GROUP BY",
      "Parce que la colonne 'ville' apparaît dans le SELECT sans être ni agrégée ni présente dans la clause GROUP BY",
      "Parce que GROUP BY doit impérativement précéder le SELECT",
      "Parce qu'il manque un ORDER BY"
    ],
    answer: "Parce que la colonne 'ville' apparaît dans le SELECT sans être ni agrégée ni présente dans la clause GROUP BY",
    explanation: "Règle d'or SQL : toute colonne présente dans le SELECT doit obligatoirement soit figurer dans le GROUP BY, soit être soumise à une fonction d'agrégation."
  },
  {
    id: 351,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Quelle est la différence de résultat entre un INNER JOIN et un LEFT JOIN entre une table Client (gauche) et Commande (droite) ?",
    options: [
      "INNER JOIN ne garde que les clients ayant passé au moins une commande, alors que LEFT JOIN retourne TOUS les clients, même ceux sans commande",
      "LEFT JOIN ne conserve que les clients sans commande",
      "INNER JOIN inverse l'ordre des colonnes par rapport à LEFT JOIN",
      "LEFT JOIN est plus restrictif que INNER JOIN"
    ],
    answer: "INNER JOIN ne garde que les clients ayant passé au moins une commande, alors que LEFT JOIN retourne TOUS les clients, même ceux sans commande",
    explanation: "LEFT JOIN préserve toutes les lignes de la table de gauche : si aucune ligne ne correspond à droite, les colonnes de droite sont complétées par NULL."
  },
  {
    id: 352,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Que contiennent les colonnes de la table B pour une ligne de la table A n'ayant aucune correspondance lors d'un 'SELECT * FROM A LEFT JOIN B ON A.id = B.id_a' ?",
    options: [
      "Des chaînes vides",
      "Des zéros (0)",
      "La valeur NULL",
      "La requête renvoie une erreur d'exécution"
    ],
    answer: "La valeur NULL",
    explanation: "Dans une jointure externe, toute ligne de la table conservée sans correspondance dans la table jointe reçoit la valeur NULL pour toutes les colonnes de cette dernière."
  },
  {
    id: 353,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Dans quel cas typique a-t-on recours à une auto-jointure (Self-Join, jointure d'une table avec elle-même) ?",
    options: [
      "Pour vider les doublons d'une table",
      "Pour comparer des lignes d'une même table hiérarchique (ex: trouver le nom du manager d'un employé)",
      "Pour calculer une moyenne générale",
      "Pour réinitialiser une clé primaire auto-incrémentée"
    ],
    answer: "Pour comparer des lignes d'une même table hiérarchique (ex: trouver le nom du manager d'un employé)",
    explanation: "L'auto-jointure permet d'associer deux rôles différents aux lignes d'une même table (ex: E.id_manager = M.id_employe) à l'aide de deux alias distincts."
  },
  {
    id: 354,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Comment rédige-t-on proprement une double jointure interne reliant les tables Article (A), Commande (Co) et Client (Cl) ?",
    options: [
      "FROM Article A JOIN Commande Co ON A.id = Co.id_art JOIN Client Cl ON Cl.id = Co.id_cli",
      "FROM Article A, Commande Co, Client Cl ON A.id = Cl.id",
      "FROM Article A MERGE Commande Co MERGE Client Cl",
      "FROM Article A JOIN Client Cl ON A.id = Cl.id WHERE Co = True"
    ],
    answer: "FROM Article A JOIN Commande Co ON A.id = Co.id_art JOIN Client Cl ON Cl.id = Co.id_cli",
    explanation: "Chaque association binaire nécessite son propre JOIN avec sa condition de jointure (ON) reliant la clé primaire à la clé étrangère."
  },
  {
    id: 355,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Quelle est la différence fondamentale entre les opérateurs ensemblistes UNION et UNION ALL ?",
    options: [
      "UNION élimine automatiquement les doublons entre les deux sélections, alors que UNION ALL conserve l'intégralité des lignes sans filtrer les doublons",
      "UNION ALL ne fonctionne que sur les tables numériques",
      "UNION est plus rapide que UNION ALL",
      "UNION ne permet d'unir que deux tables, UNION ALL permet d'en unir trois ou plus"
    ],
    answer: "UNION élimine automatiquement les doublons entre les deux sélections, alors que UNION ALL conserve l'intégralité des lignes sans filtrer les doublons",
    explanation: "UNION effectue une opération de déduplication (tri/distinct) qui est plus coûteuse en performances, alors que UNION ALL concatène directement les flux de résultats."
  },
  {
    id: 356,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Dans une requête avec sous-requête corrélée, comment fonctionne l'opérateur 'WHERE EXISTS (SELECT 1 FROM ...)' ?",
    options: [
      "Il vérifie que la sous-requête retourne au moins une ligne sans se soucier des colonnes sélectionnées",
      "Il compare les valeurs scalaires des deux tables avec '='",
      "Il vérifie que la table cible n'a pas été supprimée",
      "Il impose que la sous-requête retourne exactement une seule ligne et une seule colonne"
    ],
    answer: "Il vérifie que la sous-requête retourne au moins une ligne sans se soucier des colonnes sélectionnées",
    explanation: "EXISTS s'évalue à VRAI dès que la sous-requête retourne au minimum un enregistrement, ce qui en fait un test de présence très optimisé."
  },
  {
    id: 357,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Pour exprimer en SQL la division relationnelle (ex: 'Trouver les étudiants qui ont validé TOUS les modules obligatoires'), quelle approche classique utilise-t-on ?",
    options: [
      "Une requête avec opérateur DIVIDE BY",
      "Une double négation avec NOT EXISTS (les étudiants pour lesquels il N'existe AUCUN module obligatoire qu'ils N'ont PAS validé)",
      "Une simple clause WHERE module = ALL",
      "Un GROUP BY sans fonction d'agrégation"
    ],
    answer: "Une double négation avec NOT EXISTS (les étudiants pour lesquels il N'existe AUCUN module obligatoire qu'ils N'ont PAS validé)",
    explanation: "La division relationnelle s'exprime conventionnellement en SQL par une double négation (NOT EXISTS ... NOT EXISTS) ou en comparant COUNT(DISTINCT modules_valides) avec le COUNT total des modules."
  },
  {
    id: 358,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Dans le cadre des transactions SQL (propriétés ACID), à quoi servent respectivement les commandes 'COMMIT' et 'ROLLBACK' ?",
    options: [
      "COMMIT valide et enregistre définitivement les modifications en cours ; ROLLBACK annule toutes les opérations depuis le début de la transaction",
      "COMMIT annule la transaction et ROLLBACK la valide",
      "COMMIT crée une sauvegarde sur bande magnétique et ROLLBACK redémarre le SGBD",
      "COMMIT ferme la connexion et ROLLBACK l'ouvre à nouveau"
    ],
    answer: "COMMIT valide et enregistre définitivement les modifications en cours ; ROLLBACK annule toutes les opérations depuis le début de la transaction",
    explanation: "COMMIT valide la transaction de manière persistante ; en cas d'erreur ou d'échec, ROLLBACK rétablit l'état intègre antérieur (atomicité)."
  },
  {
    id: 359,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Quel est l'impact principal de la création d'un INDEX (ex: B-Tree) sur une colonne fréquemment recherchée ?",
    options: [
      "Il accélère considérablement les requêtes de recherche (SELECT avec WHERE/JOIN), mais ralentit légèrement les écritures (INSERT, UPDATE, DELETE)",
      "Il réduit la taille de la base de données sur disque",
      "Il accélère les écritures et ralentit les lectures",
      "Il interdit d'insérer des valeurs doublons"
    ],
    answer: "Il accélère considérablement les requêtes de recherche (SELECT avec WHERE/JOIN), mais ralentit légèrement les écritures (INSERT, UPDATE, DELETE)",
    explanation: "Un index est une structure auxiliaire permettant de trouver directement les lignes sans parcourir toute la table (Table Scan), mais qui doit être mise à jour à chaque modification de données."
  },
  {
    id: 360,
    subject: "Bases de Données & SQL",
    difficulty: "expert",
    question: "Quelle anomalie survient lorsqu'une table regroupe à la fois des informations de Commande et de Client sans normalisation (violation 2FN/3FN) ?",
    options: [
      "Des anomalies de redondance, d'insertion (impossible d'insérer un client sans commande), de modification et de suppression (supprimer la commande supprime le client)",
      "La base de données refuse de démarrer",
      "Les requêtes SELECT deviennent impossibles à rédiger",
      "Le type des colonnes est automatiquement converti en texte brut"
    ],
    answer: "Des anomalies de redondance, d'insertion (impossible d'insérer un client sans commande), de modification et de suppression (supprimer la commande supprime le client)",
    explanation: "La dénormalisation non maîtrisée entraîne de multiples anomalies : incohérences de mise à jour (modifier l'adresse d'un client dans 50 commandes) et pertes involontaires d'informations lors des suppressions."
  }
];
