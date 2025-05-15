document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        const meal = data.meals[0];
        document.getElementById('randomMeal').innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:300px">
          <p>${meal.strInstructions.substring(0, 300)}...</p>
          <button onclick="saveFavorite('${meal.idMeal}', '${meal.strMeal}', '${meal.strMealThumb}')">Save to Favorites</button>
        `;
      });
  
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => {
        const catDiv = document.getElementById('categories');
        data.categories.forEach(cat => {
          const div = document.createElement('div');
          div.textContent = cat.strCategory;
          div.className = 'category-button';
  
          // go to meals.html with the type of category picked 
          div.addEventListener('click', () => {
            window.location.href = `meals.html?category=${cat.strCategory}`;
          });
  
          catDiv.appendChild(div);
        });
      });
  });
  
  // save favorites
  function saveFavorite(id, name, thumb) {
    fetch('https://recipe-finder-website-uqtv.onrender.com/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, thumb })
    })
      .then(res => res.json())
      .then(data => alert('Recipe saved!'))
      .catch(err => console.error('Save error:', err));
  }