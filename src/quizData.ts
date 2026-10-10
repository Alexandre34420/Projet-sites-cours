export type QuizLevel = 'debutant' | 'intermediaire' | 'avance' | 'tous';

export interface QuizQuestion {
  id: number;
  level: 'debutant' | 'intermediaire' | 'avance';
  category: string;
  relatedCardId: number;
  question: string;
  code?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // --- NIVEAU DÉBUTANT (20 QUESTIONS) ---
  // ==========================================
  {
    id: 1,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 1,
    question: "Que retourne la fonction input() par défaut en Python ?",
    code: "x = input(\"Entrez un nombre : \")",
    options: [
      "Un entier (int)",
      "Une chaîne de caractères (str)",
      "Un flottant (float)",
      "Le type correspondant à la saisie"
    ],
    correctIndex: 1,
    explanation: "input() retourne TOUJOURS une chaîne de caractères (str). Il faut explicitement convertir avec int(x) ou float(x) pour effectuer des calculs numériques."
  },
  {
    id: 2,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 2,
    question: "Qu'affiche ce code avec la fonction range() ?",
    code: "for i in range(1, 6, 2):\n    print(i, end=\" \")",
    options: [
      "1 2 3 4 5",
      "1 3 5",
      "1 3 5 7",
      "2 4 6"
    ],
    correctIndex: 1,
    explanation: "range(debut, fin, pas) commence à 1, s'arrête strictement avant 6, avec un pas de 2. Les valeurs produites sont donc 1, 3 et 5."
  },
  {
    id: 3,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 3,
    question: "Quelle est la valeur de bool(\"\") en Python ?",
    options: [
      "True",
      "False",
      "None",
      "Provoque une ValueError"
    ],
    correctIndex: 1,
    explanation: "Une chaîne vide \"\" est considérée comme falsy en Python. Sa conversion avec bool(\"\") renvoie donc False. Tout comme 0, [] ou {}."
  },
  {
    id: 4,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 4,
    question: "Quelle est la principale différence entre un tuple et une liste ?",
    options: [
      "Les listes s'écrivent avec des parenthèses, les tuples avec des crochets",
      "Les tuples sont immuables (non modifiables), les listes sont mutables",
      "Les tuples ne peuvent contenir que des nombres",
      "Les tuples sont toujours triés par défaut"
    ],
    correctIndex: 1,
    explanation: "Les tuples sont immuables : une fois créés, on ne peut ni modifier ni ajouter d'éléments. Les listes sont mutables."
  },
  {
    id: 5,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 5,
    question: "Comment ajouter un élément à la fin d'une liste L en Python ?",
    options: [
      "L.add(x)",
      "L.push(x)",
      "L.append(x)",
      "L.insertEnd(x)"
    ],
    correctIndex: 2,
    explanation: "La méthode officielle pour ajouter un élément à la fin d'une liste Python est L.append(x). Elle modifie la liste en place."
  },
  {
    id: 6,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 1,
    question: "Comment afficher plusieurs variables séparées par un tiret avec print() ?",
    options: [
      "print(a, b, split=\"-\")",
      "print(a, b, sep=\"-\")",
      "print(a, b, join=\"-\")",
      "print(a - b)"
    ],
    correctIndex: 1,
    explanation: "Le paramètre nommé 'sep' de print() définit la chaîne séparatrice entre chaque argument affiché (par défaut un espace simple)."
  },
  {
    id: 7,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 5,
    question: "Quelle fonction native renvoie le nombre d'éléments d'une liste ou d'une chaîne ?",
    code: "L = [10, 20, 30]\ntaille = ???(L)",
    options: [
      "size(L)",
      "length(L)",
      "len(L)",
      "count(L)"
    ],
    correctIndex: 2,
    explanation: "La fonction globale len(objet) retourne la longueur (nombre d'éléments) d'une séquence comme une liste, un tuple ou une chaîne."
  },
  {
    id: 8,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 5,
    question: "Comment accéder au dernier élément d'une liste sans connaître sa taille ?",
    code: "L = [4, 8, 15, 16, 23, 42]",
    options: [
      "L[last]",
      "L[-1]",
      "L[end]",
      "L.pop()"
    ],
    correctIndex: 1,
    explanation: "L'indexation négative commence à -1 pour le dernier élément, -2 pour l'avant-dernier, etc."
  },
  {
    id: 9,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 3,
    question: "Que produit l'expression int(3.9) en Python ?",
    options: [
      "4 (arrondi au plus proche)",
      "3 (troncature de la partie décimale)",
      "Une erreur TypeError",
      "3.0"
    ],
    correctIndex: 1,
    explanation: "La conversion int() sur un float tronque toujours vers zéro la partie décimale, sans arrondir. int(3.9) donne 3."
  },
  {
    id: 10,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 4,
    question: "Qu'affiche le dépaquetage suivant ?",
    code: "t = (10, 20)\na, b = t\nprint(b)",
    options: [
      "(10, 20)",
      "10",
      "20",
      "Une erreur ValueError"
    ],
    correctIndex: 2,
    explanation: "Le dépaquetage assigne respectivement le premier élément à 'a' (10) et le deuxième à 'b' (20)."
  },
  {
    id: 11,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 2,
    question: "Quel mot-clé est utilisé pour une condition alternative en Python ?",
    options: [
      "else if",
      "elsif",
      "elif",
      "case"
    ],
    correctIndex: 2,
    explanation: "En Python, la contraction de 'else if' est 'elif'."
  },
  {
    id: 12,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 3,
    question: "Quel est le résultat de l'opération '3' + '5' ?",
    options: [
      "8",
      "'35'",
      "'8'",
      "Une erreur TypeError"
    ],
    correctIndex: 1,
    explanation: "Comme ce sont deux chaînes de caractères (str), l'opérateur '+' effectue une concaténation, produisant '35'."
  },
  {
    id: 13,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 5,
    question: "Quelle méthode permet de supprimer un élément par sa valeur dans une liste ?",
    code: "L = [10, 20, 30]\n# Retirer la valeur 20",
    options: [
      "L.remove(20)",
      "del L(20)",
      "L.delete(20)",
      "L.drop(20)"
    ],
    correctIndex: 0,
    explanation: "L.remove(valeur) supprime la première occurrence de la valeur dans la liste. del L[index] supprime par index."
  },
  {
    id: 14,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 2,
    question: "Comment itérer directement sur les éléments d'une liste sans utiliser range() ?",
    options: [
      "for element in sequence:",
      "foreach (element in sequence):",
      "for (i = 0; i < len; i++):",
      "loop element sequence:"
    ],
    correctIndex: 0,
    explanation: "En Python, la boucle for itère directement sur chaque élément de n'importe quel itérable via 'for element in sequence:'."
  },
  {
    id: 15,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 1,
    question: "Quel symbole débute un commentaire sur une ligne en Python ?",
    options: [
      "//",
      "/*",
      "#",
      "--"
    ],
    correctIndex: 2,
    explanation: "Le symbole dièse '#' est utilisé pour les commentaires d'une ligne en Python."
  },
  {
    id: 16,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 6,
    question: "Quelle est la syntaxe correcte pour créer un dictionnaire vide ?",
    options: [
      "d = []",
      "d = ()",
      "d = {}",
      "d = dict[]"
    ],
    correctIndex: 2,
    explanation: "Les accolades '{}' ou 'dict()' créent un dictionnaire vide. Les crochets '[]' créent une liste et '()' un tuple."
  },
  {
    id: 17,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 2,
    question: "Que se passe-t-il si la condition d'une boucle while reste toujours True ?",
    options: [
      "La boucle s'arrête après 100 itérations par sécurité",
      "Une boucle infinie est créée",
      "Python lève une RecursionError",
      "Le programme s'interrompt avec un avertissement SyntaxWarning"
    ],
    correctIndex: 1,
    explanation: "Si la condition ne devient jamais False et qu'aucun break n'est rencontré, la boucle tourne indéfiniment (boucle infinie)."
  },
  {
    id: 18,
    level: 'debutant',
    category: 'Données',
    relatedCardId: 5,
    question: "Quel est le résultat du slicing L[0:2] sur L = ['a', 'b', 'c', 'd'] ?",
    options: [
      "['a', 'b']",
      "['a', 'b', 'c']",
      "['b', 'c']",
      "['a']"
    ],
    correctIndex: 0,
    explanation: "L[0:2] prend l'indice 0 ('a') et l'indice 1 ('b'). L'indice 2 est strictement exclu."
  },
  {
    id: 19,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 3,
    question: "Quelle fonction permet de connaître le type d'une variable ?",
    options: [
      "typeof(x)",
      "type(x)",
      "var_type(x)",
      "is(x)"
    ],
    correctIndex: 1,
    explanation: "La fonction intégrée type(x) renvoie le type dynamique de l'objet (ex: <class 'int'>)."
  },
  {
    id: 20,
    level: 'debutant',
    category: 'Bases',
    relatedCardId: 1,
    question: "Par défaut, par quoi se termine chaque appel à print() si 'end' n'est pas spécifié ?",
    options: [
      "Un espace ' '",
      "Un retour à la ligne '\\n'",
      "Une tabulation '\\t'",
      "Rien du tout (chaîne vide)"
    ],
    correctIndex: 1,
    explanation: "Par défaut, print() a pour paramètre end='\\n', ce qui provoque un saut de ligne automatique."
  },

