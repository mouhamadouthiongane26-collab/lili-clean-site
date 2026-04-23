# PRD - Site vitrine `Lilicleanservices`

## 1. Vue d'ensemble

### 1.1 Nom du projet
Site vitrine professionnel pour `Lilicleanservices`, développé avec `Next.js` et un formulaire de devis sans backend complexe.

### 1.2 Contexte
`Lilicleanservices` est une entreprise de nettoyage qui a besoin d'une présence en ligne professionnelle pour :
- rassurer les prospects ;
- présenter clairement ses services ;
- générer des demandes de devis ;
- faciliter la prise de contact ;
- poser une base technique solide pour de futures évolutions.

### 1.3 Vision produit
Créer un site vitrine moderne, rapide, crédible et orienté conversion, qui reflète le sérieux de l'entreprise et transforme les visiteurs en prospects qualifiés.

### 1.4 Objectif principal
Obtenir des demandes de devis et des prises de contact qualifiées depuis le site.

### 1.5 Objectifs secondaires
- améliorer l'image de marque de `Lilicleanservices` ;
- mettre en avant les services et avantages concurrentiels ;
- être bien référencé localement sur Google ;
- faciliter les demandes de devis par e-mail ;
- disposer d'une base propre pour enrichir le contenu plus tard.

## 2. Objectifs business

### 2.1 Objectifs à 3 mois
- mettre en ligne une version professionnelle et mobile-first ;
- capter les premières demandes via un formulaire ;
- rendre la marque identifiable et cohérente ;
- obtenir un site techniquement propre pour SEO et performance.

### 2.2 KPI
- nombre de demandes de devis par mois ;
- taux de conversion visiteur -> lead ;
- nombre d'appels ou clics WhatsApp/téléphone ;
- trafic organique local ;
- temps moyen passé sur le site ;
- taux de rebond sur les pages clés ;
- Core Web Vitals conformes.

## 3. Cibles utilisateurs

### 3.1 Persona 1 - Particulier
Profil : personne qui cherche un service de nettoyage fiable pour maison, appartement ou remise en état.

Besoins :
- comprendre rapidement les services proposés ;
- voir des preuves de sérieux ;
- demander un devis facilement ;
- être rassuré sur la qualité et la réactivité.

### 3.2 Persona 2 - Professionnel
Profil : entreprise, commerce, cabinet, copropriété ou gestionnaire de locaux.

Besoins :
- identifier si `Lilicleanservices` peut gérer des prestations récurrentes ;
- comprendre l'organisation, la fiabilité et la flexibilité ;
- demander un devis rapide ou une prise de rendez-vous.

### 3.3 Persona 3 - Prospect pressé
Profil : visiteur sur mobile qui veut une réponse immédiate.

Besoins :
- voir un numéro de téléphone ;
- envoyer une demande très vite ;
- comprendre en quelques secondes les promesses de la marque.

## 4. Proposition de valeur

Le site doit communiquer une promesse claire :

`Lilicleanservices` propose un nettoyage professionnel, fiable, soigné et réactif, pour particuliers et professionnels, avec un accompagnement simple du devis jusqu'à l'intervention.

## 5. Périmètre produit

### 5.1 MVP
Le MVP doit inclure :
- page d'accueil professionnelle ;
- page services ;
- page à propos ;
- page contact ;
- formulaire de devis ;
- sections de réassurance ;
- avis clients ;
- FAQ ;
- SEO technique de base ;
- formulaire de devis simple sans backend complexe.

### 5.2 Hors périmètre MVP
- paiement en ligne ;
- espace client complet ;
- réservation avec calendrier avancé ;
- chat temps réel ;
- application mobile ;
- automatisations CRM complexes ;
- blog avancé avec workflow éditorial complet.

## 6. Fonctionnalités principales

### 6.1 Page d'accueil
Objectif : présenter l'entreprise et convertir rapidement.

Sections attendues :
- Hero fort avec promesse, CTA `Demander un devis` et CTA secondaire `Nous appeler` ;
- présentation synthétique des services ;
- avantages clés ;
- témoignages ;
- zone d'intervention ;
- étapes de collaboration ;
- aperçu FAQ ;
- formulaire court ou bloc CTA final.

