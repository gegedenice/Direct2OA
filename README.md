# Direct2OA

Une petite extension qui utilise le menu contextuel du navigateur (clic droit sur un texte sélectionné) comme un raccourci pour chercher dans l'ensemble des contenus disponibles en Open Access.

## Comment ça marche

Lorsqu'une chaine de caractère est sélectionnée avec la souris, une ligne Direct2OA est ajoutée au menu contextuel du navigateur, qui propose un sous-menu comprenant plusieurs possibilités : lancer la recherche à partir du texte sélectionné selon que celui-ci correspond à un DOI, un Pubmed ID, un titre ou une citation.
La requête s'appuie sur l'API d'OA Button, initiative qui agrège les contenus de plusieurs dépôts pré-existants (Unpaywall Data, OpenAIRE, Base, Dissemin...)
Toute la doc sur Open Access Button [ici](https://openaccessbutton.org) et sur l'API [là](https://openaccessbutton.org/api)

## Les résultats

Lorsqu'un document en Open Access est trouvé, l'url correspondante s'ouvre dans une nouvelle fenêtre du navigateur donnant accès directement au contenu.
De plus, les données (terme recherché et url) sont stockées de manière persistante dans le local storage du navigateur, et sont administrables (suppression ou édition pour ajout d'une note) dans la barre latérale du navigateur.