  // ==========================================
  // --- NIVEAU INTERMÉDIAIRE (20 QUESTIONS) ---
  // ==========================================
  {
    id: 21,
    level: 'intermediaire',
    category: 'Données',
    relatedCardId: 6,
    question: "Comment accéder en toute sécurité à une clé de dictionnaire avec une valeur de repli ?",
    code: "d = {'a': 1}\nval = d.???('b', 0)",
    options: [
      "find('b', 0)",
      "get('b', 0)",
      "fetch('b', 0)",
      "lookup('b', 0)"
    ],
    correctIndex: 1,
    explanation: "d.get(cle, defaut) renvoie la valeur associée à la clé si elle existe, ou la valeur de repli sans lever d'exception KeyError."
  },
  {
    id: 22,
    level: 'intermediaire',
    category: 'Données',
    relatedCardId: 5,
    question: "Que renvoie l'instruction L[::-1] sur une liste L = [1, 2, 3] ?",
    code: "L = [1, 2, 3]\nprint(L[::-1])",
    options: [
      "[-1, -2, -3]",
      "[3, 2, 1]",
      "[1, 2]",
      "Une erreur SyntaxError"
    ],
    correctIndex: 1,
    explanation: "Le slicing [::-1] avec un pas négatif de -1 effectue une inversion complète de la liste ou de la chaîne sans modifier l'original."
  },
  {
    id: 23,
    level: 'intermediaire',
    category: 'Fonctions',
    relatedCardId: 7,
    question: "Qu'est-ce qu'une fonction lambda en Python ?",
    code: "carre = lambda x: x * x",
    options: [
      "Une fonction asynchrone pour multithreading",
      "Une fonction anonyme restreinte à une seule expression",
      "Une fonction intégrée exclusivement au module math",
      "Une fonction sans argument d'entrée"
    ],
    correctIndex: 1,
    explanation: "Une fonction lambda est une petite fonction anonyme définie en une seule ligne qui renvoie implicitement le résultat de son expression unique."
  },
  {
    id: 24,
    level: 'intermediaire',
    category: 'Fonctions',
    relatedCardId: 8,
    question: "Que retourne ce code combinant filter() et list() ?",
    code: "L = [10, 15, 20, 25]\nres = list(filter(lambda x: x >= 20, L))\nprint(res)",
    options: [
      "[True, True]",
      "[20, 25]",
      "[10, 15]",
      "[10, 15, 20, 25]"
    ],
    correctIndex: 1,
    explanation: "filter(predicat, iterable) ne conserve que les éléments pour lesquels la condition renvoie True (ici 20 et 25)."
  },
  {
    id: 25,
    level: 'intermediaire',
    category: 'POO',
    relatedCardId: 10,
    question: "Dans un bloc try / except / else / finally, quand le bloc else s'exécute-t-il ?",
    code: "try:\n    calcul()\nexcept ValueError:\n    print('Erreur')\nelse:\n    print('Succès')\nfinally:\n    print('Terminé')",
    options: [
      "Uniquement si une exception a été levée",
      "Uniquement si aucune exception n'a été levée dans le try",
      "Toujours, juste avant le finally",
      "Uniquement si le code lève une autre erreur que ValueError"
    ],
    correctIndex: 1,
    explanation: "La clause 'else' d'un bloc try s'exécute UNIQUEMENT si le bloc try s'est achevé sans lever la moindre exception."
  },
  {
    id: 26,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 13,
    question: "Quel est le bénéfice principal de l'instruction with open(...) as f: ?",
    code: "with open('data.txt', 'r') as f:\n    contenu = f.read()",
    options: [
      "Elle lit le fichier deux fois plus vite en mémoire",
      "Elle garantit la fermeture automatique du fichier, même en cas d'erreur",
      "Elle chiffre automatiquement le contenu du fichier",
      "Elle empêche d'autres programmes de lire le fichier"
    ],
    correctIndex: 1,
    explanation: "Le context manager 'with' garantit l'appel de f.close() dès la sortie du bloc, même si une exception survient."
  },
  {
    id: 27,
    level: 'intermediaire',
    category: 'Fonctions',
    relatedCardId: 8,
    question: "Que fait le code suivant avec sorted() et l'argument key ?",
    code: "personnes = [('Alice', 25), ('Bob', 19), ('Charlie', 30)]\nsorted(personnes, key=lambda x: x[1])",
    options: [
      "Trie les personnes par ordre alphabétique de leur nom",
      "Trie les personnes par ordre croissant de leur âge (2ème élément)",
      "Supprime les personnes de moins de 25 ans",
      "Inverse les tuples (âge, nom)"
    ],
    correctIndex: 1,
    explanation: "key=lambda x: x[1] extrait le second élément (l'âge) comme critère de tri pour chaque tuple."
  },
  {
    id: 28,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 12,
    question: "Quelle fonction du module os.path permet de séparer le nom du fichier et son extension ?",
    options: [
      "os.path.splitfile(nom)",
      "os.path.splitext(nom)",
      "os.path.extension(nom)",
      "os.path.basename(nom)"
    ],
    correctIndex: 1,
    explanation: "os.path.splitext('rapport.pdf') retourne ('rapport', '.pdf'). L'extension se trouve à l'index [1]."
  },
  {
    id: 29,
    level: 'intermediaire',
    category: 'Données',
    relatedCardId: 6,
    question: "Quelle méthode permet d'itérer simultanément sur les clés et valeurs d'un dictionnaire ?",
    code: "for k, v in d.???():\n    print(k, v)",
    options: [
      "pairs()",
      "items()",
      "entries()",
      "all()"
    ],
    correctIndex: 1,
    explanation: "d.items() renvoie une vue de tuples (clé, valeur) permettant de déballer directement k et v dans la boucle for."
  },
  {
    id: 30,
    level: 'intermediaire',
    category: 'Fonctions',
    relatedCardId: 7,
    question: "Que représentent les annotations comme 'def f(x: int) -> int:' en Python 3 ?",
    options: [
      "Des contraintes imposées à l'exécution qui lèvent une TypeError si violées",
      "Des indications de type (Type Hints) pour la documentation et les analyseurs de code",
      "Une syntaxe de conversion automatique des arguments",
      "Des directives pour le ramasse-miettes"
    ],
    correctIndex: 1,
    explanation: "Les Type Hints aident les développeurs et outils statiques (comme mypy) mais Python ne force pas les types au runtime."
  },
  {
    id: 31,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 13,
    question: "Quelle est la différence entre les modes 'w' et 'a' de la fonction open() ?",
    options: [
      "'w' écrit en binaire, 'a' écrit en texte ASCII",
      "'w' écrase le fichier existant, 'a' ajoute le texte à la fin du fichier",
      "'w' permet la lecture et l'écriture, 'a' est en lecture seule",
      "'w' est asynchrone, 'a' est bloquant"
    ],
    correctIndex: 1,
    explanation: "Le mode 'w' (write) tronque et écrase le fichier. Le mode 'a' (append) ajoute le contenu à la fin sans écraser."
  },
  {
    id: 32,
    level: 'intermediaire',
    category: 'Fonctions',
    relatedCardId: 8,
    question: "Que retourne l'application de map() suivante ?",
    code: "L = [1, 2, 3]\nres = list(map(lambda x: x * 2, L))",
    options: [
      "[1, 2, 3, 1, 2, 3]",
      "[2, 4, 6]",
      "[2, 2, 2]",
      "Une erreur TypeError"
    ],
    correctIndex: 1,
    explanation: "map() applique la fonction à chaque élément de la liste L, produisant [1*2, 2*2, 3*2] = [2, 4, 6]."
  },
  {
    id: 33,
    level: 'intermediaire',
    category: 'POO',
    relatedCardId: 10,
    question: "Quel mot-clé est utilisé pour déclencher délibérément une exception en Python ?",
    code: "if age < 0:\n    ??? ValueError(\"Âge invalide\")",
    options: [
      "throw",
      "raise",
      "fire",
      "dispatch"
    ],
    correctIndex: 1,
    explanation: "En Python, on utilise le mot-clé 'raise' pour lever une exception (contrairement à 'throw' en JavaScript ou Java)."
  },
  {
    id: 34,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 12,
    question: "Quelle fonction permet de supprimer un fichier du disque via le module os ?",
    options: [
      "os.delete(fichier)",
      "os.remove(fichier)",
      "os.unlink_file(fichier)",
      "os.rm(fichier)"
    ],
    correctIndex: 1,
    explanation: "os.remove(chemin) ou os.unlink(chemin) supprime un fichier du système."
  },
  {
    id: 35,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 13,
    question: "Que retourne la méthode f.readlines() sur un fichier ouvert en lecture ?",
    options: [
      "Une seule chaîne de caractères avec tout le fichier",
      "Une liste de chaînes, où chaque élément correspond à une ligne",
      "Le nombre total de lignes sous forme d'entier",
      "Un générateur d'octets"
    ],
    correctIndex: 1,
    explanation: "f.readlines() lit tout le fichier et renvoie une liste de chaînes contenant chaque ligne (avec son retour à la ligne '\\n')."
  },
  {
    id: 36,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 12,
    question: "Quel module de la bibliothèque standard fournit la fonction copyfile(src, dst) ?",
    options: [
      "os",
      "sys",
      "shutil",
      "pathlib"
    ],
    correctIndex: 2,
    explanation: "Le module shutil (shell utilities) offre des fonctions de haut niveau pour copier et déplacer des fichiers et dossiers."
  },
  {
    id: 37,
    level: 'intermediaire',
    category: 'Données',
    relatedCardId: 5,
    question: "Que vaut la liste résultant de cette compréhension de liste ?",
    code: "carres_pairs = [x**2 for x in [1, 2, 3, 4] if x % 2 == 0]",
    options: [
      "[1, 4, 9, 16]",
      "[4, 16]",
      "[2, 4]",
      "[1, 9]"
    ],
    correctIndex: 1,
    explanation: "La condition filtre les pairs (2 et 4), puis calcule leurs carrés : 2**2 = 4 et 4**2 = 16."
  },
  {
    id: 38,
    level: 'intermediaire',
    category: 'Données',
    relatedCardId: 6,
    question: "Que retourne l'appel d.keys() sur un dictionnaire Python 3 ?",
    options: [
      "Une copie de la liste des clés",
      "Une vue dynamique itérable des clés du dictionnaire (dict_keys)",
      "Un tuple immuable",
      "Le premier élément du dictionnaire"
    ],
    correctIndex: 1,
    explanation: "d.keys() renvoie un objet vue 'dict_keys' qui reflète les modifications du dictionnaire en temps réel sans dupliquer la mémoire."
  },
  {
    id: 39,
    level: 'intermediaire',
    category: 'Fichiers',
    relatedCardId: 12,
    question: "Comment vérifier si un chemin correspond à un dossier existant avec le module os ?",
    options: [
      "os.path.isdir(chemin)",
      "os.path.isfolder(chemin)",
      "os.path.directory(chemin)",
      "os.is_dir(chemin)"
    ],
    correctIndex: 0,
    explanation: "os.path.isdir(chemin) renvoie True si le chemin existe et est un répertoire. Pour un fichier, c'est os.path.isfile(chemin)."
  },
  {
    id: 40,
    level: 'intermediaire',
    category: 'POO',
    relatedCardId: 10,
    question: "Dans un bloc try/except, quel bloc est garanti d'être TOUJOURS exécuté ?",
    code: "try:\n    ...\nfinally:\n    # Ce bloc...",
    options: [
      "else",
      "finally",
      "except",
      "catch"
    ],
    correctIndex: 1,
    explanation: "Le bloc 'finally' est toujours exécuté, qu'une exception ait été levée, interceptée ou non, ce qui le rend idéal pour le nettoyage."
  },

