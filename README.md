# Elessar — Introduction animée

Version locale avec une nouvelle entrée en scène. Les textes anglais complets, les cinq catégories, les graphiques et le footer de la version précédente sont conservés. Aucun commit, push ou déploiement effectué.

## Ouvrir

Extraire le ZIP, ouvrir un terminal dans le dossier qui contient `index.html`, puis lancer :

```sh
bash launch.sh
```

Le lanceur utilise `python3`, choisit un port libre et ouvre le navigateur. Garder le terminal ouvert ; `Ctrl+C` arrête le serveur. Si nécessaire, ouvrir l'adresse imprimée dans le terminal.

Le serveur local permet de charger le GLB. Un double-clic sur `index.html` peut bloquer les ressources 3D dans certains navigateurs.

## Déroulement

1. La pierre apparaît entière à droite. Trois courts textes anglais défilent de droite à gauche au fil du scroll. La pierre reste à droite et effectue une rotation sur son axe vertical. Une rotation lente continue également lorsque le défilement s'arrête dans cette partie de l'introduction.
2. La rotation se termine face à l'écran. La pierre entière se déplace ensuite au centre.
3. Une fois centrée, elle s'ouvre en cinq pièces seulement : les quatre coins et le cristal central intact. Les coins partent l'un après l'autre sur une trajectoire en arc, dépassent leur place puis s'y posent, en basculant chacun sur trois axes ; le cristal central fait un tour complet sur lui-même. Au repos, chaque pièce flotte avec son propre rythme. Les cinq catégories apparaissent ensemble.
4. Cliquer sur une pièce ou son libellé ouvre le lecteur. En continuant vers le bas, les pièces rejoignent le footer et reconstituent la pierre dans sa pose finale.

Le premier tableau reste fixe pendant cette séquence ; la page poursuit ensuite son défilement vers les véritables sorties graphiques et le footer. Les liens « Explore Elessar » et « Five perspectives » permettent d'aller directement aux catégories. « Report outputs » mène aux graphiques.

## Contrôles et accessibilité

Il n'y a pas de bouton de pause. La préférence système de réduction des animations est respectée : la pierre s'ouvre alors sans rotation ni flottement. L'animation s'arrête lorsque l'onglet est masqué, que la pierre sort de l'écran ou qu'un texte est ouvert dans le lecteur.

Le lecteur conserve les cinq catégories et les dix sections traduites, avec FAQ et roadmap. Il se ferme avec Échap. `guide.html` et `content-english.md` contiennent toujours l'intégralité du texte anglais. Le guide peut se lire sans JavaScript.

Si WebGL est indisponible, les cinq images originales prennent le relais. Elles suivent le placement et la reconstitution ; une légère variation de perspective remplace la rotation 3D, sans prétendre montrer le dos du modèle.

## Ressources et vérification

Le modèle 3D est inchangé : 1 942 191 triangles répartis en cinq pièces, avec le cristal central entier, les attributs et les textures d'origine. Les coupes ne possèdent pas de nouvelles faces intérieures. Le fond est conservé à l'identique. La section « Report outputs » présente huit figures d'un même rapport (UCI Wine Chemistry), extraites du PDF sans modification, avec les chiffres clés du rapport. Le rapport complet d'exemple (`assets/reports/elessar-uci-wine-report.pdf`, UCI Wine Chemistry, Elessar 1.1.0, 55 pages) est lié depuis la section « Report outputs », la catégorie « The HTML report » du lecteur et `guide.html#report`.

Les vérifications de code couvrent l'ordre des transitions, la rotation de la pierre assemblée, le placement à droite, le recentrage, l'ouverture en cinq, la navigation et le retour au footer. L'aperçu navigateur de l'environnement de préparation est indisponible : le rendu GPU, le cadrage sur les appareils réels et la fréquence d'images restent à vérifier dans votre navigateur.

## Hébergement

Le ZIP est entièrement statique, sans build Node nécessaire. Conserver `index.html`, `guide.html`, `.nojekyll` et `assets/` ensemble. Les ressources sont incluses ; les liens vers GitHub et PyPI restent externes. La directive `noindex,nofollow` est conservée pour cette version de validation.