### 6.2 Page services
Objectif : détailler les prestations.

Services recommandés :
- nettoyage de bureaux ;
- nettoyage de maisons et appartements ;
- nettoyage après chantier ;
- nettoyage après déménagement ;
- nettoyage de commerces ;
- entretien régulier ;
- remise en état ;
- nettoyage de vitres ;
- prestation sur mesure.

Chaque service doit comporter :
- un titre clair ;
- une description orientée résultat ;
- les bénéfices ;
- cas d'usage ;
- CTA de devis.

### 6.3 Page à propos
Objectif : humaniser la marque et créer de la confiance.

Contenu :
- histoire de l'entreprise ;
- mission ;
- valeurs ;
- engagement qualité ;
- méthode de travail ;
- pourquoi choisir `Lilicleanservices`.

### 6.4 Page contact
Contenu :
- téléphone ;
- e-mail ;
- adresse si disponible ;
- horaires ;
- carte ou zone desservie ;
- formulaire de contact ;
- CTA WhatsApp si pertinent.

### 6.5 Formulaire de devis
Le formulaire doit permettre de capter des leads qualifiés.

Champs minimum :
- nom ;
- prénom ;
- téléphone ;
- e-mail ;
- type de client ;
- type de prestation ;
- adresse ou zone ;
- surface approximative ;
- fréquence souhaitée ;
- message ;
- consentement RGPD.

Comportement attendu :
- validation côté client ;
- message de confirmation clair ;
- ouverture d'un e-mail prérempli ;
- possibilité d'ajouter des notifications e-mail ultérieurement.

### 6.6 Témoignages
Objectif : renforcer la crédibilité.

Fonctionnement :
- affichage de témoignages sur l'accueil et éventuellement une page dédiée ;
- possibilité de rendre les avis dynamiques ultérieurement.

### 6.7 FAQ
Questions recommandées :
- quelles zones desservez-vous ;
- proposez-vous des devis gratuits ;
- intervenez-vous pour particuliers et professionnels ;
- utilisez-vous vos propres produits ;
- faites-vous des prestations ponctuelles et régulières ;
- quels sont les délais d'intervention.

### 6.8 Footer complet
Le footer doit inclure :
- logo ;
- liens principaux ;
- coordonnées ;
- horaires ;
- réseaux sociaux ;
- mentions légales ;
- politique de confidentialité.

## 7. Évolutions d'administration futures

### 7.1 Données administrables possibles
Contenus à rendre administrables si un backend est ajouté plus tard :
- `leads`
- `testimonials`
- `service_pages`
- `faq_items`
- `site_settings`

### 7.2 Rôles
- visiteur public ;
- administrateur interne.

### 7.3 Authentification
Authentification réservée à l'administration si une interface interne est ajoutée plus tard.

### 7.4 Cas d'usage admin
- consulter les leads ;
- marquer un lead comme `nouveau`, `contacté`, `converti`, `archivé` ;
- modifier les FAQ ;
- modifier les témoignages ;
- mettre à jour certains textes clés ;
- gérer les informations globales de l'entreprise.

## 8. Architecture d'information

Arborescence recommandée :

- `/` Accueil
- `/services`
- `/services/[slug]`
- `/a-propos`
- `/contact`
- `/devis`
- `/mentions-legales`
- `/politique-de-confidentialite`

Évolutions futures possibles :
- `/blog`
- `/realisations`
- `/zone-intervention/[ville]`

## 9. Parcours utilisateurs

### 9.1 Parcours principal
1. Le visiteur arrive sur la page d'accueil.
2. Il comprend immédiatement l'offre.
3. Il consulte les services et éléments de réassurance.
4. Il clique sur `Demander un devis`.
5. Il remplit le formulaire.
6. Un e-mail prérempli s'ouvre pour envoyer la demande.
7. Il reçoit un message de confirmation.

### 9.2 Parcours mobile rapide
1. Le visiteur arrive depuis Google ou une pub.
2. Il voit le numéro de téléphone et le CTA principal dès le premier écran.
3. Il appelle ou envoie une demande.

