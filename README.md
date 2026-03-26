# Louis Bourcier — Portfolio

Portfolio professionnel — BUT Réseaux & Télécommunications, IUT de Blois.

## 🚀 Déploiement sur Vercel via Git

### 1. Créer un dépôt GitHub

```bash
git init
git add .
git commit -m "Initial commit — Portfolio Louis Bourcier"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) et créer un compte (gratuit)
2. Cliquer sur **"Add New Project"**
3. Importer votre dépôt GitHub
4. Laisser les paramètres par défaut (Vercel détecte automatiquement un site statique)
5. Cliquer sur **"Deploy"** ✅

### 3. Ajouter votre CV

Placer votre fichier `cv.pdf` à la racine du projet, puis :

```bash
git add cv.pdf
git commit -m "Ajout CV"
git push
```

Vercel redéploie automatiquement à chaque `git push`.

## 📁 Structure

```
portfolio/
├── index.html      # Page principale
├── style.css       # Styles (dark mode, animations)
├── script.js       # Interactions JS
├── cv.pdf          # Votre CV (à ajouter)
├── vercel.json     # Config Vercel
└── .gitignore
```

## ✏️ Personnaliser

- **Email & LinkedIn** : chercher `louis.bourcier@email.com` dans `index.html`
- **Couleur accent** : modifier `--accent` dans `:root` dans `style.css`
- **Projets** : modifier les `.project-card` dans `index.html`
