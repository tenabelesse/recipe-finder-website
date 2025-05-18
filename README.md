# 🍽️ Recipe Finder
Recipe Website for 377
## What This Project Is  
Recipe Finder is a website where users can:
- Search meals by ingredient (like “chicken”)
- Browse by category (like “Beef” or “Vegan”)
- View recipes with ingredients and instructions
- Save favorite meals to the cloud

---

## Works On
- Chrome, Safari, Firefox, Edge (desktop browsers)

---

## Pages
- `index.html` – Homepage with random meal + categories  
- `search.html` – Search recipes by ingredient  
- `meals.html` – Shows meals from selected category  
- `meal.html` – Shows full recipe instructions  
- `favorites.html` – Shows saved recipes  

---

## How To Run This Project

### For Developers

#### 1. Clone the project
```bash
git clone https://github.com/your-username/recipe-finder-website.git
cd recipe-finder-website
````

#### 2. Install backend tools

```bash
npm install
```

#### 3. Add a `.env` file with:

```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-anon-key
```

#### 4. Start the server

```bash
node server.js
```

---

## Backend API

### `POST /api/save`

Saves a favorite recipe

### `GET /api/favorites`

Gets saved favorite recipes

---

## Deployment

* **Frontend**: [Vercel](https://vercel.com)
* **Backend**: [Render](https://render.com)
* URLs updated in the code to use the live backend

---

## Made By

Tena Belesse