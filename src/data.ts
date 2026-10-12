import { pythonQcmData } from './data/qcm_python';
import { architectureQcmData } from './data/qcm_architecture';
import { javaQcmData } from './data/qcm_java';
import { cQcmData } from './data/qcm_c';

export interface CourseItem {
  id: string;
  category: string;
  title: string;
  content: string;
  code: string;
}

export interface CheatSheetItem {
  id: number;
  category: string;
  title: string;
  content?: string;
  code: string;
}

export interface QcmItem {
  id: number;
  subject: string;
  difficulty?: 'debutant' | 'intermediaire' | 'expert' | string;
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

export const cData: CourseItem[] = [
  {
    id: "c1",
    category: "Bases (CM4)",
    title: "Compilation, Structure & Types",
    content: "Étapes : Code source (.c) -> Compilateur -> Code objet (.obj) -> Linker (+ Librairies) -> Exécutable (.exe). Tailles usuelles : char (1 octet), int (4 octets), float (4 octets), long (8 octets), double (8 octets).",
    code: "#include <stdio.h>\n#define PI 3.14 // Constante (en majuscules)\n\nint main() {\n    int a = 5;          // Entier (4 octets)\n    double r = 2.5;     // Réel double précision (8 octets)\n    char c = 'A';       // Caractère simple quote (1 octet)\n    \n    // Cast explicite\n    int partie_entiere = (int) 8.324; // vaut 8\n    return 0;\n}"
  },
  {
    id: "c2",
    category: "Bases (CM4)",
    title: "Entrées / Sorties (printf & scanf)",
    content: "Formats : %d (int), %ld (long), %f (float), %lf (double), %c (char), %s (chaîne), %x / %X (hexadécimal), %u (unsigned), %p (pointeur). Attention : scanf nécessite '&' devant la variable (sauf pour %s).",
    code: "#include <stdio.h>\n\nint main() {\n    int age;\n    double note;\n    \n    printf(\"Saisir age et note : \");\n    scanf(\"%d %lf\", &age, &note);\n    \n    printf(\"Age : %d ans, Note : %.2f\\n\", age, note);\n    return 0;\n}"
  },
  {
    id: "c3",
    category: "Bases (CM4)",
    title: "Opérateurs & Pré/Post-incrémentation",
    content: "Arithmétiques (+, -, *, /, %), Relationnels (==, !=, <, <=, >, >=), Logiques (&& ET, || OU, ! NON). En C natif, 0 = Faux (false), toute autre valeur = Vrai (true).",
    code: "int x = 3, b;\n\n// Post-incrémentation : évalue puis incrémente\nb = x++; // b vaut 3, puis x passe à 4\n\n// Pré-décrémentation : décrémente puis évalue\nx = 3;\nb = --x; // x passe à 2, et b vaut 2\n\n// Opérateurs combinés\nx += 5;  // équivalent à x = x + 5;"
  },
  {
    id: "c4",
    category: "Bases (CM4)",
    title: "Conditions, Boucles, Break & Continue",
    content: "break : quitte immédiatement la boucle ou le switch. continue : saute la fin de l'itération courante et passe au tour de boucle suivant.",
    code: "switch (mois) {\n    case 1: printf(\"Janvier\"); break;\n    case 2: printf(\"Février\"); break;\n    default: printf(\"Autre\");\n}\n\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) continue; // Saute l'affichage de 5\n    if (i == 8) break;    // Arrête la boucle à 8\n    printf(\"%d \", i);\n}\n\ndo {\n    // Exécuté au moins 1 fois sans condition initiale\n} while (condition);"
  },
  {
    id: "c5",
    category: "Tableaux & Chaînes (CM5)",
    title: "Tableaux 1D & 2D (Matrices)",
    content: "Taille physique = cases réservées (doit être une constante à la déclaration). Taille logique = cases réellement utilisées. Saisie, affichage et comparaison se font toujours case par case avec une boucle (T1 == T2 est interdit).",
    code: "#define MAX 20\nint tab[MAX] = {0}; // Initialise tout à 0\nint TL = 5;\n\n// Parcours 1D\nfor (int i = 0; i < TL; i++) {\n    scanf(\"%d\", &tab[i]);\n}\n\n// Tableau 2D (3 lignes, 4 colonnes)\nint M[3][4] = {{0,1,2,3}, {4,5,6,7}, {8,9,10,11}};\nprintf(\"%d\", M[1][2]); // Affiche 6"
  },
  {
    id: "c6",
    category: "Tableaux & Chaînes (CM5)",
    title: "Algorithmes de Tri (Bulles & Sélection)",
    content: "Tri à bulles : compare et permute les éléments adjacents. Tri par sélection : cherche l'indice du minimum dans la zone non triée et le permute avec l'élément en position i.",
    code: "// Tri à bulles\nfor (int i = 0; i < TL - 1; i++) {\n    for (int j = 0; j < TL - i - 1; j++) {\n        if (A[j] > A[j+1]) {\n            int temp = A[j]; A[j] = A[j+1]; A[j+1] = temp;\n        }\n    }\n}\n\n// Tri par sélection\nfor (int i = 0; i < TL - 1; i++) {\n    int min = i;\n    for (int j = i + 1; j < TL; j++) {\n        if (A[j] < A[min]) min = j;\n    }\n    if (min != i) {\n        int temp = A[i]; A[i] = A[min]; A[min] = temp;\n    }\n}"
  },
  {
    id: "c7",
    category: "Tableaux & Chaînes (CM5)",
    title: "Recherche Dichotomique",
    content: "S'applique OBLIGATOIREMENT sur un tableau trié. Divise l'intervalle de recherche [g, d] par 2 à chaque étape grâce à l'indice médian m = (g + d) / 2.",
    code: "int g = 0, d = TL - 1, m, pos = -1, arret = 0;\ndo {\n    m = (g + d) / 2;\n    if (val == A[m]) {\n        pos = m; arret = 1;\n    } else if (val > A[m]) {\n        g = m + 1; // Moitié supérieure\n    } else {\n        d = m - 1; // Moitié inférieure\n    }\n    if (g > d) arret = 1;\n} while (arret != 1);"
  },
  {
    id: "c8",
    category: "Tableaux & Chaînes (CM5)",
    title: "Chaînes de caractères & <string.h>",
    content: "Une chaîne en C est un tableau de char terminé par le caractère nul '\\0'. scanf(\"%s\") s'arrête au premier espace ; utiliser fgets() pour lire une phrase.",
    code: "#include <string.h>\nchar str[32] = \"Hello\"; // Taille physique min = 6 ('\\0' inclus)\n\n// Saisie d'une phrase avec espaces\nfgets(str, sizeof(str), stdin);\nstr[strcspn(str, \"\\n\")] = '\\0'; // Supprime le '\\n'\n\n// Fonctions de <string.h>\nint len = strlen(str);       // Taille logique (sans '\\0')\nstrcpy(dest, src);           // Copie src dans dest\nstrcat(dest, src);           // Concatène src à la fin de dest\nif (strcmp(s1, s2) == 0) {}  // 0 si égales, <0 si s1<s2, >0 si s1>s2"
  },
  {
    id: "c9",
    category: "Pointeurs & Mémoire (CM6)",
    title: "Pointeurs & Doubles Pointeurs",
    content: "Un pointeur stocke une adresse mémoire. '&' = opérateur de référencement (donne l'adresse). '*' = opérateur de déréférencement (donne la valeur pointée).",
    code: "int x = 10, y = 20;\nint *ptr = NULL;          // Déclaration et initialisation sécurisée\nptr = &x;                 // ptr stocke l'adresse de x\n*ptr = 100;               // Modifie x à 100 par adressage indirect\n\n// Double pointeur (pointeur sur pointeur)\nint **double_ptr = &ptr;\n**double_ptr = 200;       // Modifie x à 200\n*double_ptr = &y;         // Redirige ptr pour qu'il pointe sur y"
  },
  {
    id: "c10",
    category: "Pointeurs & Mémoire (CM6)",
    title: "Pointeurs & Tableaux (1D et 2D)",
    content: "Le nom d'un tableau T est un pointeur constant sur son premier élément (T == &T[0]). L'arithmétique des pointeurs multiplie automatiquement le décalage par sizeof(type).",
    code: "int T[5] = {15, 17, 8, 23, 37};\nint *p = T;\n\n// Équivalences 1D :\n// T[i]   <=> *(T + i)   <=> *(p + i)\n// &T[i]  <=> (T + i)    <=> (p + i)\nprintf(\"%d\", *(T + 3)); // Affiche T[3] soit 23\nprintf(\"%d\", *p + 4);   // Affiche T[0] + 4 soit 19 (attention aux parenthèses !)\n\n// Équivalences 2D (Matrice M) :\n// M[i][j]  <=> *(*(M + i) + j)\n// &M[i][j] <=> (*(M + i) + j)"
  },
  {
    id: "c11",
    category: "Pointeurs & Mémoire (CM6)",
    title: "Allocation Dynamique 1D & 2D (<stdlib.h>)",
    content: "Pile (Stack) : variables locales, gestion auto. Tas (Heap) : allocation dynamique manuelle via malloc (non initialisé), calloc (initialisé à 0), realloc (redimensionne) et free (libère).",
    code: "#include <stdlib.h>\n\n// Allocation 1D\nint *T = (int*) malloc(N * sizeof(int));\nint *T_zero = (int*) calloc(N, sizeof(int));\nT = realloc(T, new_N * sizeof(int));\nfree(T);\nT = NULL; // Bonne pratique après free()\n\n// Allocation dynamique 2D (nb_lig x nb_col)\nint **M = (int**) malloc(nb_lig * sizeof(int*));\nfor (int i = 0; i < nb_lig; i++) {\n    M[i] = (int*) malloc(nb_col * sizeof(int));\n}\n\n// Libération 2D (ordre inverse !)\nfor (int i = 0; i < nb_lig; i++) free(M[i]);\nfree(M);\nM = NULL;"
  },
  {
    id: "c12",
    category: "Fonctions & Modules (CM7)",
    title: "Fonctions & Passage de paramètres",
    content: "Passage par valeur : copie la donnée (l'original dans main n'est pas modifié). Passage par adresse : utilise des pointeurs pour modifier directement les variables du programme appelant.",
    code: "// Passage par adresse (permet de modifier x et y du main)\nvoid permutation(int *x, int *y) {\n    int temp = *x;\n    *x = *y;\n    *y = temp;\n}\n\n// Passage d'un tableau (toujours passé par adresse sans '&')\nvoid afficherTab(int *tab, int taille) {\n    for (int i = 0; i < taille; i++) printf(\"%d \", tab[i]);\n}\n\nint main() {\n    int a = 3, b = 4, T[3] = {1, 2, 3};\n    permutation(&a, &b); // a=4, b=3\n    afficherTab(T, 3);   // Pas de '&' devant T\n    return 0;\n}"
  },
  {
    id: "c13",
    category: "Fonctions & Modules (CM7)",
    title: "Modules (.h / .c) & Librairies standards",
    content: "Un module sépare l'interface (.h : types, prototypes, gardes d'inclusion) de l'implémentation (.c : définitions des fonctions). Librairies utiles : <stdbool.h>, <math.h> (pow, sqrt), <stdlib.h> (rand, srand).",
    code: "// --- Fichier rectangle.h ---\n#ifndef RECTANGLE_H\n#define RECTANGLE_H\nfloat aire(float l, float L);\n#endif\n\n// --- Fichier rectangle.c ---\n#include \"rectangle.h\" // Guillemets pour un module local\nfloat aire(float l, float L) {\n    return l * L;\n}\n\n// --- Aléatoire (<stdlib.h>) ---\nsrand(57); // Initialisation de la graine (seed)\nint n = rand() % 100; // Nombre entre 0 et 99"
  },
  {
    id: "c14",
    category: "Types & Structures (CM8)",
    title: "Typedef, Enum & Structures",
    content: "typedef crée un alias de type. enum définit une liste de constantes entières (0, 1, 2... par défaut). struct regroupe des attributs de types différents. Accès direct par '.' et accès via pointeur par '->'.",
    code: "typedef enum { LUNDI, MARDI, MERCREDI } JOUR; // 0, 1, 2\n\ntypedef struct {\n    int jour, mois, annee;\n} DATE;\n\ntypedef struct {\n    char nom[50];\n    int age;\n    DATE dNaiss; // Composition de structures\n} STUDENT;\n\nvoid afficher(STUDENT *s) { // Passage par adresse recommandé\n    // s->age équivaut à (*s).age\n    printf(\"%s (%d ans), né le %d/%d/%d\\n\", \n           s->nom, s->age, s->dNaiss.jour, s->dNaiss.mois, s->dNaiss.annee);\n}"
  }
];

export { cQcmData };
export const qcmCData: QcmItem[] = cQcmData;

export const qcmData: QcmItem[] = [
  ...pythonQcmData.map(q => ({ ...q, subject: "Python" })),
  ...architectureQcmData.map(q => ({ ...q, subject: "Architecture" })),
  ...javaQcmData.map(q => ({ ...q, subject: "Java" })),
  ...cQcmData
];
