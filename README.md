# 🍽️ Recipe Finder

## What This Project Is  
Recipe Finder is a website that helps users:
- Search meals by ingredient (like “chicken”)
- Browse meals by category (like “Beef” or “Vegan”)
- View full recipes with ingredients and cooking steps
- Save their favorite meals to the cloud (using Supabase)

---

## Works On (Target Browsers)
- Desktop: Chrome, Safari, Firefox, Edge

---

## Pages
- `index.html` – Homepage with random meal + categories  
- `search.html` – Search meals by ingredient  
- `meals.html` – View meals by category  
- `meal.html` – View full recipe details  
- `favorites.html` – View saved favorite meals  
- `about.html` – Info about the app  

---

## 🔧 Developer Manual

This guide is for future developers who want to install, run, or continue building this project.

### 1. Clone the Project
```bash
git clone https://github.com/tenabelesse/recipe-finder-website.git
cd recipe-finder-website
````

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a file named `.env` in the root folder and add:

```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-anon-key
```

### 4. Start the Backend Server

```bash
node server.js
```

You should see: `Server running on port 3000` (or another port assigned by Render)

---

## 🔌 API Endpoints

### `POST /api/save`

Saves a favorite recipe
**Body example:**

```json
{
  "id": "52772",
  "name": "Beef and Mustard Pie",
  "thumb": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"
}
```

### `GET /api/favorites`

Returns all saved favorite recipes
**Returns:**

```json
[
  {
    "id": "52772",
    "name": "Beef and Mustard Pie",
    "thumb": "https://..."
  }
]
```

---

## ✅ Deployment

* **Frontend**: [Vercel](https://vercel.com)
  (URL: `https://recipe-finder-website-sigma.vercel.app/`)
* **Backend**: [Render](https://render.com)
  (URL: `https://recipe-finder-website-uqtv.onrender.com`)

Be sure the frontend uses the Render backend URL in `script.js` and `favorites.html`.

---

## 🧪 Testing

There are no automated tests written.
Manual testing includes:

* Visiting `favorites.html` to confirm data displays
* Using the “Save to Favorites” button to confirm POSTs
* Confirming API endpoints return expected JSON

---

## 🐞 Known Issues

* No delete feature for saved favorites
* No form validation for ingredient search
* No user login (all favorites are public in Supabase)

---

## 🔮 Future Plans

* Add delete buttons on `favorites.html`
* Add user authentication (login)
* Add ratings or tags for meals
* Allow users to edit their saved favorites

---

## 👤 Developer

Tena Belesse
University of Maryland, College Park