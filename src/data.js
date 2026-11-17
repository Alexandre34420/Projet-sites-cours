export const javaAdvancedData = [
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

export const qcmJavaAdvancedData = [
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

export {
  pythonData,
  architectureData,
  javaData,
  cData,
  cQcmData,
  qcmCData,
  webData,
  webQcmData,
  qcmWebData,
  bddData,
  qcmBddData,
  bddQcmData,
  qcmData
} from './data.ts';