  // ==========================================
  // --- NIVEAU AVANCÉ (20 QUESTIONS) ---
  // ==========================================
  {
    id: 41,
    level: 'avance',
    category: 'POO',
    relatedCardId: 9,
    question: "Pourquoi le premier paramètre d'une méthode d'instance est-il traditionnellement nommé self ?",
    code: "class Robot:\n    def bip(self):\n        print('Bip !')",
    options: [
      "C'est un mot-clé réservé obligatoire imposé par la syntaxe",
      "Il représente la référence explicite à l'instance courante de l'objet",
      "Il sert à déclarer la méthode comme étant privée",
      "Il indique que la classe est statique"
    ],
    correctIndex: 1,
    explanation: "En Python, self représente l'instance de l'objet. Python lui passe automatiquement l'objet appelant en premier argument."
  },
  {
    id: 42,
    level: 'avance',
    category: 'Architecture',
    relatedCardId: 11,
    question: "Quel est le rôle exact de la condition if __name__ == '__main__': ?",
    code: "if __name__ == '__main__':\n    demarrer_application()",
    options: [
      "Vérifier que le script s'exécute avec les privilèges root/administrateur",
      "Exécuter ce bloc uniquement si le fichier est lancé directement, et non importé comme module",
      "Indiquer au ramasse-miettes que le script est le point central",
      "Forcer la compilation en bytecode .pyc"
    ],
    correctIndex: 1,
    explanation: "Quand un script est exécuté directement, sa variable __name__ prend la valeur '__main__'. S'il est importé, elle prend le nom du fichier module."
  },
  {
    id: 43,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 14,
    question: "Dans NumPy, que produit l'opération de masquage booléen t[t % 2 == 0] ?",
    code: "import numpy as np\nt = np.array([1, 2, 3, 4, 5, 6])\nres = t[t % 2 == 0]",
    options: [
      "Un tableau de booléens [False, True, False, True, False, True]",
      "Un sous-tableau contenant uniquement les nombres pairs [2, 4, 6]",
      "Une erreur car les opérations modulo ne sont pas vectorisées",
      "Le tableau d'origine inchangé"
    ],
    correctIndex: 1,
    explanation: "t % 2 == 0 génère un masque booléen vectorisé. Indexé dans t[...], NumPy extrait les valeurs où la condition est True : [2, 4, 6]."
  },
  {
    id: 44,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 15,
    question: "Dans Pandas, quelle est la différence majeure entre df.loc[] et df.iloc[] ?",
    code: "df.loc[2]\ndf.iloc[2]",
    options: [
      "loc utilise les labels/noms d'index, alors qu'iloc utilise les positions entières (0, 1, 2...)",
      "loc est pour les colonnes et iloc est pour les lignes",
      "loc modifie les valeurs et iloc les lit uniquement",
      "iloc est déprécié depuis Pandas 2.0"
    ],
    correctIndex: 0,
    explanation: "loc[] filtre selon les labels d'index. iloc[] (integer location) filtre strictement selon la position numérique (index base 0)."
  },
  {
    id: 45,
    level: 'avance',
    category: 'Fonctions',
    relatedCardId: 8,
    question: "Que retourne functools.reduce appliqué à une liste d'entiers avec une addition ?",
    code: "from functools import reduce\nL = [1, 2, 3, 4]\nval = reduce(lambda a, x: a + x, L, 0)\nprint(val)",
    options: [
      "10 (la somme cumulée de tous les éléments)",
      "[1, 3, 6, 10] (une liste des sommes partielles)",
      "0 (la valeur initiale)",
      "Une erreur TypeError car reduce nécessite deux listes"
    ],
    correctIndex: 0,
    explanation: "reduce applique successivement la fonction binaire à l'accumulateur et à chaque élément, réduisant la collection à une seule valeur finale (ici 10)."
  },
  {
    id: 46,
    level: 'avance',
    category: 'POO',
    relatedCardId: 9,
    question: "Quel est le nom de la méthode spéciale constructeur/initialiseur appelée lors de la création d'un objet ?",
    options: [
      "__construct__",
      "__init__",
      "__new__",
      "__create__"
    ],
    correctIndex: 1,
    explanation: "La méthode __init__(self, ...) est l'initialiseur standard appelé immédiatement après l'instanciation d'un nouvel objet."
  },
  {
    id: 47,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 14,
    question: "Que fait la méthode reshape(2, 3) sur un tableau NumPy à 6 éléments ?",
    code: "t = np.arange(1, 7) # [1, 2, 3, 4, 5, 6]\nt.reshape(2, 3)",
    options: [
      "Multiplie le tableau par 2 puis par 3",
      "Réorganise le tableau en 2 lignes et 3 colonnes sans copier les données",
      "Tronque le tableau pour ne garder que 2 éléments",
      "Crée un tuple de 6 dimensions"
    ],
    correctIndex: 1,
    explanation: "reshape(lignes, colonnes) change les dimensions du tenseur/matrice sans modifier les données sous-jacentes, à condition que le nombre total d'éléments corresponde."
  },
  {
    id: 48,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 14,
    question: "Quelle fonction NumPy génère un tableau de zéros flottants de taille N ?",
    options: [
      "np.empty_zeros(5)",
      "np.zeros(5)",
      "np.null(5)",
      "np.create_zeros(5)"
    ],
    correctIndex: 1,
    explanation: "np.zeros(taille) crée un tableau rempli de zéros (type float64 par défaut)."
  },
  {
    id: 49,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 15,
    question: "Comment filtrer conditionnellement les lignes d'un DataFrame df où la colonne 'X' est supérieure ou égale à 20 ?",
    options: [
      "df.filter(X >= 20)",
      "df.loc[df['X'] >= 20]",
      "df.where('X >= 20')",
      "df.select(df.X > 20)"
    ],
    correctIndex: 1,
    explanation: "df.loc[df['X'] >= 20] ou df[df['X'] >= 20] utilise un masque booléen sur la série pour extraire les lignes correspondantes."
  },
  {
    id: 50,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 16,
    question: "Dans Matplotlib, quelle fonction permet de tracer un nuage de points ?",
    options: [
      "plt.plot()",
      "plt.scatter()",
      "plt.points()",
      "plt.dots()"
    ],
    correctIndex: 1,
    explanation: "plt.scatter(x, y) est la fonction dédiée aux nuages de points (scatter plot). plt.plot() trace des lignes reliant les points."
  },
  {
    id: 51,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 16,
    question: "Quelle commande Matplotlib affiche enfin la figure rendue à l'écran ?",
    options: [
      "plt.render()",
      "plt.draw_now()",
      "plt.show()",
      "plt.display()"
    ],
    correctIndex: 2,
    explanation: "plt.show() déclenche l'affichage effectif de toutes les figures configurées."
  },
  {
    id: 52,
    level: 'avance',
    category: 'Architecture',
    relatedCardId: 11,
    question: "Quelle est la syntaxe correcte pour importer une fonction spécifique depuis un module ?",
    options: [
      "from module import ma_fonction",
      "import ma_fonction of module",
      "using module.ma_fonction",
      "require module(ma_fonction)"
    ],
    correctIndex: 0,
    explanation: "La syntaxe 'from module import nom' permet d'importer directement un symbole dans le namespace local."
  },
  {
    id: 53,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 16,
    question: "Quelle fonction Matplotlib permet d'afficher la légende des courbes ?",
    options: [
      "plt.legend()",
      "plt.labels()",
      "plt.guide()",
      "plt.caption()"
    ],
    correctIndex: 0,
    explanation: "plt.legend() place la boîte de légende sur le graphique en utilisant les arguments label='...' des tracés."
  },
  {
    id: 54,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 15,
    question: "Comment sélectionner une sous-table avec toutes les lignes et uniquement les colonnes 'X' et 'Y' dans un DataFrame ?",
    options: [
      "df.loc[:, ['X', 'Y']]",
      "df.cols(['X', 'Y'])",
      "df.extract('X', 'Y')",
      "df.get_columns('X', 'Y')"
    ],
    correctIndex: 0,
    explanation: "df.loc[lignes, colonnes] utilise ':' pour toutes les lignes et la liste ['X', 'Y'] pour les colonnes."
  },
  {
    id: 55,
    level: 'avance',
    category: 'POO',
    relatedCardId: 9,
    question: "Comment instancier une classe Personne prenant deux arguments nom et age ?",
    code: "class Personne:\n    def __init__(self, nom, age):\n        self.nom = nom\n        self.age = age",
    options: [
      "p = new Personne(\"Bob\", 31)",
      "p = Personne(\"Bob\", 31)",
      "p = Personne.create(\"Bob\", 31)",
      "p = Personne.init(\"Bob\", 31)"
    ],
    correctIndex: 1,
    explanation: "En Python, on appelle simplement le nom de la classe comme une fonction : Personne('Bob', 31). Le mot-clé 'new' n'existe pas."
  },
  {
    id: 56,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 14,
    question: "Quelle est la propriété d'un tableau NumPy qui renvoie ses dimensions sous forme de tuple ?",
    code: "t = np.zeros((3, 4))",
    options: [
      "t.size",
      "t.shape",
      "t.dim",
      "t.length"
    ],
    correctIndex: 1,
    explanation: "t.shape renvoie un tuple indiquant la taille de chaque axe (ici (3, 4)). t.size renvoie le nombre total d'éléments (12)."
  },
  {
    id: 57,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 14,
    question: "Quelle est la principale différence entre np.arange(1, 6) et la fonction native range(1, 6) ?",
    options: [
      "np.arange inclut la borne supérieure",
      "np.arange renvoie directement un ndarray NumPy vectorisable et accepte des pas décimaux (float)",
      "range() est plus rapide pour le calcul vectoriel",
      "np.arange ne fonctionne qu'avec des chaînes de caractères"
    ],
    correctIndex: 1,
    explanation: "np.arange() crée un tableau NumPy de données contiguës en mémoire et supporte les pas flottants (ex: 0.1), contrairement à range() natif."
  },
  {
    id: 58,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 16,
    question: "Quelle fonction Matplotlib permet de générer un diagramme en barres ?",
    options: [
      "plt.column()",
      "plt.bar()",
      "plt.hist_bars()",
      "plt.stick()"
    ],
    correctIndex: 1,
    explanation: "plt.bar(categories, hauteurs) trace des rectangles verticaux pour chaque catégorie."
  },
  {
    id: 59,
    level: 'avance',
    category: 'Data Science',
    relatedCardId: 16,
    question: "Quelle fonction Matplotlib trace un diagramme circulaire (camembert) ?",
    options: [
      "plt.donut()",
      "plt.circle()",
      "plt.pie()",
      "plt.round()"
    ],
    correctIndex: 2,
    explanation: "plt.pie(valeurs, labels=labels) crée un diagramme circulaire."
  },
  {
    id: 60,
    level: 'avance',
    category: 'Fichiers',
    relatedCardId: 12,
    question: "Quelle fonction du module os permet de renommer ou déplacer un fichier d'un chemin source (src) vers une destination (dst) ?",
    options: [
      "os.move_file(src, dst)",
      "os.rename(src, dst)",
      "os.transfer(src, dst)",
      "os.alter(src, dst)"
    ],
    correctIndex: 1,
    explanation: "os.rename(src, dst) renomme ou déplace un fichier sur le même système de fichiers."
  }
];

