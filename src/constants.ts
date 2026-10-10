export interface CategoryInfo {
  name: string;
  label: string;
  color: {
    bg: string;
    text: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    dot: string;
  };
}

export const CATEGORY_STYLES: Record<string, CategoryInfo['color']> = {
  Bases: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700 border-blue-200/70',
    dot: 'bg-blue-500',
  },
  Données: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700 border-emerald-200/70',
    dot: 'bg-emerald-500',
  },
  Fonctions: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700 border-purple-200/70',
    dot: 'bg-purple-500',
  },
  POO: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-200',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800 border-amber-200/70',
    dot: 'bg-amber-500',
  },
  Architecture: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-800',
    border: 'border-cyan-200',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-800 border-cyan-200/70',
    dot: 'bg-cyan-500',
  },
  Fichiers: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700 border-rose-200/70',
    dot: 'bg-rose-500',
  },
  'Data Science': {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700 border-indigo-200/70',
    dot: 'bg-indigo-500',
  },
};

export const DEFAULT_CATEGORY_STYLE = {
  bg: 'bg-gray-100',
  text: 'text-gray-700',
  border: 'border-gray-200',
  badgeBg: 'bg-gray-100',
  badgeText: 'text-gray-700 border-gray-200',
  dot: 'bg-gray-400',
};

// Explications pédagogiques et bonnes pratiques pour enrichir la fiche
export const CARD_EXPLANATIONS: Record<number, { explanation: string; tip: string }> = {
  1: {
    explanation: "input() retourne toujours une chaîne de caractères (str). Il faut explicitement convertir avec int() ou float() pour les calculs numériques.",
    tip: "Astuce : print() accepte sep=\"\" et end=\"\" pour contrôler les séparateurs et le saut de ligne."
  },
  2: {
    explanation: "L'indentation (généralement 4 espaces) définit les blocs de code en Python. range(debut, fin, pas) exclut la valeur finale.",
    tip: "Astuce : range(1, 10, 2) génère [1, 3, 5, 7, 9]."
  },
  3: {
    explanation: "Python est à typage dynamique fort : les types ne sont pas implicitement convertis lors d'opérations incompatibles.",
    tip: "Astuce : bool('') ou bool(0) valent False (valeurs Falsy)."
  },
  4: {
    explanation: "Les tuples sont immuables (protégés contre les modifications accidentelles) et peuvent servir de clés de dictionnaires contrairement aux listes.",
    tip: "Astuce : Pour un tuple à un seul élément, ajoutez une virgule : t = (42,)."
  },
  5: {
    explanation: "Le découpage (slicing) [debut:fin:pas] permet d'extraire des sous-listes sans modifier la liste originale. L[::-1] renvoie une copie inversée.",
    tip: "Astuce : L.append(x) modifie la liste en place et renvoie None."
  },
  6: {
    explanation: "Les dictionnaires associent des clés uniques à des valeurs. La recherche par clé est en temps constant O(1).",
    tip: "Astuce : Utilisez d.get('cle', valeur_par_defaut) pour éviter un KeyError."
  },
  7: {
    explanation: "Les annotations de type (type hints) aident les IDEs et mypy sans affecter l'exécution runtime. Les lambdas sont des fonctions anonymes d'une seule expression.",
    tip: "Astuce : Privilégiez 'def' plutôt qu'une lambda assignée à une variable pour la clarté."
  },
  8: {
    explanation: "Fonctions d'ordre supérieur du paradigme fonctionnel. map et filter renvoient des itérateurs, nécessitant list() pour être matérialisés.",
    tip: "Astuce : Les list comprehensions [x*x for x in L] sont souvent préférées en Python moderne."
  },
  9: {
    explanation: "self représente l'instance courante de la classe. __init__ est la méthode spéciale appelée lors de l'instanciation.",
    tip: "Astuce : Toutes les méthodes d'instance doivent déclarer 'self' comme premier argument."
  },
  10: {
    explanation: "try / except permet de gérer les erreurs proprement. Le bloc 'finally' est toujours exécuté, même en cas d'exception non interceptée.",
    tip: "Astuce : Évitez le 'except:' nu, spécifiez toujours le type d'exception attendu."
  },
  11: {
    explanation: "__name__ == '__main__' permet d'exécuter du code uniquement lorsque le script est lancé directement, et non lorsqu'il est importé.",
    tip: "Astuce : Indispensable pour créer des scripts réutilisables sous forme de modules."
  },
  12: {
    explanation: "Le module os interagit avec le système d'exploitation et les chemins de fichiers. Shutil gère les opérations de haut niveau comme la copie de fichiers.",
    tip: "Astuce : En Python moderne (>=3.4), le module pathlib.Path est souvent une excellente alternative."
  },
  13: {
    explanation: "Le gestionnaire de contexte 'with' garantit la fermeture automatique du fichier, même si une exception survient pendant la lecture/écriture.",
    tip: "Astuce : Précisez encoding=\"utf-8\" lors de l'ouverture pour éviter les problèmes d'encodage sous Windows."
  },
  14: {
    explanation: "NumPy vectorise les calculs mathématiques pour des performances C ultra-rapides sur des tableaux à N dimensions.",
    tip: "Astuce : Les opérations arithmétiques (+, *, etc.) s'appliquent élément par élément."
  },
  15: {
    explanation: "Pandas est l'outil standard pour la manipulation tabulaire en Data Science. loc[] filtre par label et index, iloc[] par position numérique.",
    tip: "Astuce : Utilisez df.head() et df.info() pour inspecter rapidement un jeu de données."
  },
  16: {
    explanation: "Matplotlib est la bibliothèque fondamentale de visualisation en Python. Chaque fonction configure la figure courante avant plt.show().",
    tip: "Astuce : Enregistrez votre graphique avec plt.savefig('graph.png', dpi=300)."
  }
};
