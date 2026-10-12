import { QcmItem } from '../data';

export const cQcmData: QcmItem[] = [
  // ---------------- LANGAGE C DÉBUTANT (20) ----------------
  {
    id: 401,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle est l'extension standard d'un fichier de code source en langage C ?",
    options: [".c", ".cpp", ".cs", ".obj"],
    answer: ".c",
    explanation: "Les fichiers sources en C portent l'extension .c, tandis que les en-têtes portent l'extension .h."
  },
  {
    id: 402,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quel est le nom de la fonction principale servant de point d'entrée à tout programme C ?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
    explanation: "La fonction 'int main()' est le point d'entrée obligatoire où l'exécution du programme commence."
  },
  {
    id: 403,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle fonction standard de <stdio.h> permet d'afficher du texte formaté à l'écran ?",
    options: ["print()", "printf()", "cout", "write()"],
    answer: "printf()",
    explanation: "printf() (print formatted) est la fonction standard d'affichage en C."
  },
  {
    id: 404,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Comment écrit-on un commentaire sur une seule ligne en C moderne (C99+) ?",
    options: ["# Commentaire", "// Commentaire", "/* Commentaire", "-- Commentaire"],
    answer: "// Commentaire",
    explanation: "// introduit un commentaire sur une ligne. Les commentaires multilignes utilisent /* ... */."
  },
  {
    id: 405,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle est la taille usuelle en mémoire d'une variable de type 'char' en C ?",
    options: ["1 octet (8 bits)", "2 octets", "4 octets", "8 octets"],
    answer: "1 octet (8 bits)",
    explanation: "En langage C, un char occupe exactement 1 octet (8 bits) et permet de stocker un caractère ASCII ou un entier de -128 à 127."
  },
  {
    id: 406,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quel spécificateur de format utilise-t-on avec printf pour afficher un entier décimal signé (int) ?",
    options: ["%f", "%c", "%d", "%s"],
    answer: "%d",
    explanation: "%d (ou %i) est utilisé pour afficher un entier relatif de type int."
  },
  {
    id: 407,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quel spécificateur de format utilise-t-on dans printf pour afficher un nombre réel de type float ?",
    options: ["%f", "%d", "%c", "%lf"],
    answer: "%f",
    explanation: "%f permet d'afficher des nombres réels à virgule flottante (float). Pour un double en scanf, on utilise %lf."
  },
  {
    id: 408,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Pourquoi doit-on obligatoirement placer le symbole '&' devant une variable scalaire lors d'un scanf(\"%d\", &x) ?",
    options: ["C'est une obligation syntaxique sans but particulier", "Pour transmettre l'adresse mémoire de x afin que scanf puisse modifier sa valeur", "Pour convertir x en chaîne", "Pour allouer la variable dans le tas"],
    answer: "Pour transmettre l'adresse mémoire de x afin que scanf puisse modifier sa valeur",
    explanation: "En C, les paramètres sont transmis par valeur. Pour que scanf modifie la variable d'origine, on doit lui transmettre son adresse avec '&'."
  },
  {
    id: 409,
    subject: "Langage C",
    difficulty: "debutant",
    question: "En langage C natif, quelle valeur entière représente une condition logique FAUSSE (false) ?",
    options: ["-1", "NULL", "0", "Toute valeur non nulle"],
    answer: "0",
    explanation: "En C, 0 représente le faux (false) et toute valeur différente de 0 est évaluée comme vraie (true)."
  },
  {
    id: 410,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle est la valeur de b et de x après l'exécution de : int x = 3; int b = x++; ?",
    options: ["b = 3 et x = 4", "b = 4 et x = 4", "b = 3 et x = 3", "Erreur de compilation"],
    answer: "b = 3 et x = 4",
    explanation: "Il s'agit d'une post-incrémentation (x++) : la valeur courante de x (3) est assignée à b, puis x est incrémenté à 4."
  },
  {
    id: 411,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle est la valeur de b et de x après l'exécution de : int x = 3; int b = ++x; ?",
    options: ["b = 4 et x = 4", "b = 3 et x = 4", "b = 4 et x = 3", "b = 3 et x = 3"],
    answer: "b = 4 et x = 4",
    explanation: "Il s'agit d'une pré-incrémentation (++x) : x est d'abord incrémenté (passe à 4), puis cette nouvelle valeur est affectée à b."
  },
  {
    id: 412,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Que fait l'instruction 'break' lorsqu'elle est exécutée à l'intérieur d'une boucle 'for' ou 'while' ?",
    options: ["Elle met le programme en pause", "Elle saute l'itération courante", "Elle interrompt immédiatement la boucle et passe au code suivant", "Elle redémarre la boucle au début"],
    answer: "Elle interrompt immédiatement la boucle et passe au code suivant",
    explanation: "break quitte immédiatement la structure de contrôle de boucle ou le bloc switch."
  },
  {
    id: 413,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Que fait l'instruction 'continue' dans une boucle ?",
    options: ["Elle arrête le programme", "Elle saute immédiatement à l'itération suivante de la boucle", "Elle réinitialise l'indice de boucle", "Elle quitte la boucle"],
    answer: "Elle saute immédiatement à l'itération suivante de la boucle",
    explanation: "continue interrompt le tour de boucle en cours et passe directement à l'évaluation du tour suivant."
  },
  {
    id: 414,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle est la particularité d'une boucle 'do ... while (condition);' par rapport à une boucle 'while' ?",
    options: ["Elle ne nécessite pas de condition", "Son corps s'exécute obligatoirement au moins une fois", "Elle est toujours infinie", "Elle est plus rapide"],
    answer: "Son corps s'exécute obligatoirement au moins une fois",
    explanation: "Dans do ... while, la condition est évaluée après l'exécution du corps de la boucle, garantissant au moins un passage."
  },
  {
    id: 415,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Que vaut le résultat de l'opération arithmétique 7 / 2 en C si 7 et 2 sont des entiers ?",
    options: ["3.5", "3", "4", "3.0"],
    answer: "3",
    explanation: "La division entre deux entiers en C est une division entière euclidienne : la partie décimale est tronquée, le résultat vaut 3."
  },
  {
    id: 416,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quel opérateur arithmétique calcule le reste de la division entière (modulo) ?",
    options: ["//", "mod", "%", "^"],
    answer: "%",
    explanation: "L'opérateur % calcule le reste de la division entière (ex: 7 % 2 vaut 1)."
  },
  {
    id: 417,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Comment définit-on une constante symbolique avec le préprocesseur C ?",
    options: ["const PI = 3.14;", "#define PI 3.14", "let PI = 3.14", "constant PI 3.14"],
    answer: "#define PI 3.14",
    explanation: "La directive de préprocesseur #define permet de définir des macros et des constantes sans point-virgule à la fin."
  },
  {
    id: 418,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Que vaut la variable res après : int res = (int) 8.95; ?",
    options: ["9", "8", "8.95", "Erreur de cast"],
    answer: "8",
    explanation: "Le cast explicite (int) tronque la partie décimale sans arrondi, transformant 8.95 en 8."
  },
  {
    id: 419,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quelle valeur de retour de la fonction main() indique conventionnellement au système d'exploitation que le programme s'est terminé avec succès ?",
    options: ["0", "1", "-1", "NULL"],
    answer: "0",
    explanation: "return 0; signale une exécution normale et sans erreur au système d'exploitation (EXIT_SUCCESS)."
  },
  {
    id: 420,
    subject: "Langage C",
    difficulty: "debutant",
    question: "Quel opérateur logique représente le ET logique en langage C ?",
    options: ["AND", "&", "&&", "."],
    answer: "&&",
    explanation: "&& est le ET logique avec évaluation en court-circuit. & est l'opérateur ET bit-à-bit."
  },

  // ---------------- LANGAGE C INTERMÉDIAIRE (20) ----------------
  {
    id: 421,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quel caractère invisible marque obligatoirement la fin d'une chaîne de caractères en C ?",
    options: ["'\\n'", "'\\0'", "NULL", "EOF"],
    answer: "'\\0'",
    explanation: "Toute chaîne de caractères en C est un tableau de char terminé par l'octet nul '\\0' (code ASCII 0)."
  },
  {
    id: 422,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Pourquoi n'utilise-t-on pas l'opérateur '&' lors d'un scanf(\"%s\", mot) ?",
    options: ["Parce que le nom d'un tableau est déjà un pointeur constant vers son premier élément", "Parce que %s gère automatiquement les allocations", "C'est une exception réservée à scanf", "Parce que les chaînes sont globales"],
    answer: "Parce que le nom d'un tableau est déjà un pointeur constant vers son premier élément",
    explanation: "En C, le nom d'un tableau représente l'adresse de sa première case (mot == &mot[0]), donc le '&' est inutile."
  },
  {
    id: 423,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Que retourne la fonction strlen(str) de <string.h> ?",
    options: ["La taille physique allouée au tableau", "Le nombre de caractères avant le '\\0'", "Le nombre de caractères incluant le '\\0'", "La taille en octets du pointeur"],
    answer: "Le nombre de caractères avant le '\\0'",
    explanation: "strlen compte les caractères effectifs de la chaîne jusqu'au '\\0' exclus."
  },
  {
    id: 424,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Que retourne strcmp(s1, s2) lorsque les deux chaînes de caractères sont strictement identiques ?",
    options: ["1 (true)", "0", "-1", "La longueur de la chaîne"],
    answer: "0",
    explanation: "strcmp retourne 0 si s1 == s2, une valeur négative si s1 < s2 et une valeur positive si s1 > s2."
  },
  {
    id: 425,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quelle fonction de la bibliothèque <string.h> permet de copier la chaîne source dans la chaîne destination ?",
    options: ["strcopy()", "strcpy()", "memcpy_str()", "assign()"],
    answer: "strcpy()",
    explanation: "strcpy(dest, src) copie le contenu de src dans dest, y compris le caractère de fin '\\0'."
  },
  {
    id: 426,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Pourquoi préfère-t-on souvent fgets() à scanf(\"%s\") pour la lecture de chaînes au clavier ?",
    options: ["fgets() est plus rapide", "fgets() permet de lire une ligne entière contenant des espaces et limite la taille lue", "scanf(\"%s\") ne fonctionne pas sous Windows", "fgets() alloue dynamiquement la mémoire"],
    answer: "fgets() permet de lire une ligne entière contenant des espaces et limite la taille lue",
    explanation: "scanf(\"%s\") s'arrête au premier espace blanc et risque un dépassement de tampon (buffer overflow), alors que fgets() est sécurisé."
  },
  {
    id: 427,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quelle est la condition préalable indispensable pour appliquer une recherche dichotomique sur un tableau ?",
    options: ["Le tableau doit être alloué avec malloc()", "Le tableau doit avoir une taille impaire", "Le tableau doit être préalablement trié", "Le tableau doit contenir des entiers positifs"],
    answer: "Le tableau doit être préalablement trié",
    explanation: "La recherche dichotomique nécessite un tableau ordonné pour éliminer la moitié des éléments restants à chaque étape."
  },
  {
    id: 428,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Dans un tableau d'entiers déclaré par 'int T[10];', quels sont les indices valide du premier et du dernier élément ?",
    options: ["0 et 9", "1 et 10", "0 et 10", "1 et 9"],
    answer: "0 et 9",
    explanation: "En C, les tableaux sont indexés à partir de 0. Pour une taille de 10, les indices vont de 0 à 9."
  },
  {
    id: 429,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quelle est la différence fondamentale entre la taille physique et la taille logique d'un tableau ?",
    options: ["La taille physique est en bits, la logique en octets", "La taille physique est le nombre maximal de cases réservées, la logique est le nombre d'éléments réellement utilisés", "Aucune différence", "La taille logique est définie par le compilateur"],
    answer: "La taille physique est le nombre maximal de cases réservées, la logique est le nombre d'éléments réellement utilisés",
    explanation: "La taille physique (ex: MAX 100) est la capacité allouée. La taille logique (TL <= MAX) représente les données utiles traitées."
  },
  {
    id: 430,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Sur quel principe repose l'algorithme du tri par sélection ?",
    options: ["Permuter les éléments adjacents s'ils sont désordonnés", "Chercher l'indice du minimum dans la sous-partie non triée et l'échanger avec l'élément en position courante", "Diviser le tableau en deux sous-tableaux récursivement", "Utiliser une table de hachage"],
    answer: "Chercher l'indice du minimum dans la sous-partie non triée et l'échanger avec l'élément en position courante",
    explanation: "Le tri par sélection parcourt la zone non triée, trouve la plus petite valeur et la place à sa position définitive."
  },
  {
    id: 431,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Sur quel principe repose l'algorithme du tri à bulles ?",
    options: ["Comparer et permuter successivement les paires d'éléments adjacents mal ordonnés", "Sélectionner le maximum", "Diviser pour régner", "Insérer un élément à sa place"],
    answer: "Comparer et permuter successivement les paires d'éléments adjacents mal ordonnés",
    explanation: "Le tri à bulles fait remonter les plus grands éléments vers la fin en comparant chaque élément avec son voisin direct."
  },
  {
    id: 432,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quel est le mode de transmission des arguments scalaires (int, float, char) aux fonctions par défaut en C ?",
    options: ["Passage par référence automatique", "Passage par valeur (copie locale)", "Passage par adresse", "Passage par registre partagé"],
    answer: "Passage par valeur (copie locale)",
    explanation: "En C, les arguments scalaires sont passés par valeur. Modifier le paramètre dans la fonction ne modifie pas l'original."
  },
  {
    id: 433,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Comment permet-on à une fonction de modifier la valeur de variables du programme appelant ?",
    options: ["En utilisant le mot-clé modify", "En transmettant les adresses des variables via des pointeurs", "En créant des threads", "En utilisant 'return' multiple"],
    answer: "En transmettant les adresses des variables via des pointeurs",
    explanation: "Le passage par adresse permet à la fonction de déréférencer le pointeur (*p = ...) et d'agir directement sur la mémoire de l'appelant."
  },
  {
    id: 434,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Que signifie le type de retour 'void' pour une fonction comme 'void afficher(int x)' ?",
    options: ["La fonction prend 0 paramètre", "La fonction ne retourne aucune valeur", "La fonction est asynchrone", "La fonction retourne un pointeur NULL"],
    answer: "La fonction ne retourne aucune valeur",
    explanation: "void comme type de retour indique que la fonction effectue une action (procédure) sans renvoyer de résultat."
  },
  {
    id: 435,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "À quoi sert la déclaration d'un prototype de fonction en haut de fichier ou dans un en-tête (.h) ?",
    options: ["À réserver de la mémoire dans le tas", "À informer le compilateur de la signature de la fonction (nom, type de retour, paramètres) avant son appel", "À compiler la fonction en assembleur", "À rendre la fonction multithreadée"],
    answer: "À informer le compilateur de la signature de la fonction (nom, type de retour, paramètres) avant son appel",
    explanation: "Le prototype permet au compilateur de valider les types des arguments et de retour dès les premiers appels de la fonction."
  },
  {
    id: 436,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quelle est l'utilité de la fonction srand(time(NULL)) avant d'appeler rand() dans <stdlib.h> ?",
    options: ["Calculer le temps d'exécution", "Initialiser la graine (seed) du générateur pseudo-aléatoire pour obtenir des séquences différentes à chaque exécution", "Définir la vitesse de la boucle", "Augmenter la précision de rand()"],
    answer: "Initialiser la graine (seed) du générateur pseudo-aléatoire pour obtenir des séquences différentes à chaque exécution",
    explanation: "Sans srand(), rand() réutiliserait la même graine (1 par défaut) et produirait exactement la même séquence de nombres à chaque lancement."
  },
  {
    id: 437,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Comment déclare-t-on correctement un tableau bidimensionnel (matrice) de 3 lignes et 4 colonnes d'entiers ?",
    options: ["int M[3, 4];", "int M[3][4];", "matrix M(3, 4);", "int M[4][3];"],
    answer: "int M[3][4];",
    explanation: "En C, les dimensions se déclarent entre crochets successifs : [nb_lignes][nb_colonnes], ici int M[3][4]."
  },
  {
    id: 438,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Comment initialiser toutes les 10 cases d'un tableau d'entiers à 0 dès sa déclaration ?",
    options: ["int tab[10] = 0;", "int tab[10] = {0};", "int tab[10] = [0];", "int tab[10] = null;"],
    answer: "int tab[10] = {0};",
    explanation: "La syntaxe int tab[10] = {0}; initialise la première valeur à 0, et le compilateur remplit automatiquement le reste avec des zéros."
  },
  {
    id: 439,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quel opérateur logique représente la négation (NON logique) en C ?",
    options: ["NOT", "~", "!", "<>"],
    answer: "!",
    explanation: "! est la négation logique : !0 vaut 1, et !(valeur non nulle) vaut 0."
  },
  {
    id: 440,
    subject: "Langage C",
    difficulty: "intermediaire",
    question: "Quel fichier d'en-tête standard permet d'utiliser le type booléen 'bool' avec les valeurs 'true' et 'false' depuis C99 ?",
    options: ["<boolean.h>", "<stdbool.h>", "<stdlib.h>", "<bool.h>"],
    answer: "<stdbool.h>",
    explanation: "<stdbool.h> définit le type bool ainsi que les constantes true (1) et false (0)."
  },

  // ---------------- LANGAGE C EXPERT (20) ----------------
  {
    id: 441,
    subject: "Langage C",
    difficulty: "expert",
    question: "Soit int tab[5] = {15, 17, 8, 23, 37}; et int *p = tab;. Que valent les expressions *(tab + 3) et *p + 4 ?",
    options: ["*(tab + 3) vaut 23 et *p + 4 vaut 19", "*(tab + 3) vaut 8 et *p + 4 vaut 37", "*(tab + 3) vaut 18 et *p + 4 vaut 37", "*(tab + 3) vaut 23 et *p + 4 vaut 37"],
    answer: "*(tab + 3) vaut 23 et *p + 4 vaut 19",
    explanation: "*(tab + 3) équivaut à tab[3] (23). En revanche, *p + 4 déréférence p (*p = tab[0] = 15) puis ajoute 4, ce qui donne 19 !"
  },
  {
    id: 442,
    subject: "Langage C",
    difficulty: "expert",
    question: "Pour une matrice 'int M[3][4];', quelle est l'écriture équivalente en arithmétique de pointeurs de l'élément M[i][j] ?",
    options: ["*(M + i + j)", "*(*(M + i) + j)", "(M + i)[j]", "*(M[i] + j*sizeof(int))"],
    answer: "*(*(M + i) + j)",
    explanation: "M + i pointe vers la ligne i. *(M + i) donne l'adresse du début de cette ligne, auquel on ajoute j puis on déréférence avec *."
  },
  {
    id: 443,
    subject: "Langage C",
    difficulty: "expert",
    question: "Quelle est la différence fondamentale entre les fonctions d'allocation dynamique malloc() et calloc() ?",
    options: ["calloc() alloue dans la pile alors que malloc() alloue dans le tas", "calloc() initialise automatiquement tous les octets alloués à zéro", "malloc() libère automatiquement la mémoire", "calloc() ne prend qu'un seul argument"],
    answer: "calloc() initialise automatiquement tous les octets alloués à zéro",
    explanation: "calloc(n, size) alloue n * size octets et les remplit de zéros, contrairement à malloc() qui laisse des données résiduelles indéterminées."
  },
  {
    id: 444,
    subject: "Langage C",
    difficulty: "expert",
    question: "Que retourne la fonction malloc() lorsque le système n'a plus assez de mémoire disponible ?",
    options: ["Une exception", "Le pointeur 0xFFFF", "Le pointeur NULL", "-1"],
    answer: "Le pointeur NULL",
    explanation: "En cas d'échec d'allocation, malloc() renvoie NULL. Il est indispensable de vérifier si (ptr == NULL) avant de l'utiliser."
  },
  {
    id: 445,
    subject: "Langage C",
    difficulty: "expert",
    question: "Quelle fonction de <stdlib.h> permet de modifier la taille d'un bloc mémoire précédemment alloué dynamiquement ?",
    options: ["resize()", "realloc()", "remalloc()", "expand()"],
    answer: "realloc()",
    explanation: "realloc(ptr, new_size) ajuste la taille d'un bloc en conservant les données existantes et en déplaçant le bloc si nécessaire."
  },
  {
    id: 446,
    subject: "Langage C",
    difficulty: "expert",
    question: "Dans quel ordre doit-on libérer une matrice 2D dynamique 'int **M' allouée avec nb_lig lignes ?",
    options: ["Faire uniquement free(M);", "Faire free(M) d'abord, puis libérer les lignes", "Faire une boucle free(M[i]) pour chaque ligne d'abord, puis free(M); et enfin M = NULL;", "La mémoire 2D est libérée automatiquement par le Garbage Collector"],
    answer: "Faire une boucle free(M[i]) pour chaque ligne d'abord, puis free(M); et enfin M = NULL;",
    explanation: "Si on libérait M en premier, on perdrait les adresses des lignes M[i], rendant leur libération impossible et créant une fuite mémoire."
  },
  {
    id: 447,
    subject: "Langage C",
    difficulty: "expert",
    question: "Qu'appelle-t-on une 'fuite mémoire' (memory leak) en langage C ?",
    options: ["Une écriture au-delà des limites d'un tableau", "De la mémoire allouée dynamiquement sur le tas qui n'est jamais libérée avec free()", "Un plantage de la pile", "Une division par zéro"],
    answer: "De la mémoire allouée dynamiquement sur le tas qui n'est jamais libérée avec free()",
    explanation: "Une fuite mémoire se produit quand on perd la référence vers un bloc alloué sur le Tas sans l'avoir libéré, gaspillant les ressources RAM."
  },
  {
    id: 448,
    subject: "Langage C",
    difficulty: "expert",
    question: "Qu'est-ce qu'un 'pointeur pendant' (dangling pointer) ?",
    options: ["Un pointeur vers NULL", "Un pointeur qui continue de référencer une zone mémoire qui a déjà été libérée avec free()", "Un pointeur constant", "Un pointeur de fonction"],
    answer: "Un pointeur qui continue de référencer une zone mémoire qui a déjà été libérée avec free()",
    explanation: "Accéder à une zone libérée provoque un comportement indéfini (Use-After-Free). Mettre le pointeur à NULL après free() protège contre cela."
  },
  {
    id: 449,
    subject: "Langage C",
    difficulty: "expert",
    question: "Quelle est la bonne pratique recommandée immédiatement après l'appel à free(ptr) ?",
    options: ["ptr = NULL;", "delete ptr;", "printf(\"%p\", ptr);", "realloc(ptr, 0);"],
    answer: "ptr = NULL;",
    explanation: "Affecter NULL à un pointeur libéré évite d'accéder par erreur à une zone invalide et protège contre les doubles libérations (double-free)."
  },
  {
    id: 450,
    subject: "Langage C",
    difficulty: "expert",
    question: "Qu'est-ce qu'un double pointeur 'int **pp' en C ?",
    options: ["Un pointeur vers deux entiers consécutifs", "Une variable qui stocke l'adresse mémoire d'un pointeur de type int*", "Un pointeur 64 bits", "Un pointeur alloué deux fois"],
    answer: "Une variable qui stocke l'adresse mémoire d'un pointeur de type int*",
    explanation: "Un double pointeur pointe vers un autre pointeur. Il est notamment utilisé pour manipuler des matrices ou modifier un pointeur dans une fonction."
  },
  {
    id: 451,
    subject: "Langage C",
    difficulty: "expert",
    question: "À quoi servent les directives #ifndef, #define et #endif dans un fichier d'en-tête (.h) ?",
    options: ["À accélérer l'exécution du fichier binaire", "Ce sont des gardes d'inclusion évitant qu'un même fichier .h soit inclus plusieurs fois lors de la compilation", "À déclarer des constantes globales", "À importer le fichier .c"],
    answer: "Ce sont des gardes d'inclusion évitant qu'un même fichier .h soit inclus plusieurs fois lors de la compilation",
    explanation: "Les gardes d'inclusion (include guards) empêchent les erreurs de redéfinition multiples de types et structures lors de la compilation."
  },
  {
    id: 452,
    subject: "Langage C",
    difficulty: "expert",
    question: "Quelle est la différence entre #include <stdio.h> et #include \"mon_module.h\" ?",
    options: ["Aucune différence", "Les chevrons <> cherchent dans les répertoires système, les guillemets \"\" cherchent d'abord dans le répertoire local du projet", "Les guillemets sont pour le C++", "Les chevrons sont plus rapides"],
    answer: "Les chevrons <> cherchent dans les répertoires système, les guillemets \"\" cherchent d'abord dans le répertoire local du projet",
    explanation: "<> cible les bibliothèques système standard, tandis que \"\" commence la recherche dans le dossier courant du code source."
  },
  {
    id: 453,
    subject: "Langage C",
    difficulty: "expert",
    question: "À quoi sert le mot-clé 'typedef' en langage C ?",
    options: ["À vérifier le type dynamique à l'exécution", "À définir un alias ou nouveau nom pour un type de données existant", "À allouer un type dans la mémoire statique", "À importer un type depuis une bibliothèque"],
    answer: "À définir un alias ou nouveau nom pour un type de données existant",
    explanation: "typedef permet de renommer des types (ex: typedef unsigned long ulong;) et d'éviter d'écrire 'struct' à chaque déclaration."
  },
  {
    id: 454,
    subject: "Langage C",
    difficulty: "expert",
    question: "Dans une énumération C déclarée par 'typedef enum { LUNDI, MARDI, MERCREDI } JOUR;', quelle valeur entière prend LUNDI par défaut ?",
    options: ["0", "1", "-1", "Indéterminée"],
    answer: "0",
    explanation: "Les valeurs d'une enum commencent par défaut à 0 et s'incrémentent de 1 pour chaque élément suivant (LUNDI=0, MARDI=1, MERCREDI=2)."
  },
  {
    id: 455,
    subject: "Langage C",
    difficulty: "expert",
    question: "Soit DATE *d = &d1; un pointeur sur une structure DATE contenant un champ 'jour'. Quelles syntaxes permettent d'accéder correctement à ce champ ?",
    options: ["d.jour ou *d->jour", "(*d).jour ou d->jour", "&d.jour ou d->*jour", "Uniquement d.jour"],
    answer: "(*d).jour ou d->jour",
    explanation: "L'opérateur flèche d->jour est un raccourci syntaxique pour (*d).jour, les parenthèses étant nécessaires car '.' a priorité sur '*'."
  },
  {
    id: 456,
    subject: "Langage C",
    difficulty: "expert",
    question: "Pourquoi est-il fortement recommandé de passer une structure volumineuse par pointeur (ex: const Personne *p) à une fonction ?",
    options: ["Parce que le compilateur refuse le passage direct", "Pour éviter de copier l'intégralité des octets de la structure sur la pile d'exécution", "Pour allouer la structure dans le registre", "Pour pouvoir modifier une constante"],
    answer: "Pour éviter de copier l'intégralité des octets de la structure sur la pile d'exécution",
    explanation: "Passer une structure par valeur copie tous ses champs, ce qui est lent et consomme la pile. Un pointeur ne copie que 4 ou 8 octets d'adresse."
  },
  {
    id: 457,
    subject: "Langage C",
    difficulty: "expert",
    question: "Quelle est la différence fondamentale entre la Pile (Stack) et le Tas (Heap) en mémoire C ?",
    options: ["La pile gère automatiquement les variables locales de manière très rapide, tandis que le tas gère les allocations dynamiques manuelles (malloc/free)", "La pile est allouée avec malloc, le tas avec calloc", "Le tas est plus rapide que la pile", "Il n'y a aucune différence matérielle"],
    answer: "La pile gère automatiquement les variables locales de manière très rapide, tandis que le tas gère les allocations dynamiques manuelles (malloc/free)",
    explanation: "La pile (Stack) alloue et libère automatiquement les variables de fonctions. Le tas (Heap) est dédié aux données dynamiques contrôlées par le développeur."
  },
  {
    id: 458,
    subject: "Langage C",
    difficulty: "expert",
    question: "Que calcule l'opérateur 'sizeof' en C et à quel moment est-il généralement évalué ?",
    options: ["Le nombre de bits d'une variable à l'exécution", "La taille en octets d'un type ou d'une variable, évaluée à la compilation", "L'adresse mémoire", "Le nombre d'éléments d'une liste dynamique"],
    answer: "La taille en octets d'un type ou d'une variable, évaluée à la compilation",
    explanation: "sizeof est un opérateur évalué à la compilation (sauf VLA en C99) qui renvoie la taille en octets (size_t) requise par le type."
  },
  {
    id: 459,
    subject: "Langage C",
    difficulty: "expert",
    question: "En arithmétique de pointeurs, si 'p' est un pointeur sur 'int' (4 octets) à l'adresse 1000, à quelle adresse pointe l'expression 'p + 2' ?",
    options: ["1002", "1004", "1008", "1016"],
    answer: "1008",
    explanation: "L'arithmétique des pointeurs multiplie automatiquement l'incrément par sizeof(type). Ici : 1000 + (2 * 4 octets) = 1008."
  },
  {
    id: 460,
    subject: "Langage C",
    difficulty: "expert",
    question: "Que se passe-t-il si un programme C tente d'écrire dans la mémoire pointée par un pointeur NULL ou invalide ?",
    options: ["Le programme affiche un avertissement", "Une exception NullPointerException est levée et interceptée", "Une erreur de segmentation (Segmentation Fault) provoque l'arrêt brutal du programme", "La variable prend la valeur 0"],
    answer: "Une erreur de segmentation (Segmentation Fault) provoque l'arrêt brutal du programme",
    explanation: "Accéder à une adresse mémoire protégée ou inexistante (comme 0/NULL) déclenche un signal SIGSEGV (Segmentation Fault) du système d'exploitation."
  }
];