## 10. Exigences UX/UI

### 10.1 Positionnement visuel
Le site doit inspirer :
- propreté ;
- confiance ;
- rigueur ;
- modernité ;
- efficacité.

### 10.2 Direction artistique recommandée
- design premium et sobre ;
- beaucoup d'espace ;
- photos lumineuses et propres ;
- iconographie simple ;
- sections bien rythmées ;
- contraste fort sur les CTA.

### 10.3 Palette suggérée
- bleu profond ou bleu pétrole pour la confiance ;
- blanc cassé pour la propreté ;
- vert doux ou turquoise léger en accent pour la fraîcheur ;
- gris foncé pour la lisibilité.

### 10.4 Typographie
- sans serif moderne et lisible ;
- hiérarchie typographique claire ;
- gros titres concis ;
- textes courts, orientés bénéfices.

### 10.5 UX attendue
- navigation claire ;
- CTA visibles ;
- lecture simple sur mobile ;
- formulaires courts et rassurants ;
- temps d'accès rapide aux infos de contact.

## 11. Exigences contenu

### 11.1 Ton éditorial
- professionnel ;
- rassurant ;
- clair ;
- humain ;
- orienté service ;
- sans jargon inutile.

### 11.2 Messages clés
- devis rapide ;
- service fiable ;
- qualité de nettoyage ;
- flexibilité ;
- satisfaction client ;
- intervention pour particuliers et professionnels.

### 11.3 Sections de réassurance
Le site doit prévoir des emplacements pour afficher :
- expérience ;
- ponctualité ;
- équipe sérieuse ;
- devis gratuit ;
- satisfaction client ;
- disponibilité ;
- zone d'intervention.

## 12. SEO

### 12.1 Objectifs SEO
Se positionner sur des recherches locales et métier de type :
- entreprise de nettoyage ;
- société de nettoyage ;
- nettoyage bureaux ;
- nettoyage maison ;
- nettoyage après chantier ;
- devis nettoyage ;
- nettoyage [ville].

### 12.2 Exigences SEO
- `metadata` par page ;
- titres `H1/H2/H3` cohérents ;
- URLs propres ;
- maillage interne ;
- sitemap ;
- robots.txt ;
- schema markup `LocalBusiness` ;
- contenu unique ;
- optimisation images ;
- pages rapides.

### 12.3 SEO local
Prévoir :
- zone d'intervention visible ;
- NAP cohérent si adresse disponible ;
- intégration Google Maps possible ;
- contenus localisés à ajouter plus tard par ville.

## 13. Performance et qualité

### 13.1 Exigences techniques
- `Next.js` App Router ;
- `TypeScript` ;
- rendu optimisé SEO ;
- images optimisées avec `next/image` ;
- accessibilité correcte ;
- responsive intégral ;
- score Lighthouse élevé.

### 13.2 Objectifs de performance
- chargement rapide sur mobile ;
- LCP optimisé ;
- CLS faible ;
- bundle raisonnable ;
- pages statiques quand possible.

## 14. Accessibilité

Le site doit respecter les bonnes pratiques essentielles :
- contrastes suffisants ;
- navigation clavier possible ;
- labels sur les champs ;
- alt text sur les images ;
- structure sémantique propre ;
- messages d'erreur compréhensibles.

## 15. Sécurité et conformité

### 15.1 Sécurité
- validation côté client des champs obligatoires ;
- absence d'appel API inutile ;
- absence de dépendance backend pour le formulaire.

### 15.2 RGPD
Le site doit intégrer :
- consentement pour formulaire ;
- politique de confidentialité ;
- mentions légales ;
- information sur l'usage des données ;
- conservation raisonnable des leads ;
- possibilité de suppression sur demande.

## 16. Stack technique

