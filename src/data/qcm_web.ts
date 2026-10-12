import type { QcmItem } from '../data';

export const webQcmData: QcmItem[] = [
  // ---------------- DÉVELOPPEMENT WEB DÉBUTANT (20) ----------------
  {
    id: 501,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "À quoi sert la déclaration <!DOCTYPE html> au tout début d'un fichier web ?",
    options: ["À charger la bibliothèque CSS", "À indiquer au navigateur d'interpréter la page selon la norme HTML5", "À déclarer une fonction JavaScript", "À configurer la base de données"],
    answer: "À indiquer au navigateur d'interpréter la page selon la norme HTML5",
    explanation: "Le DOCTYPE informe le navigateur du standard utilisé (HTML5) afin d'éviter le mode rétrocompatible (quirks mode)."
  },
  {
    id: 502,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelle balise HTML contient les métadonnées de la page (titre, encodage, liens de styles) sans afficher de contenu direct ?",
    options: ["<header>", "<head>", "<meta>", "<title>"],
    answer: "<head>",
    explanation: "La balise <head> regroupe les informations techniques pour le navigateur (meta, title, link, script), tandis que <body> contient le contenu visible."
  },
  {
    id: 503,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quel attribut est indispensable sur une balise <img src='...'> pour décrire l'image en cas d'erreur ou pour les lecteurs d'écran ?",
    options: ["title", "description", "alt", "name"],
    answer: "alt",
    explanation: "L'attribut 'alt' (texte alternatif) est crucial pour l'accessibilité des personnes malvoyantes et le référencement naturel (SEO)."
  },
  {
    id: 504,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "En HTML5, quelle balise sémantique est spécifiquement dédiée au pied de page d'un document ou d'une section ?",
    options: ["<bottom>", "<footer>", "<aside>", "<end>"],
    answer: "<footer>",
    explanation: "<footer> représente le pied de page, <aside> un contenu secondaire, et <header> l'en-tête."
  },
  {
    id: 505,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelle est la différence entre une liste <ul> et une liste <ol> en HTML ?",
    options: ["<ul> est ordonnée (numérotée), <ol> est non ordonnée (à puces)", "<ul> est non ordonnée (à puces), <ol> est ordonnée (numérotée)", "<ul> est pour les tableaux, <ol> pour le texte", "Il n'y a aucune différence d'affichage"],
    answer: "<ul> est non ordonnée (à puces), <ol> est ordonnée (numérotée)",
    explanation: "ul signifie 'unordered list' (puces carrées/rondes) et ol signifie 'ordered list' (1, 2, 3...)."
  },
  {
    id: 506,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Comment relie-t-on correctement une feuille de style CSS externe 'style.css' à une page HTML ?",
    options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script href='style.css'>", "<import file='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>",
    explanation: "La balise <link> placée dans le <head> avec rel='stylesheet' et l'attribut href est la méthode standard pour lier du CSS externe."
  },
  {
    id: 507,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quel préfixe utilise-t-on en CSS pour cibler une classe (ex: class='carte') ?",
    options: ["#", ".", "$", "@"],
    answer: ".",
    explanation: "Le point (.) cible une classe (.carte), tandis que le dièse (#) cible un identifiant unique (#carte)."
  },
  {
    id: 508,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quel préfixe utilise-t-on en CSS pour cibler un identifiant unique (ex: id='menu-principal') ?",
    options: [".", "#", "&", "!"],
    answer: "#",
    explanation: "Le symbole '#' est le sélecteur d'ID en CSS. Un identifiant ne doit apparaître qu'une seule fois par page HTML."
  },
  {
    id: 509,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Dans le Box Model (modèle de boîte) CSS, quel espace sépare le contenu de la bordure intérieure de l'élément ?",
    options: ["margin", "padding", "border", "gap"],
    answer: "padding",
    explanation: "Le padding est la marge intérieure (entre contenu et bordure), alors que le margin est la marge extérieure (autour de la bordure)."
  },
  {
    id: 510,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "En JavaScript moderne (ES6+), quel mot-clé permet de déclarer une variable réassignable à portée de bloc ?",
    options: ["var", "let", "const", "def"],
    answer: "let",
    explanation: "'let' a une portée de bloc ({...}) et peut être réassignée, contrairement à 'const' (invariable) et 'var' (portée fonctionnelle obsolète)."
  },
  {
    id: 511,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quel mot-clé JavaScript empêche la réassignation de la valeur d'une variable ?",
    options: ["let", "static", "const", "final"],
    answer: "const",
    explanation: "'const' déclare une constante dont la référence ne peut plus être réaffectée après initialisation."
  },
  {
    id: 512,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelle méthode JavaScript permet d'afficher des données dans la console des outils de développement ?",
    options: ["print()", "console.log()", "document.write()", "echo()"],
    answer: "console.log()",
    explanation: "console.log() affiche des informations dans la console du navigateur sans modifier l'affichage de la page web."
  },
  {
    id: 513,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelle est l'extension obligatoire d'un fichier contenant du code PHP interprété par le serveur ?",
    options: [".html", ".js", ".php", ".py"],
    answer: ".php",
    explanation: "Le serveur web (Apache, Nginx) utilise l'extension .php pour router le fichier vers l'interpréteur PHP avant d'envoyer la réponse HTML."
  },
  {
    id: 514,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Par quel symbole débutent obligatoirement toutes les variables en langage PHP ?",
    options: ["@", "#", "$", "&"],
    answer: "$",
    explanation: "Toutes les variables en PHP commencent impérativement par le symbole dollar (ex: $age = 20;)."
  },
  {
    id: 515,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quel opérateur permet de concaténer deux chaînes de caractères en PHP ?",
    options: ["+", ".", "&", "~"],
    answer: ".",
    explanation: "En PHP, le point (.) est l'opérateur de concaténation de chaînes (ex: 'Bonjour ' . $nom). Le signe '+' est strictement réservé à l'addition numérique."
  },
  {
    id: 516,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelle instruction PHP standard est la plus couramment utilisée pour envoyer du texte vers le navigateur ?",
    options: ["printf", "echo", "console.log", "write"],
    answer: "echo",
    explanation: "echo est une structure de langage en PHP permettant d'afficher une ou plusieurs chaînes dans la page web générée."
  },
  {
    id: 517,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Dans une balise <form>, quel attribut spécifie l'URL ou le fichier vers lequel les données doivent être envoyées ?",
    options: ["href", "src", "action", "target"],
    answer: "action",
    explanation: "L'attribut action='cible.php' indique la page de traitement du formulaire lors du clic sur le bouton de soumission."
  },
  {
    id: 518,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Quelles sont les deux méthodes HTTP principales utilisées pour envoyer les données d'un formulaire HTML ?",
    options: ["CONNECT et TRACE", "GET et POST", "PUSH et PULL", "INPUT et OUTPUT"],
    answer: "GET et POST",
    explanation: "GET transmet les données dans l'URL (visible), tandis que POST transmet les données dans le corps de la requête HTTP (invisible dans l'URL)."
  },
  {
    id: 519,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Que vérifie la fonction PHP isset($variable) ?",
    options: ["Si la variable vaut 0", "Si la variable est définie et différente de NULL", "Si la variable est une chaîne", "Si la variable est vide"],
    answer: "Si la variable est définie et différente de NULL",
    explanation: "isset() renvoie true si la variable a été déclarée et ne possède pas la valeur NULL. Très utile pour valider $_POST."
  },
  {
    id: 520,
    subject: "Développement Web",
    difficulty: "debutant",
    question: "Comment écrit-on un commentaire sur une seule ligne en JavaScript ?",
    options: ["# Commentaire", "// Commentaire", "<!-- Commentaire -->", "/* Commentaire"],
    answer: "// Commentaire",
    explanation: "En JavaScript, // introduit un commentaire sur une seule ligne. /* ... */ est utilisé pour les blocs multi-lignes."
  },

  // ---------------- DÉVELOPPEMENT WEB INTERMÉDIAIRE (20) ----------------
  {
    id: 521,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Dans une feuille de style CSS, que sélectionne précisément la règle 'ul > li' ?",
    options: ["Tous les éléments <li> descendants d'un <ul>, peu importe la profondeur", "Uniquement les éléments <li> qui sont des enfants directs d'un <ul>", "Le premier <li> d'une liste", "Tous les <ul> qui contiennent un <li>"],
    answer: "Uniquement les éléments <li> qui sont des enfants directs d'un <ul>",
    explanation: "Le combinateur enfant (>) ne cible que le premier niveau d'enfants immédiats, contrairement à l'espace qui est le sélecteur descendant global."
  },
  {
    id: 522,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle est la différence entre les combinateurs CSS 'h1 + p' et 'h1 ~ p' ?",
    options: ["h1 + p cible le paragraphe frère immédiatement adjacent, h1 ~ p cible tous les paragraphes frères suivants", "h1 + p est une addition, h1 ~ p est une soustraction", "h1 + p cible les enfants, h1 ~ p cible les parents", "Aucune différence"],
    answer: "h1 + p cible le paragraphe frère immédiatement adjacent, h1 ~ p cible tous les paragraphes frères suivants",
    explanation: "'+' est le frère direct adjacent (le tout premier qui suit immédiatement). '~' est le frère général (tous les suivants sous le même parent)."
  },
  {
    id: 523,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quel est le rôle indispensable de la balise <meta name='viewport' content='width=device-width, initial-scale=1.0'> ?",
    options: ["Activer le mode sombre", "Adapter la largeur d'affichage et l'échelle de zoom aux écrans des appareils mobiles (Responsive Design)", "Télécharger les polices Google Fonts", "Empêcher le clic droit sur la page"],
    answer: "Adapter la largeur d'affichage et l'échelle de zoom aux écrans des appareils mobiles (Responsive Design)",
    explanation: "Sans cette balise viewport, les téléphones dézooment la page en simulant un écran de bureau d'environ 980px de large."
  },
  {
    id: 524,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Dans un conteneur Flexbox (display: flex), quelle propriété contrôle l'alignement des éléments sur l'axe principal (main axis) ?",
    options: ["align-items", "justify-content", "flex-wrap", "align-content"],
    answer: "justify-content",
    explanation: "justify-content aligne les éléments sur l'axe principal (ex: flex-start, center, space-between). align-items gère l'axe secondaire."
  },
  {
    id: 525,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Dans un conteneur Flexbox, quelle propriété contrôle l'alignement des éléments sur l'axe transversal (cross axis) ?",
    options: ["justify-content", "align-items", "flex-direction", "order"],
    answer: "align-items",
    explanation: "align-items gère l'alignement perpendiculaire à l'axe principal (ex: center, flex-start, stretch)."
  },
  {
    id: 526,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle méthode du DOM permet de cibler le tout premier élément correspondant à un sélecteur CSS quelconque ?",
    options: ["document.getElementById()", "document.querySelector()", "document.getElementsByClassName()", "document.search()"],
    answer: "document.querySelector()",
    explanation: "document.querySelector('.classe' ou '#id' ou 'div > p') accepte n'importe quelle syntaxe de sélecteur CSS et renvoie le premier élément trouvé."
  },
  {
    id: 527,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Pourquoi est-il fortement recommandé d'utiliser element.textContent plutôt que element.innerHTML pour insérer du texte dynamique saisi par un utilisateur ?",
    options: ["textContent est 100 fois plus rapide", "Pour prévenir les attaques par injection de code malveillant de type XSS (Cross-Site Scripting)", "innerHTML est déprécié en HTML5", "textContent gère automatiquement le CSS"],
    answer: "Pour prévenir les attaques par injection de code malveillant de type XSS (Cross-Site Scripting)",
    explanation: "innerHTML interprète les balises HTML et peut exécuter du code <script> injecté par un pirate. textContent traite tout comme du texte brut."
  },
  {
    id: 528,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "En JavaScript, à quoi sert l'appel event.preventDefault() dans un gestionnaire d'événement ?",
    options: ["À stopper une boucle infinie", "À bloquer l'action par défaut du navigateur associée à cet événement (ex: soumission avec rechargement de page ou suivi de lien)", "À supprimer l'élément du DOM", "À annuler les styles CSS"],
    answer: "À bloquer l'action par défaut du navigateur associée à cet événement (ex: soumission avec rechargement de page ou suivi de lien)",
    explanation: "C'est indispensable pour intercepter la soumission d'un formulaire et envoyer les données via une requête asynchrone (AJAX/Fetch)."
  },
  {
    id: 529,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle syntaxe JavaScript ES6 permet d'interpoler des expressions au sein d'une chaîne de caractères (Template Literals) ?",
    options: ["\"Texte \" + variable", "'Texte %s' % variable", "`Texte ${variable}`", "f'Texte {variable}'"],
    answer: "`Texte ${variable}`",
    explanation: "Les gabarits de chaînes (Template Strings) utilisent les backticks (`) et la notation ${expression} pour injecter des valeurs."
  },
  {
    id: 530,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle méthode JavaScript transforme un objet JavaScript en chaîne de caractères au format JSON ?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toText()", "Object.serialize()"],
    answer: "JSON.stringify()",
    explanation: "JSON.stringify(objet) sérialise l'objet en texte JSON pour son envoi via réseau ou son stockage dans localStorage."
  },
  {
    id: 531,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle méthode JavaScript convertit une chaîne de caractères JSON en objet JavaScript manipulable ?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "Object.fromJSON()"],
    answer: "JSON.parse()",
    explanation: "JSON.parse(chaineJSON) désérialise la chaîne textuelle et reconstruit l'objet JavaScript correspondant."
  },
  {
    id: 532,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Que fait l'instruction JavaScript setTimeout(maFonction, 3000) ?",
    options: ["Elle répète maFonction toutes les 3 secondes en continu", "Elle exécute maFonction une seule fois après un délai de 3000 millisecondes (3 secondes)", "Elle met le thread du navigateur en pause synchrone pendant 3 secondes", "Elle annule l'événement après 3 secondes"],
    answer: "Elle exécute maFonction une seule fois après un délai de 3000 millisecondes (3 secondes)",
    explanation: "setTimeout planifie une exécution unique asynchrone. Pour une répétition périodique, on utilise setInterval()."
  },
  {
    id: 533,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Que renvoie l'API Fetch moderne de JavaScript lors d'un appel fetch('https://api.com/data') ?",
    options: ["Un objet XMLHttpRequest", "Une Promesse (Promise) résolue avec l'objet Response", "Le fichier JSON directement", "Une exception synchrone"],
    answer: "Une Promesse (Promise) résolue avec l'objet Response",
    explanation: "fetch() est entièrement asynchrone et renvoie une Promise que l'on traite avec .then() ou 'await'."
  },
  {
    id: 534,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Dans quelle superglobale PHP retrouve-t-on les paramètres passés dans la Query String de l'URL (ex: page.php?page=2) ?",
    options: ["$_POST", "$_GET", "$_REQUEST_URL", "$_SERVER['QUERY']"],
    answer: "$_GET",
    explanation: "$_GET est un tableau associatif prérempli par PHP avec toutes les paires clé/valeur passées dans l'URL après le point d'interrogation."
  },
  {
    id: 535,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle superglobale PHP recueille les champs d'un formulaire envoyé avec method='post' ?",
    options: ["$_GET", "$_POST", "$_BODY", "$_FORM"],
    answer: "$_POST",
    explanation: "$_POST stocke les données envoyées dans le corps de la requête HTTP, idéal pour les mots de passe et formulaires longs."
  },
  {
    id: 536,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle est la différence fondamentale entre les instructions 'include' et 'require' en PHP ?",
    options: ["require est pour les fichiers CSS, include pour le code PHP", "Si le fichier ciblé est introuvable, require déclenche une erreur fatale et stoppe le script, alors qu'include émet un simple avertissement", "include est plus sécurisé", "Il n'y a aucune différence technique"],
    answer: "Si le fichier ciblé est introuvable, require déclenche une erreur fatale et stoppe le script, alors qu'include émet un simple avertissement",
    explanation: "On utilise 'require' pour les fichiers indispensables (connexion BDD, configuration) et 'include' pour les parties d'affichage secondaires (footer)."
  },
  {
    id: 537,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle est la règle d'or impérative concernant l'appel à la fonction session_start() en PHP ?",
    options: ["Elle doit être appelée obligatoirement tout en haut du script, avant tout envoi de contenu ou code HTML", "Elle doit être appelée obligatoirement juste avant la balise </body>", "Elle doit être appelée dans une boucle while", "Elle nécessite l'installation préalable de MySQL"],
    answer: "Elle doit être appelée obligatoirement tout en haut du script, avant tout envoi de contenu ou code HTML",
    explanation: "session_start() transmet les en-têtes HTTP (cookies de session). Tout espace, ligne vide ou balise HTML envoyé avant provoquera l'erreur 'Headers already sent'."
  },
  {
    id: 538,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle est la principale différence entre le stockage via Sessions et via Cookies en PHP ?",
    options: ["Les sessions sont stockées sur la machine client, les cookies sur le serveur", "Les sessions sont enregistrées côté Serveur et s'effacent à la fermeture du navigateur, tandis que les cookies sont stockés côté Client avec une date d'expiration", "Les cookies sont plus volumineux que les sessions", "Les cookies nécessitent une base de données MySQL"],
    answer: "Les sessions sont enregistrées côté Serveur et s'effacent à la fermeture du navigateur, tandis que les cookies sont stockés côté Client avec une date d'expiration",
    explanation: "Les sessions sont confidentielles sur le serveur (mémoire/fichiers temporaires). Les cookies sont des fichiers texte sur le navigateur de l'internaute."
  },
  {
    id: 539,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Comment supprime-t-on un cookie existant 'theme' en PHP ?",
    options: ["delete_cookie('theme');", "unset($_COOKIE['theme']); uniquement", "En appelant setcookie('theme', '', time() - 3600); pour lui attribuer une date d'expiration passée", "destroy_cookie('theme');"],
    answer: "En appelant setcookie('theme', '', time() - 3600); pour lui attribuer une date d'expiration passée",
    explanation: "Pour forcer le navigateur à effacer un cookie, on le réécrit avec une valeur vide et un timestamp dans le passé."
  },
  {
    id: 540,
    subject: "Développement Web",
    difficulty: "intermediaire",
    question: "Quelle instruction PHP permet de réinitialiser complètement les variables de la session en cours ?",
    options: ["session_delete();", "$_SESSION = array();", "unset($session);", "session_kill();"],
    answer: "$_SESSION = array();",
    explanation: "Affecter un tableau vide à $_SESSION vide toutes les données en mémoire, souvent complété par session_destroy() pour purger le fichier côté serveur."
  },

  // ---------------- DÉVELOPPEMENT WEB EXPERT (20) ----------------
  {
    id: 541,
    subject: "Développement Web",
    difficulty: "expert",
    question: "En CSS, quel sélecteur possède la spécificité (priorité de cascade) la plus élevée entre les suivants ?",
    options: ["#header-nav", "header.nav-bar .menu-item", "div > ul > li > a", "header.main-header"],
    answer: "#header-nav",
    explanation: "La spécificité d'un ID (1,0,0) est toujours strictement supérieure à n'importe quel cumul de classes (0,1,0) ou de balises (0,0,1)."
  },
  {
    id: 542,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle est la différence entre les unités relatives 'rem' et 'em' en typographie CSS ?",
    options: ["'rem' est relatif à la taille de police de la racine (html), alors qu''em' est relatif à la taille de police de l'élément parent", "'em' est une unité absolue en millimètres", "'rem' ne fonctionne que dans Flexbox", "Aucune différence, ce sont des synonymes"],
    answer: "'rem' est relatif à la taille de police de la racine (html), alors qu''em' est relatif à la taille de police de l'élément parent",
    explanation: "rem (root em) évite les effets de cascade incontrôlés (em imbriqués qui grossissent ou rétrécissent exponentiellement)."
  },
  {
    id: 543,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Dans un conteneur Flexbox, quelle valeur de flex-direction inverse le sens de lecture horizontal des éléments ?",
    options: ["column-reverse", "row-reverse", "reverse-horizontal", "direction: rtl"],
    answer: "row-reverse",
    explanation: "flex-direction: row-reverse aligne les enfants de droite à gauche tout en conservant l'axe principal horizontal."
  },
  {
    id: 544,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Qu'est-ce que le phénomène de 'Event Bubbling' (propagation par bullage) dans le DOM JavaScript ?",
    options: ["L'événement est dupliqué en mémoire infiniment", "L'événement déclenché sur un élément enfant remonte successivement à travers tous ses éléments parents jusqu'à window", "L'événement s'exécute uniquement sur le body", "L'événement attend 1 seconde avant de se lancer"],
    answer: "L'événement déclenché sur un élément enfant remonte successivement à travers tous ses éléments parents jusqu'à window",
    explanation: "Le bullage permet la délégation d'événements : écouter sur un conteneur parent pour gérer les clics de tous ses boutons enfants."
  },
  {
    id: 545,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle méthode de l'objet Event permet d'arrêter immédiatement la propagation d'un événement vers les nœuds parents ?",
    options: ["event.preventDefault()", "event.stopPropagation()", "event.stop()", "event.cancelBubble = false"],
    answer: "event.stopPropagation()",
    explanation: "event.stopPropagation() interrompt le bullage vers les ancêtres, sans empêcher le comportement natif (qui lui est géré par preventDefault)."
  },
  {
    id: 546,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle est la différence fondamentale entre l'opérateur d'égalité '==' et l'opérateur d'égalité stricte '===' en JavaScript ?",
    options: ["'===' compare à la fois la valeur et le type sans conversion implicite (coercition), alors que '==' convertit les types avant de comparer", "'==' est réservé aux chaînes de caractères", "'===' est plus lent", "'==' compare les adresses mémoire"],
    answer: "'===' compare à la fois la valeur et le type sans conversion implicite (coercition), alors que '==' convertit les types avant de comparer",
    explanation: "Par exemple : 0 == false est vrai (grâce à la conversion de type), mais 0 === false est faux (number !== boolean)."
  },
  {
    id: 547,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Qu'appelle-t-on une 'Closure' (fermeture) en langage JavaScript ?",
    options: ["Une balise fermante dans le DOM", "Une fonction qui conserve l'accès aux variables de son environnement lexical parent, même après que la fonction parente s'est terminée", "La fin d'une connexion WebSocket", "Un bloc de code qui déclenche une erreur"],
    answer: "Une fonction qui conserve l'accès aux variables de son environnement lexical parent, même après que la fonction parente s'est terminée",
    explanation: "Les closures permettent d'émuler des variables privées et de créer des fonctions avec état persistant en programmation fonctionnelle."
  },
  {
    id: 548,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Comment capture-t-on proprement les rejets d'erreurs d'une fonction asynchrone utilisant la syntaxe 'async / await' ?",
    options: ["Avec un écouteur addEventListener('error')", "En enveloppant l'appel 'await' dans un bloc try { ... } catch (erreur) { ... }", "Avec la méthode .catch() uniquement", "Les erreurs sont ignorées automatiquement"],
    answer: "En enveloppant l'appel 'await' dans un bloc try { ... } catch (erreur) { ... }",
    explanation: "async/await permet d'utiliser la structure classique et lisible try / catch pour intercepter les exceptions des Promesses rejetées."
  },
  {
    id: 549,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Pourquoi l'extension PDO (PHP Data Objects) est-elle recommandée pour dialoguer avec une base de données relationnelle ?",
    options: ["Parce qu'elle offre une couche d'abstraction multi-SGBD et gère nativement les requêtes préparées sécurisées", "Parce qu'elle remplace le serveur MySQL", "Parce qu'elle ne nécessite pas de mot de passe", "Parce qu'elle convertit le code PHP en JavaScript"],
    answer: "Parce qu'elle offre une couche d'abstraction multi-SGBD et gère nativement les requêtes préparées sécurisées",
    explanation: "PDO permet de changer de base de données (MySQL, PostgreSQL, SQLite) sans réécrire l'accès aux données, et élimine les risques d'injection SQL."
  },
  {
    id: 550,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Comment neutralise-t-on totalement les failles d'injections SQL lors d'une requête dynamique avec PDO ?",
    options: ["En concaténant les variables avec des guillemets doubles", "En utilisant des requêtes préparées avec prepare() et en liant les paramètres via execute()", "En cryptant le mot de passe de la BDD", "En utilisant la méthode query()"],
    answer: "En utilisant des requêtes préparées avec prepare() et en liant les paramètres via execute()",
    explanation: "Avec prepare('SELECT * FROM Users WHERE email = :e'), la commande SQL et les paramètres voyagent séparément, rendant l'injection impossible."
  },
  {
    id: 551,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Que retourne la méthode $stmt->fetchAll(PDO::FETCH_ASSOC) après l'exécution d'une requête SQL préparée ?",
    options: ["Un booléen true/false", "Un tableau associatif indicé uniquement par les noms des colonnes de la table", "Un tableau indicé par des chiffres uniquement", "Un objet JSON brut"],
    answer: "Un tableau associatif indicé uniquement par les noms des colonnes de la table",
    explanation: "PDO::FETCH_ASSOC garantit que chaque ligne est retournée sous forme de tableau clé/valeur associatif (ex: $ligne['pseudo']), sans doublons numériques."
  },
  {
    id: 552,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle instruction permet de forcer PDO à lever des exceptions (PDOException) dès qu'une erreur de requête survient ?",
    options: ["$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);", "$conn->enableErrors();", "$conn->throwExceptions = true;", "$conn->errorMode('strict');"],
    answer: "$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);",
    explanation: "Cela permet d'encapsuler toutes les opérations SQL dans un bloc try { ... } catch (PDOException $e) { ... } pour un traitement d'erreur robuste."
  },
  {
    id: 553,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Pourquoi est-il crucial de stocker l'état de connexion d'un utilisateur dans $_SESSION plutôt que dans $_COOKIE ?",
    options: ["Parce que les cookies sont limités à 10 caractères", "Parce que les cookies sont lisibles et modifiables par l'utilisateur dans son navigateur, ce qui permettrait d'usurper n'importe quelle identité", "Parce que $_SESSION est une fonction native de MySQL", "Parce que les sessions fonctionnent sans JavaScript"],
    answer: "Parce que les cookies sont lisibles et modifiables par l'utilisateur dans son navigateur, ce qui permettrait d'usurper n'importe quelle identité",
    explanation: "Un utilisateur peut éditer la valeur de ses cookies locaux (ex: id=admin). Les données de session sont conservées sur le serveur et inaccessibles côté client."
  },
  {
    id: 554,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quel est le rôle du cookie technique automatique 'PHPSESSID' échangé entre le navigateur et le serveur PHP ?",
    options: ["Stocker le mot de passe chiffré de l'utilisateur", "Transmettre uniquement un identifiant aléatoire unique permettant au serveur de retrouver les variables associées dans $_SESSION", "Mémoriser l'adresse IP du client", "Accélérer le chargement du cache CSS"],
    answer: "Transmettre uniquement un identifiant aléatoire unique permettant au serveur de retrouver les variables associées dans $_SESSION",
    explanation: "Le client n'a que la clé (l'ID de session). Le serveur utilise cette clé pour charger le fichier temporaire contenant les données réelles de $_SESSION."
  },
  {
    id: 555,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle fonction PHP standard doit-on appliquer sur des données textuelles avant de les afficher dans du HTML pour neutraliser les failles XSS ?",
    options: ["md5()", "htmlspecialchars()", "strip_tags() uniquement", "urlencode()"],
    answer: "htmlspecialchars()",
    explanation: "htmlspecialchars($str, ENT_QUOTES, 'UTF-8') convertit les caractères spéciaux (<, >, \", ', &) en entités HTML inoffensives (&lt;, &gt;, etc.)."
  },
  {
    id: 556,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quel avantage procure l'instruction 'require_once' par rapport à 'require' en PHP ?",
    options: ["Elle s'exécute plus rapidement", "Elle empêche d'inclure le même fichier plusieurs fois, évitant ainsi les erreurs de redéfinition fatales de fonctions ou de classes", "Elle compresse le fichier inclus", "Elle permet de charger des fichiers distants en HTTPS"],
    answer: "Elle empêche d'inclure le même fichier plusieurs fois, évitant ainsi les erreurs de redéfinition fatales de fonctions ou de classes",
    explanation: "require_once vérifie si le script a déjà été importé au cours du cycle de vie de la requête courante et l'ignore s'il est déjà présent."
  },
  {
    id: 557,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Qu'est-ce que le mécanisme CORS (Cross-Origin Resource Sharing) implémenté par les navigateurs web ?",
    options: ["Un outil de compression d'images", "Une politique de sécurité qui restreint par défaut les requêtes HTTP AJAX/Fetch effectuées vers un domaine différent de celui de la page courante", "Un protocole de routage DNS", "Un système de mise en cache CSS"],
    answer: "Une politique de sécurité qui restreint par défaut les requêtes HTTP AJAX/Fetch effectuées vers un domaine différent de celui de la page courante",
    explanation: "CORS empêche un site malveillant d'interroger en arrière-plan une API privée à l'insu de l'utilisateur sans en-têtes d'autorisation explicites (Access-Control-Allow-Origin)."
  },
  {
    id: 558,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quel attribut de la balise <script src='app.js'> garantit que le script se charge en arrière-plan et ne s'exécute qu'une fois le parsing du DOM terminé, tout en respectant l'ordre des scripts ?",
    options: ["async", "defer", "lazy", "preload"],
    answer: "defer",
    explanation: "defer télécharge le script de manière asynchrone sans bloquer l'analyse HTML, et ne l'exécute qu'après la construction complète de l'arbre DOM (avant DOMContentLoaded)."
  },
  {
    id: 559,
    subject: "Développement Web",
    difficulty: "expert",
    question: "En PHP (7+), que réalise l'opérateur de coalescence nulle '??' dans l'expression suivante : $pseudo = $_POST['pseudo'] ?? 'Anonyme'; ?",
    options: ["Il effectue une comparaison stricte de types", "Il affecte $_POST['pseudo'] si la variable existe et n'est pas nulle, sinon il affecte 'Anonyme'", "Il convertit la chaîne en minuscules", "Il concatène les deux valeurs"],
    answer: "Il affecte $_POST['pseudo'] si la variable existe et n'est pas nulle, sinon il affecte 'Anonyme'",
    explanation: "L'opérateur ?? est un raccourci élégant et moderne évitant l'écriture verbeuse : isset($_POST['pseudo']) ? $_POST['pseudo'] : 'Anonyme'."
  },
  {
    id: 560,
    subject: "Développement Web",
    difficulty: "expert",
    question: "Quelle est la signification respective des codes de statut HTTP 404 et 500 retournés par un serveur web ?",
    options: ["404 = Succès, 500 = Redirection", "404 = Ressource non trouvée (erreur côté client), 500 = Erreur interne du serveur (crash ou bug de script)", "404 = Non autorisé, 500 = Page expirée", "404 = Erreur serveur, 500 = Ressource introuvable"],
    answer: "404 = Ressource non trouvée (erreur côté client), 500 = Erreur interne du serveur (crash ou bug de script)",
    explanation: "La série 4xx désigne des erreurs côté client (mauvaise URL, ressource inexistante), alors que 5xx indique un échec côté serveur (exception PHP non interceptée, etc.)."
  }
];
