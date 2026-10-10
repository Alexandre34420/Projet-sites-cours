import { pythonQcmData } from './data/qcm_python';
import { architectureQcmData } from './data/qcm_architecture';
import { javaQcmData } from './data/qcm_java';

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
  ...pythonQcmData,
  ...architectureQcmData,
  ...javaQcmData
];
