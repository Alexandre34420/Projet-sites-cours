export interface CourseItem {
  id: string;
  category: string;
  title: string;
  content: string;
  code: string;
}

export interface QcmItem {
  id: number;
  subject: 'python' | 'architecture' | 'java';
  difficulty: 'debutant' | 'intermediaire' | 'expert';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const pythonData: CourseItem[] = [
  { id: "p1", category: "Bases", title: "Entrées / Sorties & Types", content: "Conversion: int(), float(), str(), bool()", code: "print(a, b, sep=\" \", end=\"\\n\")\ns = input(\"Saisie : \")" },
  { id: "p2", category: "Bases", title: "Boucles & Conditions", content: "Les structures de contrôle de flux.", code: "if a > b:\n    print(a)\nelif a == b:\n    pass\nelse:\n    print(b)\n\nfor i in range(0, 10, 2):\n    print(i)" },
  { id: "p3", category: "Structures", title: "Listes & Tuples", content: "Les listes sont mutables, les tuples sont immuables.", code: "t = (1, 2) # Tuple\nL = [1, 2, 3] # Liste\nL.append(4)\nL.remove(2)\nL[1:3] # Slicing" },
  { id: "p4", category: "Structures", title: "Dictionnaires", content: "Paires clé:valeur.", code: "d = {'a': 1, 'b': 2}\nfor k, v in d.items():\n    print(k, v)" },
  { id: "p5", category: "Avancé", title: "Fonctions & Map/Filter", content: "Programmation fonctionnelle et Type hints.", code: "def f(x: int) -> int:\n    return x + 1\n\nlist(map(lambda x: x*x, L))\nlist(filter(lambda x: x>=18, L))" },
  { id: "p6", category: "Fichiers", title: "OS & Fichiers", content: "Manipulation du système de fichiers.", code: "import os, shutil\nwith open(\"file.txt\", \"w\") as f:\n    f.write(\"Texte\")" },
  { id: "p7", category: "Data Science", title: "Numpy & Pandas", content: "Traitement de données.", code: "import numpy as np\nimport pandas as pd\n\nt = np.zeros(5)\ndf = pd.DataFrame({'X': [1,2]})\ndf.loc[df['X'] >= 2]" },
  { id: "p8", category: "POO", title: "Classes & Exceptions", content: "Création d'objets et gestion des erreurs.", code: "try:\n    raise ValueError(\"Erreur\")\nexcept ValueError:\n    pass\n\nclass Personne:\n    def __init__(self, nom):\n        self.nom = nom" }
];

export const architectureData: CourseItem[] = [
  { id: "a1", category: "Fondamentaux", title: "Complexité & Modélisation", content: "La modélisation permet de prendre du recul avant de coder. Elle réduit la complexité fonctionnelle, technique (dépendances) et organisationnelle. Un modèle est une représentation simplifiée (abstraction) répondant à un point de vue et un périmètre.", code: "" },
  { id: "a2", category: "Statique", title: "Diagramme de Cas d'Usage", content: "Répond à : 'Qui utilise le système et pour faire quoi ?'. Inclut les Acteurs (externes au système) et les Cas d'usage (verbes à l'infinitif).", code: "Relations :\n- Association : L'acteur participe.\n- <<include>> : Comportement obligatoire (ex: Se connecter).\n- <<extend>> : Comportement optionnel (ex: Mdp oublié)." },
  { id: "a3", category: "Statique", title: "Diagramme de Classes", content: "Répond à : 'Quels concepts existent et comment sont-ils liés ?'. Montre la structure métier.", code: "Comprend :\n- Classes (Nom, Attributs, Opérations)\n- Multiplicités (1, 0..*, 1..*)\n- Héritage (Est une sorte de...)\n- Composition (Cycle de vie dépendant)\n- Agrégation (Indépendant)" },
  { id: "a4", category: "Statique", title: "Composants & Déploiement", content: "Composants : Blocs logiques, responsabilités, interfaces requises/fournies. Déploiement : Où s'exécutent les éléments (Nœuds, Serveurs, Flux réseau).", code: "Modèle C4 (Zoom progressif) :\n1. Context (Environnement global)\n2. Containers (Applications, Bases)\n3. Components (Blocs internes)\n4. Code (Classes UML)" },
  { id: "a5", category: "Dynamique", title: "Séquence & Activité", content: "Séquence : Ordre des messages dans le temps entre participants (Appel synchrone, asynchrone, alt, opt, loop). \nActivité : Étapes et flux de décision d'un processus (BPMN ou Activité UML).", code: "Différence :\nSéquence = interactions entre participants.\nActivité = étapes et logique de traitement." },
  { id: "a6", category: "Dynamique", title: "États-Transitions", content: "Cycle de vie d'un seul objet. Montre les états stables et les transitions déclenchées par des événements.", code: "Exemple Ticket :\nNouveau -> [affecter] -> En Cours -> [résoudre] -> Résolu -> [clôturer] -> Clôturé." },
  { id: "a7", category: "Architecture", title: "Styles Architecturaux", content: "Monolithe : Un seul bloc déployé (simple mais fort couplage).\nClient-Serveur : Demande / Réponse.\n3-Tiers : Séparation physique (Présentation, Applicatif, Données).\nMicroservices : Services indépendants par domaine (Scalabilité fine mais complexité réseau).", code: "Principes clés :\n- Cohésion : Le composant a un rôle unique.\n- Couplage : Dépendances maîtrisées entre composants." }
];

export const javaData: CourseItem[] = [
  { id: "j1", category: "Bases POO", title: "Classes et Objets", content: "Une classe est un modèle. Un objet est une instance de ce modèle.", code: "public class Voiture {\n    // Attributs\n    String couleur;\n\n    // Méthode\n    public void avancer() {\n        System.out.println(\"Avance\");\n    }\n}\n// Instanciation\nVoiture v = new Voiture();" },
  { id: "j2", category: "Constructeurs", title: "Types de Constructeurs", content: "Méthode spéciale invoquée avec 'new'. Ne retourne rien, porte le nom de la classe.", code: "public class Point {\n    int x, y;\n\n    public Point() {} // Par défaut\n    \n    public Point(int x, int y) { // Paramétré\n        this.x = x;\n        this.y = y;\n    }\n\n    public Point(Point autre) { // Copie\n        this.x = autre.x;\n        this.y = autre.y;\n    }\n}" },
  { id: "j3", category: "Encapsulation", title: "Visibilité & Getters/Setters", content: "Protéger les données avec 'private' et les exposer via des méthodes 'public'.", code: "public class Personne {\n    private int age;\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        if (age >= 0) this.age = age;\n    }\n}" },
  { id: "j4", category: "Méthodes usuelles", title: "toString() et equals()", content: "Redéfinition des méthodes héritées de Object.", code: "@Override\npublic String toString() {\n    return \"Info: \" + this.nom;\n}\n\n@Override\npublic boolean equals(Object obj) {\n    if (obj == null) return false;\n    Personne autre = (Personne) obj;\n    return this.nom.equals(autre.nom);\n}" },
  { id: "j5", category: "Avancé", title: "Attributs & Méthodes Static", content: "Appartient à la classe et non à l'instance. Partagé par tous les objets.", code: "public class Compteur {\n    public static int total = 0;\n\n    public Compteur() {\n        total++;\n    }\n\n    public static void afficherTotal() {\n        System.out.println(total);\n    }\n}" }
];

export const qcmData: QcmItem[] = [
  // ================== PYTHON ==================
  // Débutant
  {
    id: 1, subject: "python", difficulty: "debutant",
    question: "Quelle fonction est utilisée pour afficher du texte en Python ?",
    options: ["echo()", "print()", "console.log()", "display()"],
    answer: "print()",
    explanation: "La fonction print() est la fonction standard en Python pour afficher des informations dans la console."
  },
  {
    id: 2, subject: "python", difficulty: "debutant",
    question: "Quel type de données est utilisé pour stocker des éléments immuables ?",
    options: ["Liste (List)", "Dictionnaire (Dict)", "Tuple", "Set"],
    answer: "Tuple",
    explanation: "Un tuple s'écrit avec des parenthèses (ex: t=(1,2)) et ne peut pas être modifié après sa création."
  },
  {
    id: 3, subject: "python", difficulty: "debutant",
    question: "Comment écrire un commentaire sur une seule ligne en Python ?",
    options: ["// Commentaire", "/* Commentaire */", "# Commentaire", "<!-- Commentaire -->"],
    answer: "# Commentaire",
    explanation: "Le symbole '#' indique à Python d'ignorer le reste de la ligne."
  },
  {
    id: 4, subject: "python", difficulty: "debutant",
    question: "Comment obtenir la longueur d'une liste `L` en Python ?",
    options: ["L.length()", "L.size", "count(L)", "len(L)"],
    answer: "len(L)",
    explanation: "La fonction native len() renvoie le nombre d'éléments d'une séquence (liste, chaîne, etc.)."
  },
  {
    id: 5, subject: "python", difficulty: "debutant",
    question: "À quoi sert l'indentation en Python ?",
    options: ["À faire joli", "À définir des blocs de code", "À optimiser la mémoire", "Ce n'est pas obligatoire"],
    answer: "À définir des blocs de code",
    explanation: "Contrairement à Java ou C++ qui utilisent des accolades {}, Python utilise l'indentation pour délimiter les blocs (if, for, def...)."
  },
  {
    id: 6, subject: "python", difficulty: "debutant",
    question: "Que retourne `type(3.14)` ?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
    answer: "<class 'float'>",
    explanation: "En Python, les nombres à virgule flottante sont de type 'float'. Le type 'double' n'existe pas en Python standard."
  },
  {
    id: 7, subject: "python", difficulty: "debutant",
    question: "Quelle est la bonne façon de créer une variable contenant le texte 'Bonjour' ?",
    options: ["String x = 'Bonjour'", "x : 'Bonjour'", "x = 'Bonjour'", "let x = 'Bonjour'"],
    answer: "x = 'Bonjour'",
    explanation: "Python a un typage dynamique. Il suffit d'affecter la valeur avec le signe '=' sans déclarer le type."
  },
  // Intermédiaire
  {
    id: 8, subject: "python", difficulty: "intermediaire",
    question: "Que retourne l'expression `list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))` ?",
    options: ["[1, 3]", "[2, 4]", "[False, True, False, True]", "[0, 0]"],
    answer: "[2, 4]",
    explanation: "filter() ne conserve que les éléments pour lesquels la fonction lambda retourne True (ici, les nombres pairs)."
  },
  {
    id: 9, subject: "python", difficulty: "intermediaire",
    question: "Quelle clause utiliser pour s'assurer qu'un bloc de code est exécuté même si une exception est levée ?",
    options: ["except", "else", "finally", "catch"],
    answer: "finally",
    explanation: "Le bloc 'finally' s'exécute toujours, qu'il y ait eu une erreur (exception) ou non. Il est très utile pour fermer des ressources."
  },
  {
    id: 10, subject: "python", difficulty: "intermediaire",
    question: "Que fait ce code : `[x*2 for x in range(3)]` ?",
    options: ["Crée une liste [0, 2, 4]", "Crée une liste [2, 4, 6]", "Génère une erreur", "Crée un dictionnaire"],
    answer: "Crée une liste [0, 2, 4]",
    explanation: "C'est une 'list comprehension' qui itère sur 0, 1, 2 et multiplie chaque valeur par 2."
  },
  {
    id: 11, subject: "python", difficulty: "intermediaire",
    question: "Que signifie `*args` dans la définition d'une fonction `def f(*args):` ?",
    options: ["Passe un pointeur", "Accepte un nombre arbitraire d'arguments positionnels (sous forme de tuple)", "Accepte des arguments nommés", "Définit un argument obligatoire"],
    answer: "Accepte un nombre arbitraire d'arguments positionnels (sous forme de tuple)",
    explanation: "L'étoile (*) unpacke les arguments restants dans un tuple nommé 'args'."
  },
  {
    id: 12, subject: "python", difficulty: "intermediaire",
    question: "Dans un dictionnaire `d`, pourquoi utiliser `d.get('clé')` plutôt que `d['clé']` ?",
    options: ["C'est plus rapide", "Cela évite une KeyError si la clé n'existe pas (retourne None)", "Cela permet de modifier la valeur", "C'est obligatoire en Python 3"],
    answer: "Cela évite une KeyError si la clé n'existe pas (retourne None)",
    explanation: "La méthode .get() retourne None (ou une valeur par défaut) au lieu de faire planter le programme si la clé est absente."
  },
  {
    id: 13, subject: "python", difficulty: "intermediaire",
    question: "Qu'est-ce qu'une fonction lambda en Python ?",
    options: ["Une fonction mathématique complexe", "Une fonction anonyme d'une seule ligne", "Un module externe", "Une boucle"],
    answer: "Une fonction anonyme d'une seule ligne",
    explanation: "Les lambdas sont souvent utilisées pour des opérations courtes (ex: tris, filtres) sans avoir besoin de définir une fonction avec 'def'."
  },
  {
    id: 14, subject: "python", difficulty: "intermediaire",
    question: "Quelle syntaxe permet d'importer uniquement la fonction `sqrt` du module `math` ?",
    options: ["import sqrt from math", "import math.sqrt", "from math import sqrt", "include math.sqrt"],
    answer: "from math import sqrt",
    explanation: "Cette syntaxe permet d'utiliser directement sqrt() sans avoir à préfixer par math.sqrt()."
  },
  // Expert
  {
    id: 15, subject: "python", difficulty: "expert",
    question: "Que fait le code `df.loc[df['X'] >= 2]` en Pandas ?",
    options: ["Il supprime les lignes où X >= 2", "Il multiplie par 2 les valeurs de X", "Il filtre et retourne uniquement les lignes où la colonne X a une valeur supérieure ou égale à 2", "Il génère une erreur"],
    answer: "Il filtre et retourne uniquement les lignes où la colonne X a une valeur supérieure ou égale à 2",
    explanation: "L'indexation booléenne dans Pandas avec .loc permet de filtrer très efficacement un DataFrame en fonction d'une condition."
  },
  {
    id: 16, subject: "python", difficulty: "expert",
    question: "Quel mot-clé est utilisé pour créer un Générateur en Python ?",
    options: ["generate", "yield", "return", "async"],
    answer: "yield",
    explanation: "Un générateur utilise 'yield' pour suspendre l'exécution et renvoyer une valeur, permettant de ne pas charger toute une liste en mémoire."
  },
  {
    id: 17, subject: "python", difficulty: "expert",
    question: "Qu'est-ce que le GIL en Python (CPython) ?",
    options: ["Global Interface Library", "Global Interpreter Lock (empêche l'exécution simultanée de plusieurs threads Python)", "General Integer Limit", "Un garbage collector"],
    answer: "Global Interpreter Lock (empêche l'exécution simultanée de plusieurs threads Python)",
    explanation: "Le GIL fait que le multithreading en Python ne permet pas le parallélisme sur des opérations CPU-bound. Il faut utiliser le multiprocessing."
  },
  {
    id: 18, subject: "python", difficulty: "expert",
    question: "Quelle est la différence entre `__init__` et `__new__` dans une classe ?",
    options: ["Aucune", "__new__ initialise l'objet, __init__ l'alloue", "__new__ alloue la mémoire pour l'instance, __init__ l'initialise", "__new__ est pour les méthodes statiques"],
    answer: "__new__ alloue la mémoire pour l'instance, __init__ l'initialise",
    explanation: "__new__ est la vraie méthode de création de l'objet (pattern Singleton par ex), tandis que __init__ configure l'objet une fois créé."
  },
  {
    id: 19, subject: "python", difficulty: "expert",
    question: "À quoi sert une Métaclasse en Python ?",
    options: ["À hériter de multiples classes", "À définir le comportement et la création d'autres classes", "À optimiser le code C", "À stocker des métadonnées comme les commentaires"],
    answer: "À définir le comportement et la création d'autres classes",
    explanation: "Si un objet est une instance de classe, une classe est une instance de Métaclasse (par défaut 'type'). Elles interceptent la création des classes."
  },
  {
    id: 20, subject: "python", difficulty: "expert",
    question: "Dans le module `asyncio`, à quoi sert le mot-clé `await` ?",
    options: ["Mettre le thread actuel en pause (sleep)", "Rendre la main à l'event loop en attendant que la coroutine se termine", "Déclencher une exception si c'est trop long", "Fermer la connexion asynchrone"],
    answer: "Rendre la main à l'event loop en attendant que la coroutine se termine",
    explanation: "await permet à l'Event Loop de faire tourner d'autres tâches asynchrones en attendant que l'opération I/O (réseau, disque) soit finie."
  },

  // ================== ARCHITECTURE ==================
  // Débutant
  {
    id: 21, subject: "architecture", difficulty: "debutant",
    question: "Quel diagramme UML répond à la question : 'Qui utilise le système et pour faire quoi ?'",
    options: ["Diagramme de classes", "Diagramme de cas d'usage", "Diagramme de séquence", "Modèle C4"],
    answer: "Diagramme de cas d'usage",
    explanation: "Le diagramme de cas d'usage définit le périmètre du système et les interactions globales avec les acteurs."
  },
  {
    id: 22, subject: "architecture", difficulty: "debutant",
    question: "Que signifie le sigle UML ?",
    options: ["Unified Modeling Language", "Universal Machine Language", "User Mode Logic", "Unified Master Layout"],
    answer: "Unified Modeling Language",
    explanation: "UML est un langage graphique standardisé pour la modélisation de logiciels."
  },
  {
    id: 23, subject: "architecture", difficulty: "debutant",
    question: "Dans un diagramme de classes, comment représente-t-on l'héritage ?",
    options: ["Une flèche en pointillé", "Un losange noir", "Une flèche avec un triangle vide au bout", "Un trait simple"],
    answer: "Une flèche avec un triangle vide au bout",
    explanation: "L'héritage (ou généralisation) pointe vers la classe parente avec une flèche à bout triangulaire vide."
  },
  {
    id: 24, subject: "architecture", difficulty: "debutant",
    question: "Qu'est-ce qu'une architecture Client-Serveur ?",
    options: ["Tout le code est sur un seul ordinateur", "Le client fait des requêtes, le serveur y répond", "Le client gère la base de données", "Les ordinateurs communiquent en pair-à-pair"],
    answer: "Le client fait des requêtes, le serveur y répond",
    explanation: "C'est le modèle de base du Web : le navigateur (Client) demande une page au Serveur, qui lui renvoie."
  },
  {
    id: 25, subject: "architecture", difficulty: "debutant",
    question: "À quoi sert un diagramme de séquence ?",
    options: ["À lister les cas d'usage", "À montrer la base de données", "À modéliser l'ordre chronologique des messages entre des acteurs/objets", "À déployer des serveurs"],
    answer: "À modéliser l'ordre chronologique des messages entre des acteurs/objets",
    explanation: "Il décrit comment et dans quel ordre les objets d'un système interagissent dans le temps (axe vertical)."
  },
  {
    id: 26, subject: "architecture", difficulty: "debutant",
    question: "Qu'est-ce qu'un acteur dans UML ?",
    options: ["Une fonction du code", "Une entité externe (humain ou autre système) interagissant avec notre système", "La base de données interne", "Le développeur du système"],
    answer: "Une entité externe (humain ou autre système) interagissant avec notre système",
    explanation: "L'acteur est toujours externe au système modélisé."
  },
  {
    id: 27, subject: "architecture", difficulty: "debutant",
    question: "Qu'appelle-t-on un 'Monolithe' en architecture ?",
    options: ["Un petit service très rapide", "Une application construite et déployée comme un seul gros bloc unifié", "Une base de données en pierre", "Un serveur de cache"],
    answer: "Une application construite et déployée comme un seul gros bloc unifié",
    explanation: "Contrairement aux microservices, le monolithe regroupe toute l'interface, la logique et l'accès aux données dans un même exécutable."
  },
  // Intermédiaire
  {
    id: 28, subject: "architecture", difficulty: "intermediaire",
    question: "Dans un diagramme de cas d'usage, à quoi sert la relation <<include>> ?",
    options: ["À gérer une exception", "À inclure un comportement obligatoire et systématique", "À montrer l'héritage", "À indiquer un cas optionnel"],
    answer: "À inclure un comportement obligatoire et systématique",
    explanation: "<<include>> est systématique (ex: Se connecter inclut Vérifier mot de passe), contrairement à <<extend>> qui est optionnel."
  },
  {
    id: 29, subject: "architecture", difficulty: "intermediaire",
    question: "Quelle est la principale différence entre 'Couplage' et 'Cohésion' ?",
    options: ["C'est la même chose", "La cohésion mesure si un composant a un rôle unique, le couplage mesure les dépendances entre les composants", "Le couplage est bon, la cohésion est mauvaise", "La cohésion concerne la DB"],
    answer: "La cohésion mesure si un composant a un rôle unique, le couplage mesure les dépendances entre les composants",
    explanation: "Une bonne architecture vise une FORTE cohésion (responsabilité unique) et un FAIBLE couplage (dépendances minimisées)."
  },
  {
    id: 30, subject: "architecture", difficulty: "intermediaire",
    question: "Quelle est la différence entre Composition et Agrégation ?",
    options: ["Aucune", "La composition implique que si le conteneur est détruit, le contenu aussi (cycle de vie lié)", "L'agrégation est plus forte que la composition", "La composition est asynchrone"],
    answer: "La composition implique que si le conteneur est détruit, le contenu aussi (cycle de vie lié)",
    explanation: "Exemple Composition: Une maison et ses pièces (losange noir). Agrégation: Un club et ses membres (losange blanc)."
  },
  {
    id: 31, subject: "architecture", difficulty: "intermediaire",
    question: "Dans un diagramme d'états-transitions, qu'est-ce qui provoque le passage d'un état à un autre ?",
    options: ["Une classe", "Un acteur", "Un événement (ou trigger)", "Une base de données"],
    answer: "Un événement (ou trigger)",
    explanation: "L'événement est le déclencheur (ex: clic sur un bouton, réception d'un message) qui active la transition."
  },
  {
    id: 32, subject: "architecture", difficulty: "intermediaire",
    question: "Que signifie la multiplicité `1..*` ?",
    options: ["Exactement 1", "De 0 à plusieurs", "De 1 à plusieurs (au moins 1)", "Un nombre aléatoire"],
    answer: "De 1 à plusieurs (au moins 1)",
    explanation: "Cela indique que la relation nécessite au moins une instance, et peut en accepter une infinité."
  },
  {
    id: 33, subject: "architecture", difficulty: "intermediaire",
    question: "Quels sont les 3 tiers classiques d'une architecture 3-Tiers ?",
    options: ["Serveur, Routeur, Switch", "Présentation, Logique Métier, Accès aux Données", "HTML, CSS, JS", "Client, Serveur, Cloud"],
    answer: "Présentation, Logique Métier, Accès aux Données",
    explanation: "La séparation en 3 couches (Tiers) permet de séparer l'interface utilisateur, les règles de gestion (applicatif) et le stockage (BDD)."
  },
  {
    id: 34, subject: "architecture", difficulty: "intermediaire",
    question: "À quoi sert un diagramme de déploiement ?",
    options: ["À modéliser le code source", "À montrer comment le logiciel est distribué sur des nœuds matériels (serveurs, PC...)", "À concevoir l'interface graphique", "À lister les bugs"],
    answer: "À montrer comment le logiciel est distribué sur des nœuds matériels (serveurs, PC...)",
    explanation: "Il cartographie l'infrastructure physique ou cloud sur laquelle tournent les composants."
  },
  // Expert
  {
    id: 35, subject: "architecture", difficulty: "expert",
    question: "Quel est le but principal de l'approche microservices par rapport à une architecture monolithe ?",
    options: ["Réduire la complexité du réseau", "Permettre un déploiement et une scalabilité indépendants par domaine", "Avoir une seule base de données", "Ne plus coder"],
    answer: "Permettre un déploiement et une scalabilité indépendants par domaine",
    explanation: "Les microservices permettent de faire évoluer des composants indépendamment, au prix d'une complexité réseau et de déploiement plus élevée."
  },
  {
    id: 36, subject: "architecture", difficulty: "expert",
    question: "Dans le Modèle C4, que représente le niveau 2 ('Containers') ?",
    options: ["Des conteneurs Docker", "Les applications web, mobiles ou bases de données qui composent le système", "Des classes Java", "Des serveurs physiques"],
    answer: "Les applications web, mobiles ou bases de données qui composent le système",
    explanation: "Dans le modèle C4 (Context, Containers, Components, Code), un 'Container' est une unité exécutable séparée (ex: une app Spring Boot, une base PostgreSQL)."
  },
  {
    id: 37, subject: "architecture", difficulty: "expert",
    question: "Qu'est-ce qu'un 'API Gateway' dans une architecture microservices ?",
    options: ["Un firewall réseau", "Un point d'entrée unique qui route les requêtes clientes vers les bons microservices", "Une base de données partagée", "Un protocole binaire"],
    answer: "Un point d'entrée unique qui route les requêtes clientes vers les bons microservices",
    explanation: "L'API Gateway masque la complexité interne aux clients, gère l'authentification, le rate limiting et le routage."
  },
  {
    id: 38, subject: "architecture", difficulty: "expert",
    question: "Que signifie CQRS ?",
    options: ["Command Query Responsibility Segregation (Séparer la lecture de l'écriture)", "Code Quality Requirements Standard", "Continuous Query Rating System", "Centralized Queue Routing Service"],
    answer: "Command Query Responsibility Segregation (Séparer la lecture de l'écriture)",
    explanation: "Le pattern CQRS sépare les modèles de mise à jour (Commandes) et les modèles de lecture (Requêtes) pour optimiser les performances."
  },
  {
    id: 39, subject: "architecture", difficulty: "expert",
    question: "Qu'est-ce qu'un 'Bounded Context' (Contexte Délimité) en Domain-Driven Design (DDD) ?",
    options: ["Une limite de RAM", "Une frontière explicite dans laquelle un modèle métier a un sens spécifique et unique", "Un fichier de configuration", "Une boucle infinie"],
    answer: "Une frontière explicite dans laquelle un modèle métier a un sens spécifique et unique",
    explanation: "Dans un e-commerce, le concept de 'Client' n'est pas modélisé de la même façon dans le contexte 'Facturation' que dans le contexte 'Support'."
  },
  {
    id: 40, subject: "architecture", difficulty: "expert",
    question: "Dans une architecture événementielle (Event-Driven), comment communiquent les services ?",
    options: ["Par requêtes HTTP synchrones directes", "En publiant et s'abonnant à des événements asynchrones via un Bus (ex: Kafka, RabbitMQ)", "En partageant la même base de données", "Ils ne communiquent jamais"],
    answer: "En publiant et s'abonnant à des événements asynchrones via un Bus (ex: Kafka, RabbitMQ)",
    explanation: "Cela réduit fortement le couplage car le producteur de l'événement n'a pas besoin de savoir qui consommera l'événement."
  },

  // ================== JAVA ==================
  // Débutant
  {
    id: 41, subject: "java", difficulty: "debutant",
    question: "Quel mot-clé est utilisé pour créer une instance d'une classe en Java ?",
    options: ["class", "instance", "new", "create"],
    answer: "new",
    explanation: "Le mot-clé 'new' permet d'instancier un objet en mémoire et d'appeler son constructeur (ex: new Voiture())."
  },
  {
    id: 42, subject: "java", difficulty: "debutant",
    question: "À quoi sert le mot-clé 'private' dans une classe ?",
    options: ["À cacher la classe", "À empêcher la modification ou la lecture directe d'un attribut depuis l'extérieur", "À supprimer l'attribut", "À déclarer une constante"],
    answer: "À empêcher la modification ou la lecture directe d'un attribut depuis l'extérieur",
    explanation: "C'est le principe d'encapsulation. Les attributs 'private' ne sont accessibles que via des méthodes publiques (Getters/Setters)."
  },
  {
    id: 43, subject: "java", difficulty: "debutant",
    question: "Quelle est la méthode point d'entrée d'un programme Java ?",
    options: ["start()", "init()", "public static void main(String[] args)", "run()"],
    answer: "public static void main(String[] args)",
    explanation: "La JVM cherche spécifiquement la méthode 'main' statique pour démarrer l'exécution d'un programme."
  },
  {
    id: 44, subject: "java", difficulty: "debutant",
    question: "Parmi ces types, lequel n'est PAS un type primitif en Java ?",
    options: ["int", "boolean", "String", "double"],
    answer: "String",
    explanation: "String est une classe (un objet) en Java, contrairement à int ou boolean qui sont des types primitifs stockés directement en mémoire."
  },
  {
    id: 45, subject: "java", difficulty: "debutant",
    question: "Quel mot-clé permet à une classe d'hériter d'une autre classe ?",
    options: ["implements", "inherits", "extends", "super"],
    answer: "extends",
    explanation: "On utilise 'extends' pour l'héritage de classes, et 'implements' pour implémenter une Interface."
  },
  {
    id: 46, subject: "java", difficulty: "debutant",
    question: "Comment déclare-t-on un tableau d'entiers en Java ?",
    options: ["int arr[]", "Array<int> arr", "int[] arr", "Les deux réponses : int arr[] et int[] arr"],
    answer: "Les deux réponses : int arr[] et int[] arr",
    explanation: "Même si 'int[] arr' est la convention recommandée en Java, 'int arr[]' (façon C/C++) est également valide."
  },
  {
    id: 47, subject: "java", difficulty: "debutant",
    question: "Qu'est-ce qu'un constructeur ?",
    options: ["Une méthode pour détruire l'objet", "Une méthode spéciale appelée lors de la création de l'objet (new)", "Un outil pour générer du code", "Une variable statique"],
    answer: "Une méthode spéciale appelée lors de la création de l'objet (new)",
    explanation: "Le constructeur porte le même nom que la classe et initialise les attributs de l'objet naissant."
  },
  // Intermédiaire
  {
    id: 48, subject: "java", difficulty: "intermediaire",
    question: "Si une méthode est déclarée 'static', qu'est-ce que cela signifie ?",
    options: ["Constante", "Elle appartient à la classe elle-même et non à une instance", "Elle est asynchrone", "Ne retourne rien"],
    answer: "Elle appartient à la classe elle-même et non à une instance",
    explanation: "Les méthodes 'static' sont partagées et peuvent être appelées sans instancier l'objet (ex: Math.random())."
  },
  {
    id: 49, subject: "java", difficulty: "intermediaire",
    question: "À quoi fait référence le mot-clé 'this' ?",
    options: ["À la classe parente", "À l'instance courante de l'objet", "À la méthode main", "Au package"],
    answer: "À l'instance courante de l'objet",
    explanation: "'this' permet à un objet de faire référence à lui-même, très utile pour lever l'ambiguïté entre attribut et paramètre."
  },
  {
    id: 50, subject: "java", difficulty: "intermediaire",
    question: "Quelle est la différence entre une Interface et une Classe Abstraite ?",
    options: ["Aucune", "Une classe abstraite peut contenir du code (méthodes implémentées) et des attributs d'état, pas une interface (historiquement)", "L'interface est plus rapide", "On peut instancier une classe abstraite"],
    answer: "Une classe abstraite peut contenir du code (méthodes implémentées) et des attributs d'état, pas une interface (historiquement)",
    explanation: "De plus, une classe Java ne peut hériter (extends) que d'une seule classe abstraite, mais implémenter (implements) plusieurs interfaces."
  },
  {
    id: 51, subject: "java", difficulty: "intermediaire",
    question: "Comment intercepte-t-on une exception en Java ?",
    options: ["if/else", "try/catch", "throw/throws", "attempt/recover"],
    answer: "try/catch",
    explanation: "Le code risqué est placé dans un bloc 'try', et l'erreur est gérée dans le bloc 'catch'."
  },
  {
    id: 52, subject: "java", difficulty: "intermediaire",
    question: "Quel est l'avantage de ArrayList par rapport à un tableau classique (Array) ?",
    options: ["Plus rapide à l'exécution", "La taille d'une ArrayList est dynamique et peut grandir", "ArrayList prend moins de mémoire", "Il n'y a pas d'avantage"],
    answer: "La taille d'une ArrayList est dynamique et peut grandir",
    explanation: "Un tableau classique (ex: int[5]) a une taille fixe. Une ArrayList redimensionne son tableau sous-jacent automatiquement."
  },
  {
    id: 53, subject: "java", difficulty: "intermediaire",
    question: "Qu'est-ce que la surcharge (Overloading) de méthode ?",
    options: ["Remplacer une méthode de la classe parente", "Mettre trop de code dans une méthode", "Avoir plusieurs méthodes avec le même nom mais des paramètres différents", "Planter la JVM"],
    answer: "Avoir plusieurs méthodes avec le même nom mais des paramètres différents",
    explanation: "Le compilateur saura quelle méthode appeler en fonction des arguments fournis (ex: print(String) vs print(int))."
  },
  {
    id: 54, subject: "java", difficulty: "intermediaire",
    question: "Que fait le mot-clé 'final' devant une variable ?",
    options: ["Il rend la variable asynchrone", "Il indique que la variable ne peut plus être modifiée une fois initialisée (constante)", "Il termine le programme", "Il optimise la mémoire"],
    answer: "Il indique que la variable ne peut plus être modifiée une fois initialisée (constante)",
    explanation: "Une fois assignée, une variable 'final' est une constante. Sur une classe, 'final' empêche l'héritage."
  },
  // Expert
  {
    id: 55, subject: "java", difficulty: "expert",
    question: "Pourquoi faut-il souvent redéfinir ('override') la méthode equals() ?",
    options: ["Pour changer le nom de la classe", "Parce que l'implémentation par défaut compare les adresses mémoire (==) et non les valeurs", "Pour imprimer l'objet", "Pour éviter les exceptions"],
    answer: "Parce que l'implémentation par défaut compare les adresses mémoire (==) et non les valeurs",
    explanation: "Pour comparer la 'valeur' de deux objets (ex: deux Personnes avec le même nom), il faut redéfinir equals(). Il faut alors toujours redéfinir hashCode() aussi."
  },
  {
    id: 56, subject: "java", difficulty: "expert",
    question: "Quel est le rôle du Garbage Collector (Ramasse-miettes) en Java ?",
    options: ["Purger la base de données", "Supprimer automatiquement de la mémoire (Heap) les objets qui ne sont plus référencés", "Formater le code source", "Fermer les fichiers ouverts"],
    answer: "Supprimer automatiquement de la mémoire (Heap) les objets qui ne sont plus référencés",
    explanation: "Contrairement au C/C++ où le développeur doit libérer la mémoire manuellement, la JVM s'en charge périodiquement en arrière-plan."
  },
  {
    id: 57, subject: "java", difficulty: "expert",
    question: "Que signifie la différence entre JDK, JRE et JVM ?",
    options: ["Aucune", "JVM exécute, JRE inclut les librairies, JDK inclut les outils de dev (compilateur)", "JDK est pour Mac, JRE pour Windows", "Ce sont des versions (Java 8, 11, 17)"],
    answer: "JVM exécute, JRE inclut les librairies, JDK inclut les outils de dev (compilateur)",
    explanation: "JDK (Development Kit) = JRE + javac. JRE (Runtime Environment) = JVM + librairies standard. JVM (Virtual Machine) = exécute le bytecode."
  },
  {
    id: 58, subject: "java", difficulty: "expert",
    question: "À quoi sert le mot-clé 'synchronized' ?",
    options: ["À lier la BDD", "À empêcher que plusieurs Threads n'accèdent simultanément à un bloc de code critique", "À charger des données en arrière-plan", "À télécharger des fichiers"],
    answer: "À empêcher que plusieurs Threads n'accèdent simultanément à un bloc de code critique",
    explanation: "Il place un 'verrou' (lock) sur l'objet ou la classe, garantissant qu'un seul thread à la fois exécute la méthode synchronisée (Thread-safety)."
  },
  {
    id: 59, subject: "java", difficulty: "expert",
    question: "Dans l'API Stream (Java 8+), quelle est la différence entre map() et filter() ?",
    options: ["Aucune", "filter() réduit le nombre d'éléments, map() transforme chaque élément", "map() trie la liste", "filter() crée un dictionnaire"],
    answer: "filter() réduit le nombre d'éléments, map() transforme chaque élément",
    explanation: "filter() garde les éléments vérifiant un prédicat, map() applique une fonction pour transformer l'élément A en élément B."
  },
  {
    id: 60, subject: "java", difficulty: "expert",
    question: "Qu'est-ce que l'API de Réflexion (Reflection) en Java ?",
    options: ["Un outil pour dessiner", "Une API permettant d'inspecter et modifier la structure d'une classe (champs, méthodes) à l'exécution", "Un framework de base de données", "Un outil de test unitaire"],
    answer: "Une API permettant d'inspecter et modifier la structure d'une classe (champs, méthodes) à l'exécution",
    explanation: "La réflexion permet de lire les annotations, d'invoquer des méthodes privées ou d'instancier des classes dynamiquement au Runtime."
  }
];