### 16.1 Frontend
- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui` ou composants UI custom propres

### 16.2 Backend / data
- aucun backend requis pour le formulaire de devis
- e-mail prérempli via `mailto:`

### 16.3 Déploiement
- `Vercel` recommandé

### 16.4 Outils annexes
- `Resend` ou SMTP plus tard pour notifications e-mail
- `Google Analytics` ou `Plausible`
- `Google Search Console`

## 17. Modèle de données initial

### 17.1 Table `leads`
Champs recommandés :
- `id`
- `created_at`
- `first_name`
- `last_name`
- `email`
- `phone`
- `customer_type`
- `service_type`
- `location`
- `surface`
- `frequency`
- `message`
- `status`
- `consent`

### 17.2 Table `testimonials`
- `id`
- `created_at`
- `name`
- `company`
- `quote`
- `rating`
- `is_featured`

### 17.3 Table `faq_items`
- `id`
- `question`
- `answer`
- `sort_order`
- `is_active`

### 17.4 Table `service_pages`
- `id`
- `slug`
- `title`
- `excerpt`
- `content`
- `is_active`
- `seo_title`
- `seo_description`

### 17.5 Table `site_settings`
- `id`
- `company_name`
- `phone`
- `email`
- `address`
- `city`
- `hours`
- `hero_title`
- `hero_subtitle`
- `service_area`

## 18. Pages et contenu détaillé

### 18.1 Accueil
Contenu minimum :
- titre fort ;
- sous-titre ;
- CTA ;
- preuves de confiance ;
- services phares ;
- méthode en 3 étapes ;
- témoignages ;
- FAQ ;
- CTA final.

### 18.2 Services
Contenu minimum :
- vue d'ensemble ;
- cartes de services ;
- liens vers pages détaillées ;
- CTA de devis.

### 18.3 A propos
Contenu minimum :
- présentation de l'entreprise ;
- valeurs ;
- engagements ;
- qualité de service.

### 18.4 Contact / Devis
Contenu minimum :
- formulaire ;
- coordonnées ;
- zone couverte ;
- rassurance sur délai de réponse.

## 19. Backlog produit

### 19.1 Priorité P0
- structure Next.js ;
- design system de base ;
- page d'accueil ;
- services ;
- contact ;
- devis ;
- formulaire de devis sans backend ;
- mentions légales ;
- SEO de base ;
- responsive.

### 19.2 Priorité P1
- gestion admin simple ;
- témoignages dynamiques ;
- FAQ dynamique ;
- analytics ;
- optimisations SEO locales.

### 19.3 Priorité P2
- blog ;
- pages par ville ;
- galerie avant/après ;
- demande de rappel ;
- multi-langue.

## 20. Critères d'acceptation

Le produit est considéré prêt pour le MVP si :
- le site est responsive sur mobile, tablette et desktop ;
- les pages clés existent et sont cohérentes ;
- le branding est professionnel ;
- les CTA sont visibles ;
- le formulaire fonctionne ;
- le formulaire ouvre un e-mail prérempli avec les informations saisies ;
- les contenus juridiques de base sont présents ;
- les métadonnées SEO sont en place ;
- les performances sont satisfaisantes ;
- les contenus donnent confiance.

## 21. Hypothèses

Les éléments suivants sont supposés en attendant tes infos finales :
- l'entreprise cible à la fois particuliers et professionnels ;
- l'objectif principal est la génération de leads ;
- la langue initiale du site est le français ;
- les services exacts pourront être ajustés ;
- la zone d'intervention précise reste à confirmer ;
- les coordonnées officielles restent à renseigner.

## 22. Informations à confirmer avant production

Pour passer du PRD à la construction finale du site, il faudra confirmer :
- ville ou zone d'intervention principale ;
- numéro de téléphone ;
- e-mail professionnel ;
- adresse si elle doit être affichée ;
- services exacts ;
- fréquence de prestations proposées ;
- logo ;
- couleurs de marque si elles existent ;
- photos de l'entreprise ;
- avis clients disponibles ;
- mentions légales officielles.

## 23. Recommandation de lancement

Construire en priorité un `MVP conversion-first` :
- homepage très solide ;
- pages services claires ;
- formulaire de devis simple ;
- demande de devis par e-mail sans configuration technique ;
- SEO local propre ;
- design premium mais sobre.

Cette approche permet de lancer vite, avec une vraie valeur business, puis d'ajouter ensuite blog, pages locales, réalisations et administration plus poussée.