export const LEVEL_METADATA = {
  debutant: {
    id: 'debutant' as const,
    name: 'Débutant',
    label: 'Bases & Fondamentaux',
    description: 'Variables, types, input/print, boucles, conditions, listes élémentaires & déballage.',
    color: 'emerald',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconColor: 'text-emerald-500',
    dotColor: 'bg-emerald-500',
  },
  intermediaire: {
    id: 'intermediaire' as const,
    name: 'Intermédiaire',
    label: 'Structures & Fonctions',
    description: 'Dictionnaires (.get, items), slicing avancé, lambdas, map/filter, exceptions & fichiers.',
    color: 'amber',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    iconColor: 'text-amber-500',
    dotColor: 'bg-amber-500',
  },
  avance: {
    id: 'avance' as const,
    name: 'Avancé',
    label: 'POO, Architecture & Data Science',
    description: 'Classes, self, __name__, context managers, NumPy vectoriel, Pandas & Matplotlib.',
    color: 'purple',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    iconColor: 'text-purple-500',
    dotColor: 'bg-purple-500',
  },
  tous: {
    id: 'tous' as const,
    name: 'Tous niveaux',
    label: 'Grand Défi Complet (60 Questions)',
    description: 'L’ensemble des 60 notions mélangées pour une maîtrise totale du langage Python.',
    color: 'blue',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    iconColor: 'text-blue-500',
    dotColor: 'bg-blue-500',
  },
};
