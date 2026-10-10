export interface CheatSheetItem {
  id: number;
  category: string;
  title: string;
  code: string;
  description?: string;
  tags?: string[];
}

export const CHEAT_SHEET_DATA: CheatSheetItem[] = [
  {
    "id": 1,
    "category": "Bases",
    "title": "Entrées / Sorties",
    "code": "print(a, b, sep=\" \", end=\"\\n\")\n\n# Saisie utilisateur\ns = input(\"Texte : \")\nx = int(input(\"Entier : \"))"
  },
  {
    "id": 2,
    "category": "Bases",
    "title": "Boucles & Conditions",
    "code": "if condition:\n    ...\nelif autre_condition:\n    ...\nelse:\n    ...\n\nwhile condition:\n    ...\n\nfor i in range(debut, fin, pas):\n    ...\n\nfor element in sequence:\n    ..."
  },
  {
    "id": 3,
    "category": "Bases",
    "title": "Types & Conversions",
    "code": "int(x)    # Conversion en entier\nfloat(x)  # Conversion en décimal\nstr(x)    # Conversion en chaîne\nbool(x)   # Conversion en booléen"
  },
  {
    "id": 4,
    "category": "Données",
    "title": "Tuples (Immuables)",
    "code": "t = (12, 18)\nx, y = t # Dépaquetage"
  },
  {
    "id": 5,
    "category": "Données",
    "title": "Listes (Mutables)",
    "code": "L = [1, 2, 3]\nL.append(4)      # Ajouter\ndel L[0]         # Supprimer par index\nL.remove(2)      # Supprimer par valeur\n\n# Slicing\nL[2:4]           # De l'index 2 à 3\nL[::-1]          # Inverser la liste\n\nlen(L)           # Taille de la liste"
  },
  {
    "id": 6,
    "category": "Données",
    "title": "Dictionnaires",
    "code": "d = {'a': 1, 'b': 2}\nd['a'] = 3\n\nfor k, v in d.items():\n    print(k, v)\n\nd.keys()   # Liste des clés\nd.values() # Liste des valeurs"
  },
  {
    "id": 7,
    "category": "Fonctions",
    "title": "Fonctions & Type Hints",
    "code": "def f(x: int) -> int:\n    return x + 1\n\n# Fonction anonyme (Lambda)\nf = lambda x: x * x"
  },
  {
    "id": 8,
    "category": "Fonctions",
    "title": "Map / Filter / Reduce",
    "code": "list(map(lambda x: x * x, L))\n\nlist(filter(lambda x: x >= 18, L))\n\nfrom functools import reduce\nreduce(lambda a, x: a + x, L, 0)\n\n# Tri avec clé\nsorted(liste, key=lambda x: x[1])"
  },
  {
    "id": 9,
    "category": "POO",
    "title": "Classes & Objets",
    "code": "class Personne:\n    # Constructeur\n    def __init__(self, nom, age):\n        self.nom = nom\n        self.age = age\n        \n    # Méthode d'instance\n    def bonjour(self):\n        print(\"Salut\", self.nom)\n\np = Personne(\"Bob\", 31)\np.bonjour()"
  },
  {
    "id": 10,
    "category": "POO",
    "title": "Exceptions",
    "code": "try:\n    ...\nexcept ValueError:\n    print(\"Erreur de valeur\")\nexcept:\n    print(\"Autre erreur\")\nelse:\n    print(\"Aucune erreur\")\nfinally:\n    print(\"Toujours exécuté\")\n\nraise ValueError(\"Message d'erreur\")"
  },
  {
    "id": 11,
    "category": "Architecture",
    "title": "Modules & Packages",
    "code": "import utils\nfrom utils import ma_fonction\n\n# Point d'entrée du programme\nif __name__ == '__main__':\n    print(\"Script principal\")"
  },
  {
    "id": 12,
    "category": "Fichiers",
    "title": "Module OS & Shutil",
    "code": "import os, shutil\n\nos.path.isfile(chemin)\nos.path.isdir(chemin)\nos.path.splitext(nom)[1] # Extension\n\nos.rename(src, dst)\nos.remove(fichier)\n\nshutil.copyfile(src, dst)"
  },
  {
    "id": 13,
    "category": "Fichiers",
    "title": "Lecture & Écriture",
    "code": "with open(\"file.txt\", \"r\") as f:\n    contenu = f.read()\n    lignes = f.readlines()\n\nwith open(\"file.txt\", \"w\") as f:\n    f.write(\"écrase et écrit\")\n\nwith open(\"file.txt\", \"a\") as f:\n    f.write(\"ajoute à la fin\")"
  },
  {
    "id": 14,
    "category": "Data Science",
    "title": "Numpy (Tableaux)",
    "code": "import numpy as np\n\nt = np.array([1, 2, 3])\nnp.arange(1, 6)\nnp.zeros(5)\n\nt.reshape(2, 3)\nt.shape\n\n# Masque booléen\nt[t % 2 == 0]"
  },
  {
    "id": 15,
    "category": "Data Science",
    "title": "Pandas (DataFrames)",
    "code": "import pandas as pd\n\ndf = pd.DataFrame({'X': [1, 2], 'Y': [3, 4]})\n\ndf[\"X\"]                 # Colonne\ndf.loc[2]               # Ligne (index 2)\ndf.loc[:, [\"X\", \"Y\"]]   # Sous-table\n\n# Filtrage conditionnel\ndf.loc[df[\"X\"] >= 20]"
  },
  {
    "id": 16,
    "category": "Data Science",
    "title": "Matplotlib (Graphiques)",
    "code": "import matplotlib.pyplot as plt\n\nplt.plot(x, y)           # Courbe\nplt.scatter(x, y)        # Nuage de points\nplt.bar(items, valeurs)  # Barres\nplt.pie(valeurs, labels=items)\n\nplt.xlabel(\"Axe X\")\nplt.title(\"Titre\")\nplt.legend()\nplt.show()"
  }
];
