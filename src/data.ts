import { pythonQcmData } from './data/qcm_python';
import { architectureQcmData } from './data/qcm_architecture';
import { javaQcmData } from './data/qcm_java';
import { cQcmData } from './data/qcm_c';
import { webQcmData } from './data/qcm_web';
import { qcmBddData } from './data/qcm_bdd';

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

export const pythonDevData: CourseItem[] = [
  {
    id: "pd1",
    category: "Environnement",
    title: "Structure, Venv & Pyenv",
    content: "Un projet Python standard contient : src/, tests/, .venv, .git, README.md et requirements.txt. L'environnement virtuel (.venv) isole les dépendances. Pyenv permet de gérer plusieurs versions de Python sur la même machine.",
    code: "# Création et activation d'un environnement virtuel (venv)\npython -m venv .venv\n\n# Activation (Windows)\n.venv\\Scripts\\activate\n\n# Activation (Mac/Linux)\nsource .venv/bin/activate\n\n# Désactivation\ndeactivate"
  },
  {
    id: "pd2",
    category: "Environnement",
    title: "Gestion des paquets (Pip & Poetry)",
    content: "Pip installe les paquets (pip install, pip freeze > requirements.txt). Poetry est un gestionnaire avancé (remplace requirements.txt) qui gère les dépendances via pyproject.toml et garantit des installations reproductibles avec poetry.lock.",
    code: "# PIP\npython -m pip install requests==2.31.0\npython -m pip install -r requirements.txt\n\n# POETRY\npoetry new mon_projet      # Créer un projet\npoetry add pendulum        # Ajouter une dépendance\npoetry remove pendulum     # Supprimer\npoetry show --tree         # Voir l'arbre des dépendances\npoetry run python main.py  # Exécuter dans l'env Poetry\npoetry build               # Créer un package distribuable (.tar.gz et .whl)"
  },
  {
    id: "pd3",
    category: "Tests (Pytest)",
    title: "Architecture AAA & assert",
    content: "Pytest est un framework de test unitaire. Les tests doivent suivre le pattern AAA : Arrange (préparer le contexte), Act (appeler la fonction), Assert (vérifier le résultat).",
    code: "def test_addition():\n    # Arrange\n    a, b = 2, 3\n    # Act\n    resultat = addition(a, b)\n    # Assert\n    assert resultat == 5\n\n# Tester une exception attendue\nimport pytest\ndef test_tva_negative():\n    with pytest.raises(ValueError, match=\"prix négatif\"):\n        calcul_tva(-10)"
  },
  {
    id: "pd4",
    category: "Tests (Pytest)",
    title: "Fixtures, Parametrize & Mocks",
    content: "@pytest.fixture prépare un contexte réutilisable (souvent dans conftest.py). parametrize teste plusieurs scénarios d'un coup. monkeypatch modifie temporairement l'environnement (setattr, setenv). Mock simule un objet réel.",
    code: "# Parametrize (tester plusieurs valeurs)\n@pytest.mark.parametrize(\"a, b, attendu\", [(2,3,5), (10,5,15)])\ndef test_add(a, b, attendu):\n    assert addition(a,b) == attendu\n\n# Monkeypatch : modifier le comportement\ndef test_api(monkeypatch):\n    monkeypatch.setattr(\"module.appeler_api\", lambda: 25)\n    assert obtenir_temperature() == 25\n\n# Mock\nfrom unittest.mock import Mock\napi = Mock()\napi.get_temperature.return_value = 25"
  },
  {
    id: "pd5",
    category: "API & HTTP",
    title: "Composants Requête/Réponse & Codes HTTP",
    content: "Requête : Méthode (GET, POST, PUT, DELETE), URL, Paramètres, Headers, Body. Réponse : Status Line, Headers, Body. Codes HTTP : 2xx (Succès), 3xx (Redirection), 4xx (Erreur client, ex: 404 Not Found), 5xx (Erreur serveur).",
    code: "// Structure Body (JSON)\n{\n    \"name\": \"Tassili\",\n    \"age\": 22\n}\n\n// Headers importants :\n// Content-Type: application/json (Format envoyé)\n// Accept: application/json (Format souhaité)\n// Authorization: Bearer XXX (Authentification)"
  },
  {
    id: "pd6",
    category: "API & HTTP",
    title: "Module Requests",
    content: "La bibliothèque 'requests' permet de communiquer avec des API. Toujours vérifier la réponse avec raise_for_status() et gérer les exceptions (HTTPError, Timeout, ConnectionError) dans un bloc try/except.",
    code: "import requests\n\nurl = \"https://api.exemple.com/posts\"\nheaders = {\"Content-Type\": \"application/json\"}\ndata = {\"title\": \"Mon post\"}\n\ntry:\n    # Requête POST avec timeout\n    response = requests.post(url, headers=headers, json=data, timeout=10)\n    response.raise_for_status() # Déclenche HTTPError si code >= 400\n    \n    # Lecture JSON\n    print(response.json()['title'])\nexcept requests.exceptions.HTTPError:\n    print(\"Erreur HTTP\")\nexcept requests.exceptions.Timeout:\n    print(\"Délai dépassé\")"
  },
  {
    id: "pd7",
    category: "Bases de données",
    title: "Driver vs ORM",
    content: "Driver (ex: mysql-connector-python) : contrôle direct du SQL, simple mais nécessite d'écrire des requêtes textuelles. ORM (ex: SQLAlchemy, Django ORM, Peewee) : mappe les classes Python sur les tables SQL (Object-Relational Mapping), cache la complexité SQL.",
    code: "import mysql.connector\n\n# Approche Driver\nconn = mysql.connector.connect(host=\"localhost\", user=\"root\", database=\"ecole\")\ncur = conn.cursor()\ncur.execute(\"SELECT * FROM etudiant\")\nresultats = cur.fetchall()\n\nfor etudiant in resultats:\n    print(etudiant)\nconn.close()\n\n# Approche ORM (Pseudo-code)\n# etudiant = Etudiant(nom=\"Tassili\")\n# session.add(etudiant)\n# session.commit()"
  },
  {
    id: "pd8",
    category: "Qualité du code",
    title: "Analyseurs & Linters (Flake8)",
    content: "Flake8 regroupe 3 outils : pycodestyle (vérifie le style et PEP8 : indentation, espaces), pyflakes (détecte les erreurs logiques : imports inutilisés, variables non définies) et mccabe (mesure la complexité cyclomatique).",
    code: "# Lancer flake8 sur un fichier avec une complexité max tolérée de 10\nflake8 --max-complexity=10 main.py\n\n# Exemples d'erreurs détectées :\n# E111 : indentation is not a multiple of 4 (pycodestyle)\n# F401 : 'os' imported but unused (pyflakes)\n# C901 : 'calculer' is too complex (mccabe)"
  }
];

