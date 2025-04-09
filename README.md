# 🖼️ Galerie d'Art — Projet Web Fullstack

## 🎯 Objectif
Créer une application web complète avec :
- Authentification
- Galerie d'œuvres d’art personnalisée
- Backend API + base de données
- Front déployé en ligne

---

## 📚 Tech Stack

- **Frontend** : Vue.js 3 + Vite
- **Backend** : Fastify (Node.js)
- **Base de données** : MongoDB Atlas
- **Déploiement** :
  - Front : Netlify
  - Back : Render

---

## ✅ Fonctionnalités réalisées

| Fonctionnalité                      | État  |
|------------------------------------|-------|
| Authentification (Sign up / in)    | ✅    |
| Protection des routes (`/gallery`) | ✅    |
| Déconnexion avec suppression token | ✅    |
| Affichage conditionnel UI          | ✅    |
| Création d’œuvres (titre/image...) | ✅    |
| Stockage des œuvres par utilisateur | ✅   |
| Visualisation des œuvres persos    | ✅    |
| Stockage sécurisé via MongoDB Atlas| ✅    |
| Séparation front/back en 2 dépôts  | ✅    |

---

## 🧠 Logique des données

- Lorsqu’un utilisateur se connecte, son `username` est stocké dans `localStorage`.
- Chaque œuvre créée est associée à ce `username`.
- Lors du `GET`, seules les œuvres liées à ce `username` sont affichées.
- Les données sont stockées dans MongoDB Atlas, dans deux collections :
  - `users` : utilisateurs avec login/password/email
  - `artworks` : œuvres liées à un `username`

---

## 🔒 Sécurité / Session

- Le token est stocké dans `localStorage`
- Les routes privées sont protégées via `beforeEach` (Vue Router)
- Les pages `/gallery` ne sont accessibles que si le token est présent
- Le logout supprime le token + redirige vers `/signin`

---

## 🧪 Démo rapide

| Action        | Résultat                                  |
|---------------|-------------------------------------------|
| Sign up       | Crée un utilisateur dans Mongo Atlas      |
| Sign in       | Redirige vers `/gallery` + stocke token   |
| Ajouter œuvre | L’œuvre est liée à ce compte uniquement   |
| Logout        | Efface le token + redirige vers `/signin` |

---

## ✍️ Auteur

Projet réalisé par adrien gaucher
Dans le cadre du cours de Web Développement (ESILV / Stormier)

