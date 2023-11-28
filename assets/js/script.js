const appId = 'dc36a5f3';
const appKey = 'f80e9e792751861c2b58f13cb2113115';

const searchInput = document.getElementById('recipeSearch');
const searchButton = document.getElementById('searchButton');
const recipeList = document.getElementById('recipeList');

searchButton.addEventListener('click', searchRecipes);

function searchRecipes() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    const apiEndpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => displayRecipes(data.hits))
      .catch(error => console.error('Error fetching data:', error));
  }
}

function displayRecipes(recipes) {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipeCard');
    recipeCard.innerHTML = `
      <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
      <h3>${recipe.recipe.label}</h3>
      <p>Brief description of the dish. Lorem ipsum dolor sit amet...</p>
      <button onclick="viewRecipeDetails(${index})">View Details</button>
    `;
    recipeList.appendChild(recipeCard);
  });
}

function viewRecipeDetails(index) {
  // Add code to handle viewing details for the selected recipe (use the 'index' parameter)
  console.log(`View details for recipe ${index + 1}`);
}