export const pythonData: CourseItem[] = [
  { id: "p1", category: "Bases", title: "Entrées / Sorties & Types", content: "Conversion: int(), float(), str(), bool()", code: "print(a, b, sep=\" \", end=\"\\n\")\ns = input(\"Saisie : \")" },
  { id: "p2", category: "Bases", title: "Boucles & Conditions", content: "Les structures de contrôle de flux.", code: "if a > b:\n    print(a)\nelif a == b:\n    pass\nelse:\n    print(b)\n\nfor i in range(0, 10, 2):\n    print(i)" },
  { id: "p3", category: "Structures", title: "Listes & Tuples", content: "Les listes sont mutables, les tuples sont immuables.", code: "t = (1, 2) # Tuple\nL = [1, 2, 3] # Liste\nL.append(4)\nL.remove(2)\nL[1:3] # Slicing" },
  { id: "p4", category: "Structures", title: "Dictionnaires", content: "Paires clé:valeur.", code: "d = {'a': 1, 'b': 2}\nfor k, v in d.items():\n    print(k, v)" },
  { id: "p5", category: "Avancé", title: "Fonctions & Map/Filter", content: "Programmation fonctionnelle et Type hints.", code: "def f(x: int) -> int:\n    return x + 1\n\nlist(map(lambda x: x*x, L))\nlist(filter(lambda x: x>=18, L))" },
  { id: "p6", category: "Fichiers", title: "OS & Fichiers", content: "Manipulation du système de fichiers.", code: "import os, shutil\nwith open(\"file.txt\", \"w\") as f:\n    f.write(\"Texte\")" },
  { id: "p7", category: "Data Science", title: "Numpy & Pandas", content: "Traitement de données.", code: "import numpy as np\nimport pandas as pd\n\nt = np.zeros(5)\ndf = pd.DataFrame({'X': [1,2]})\ndf.loc[df['X'] >= 2]" },
  { id: "p8", category: "POO", title: "Classes & Exceptions", content: "Création d'objets et gestion des erreurs.", code: "try:\n    raise ValueError(\"Erreur\")\nexcept ValueError:\n    pass\n\nclass Personne:\n    def __init__(self, nom):\n        self.nom = nom" },
  ...pythonDevData
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

export const javaAdvancedData: CourseItem[] = [
  {
    id: "j6",
    category: "Héritage",
    title: "Bases de l'Héritage (extends)",
    content: "L'héritage permet de créer une classe fille à partir d'une classe mère pour mutualiser le code. En Java, on utilise le mot-clé 'extends'. L'héritage multiple de classes est interdit (une classe a au maximum UNE classe mère). Toutes les classes héritent implicitement de la classe 'Object'.",
    code: "public class Animal {\n    protected String nom;\n    public void manger() {\n        System.out.println(\"Je mange\");\n    }\n}\n\n// La classe Lion hérite de Animal\npublic class Lion extends Animal {\n    public void rugir() {\n        System.out.println(\"Roar\");\n    }\n}"
  },
  {
    id: "j7",
    category: "Héritage",
    title: "Redéfinition (@Override) & super",
    content: "La redéfinition (Overriding) consiste à réécrire une méthode héritée avec EXACTEMENT la même signature. L'annotation @Override force le compilateur à vérifier. Le mot-clé 'super' permet d'appeler le constructeur ou une méthode de la classe mère.",
    code: "public class PointColore extends Point {\n    String couleur;\n\n    // Appel du constructeur parent (doit être la 1ère instruction)\n    public PointColore(double x, double y, String couleur) {\n        super(x, y);\n        this.couleur = couleur;\n    }\n\n    @Override\n    public void afficher() {\n        super.afficher(); // Appelle la méthode parent\n        System.out.println(\" de couleur \" + this.couleur);\n    }\n}"
  },
  {
    id: "j8",
    category: "Polymorphisme",
    title: "UpCast & DownCast",
    content: "Le polymorphisme permet de traiter des objets de types différents via une interface commune. L'UpCast (implicite) référence un objet enfant avec une variable de type parent. Le DownCast (explicite) force le retour au type enfant (nécessite une vérification avec 'instanceof').",
    code: "// UpCast : créer un tableau de type Parent contenant des Enfants\nFigure[] tab = new Figure[2];\ntab[0] = new Cercle();\ntab[1] = new Triangle();\n\n// Polymorphisme : appelle la méthode de l'objet réel à l'exécution\nfor (Figure f : tab) {\n    f.dessiner(); \n}\n\n// DownCast : on vérifie d'abord le type réel\nif (tab[0] instanceof Cercle) {\n    Cercle c = (Cercle) tab[0]; // Cast explicite\n    c.setRayon(5);\n}"
  },
  {
    id: "j9",
    category: "Classes Abstraites",
    title: "Classes & Méthodes Abstraites",
    content: "Une classe 'abstract' ne peut pas être instanciée. Elle définit un contrat mixte : des méthodes implémentées et/ou des méthodes abstraites (sans corps, terminées par ';'). Toute classe héritant d'une classe abstraite DOIT implémenter ses méthodes abstraites.",
    code: "public abstract class Forme {\n    // Méthode abstraite : spécification (quoi ?)\n    public abstract double calculerSurface();\n}\n\npublic class Cercle extends Forme {\n    private double rayon;\n    public Cercle(double r) { this.rayon = r; }\n\n    // Implémentation obligatoire (comment ?)\n    @Override\n    public double calculerSurface() {\n        return Math.PI * rayon * rayon;\n    }\n}"
  },
  {
    id: "j10",
    category: "Interfaces",
    title: "Contrats Purs (implements)",
    content: "Une interface définit un contrat 100% abstrait (jusqu'à Java 8). Elle ne contient que des constantes (public static final) et des signatures de méthodes (public abstract). Une classe peut implémenter PLUSIEURS interfaces (contournement de l'héritage multiple).",
    code: "public interface ObjetColore {\n    int ROUGE = 0; // Constante implicitement public static final\n    void changerCouleur(int couleur); // implicitement public abstract\n}\n\npublic interface ObjetGraphique {\n    void afficher();\n}\n\n// Implémentation multiple\npublic class RectangleColore extends Forme implements ObjetColore, ObjetGraphique {\n    @Override\n    public void changerCouleur(int couleur) { /* ... */ }\n\n    @Override\n    public void afficher() { /* ... */ }\n}"
  },
  {
    id: "j11",
    category: "Interfaces",
    title: "Interfaces depuis Java 8 (default & static)",
    content: "Depuis Java 8, une interface peut contenir des méthodes implémentées grâce au mot-clé 'default' (pour éviter de casser le code existant des classes qui l'implémentent) et des méthodes utilitaires 'static'.",
    code: "public interface Etudiant {\n    String niveau();\n\n    // Méthode avec implémentation par défaut\n    default void afficherStatut() {\n        System.out.println(\"Inscrit au niveau : \" + niveau());\n    }\n\n    // Méthode statique utilitaire\n    static int getFraisScolarite() {\n        return 8000;\n    }\n}\n// Appel méthode static : Etudiant.getFraisScolarite();"
  }
];

export const javaData: CourseItem[] = [
  { id: "j1", category: "Bases POO", title: "Classes et Objets", content: "Une classe est un modèle. Un objet est une instance de ce modèle.", code: "public class Voiture {\n    // Attributs\n    String couleur;\n\n    // Méthode\n    public void avancer() {\n        System.out.println(\"Avance\");\n    }\n}\n// Instanciation\nVoiture v = new Voiture();" },
  { id: "j2", category: "Constructeurs", title: "Types de Constructeurs", content: "Méthode spéciale invoquée avec 'new'. Ne retourne rien, porte le nom de la classe.", code: "public class Point {\n    int x, y;\n\n    public Point() {} // Par défaut\n    \n    public Point(int x, int y) { // Paramétré\n        this.x = x;\n        this.y = y;\n    }\n\n    public Point(Point autre) { // Copie\n        this.x = autre.x;\n        this.y = autre.y;\n    }\n}" },
  { id: "j3", category: "Encapsulation", title: "Visibilité & Getters/Setters", content: "Protéger les données avec 'private' et les exposer via des méthodes 'public'.", code: "public class Personne {\n    private int age;\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public void setAge(int age) {\n        if (age >= 0) this.age = age;\n    }\n}" },
  { id: "j4", category: "Méthodes usuelles", title: "toString() et equals()", content: "Redéfinition des méthodes héritées de Object.", code: "@Override\npublic String toString() {\n    return \"Info: \" + this.nom;\n}\n\n@Override\npublic boolean equals(Object obj) {\n    if (obj == null) return false;\n    Personne autre = (Personne) obj;\n    return this.nom.equals(autre.nom);\n}" },
  { id: "j5", category: "Avancé", title: "Attributs & Méthodes Static", content: "Appartient à la classe et non à l'instance. Partagé par tous les objets.", code: "public class Compteur {\n    public static int total = 0;\n\n    public Compteur() {\n        total++;\n    }\n\n    public static void afficherTotal() {\n        System.out.println(total);\n    }\n}" },
  ...javaAdvancedData
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

export const webData: CourseItem[] = [
  {
    id: "w1",
    category: "HTML",
    title: "Structure de base (DOM)",
    content: "HTML5 formalise l'écriture d'un document Web vu comme un arbre DOM (Document Object Model). Le DOCTYPE indique au navigateur comment interpréter la page. Le <head> contient les métadonnées, le <body> le contenu visible.",
    code: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"utf-8\">\n    <title>Mon Site</title>\n</head>\n<body>\n    <header>\n        <h1>Titre Principal</h1>\n    </header>\n    <section>\n        <p>Mon premier <strong>paragraphe</strong>.</p>\n    </section>\n</body>\n</html>"
  },
  {
    id: "w2",
    category: "HTML",
    title: "Balises usuelles & Sémantique",
    content: "Les balises peuvent être imbriquées (sans chevauchement) ou auto-fermantes (ex: <br/>, <img/>). HTML5 apporte des balises sémantiques : <article>, <section>, <nav>, <header>, <footer>, <aside>.",
    code: "<!-- Images et Liens -->\n<img src=\"image.png\" alt=\"Description\" width=\"200\">\n<a href=\"http://efrei.fr\">Site Efrei</a>\n\n<!-- Listes -->\n<ul> <!-- ou <ol> pour ordonnée -->\n    <li>Élément 1</li>\n    <li>Élément 2</li>\n</ul>\n\n<!-- Formulaires -->\n<form method=\"post\" action=\"cible.php\">\n    <input type=\"text\" name=\"pseudo\">\n    <input type=\"radio\" value=\"H\" name=\"genre\">\n    <button type=\"submit\">Envoyer</button>\n</form>"
  },
  {
    id: "w3",
    category: "CSS",
    title: "Syntaxe, Sélecteurs & Héritage",
    content: "CSS gère l'apparence. Une règle = Sélecteur { Propriété: Valeur; }. On l'inclut via <link rel=\"stylesheet\" href=\"style.css\">. Spécificité : id (#) > classe (.) > balise.",
    code: "/* Sélecteur de balise, de classe et d'ID */\nh1 { color: blue; }\n.title { font-weight: bold; }\n#main-menu { background-color: #333; }\n\n/* Combinateurs */\nh1 ~ p { color: red; } /* Frère général */\nh1 + p { color: green;} /* Frère adjacent */\nul > li { border: 1px solid; } /* Enfant direct */\ndiv p { margin: 10px; } /* Descendant n'importe où */\n\n/* Héritage */\n.reset strong { color: initial; }\n.inherit strong { color: inherit; }"
  },
  {
    id: "w4",
    category: "CSS",
    title: "Responsive Design & Flexbox",
    content: "Pour adapter l'affichage, il faut la balise meta viewport, des unités relatives (%), et des Media Queries (@media) pour changer l'affichage selon la taille de l'écran. Flexbox simplifie les alignements.",
    code: "/* HTML HEAD: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> */\n\n/* Media Queries */\n@media screen and (max-width: 800px) {\n    body { font-size: 14px; }\n    nav { display: none; }\n}\n\n/* Flexbox */\n.box {\n    display: flex;\n    flex-direction: row-reverse;\n    flex-wrap: wrap; /* ou flex-flow: wrap */\n}"
  },
  {
    id: "w5",
    category: "JavaScript",
    title: "Bases & DOM",
    content: "JS est un langage dynamique, sensible à la casse, exécuté par le navigateur. Il modifie le DOM via la variable globale 'document'.",
    code: "let x = 1;\nconst PI = 3.14;\n\n// Récupération DOM\nlet btn = document.getElementById('b1');\nlet paragraphe = document.querySelector('.texte');\n\n// Modification\nparagraphe.textContent = 'Texte modifié dynamiquement';\n// EVITER innerHTML pour la sécurité\n\n// Affichage et concaténation ES6\nconsole.log(`Valeur de x : ${x}`);\nalert('Bonjour !');"
  },
  {
    id: "w6",
    category: "JavaScript",
    title: "Événements & Asynchrone",
    content: "JS réagit aux actions via addEventListener. event.preventDefault() annule le comportement par défaut (rechargement d'un form). L'asynchrone permet de ne pas bloquer le thread principal (ex: setTimeout, fetch).",
    code: "let elt = document.getElementById('mon-lien');\n\nelt.addEventListener('click', function(event) {\n    event.preventDefault();\n    console.log(\"Clic bloqué !\");\n});\n\n// Asynchrone : setTimeout\nsetTimeout(() => {\n    console.log(\"Affiché après 3 secondes\");\n}, 3000);\n\n// API Fetch avec Promise (.then)\nfetch('data.json').then(response => {\n    console.log(response.status);\n});"
  },
  {
    id: "w7",
    category: "JavaScript",
    title: "Objets, Classes & JSON",
    content: "En JS, on peut créer des objets avec des paires clé/valeur, ajouter des getters/setters, ou utiliser la syntaxe de classe ES6. JSON est utilisé pour échanger des données.",
    code: "// Objet JS classique\nlet etudiant = {\n    nom: 'Doe',\n    age: 20,\n    saluer: function() { alert('Bonjour ' + this.nom); }\n};\n\n// Classe ES6\nclass Personne {\n    constructor(nom) { this.nom = nom; }\n    get nomComplet() { return this.nom; }\n}\n\n// JSON (JavaScript Object Notation)\nlet jsonString = JSON.stringify(etudiant); // Objet vers Texte\nlet obj = JSON.parse(jsonString); // Texte vers Objet"
  },
  {
    id: "w8",
    category: "PHP",
    title: "Bases & Transmission de Données",
    content: "PHP s'exécute côté serveur. Le fichier doit avoir l'extension .php. Les données transitent par l'URL ($_GET) ou par formulaire ($_POST).",
    code: "<?php\n// Inclusions pour éviter la répétition (header, footer)\ninclude(\"menu.php\");\n\n// Variables (commencent par $)\n$age = 17;\necho \"J'ai \" . $age . \" ans\"; // Concaténation avec le point (.)\n\n// Récupération de formulaire (method=\"POST\")\nif(isset($_POST['prenom'])) {\n    echo \"Bonjour \" . $_POST['prenom'];\n}\n\n// Récupération depuis l'URL (?nom=Hamidi)\necho $_GET['nom'];\n?>"
  },
  {
    id: "w9",
    category: "PHP",
    title: "Base de données (PDO)",
    content: "PDO (PHP Data Objects) est l'API recommandée pour se connecter à MySQL de manière sécurisée (gestion des exceptions).",
    code: "<?php\n$host = 'localhost';\n$user = 'root';\n$pass = 'root';\n\ntry {\n    // Connexion PDO\n    $conn = new PDO(\"mysql:host=$host;dbname=test\", $user, $pass);\n    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    \n    // Insertion\n    $sql = \"INSERT INTO Etudiant(Nom) VALUES ('Hamidi')\";\n    $conn->exec($sql);\n    \n    // Lecture (Extraction)\n    $sth = $conn->prepare(\"SELECT prenom FROM Etudiant\");\n    $sth->execute();\n    $resultat = $sth->fetchAll(PDO::FETCH_ASSOC);\n    print_r($resultat);\n    \n} catch (PDOException $e) {\n    echo \"Erreur: \" . $e->getMessage();\n}\n?>"
  },
  {
    id: "w10",
    category: "PHP",
    title: "Sessions & Cookies",
    content: "Cookies = sac à dos du visiteur, stocké côté Client avec date d'expiration. Sessions = données stockées côté Serveur, temporaires (détruites à la fermeture du navigateur). Il faut appeler session_start() AVANT tout code HTML.",
    code: "<?php\n// ------ SESSIONS ------\nsession_start(); // RÈGLE D'OR : tout en haut du fichier !\n$_SESSION['pseudo'] = 'Admin';\nunset($_SESSION['pseudo']); // Supprime la variable\n$_SESSION = array(); // Détruit toute la session\n\n// ------ COOKIES ------\n// setcookie(Nom, Valeur, Expiration)\nsetcookie('theme', 'dark', time() + 3600); // Valable 1 heure\n\n// Lire le cookie\necho $_COOKIE['theme'];\n\n// Supprimer le cookie (le faire périmer dans le passé)\nsetcookie('theme', '', time() - 1);\n?>"
  }
];

export const bddData: CourseItem[] = [
  {
    id: "db1",
    category: "MCD & Merise (Chap 1)",
    title: "Méthode MERISE & Modèle Entité/Association",
    content: "MERISE découpe la conception en 3 niveaux : MCD (Modèle Conceptuel de Données, représentation graphique Entité/Association), MLD (Modèle Logique de Données, relationnel sous forme de tables) et MPD (Modèle Physique, implémentation SQL dans un SGBD).",
    code: "-- Vocabulaire du MCD :\n-- 1. Entité : Objet identifiable pertinent (ex: Film, Acteur)\n-- 2. Attribut : Propriété caractérisant une entité (atomique, composé ou multivalué)\n-- 3. Identifiant : Attribut (souligné) identifiant une entité de façon unique (ex: id_film)\n-- 4. Identifiant secondaire : Attribut unique pour chaque instance (ex: CIN_Etudiant)\n-- 5. Association : Lien (verbe) reliant plusieurs entités, parfois porteuse d'attributs"
  },
  {
    id: "db2",
    category: "MCD & Merise (Chap 1)",
    title: "Cardinalités & Bonnes pratiques MCD",
    content: "La cardinalité est une paire [Min, Max] indiquant combien de fois (au minimum : 0 ou 1 ; au maximum : 1 ou n) une entité participe à l'association. Règles d'optimisation : noms uniques, fusionner les entités/associations similaires, supprimer les associations (1,1)-(1,1) et éviter les cycles redondants.",
    code: "-- Lecture des cardinalités :\n-- [Artiste] 0,n ---- (Réaliser) ---- 1,1 [Film]\n-- -> Un artiste réalise 0 ou plusieurs (n) films.\n-- -> Un film est réalisé par 1 et 1 seul artiste.\n\n-- Association porteuse d'attribut :\n-- [Artiste] 0,n ---- (Participer : role) ---- 1,n [Film]"
  },
  {
    id: "db3",
    category: "Normalisation (Chap 1)",
    title: "Anomalies & Formes Normales (1FN, 2FN, 3FN)",
    content: "Mélanger plusieurs objets dans une même table crée des redondances qui provoquent des anomalies d'insertion, de mise à jour et de suppression. La normalisation garantit un schéma sans redondance grâce aux dépendances fonctionnelles (A -> B).",
    code: "-- 1FN (1ère Forme Normale) :\n-- Tous les attributs sont élémentaires (atomiques, non décomposables, pas de listes).\n\n-- 2FN (2ème Forme Normale) :\n-- Être en 1FN + tout attribut non-identifiant dépend de TOUT l'identifiant\n-- (et non d'une seule partie d'une clé primaire composée).\n\n-- 3FN (3ème Forme Normale) :\n-- Être en 2FN + aucun attribut non-identifiant ne dépend d'un autre attribut\n-- non-identifiant (pas de dépendance transitive : IdFilm -> IdMES -> NomMES)."
  },
  {
    id: "db4",
    category: "MLD Relationnel (Chap 2)",
    title: "Vocabulaire du Modèle Relationnel",
    content: "Dans le MLD, tout est représenté sous forme de relations (tables). Une ligne est appelée un n-uplet (tuple) et une colonne est un attribut caractérisé par son domaine (type). La clé primaire est soulignée, la clé étrangère est précédée d'un dièse (#).",
    code: "-- Exemple de schéma relationnel (MLD) :\nMES (idMES : entier, nomMES : caractères, prénomMES : caractères, annéeNaiss : entier)\nFilm (id_film : entier, titre : caractères, année : entier, #idMES : entier)\n\n-- Clé primaire (id_film) : identifie de manière unique une ligne de la table.\n-- Clé étrangère (#idMES) : fait référence à la clé primaire idMES de la table MES."
  },
  {
    id: "db5",
    category: "MLD Relationnel (Chap 2)",
    title: "Les 3 Règles de passage MCD vers MLD",
    content: "On traduit un diagramme Entité/Association (MCD) en schéma relationnel (MLD) en appliquant 3 règles systématiques selon les cardinalités des associations binaires.",
    code: "-- Règle 1 (Entité -> Table) :\n-- Toute entité devient une table ; son identifiant devient la clé primaire.\n\n-- Règle 2 : Cardinalités (X,1) - (X,N) avec X = 0 ou 1\n-- La clé primaire côté (X,N) migre comme clé étrangère (#) dans la table côté (X,1).\n-- Ex : Employé (1,1) --- travailler --- (1,n) Société\nSOCIETE = (ID_SOCIETE, NOM_SOCIETE);\nEMPLOYE = (ID_EMPLOYE, NOM_EMPLOYE, #ID_SOCIETE);\n\n-- Règle 3 : Cardinalités (X,N) - (X,N) avec X = 0 ou 1\n-- Création d'une nouvelle table dont la clé primaire est la concaténation des 2 clés étrangères.\n-- Ex : Commande (0,n) --- composer (quantite) --- (0,n) Produit\nCOMPOSER = (#ID_COMMANDE, #ID_PRODUIT, QUANTITE);"
  },
  {
    id: "db6",
    category: "SQL LDD (Chap 3)",
    title: "Bases SQL, Bases de données & Types ANSI",
    content: "SQL est un langage déclaratif divisé en 3 sous-langages : LDD/DDL (définition des structures), LMD/DML (manipulation des données) et DQL (interrogation). Principaux types ANSI : INTEGER/INT, SMALLINT, BIGINT, FLOAT/REAL, NUMERIC(M,D), CHAR(M), VARCHAR(M), DATE ('AAAA-MM-JJ'), TIME ('HH:MM:SS'), DATETIME, YEAR.",
    code: "-- Gestion de la base de données\nCREATE DATABASE bd_cinema;\nUSE bd_cinema;\nSHOW TABLES;\nDESCRIBE cinema;\n\n-- Suppression définitive\nDROP TABLE cinema;\nDROP DATABASE bd_cinema;"
  },
  {
    id: "db7",
    category: "SQL LDD (Chap 3)",
    title: "CREATE TABLE & Contraintes d'intégrité",
    content: "Contraintes principales : PRIMARY KEY (unique + non nul), FOREIGN KEY ... REFERENCES (intégrité référentielle vérifiée à l'insertion, modification et suppression), NOT NULL (obligatoire), UNIQUE (clé secondaire) et DEFAULT (valeur par défaut).",
    code: "CREATE TABLE artiste (\n    id_artiste INT NOT NULL,\n    nom VARCHAR(50) NOT NULL,\n    prenom VARCHAR(50) NOT NULL,\n    annee_naissance INT DEFAULT 2000,\n    PRIMARY KEY (id_artiste),\n    UNIQUE (nom, prenom)\n);\n\nCREATE TABLE film (\n    id_film INT NOT NULL,\n    titre VARCHAR(50) NOT NULL,\n    id_mes INT,\n    PRIMARY KEY (id_film),\n    FOREIGN KEY (id_mes) REFERENCES artiste(id_artiste)\n);\n\n-- Clé primaire composée :\nCREATE TABLE notation (\n    id_film INT NOT NULL,\n    email VARCHAR(50) NOT NULL,\n    note INT DEFAULT 0,\n    PRIMARY KEY (id_film, email)\n);"
  },
  {
    id: "db8",
    category: "SQL LDD (Chap 3)",
    title: "Modifier une table (ALTER TABLE)",
    content: "La commande ALTER TABLE permet de modifier la structure d'une table existante sans perdre ses données : ajout/modification/suppression de colonnes ou ajout de contraintes.",
    code: "-- 1. Ajouter une colonne\nALTER TABLE internaute ADD region VARCHAR(15);\n\n-- 2. Modifier le type ou la contrainte d'une colonne\nALTER TABLE internaute MODIFY region VARCHAR(30) NOT NULL;\n\n-- 3. Définir une valeur par défaut\nALTER TABLE internaute ALTER region SET DEFAULT 'PACA';\n\n-- 4. Supprimer une colonne\nALTER TABLE internaute DROP region;\n\n-- 5. Ajouter des contraintes après création\nALTER TABLE Film ADD CONSTRAINT pk_film PRIMARY KEY (ID_Film);\nALTER TABLE Film ADD CONSTRAINT fk_film FOREIGN KEY (ID_MES) REFERENCES Artiste(ID_Artiste);"
  },
  {
    id: "db9",
    category: "SQL LMD (Chap 3)",
    title: "Insérer, Modifier, Supprimer (INSERT, UPDATE, DELETE)",
    content: "Le LMD manipule les lignes (enregistrements). Attention : il faut toujours insérer les données dans la table parente (référencée) avant la table contenant la clé étrangère. Ne jamais oublier la clause WHERE dans un UPDATE ou DELETE !",
    code: "-- 1. INSERT INTO (une ou plusieurs lignes)\nINSERT INTO Scene VALUES ('Mainframe', 55000), ('La Distorsion', 15000);\nINSERT INTO Concert (NumConcert, Duree, NomScene) VALUES (1, 90, 'Mainframe');\n\n-- 2. UPDATE (Modification ciblée avec WHERE)\nUPDATE Concert SET Duree = 70 WHERE NumConcert = 2;\n-- Attention : sans WHERE, toutes les lignes de la table sont modifiées !\n\n-- 3. DELETE (Suppression ciblée avec WHERE)\nDELETE FROM Concert WHERE NumConcert = 1;\n-- Attention : DELETE FROM Concert; vide intégralement la table !"
  },
  {
    id: "db10",
    category: "SQL Interrogation (Chap 4)",
    title: "Projection, Sélection, DISTINCT & ORDER BY",
    content: "En algèbre relationnelle, la Projection extrait des colonnes (SELECT) et la Sélection filtre les lignes (WHERE). DISTINCT élimine les doublons et ORDER BY trie les résultats (ASC par défaut, ou DESC).",
    code: "-- Projection (colonnes) + Sélection (lignes avec WHERE, AND, OR, NOT)\nSELECT a_nom, a_prix \nFROM Article \nWHERE (a_nom = 'Ordinateur' OR a_nom = 'Ecran') \n  AND a_prix < 1000;\n\n-- Sans doublons et trié par ordre décroissant\nSELECT DISTINCT a_nom \nFROM Article \nORDER BY a_nom DESC;\n\n-- Encadrement de valeurs\nSELECT * FROM livres \nWHERE annee_publication >= 1940 AND annee_publication <= 1960;"
  },
  {
    id: "db11",
    category: "SQL Interrogation (Chap 4)",
    title: "Fonctions d'agrégation & GROUP BY",
    content: "Les fonctions d'agrégation calculent des statistiques : COUNT(*), COUNT(DISTINCT col), AVG() (moyenne), MIN(), MAX(), SUM() (somme). GROUP BY regroupe les lignes ayant la même valeur pour calculer l'agrégat sur chaque sous-groupe.",
    code: "-- Statistiques globales avec alias (AS)\nSELECT AVG(a_prix) AS Moyenne, \n       MIN(a_prix) AS Minimum, \n       MAX(a_prix) AS Maximum, \n       SUM(a_prix) AS Somme, \n       COUNT(*) AS Nombre\nFROM Article;\n\n-- Compter le nombre de noms différents (DISTINCT à l'intérieur du COUNT !)\nSELECT COUNT(DISTINCT a_nom) FROM Article;\n\n-- Regroupement avec GROUP BY et tri\nSELECT espece, SUM(nombre) AS Nb_Animaux, COUNT(*) AS Nb_Observations\nFROM Observation\nGROUP BY espece\nORDER BY Nb_Observations DESC;"
  },
  {
    id: "db12",
    category: "SQL Interrogation (Chap 4)",
    title: "Jointures internes (JOIN & Multi-tables)",
    content: "Une jointure interne (JOIN ... ON) combine les lignes de plusieurs tables lorsque la condition d'égalité entre la clé primaire et la clé étrangère est vraie. Bonne pratique : utiliser des alias de tables et préfixer chaque colonne.",
    code: "-- Simple jointure avec JOIN ... ON (recommandé)\nSELECT A.a_nom, Co.co_date\nFROM Article AS A\nJOIN Commande AS Co ON A.a_id = Co.a_id\nWHERE A.a_prix < 1000\nORDER BY A.a_prix DESC;\n\n-- Écriture équivalente avec produit cartésien :\nSELECT A.a_nom, Co.co_date\nFROM Article AS A, Commande AS Co\nWHERE A.a_id = Co.a_id;\n\n-- Double jointure (3 tables : Article <-> Commande <-> Client)\nSELECT A.a_nom AS NArticle, Cl.cl_nom AS NClient\nFROM Article AS A\nJOIN Commande AS Co ON A.a_id = Co.a_id\nJOIN Client AS Cl ON Cl.cl_id = Co.cl_id;"
  }
];

export { cQcmData };
export const qcmCData: QcmItem[] = cQcmData;

export { webQcmData };
export const qcmWebData: QcmItem[] = webQcmData;

export { qcmBddData };
export const bddQcmData: QcmItem[] = qcmBddData;

export const qcmJavaAdvancedData: QcmItem[] = [
  {
    id: 401,
    subject: "Java",
    question: "Quelle est la principale différence entre la Surcharge (Overloading) et la Redéfinition (Overriding) ?",
    options: [
      "Il n'y a aucune différence, ce sont deux termes pour la même chose",
      "La redéfinition utilise la même signature (nom, types des paramètres, retour) dans une classe fille, la surcharge utilise le même nom mais des paramètres différents dans une même classe",
      "La surcharge permet d'appeler des méthodes static, la redéfinition non",
      "La redéfinition est interdite en Java"
    ],
    answer: "La redéfinition utilise la même signature (nom, types des paramètres, retour) dans une classe fille, la surcharge utilise le même nom mais des paramètres différents dans une même classe",
    explanation: "Overriding réécrit le comportement hérité (souvent avec @Override). Overloading propose plusieurs versions d'une méthode avec des arguments différents."
  },
  {
    id: 402,
    subject: "Java",
    question: "En Java, l'héritage multiple de classes est-il autorisé ?",
    options: [
      "Oui, avec le mot-clé extends",
      "Oui, mais uniquement pour les classes abstraites",
      "Non, une classe ne peut avoir qu'une seule classe mère",
      "Non, l'héritage n'existe pas en Java"
    ],
    answer: "Non, une classe ne peut avoir qu'une seule classe mère",
    explanation: "Pour pallier cette limitation, Java autorise l'implémentation de PLUSIEURS interfaces (implements Interface1, Interface2)."
  },
  {
    id: 403,
    subject: "Java",
    question: "Qu'est-ce qu'une classe abstraite ?",
    options: [
      "Une classe qui ne peut pas être instanciée avec 'new'",
      "Une classe qui ne contient aucune méthode",
      "Une interface",
      "Une classe qui ne peut pas avoir d'attributs"
    ],
    answer: "Une classe qui ne peut pas être instanciée avec 'new'",
    explanation: "Une classe abstraite sert de modèle de base. Elle peut contenir des méthodes concrètes et des méthodes abstraites (sans corps) que les classes filles devront implémenter."
  },
  {
    id: 404,
    subject: "Java",
    question: "Dans une classe fille, à quoi sert le mot-clé 'super' appelé dans le constructeur ?",
    options: [
      "À définir une méthode abstraite",
      "À instancier la classe fille",
      "À appeler le constructeur de la classe mère (doit être la 1ère instruction)",
      "À empêcher l'héritage"
    ],
    answer: "À appeler le constructeur de la classe mère (doit être la 1ère instruction)",
    explanation: "Lorsqu'on instancie une classe fille, la classe mère doit d'abord être initialisée. 'super(args)' permet de passer les bons paramètres au constructeur parent."
  },
  {
    id: 405,
    subject: "Java",
    question: "Que se passe-t-il lors d'un UpCast (Polymorphisme) si l'on appelle une méthode redéfinie par l'enfant ?",
    options: [
      "C'est la méthode de la classe mère qui est exécutée",
      "Le compilateur plante",
      "C'est la méthode redéfinie par la classe de l'objet RÉEL (la classe fille) qui est exécutée à l'exécution",
      "La méthode est ignorée"
    ],
    answer: "C'est la méthode redéfinie par la classe de l'objet RÉEL (la classe fille) qui est exécutée à l'exécution",
    explanation: "C'est la base du polymorphisme. Si Point p = new PointColore(); p.afficher(); exécutera la méthode afficher() de PointColore, même si p est typé comme Point."
  },
  {
    id: 406,
    subject: "Java",
    question: "Avant de faire un DownCast explicite, quel opérateur doit-on utiliser pour éviter de faire crasher le programme ?",
    options: [
      "typeof",
      "instanceof",
      "is",
      "classof"
    ],
    answer: "instanceof",
    explanation: "Il faut vérifier le type réel de l'objet : if (objet instanceof Cercle) { Cercle c = (Cercle) objet; }"
  },
  {
    id: 407,
    subject: "Java",
    question: "Dans une Interface Java (avant Java 8), quelles sont les caractéristiques implicites des attributs qui y sont déclarés ?",
    options: [
      "Ils sont protected et mutables",
      "Ils sont private",
      "Ils sont implicitement public, static et final (ce sont des constantes de classe)",
      "Une interface ne peut pas contenir d'attributs"
    ],
    answer: "Ils sont implicitement public, static et final (ce sont des constantes de classe)",
    explanation: "Si l'on déclare 'int CAPACITE = 5000;' dans une interface, c'est automatiquement une constante publique partagée par toutes les implémentations."
  }
];

export const qcmPythonDevData: QcmItem[] = [
  {
    id: 501,
    subject: "Python",
    difficulty: "intermediaire",
    question: "Dans un projet géré avec Poetry, quel fichier remplace le traditionnel 'requirements.txt' pour stocker les métadonnées et déclarer les dépendances ?",
    options: ["package.json", "poetry.lock", "pyproject.toml", "setup.py"],
    answer: "pyproject.toml",
    explanation: "pyproject.toml est le standard moderne pour la configuration des projets Python. poetry.lock, quant à lui, garantit les versions exactes installées."
  },
  {
    id: 502,
    subject: "Python",
    difficulty: "intermediaire",
    question: "En Pytest, quel est le but du pattern AAA ?",
    options: [
      "Authentification, Autorisation, Accounting",
      "Arrange (Préparer), Act (Agir), Assert (Vérifier)",
      "API, Application, Automation",
      "All, Any, Assert"
    ],
    answer: "Arrange (Préparer), Act (Agir), Assert (Vérifier)",
    explanation: "Le pattern AAA structure un test unitaire en trois étapes : préparer les données, exécuter la fonction, puis vérifier que le résultat correspond aux attentes."
  },
  {
    id: 503,
    subject: "Python",
    difficulty: "intermediaire",
    question: "Quelle méthode du module 'requests' permet de déclencher une exception si le serveur renvoie un code d'erreur HTTP (ex: 404 ou 500) ?",
    options: ["response.catch_error()", "response.ok()", "response.raise_for_status()", "response.check()"],
    answer: "response.raise_for_status()",
    explanation: "raise_for_status() vérifie le code HTTP et déclenche une requests.exceptions.HTTPError si le code est supérieur ou égal à 400."
  },
  {
    id: 504,
    subject: "Python",
    difficulty: "intermediaire",
    question: "Qu'est-ce qu'un ORM (Object-Relational Mapping) en Python ?",
    options: [
      "Un outil de formatage du code",
      "Un gestionnaire de versions de Python",
      "Une bibliothèque qui mappe les classes et objets Python sur les tables et lignes d'une base de données relationnelle",
      "Un module pour créer des API REST"
    ],
    answer: "Une bibliothèque qui mappe les classes et objets Python sur les tables et lignes d'une base de données relationnelle",
    explanation: "Un ORM (comme SQLAlchemy ou Django ORM) ajoute une couche d'abstraction évitant d'écrire directement des requêtes SQL."
  },
  {
    id: 505,
    subject: "Python",
    difficulty: "intermediaire",
    question: "Quel outil vérifie le respect des conventions de style (PEP 8) comme l'indentation et les espaces dans Flake8 ?",
    options: ["pyflakes", "mccabe", "pycodestyle", "pytest"],
    answer: "pycodestyle",
    explanation: "Flake8 combine trois outils : pycodestyle pour le style (PEP 8), pyflakes pour les erreurs logiques, et mccabe pour la complexité cyclomatique."
  }
];

export const qcmData: QcmItem[] = [
  ...pythonQcmData.map(q => ({ ...q, subject: "Python" })),
  ...qcmPythonDevData,
  ...architectureQcmData.map(q => ({ ...q, subject: "Architecture" })),
  ...javaQcmData.map(q => ({ ...q, subject: "Java" })),
  ...qcmJavaAdvancedData,
  ...cQcmData,
  ...webQcmData,
  ...qcmBddData
];


