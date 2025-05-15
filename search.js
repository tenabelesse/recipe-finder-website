document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const ingredient = document.getElementById('ingredientInput').value.trim();
    const results = document.getElementById('results');
    if (!ingredient) return;
    results.innerHTML = '<p>Loading...</p>';
  
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json();
  
    if (!data.meals) {
      results.innerHTML = '<p>No recipes found.</p>';
      return;
    }
  
    results.innerHTML = data.meals.map(meal => `
      <div class="meal" onclick="getMealDetails('${meal.idMeal}')">
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
      </div>
    `).join('');
  });
  
  function getMealDetails(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        const meal = data.meals[0];
        const details = `
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" width="300">
          <p><strong>Instructions:</strong><br>${meal.strInstructions}</p>
        `;
        document.getElementById('mealDetails').innerHTML = details;
      });
  }
  