
document.addEventListener('DOMContentLoaded', function () {
const searchBtn = document.querySelector('#searchButton');
const searchRec = document.querySelector('#recipeSearch')


//Function to fetch recipie based on users ingredient search 
const spoonacularApiKey = '9ca96ef0fe1a4f36aa8fdc4f837e73db';

getRecipesByIngredients = function() {
  const searchIngreditents = searchRec.value;
  console.log(searchIngreditents)
  const spcURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularApiKey}&includeIngredients=${searchIngreditents}&number=5`;
  fetch(spcURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // Handle the recipe data here
  })
  .catch(function (error) {
    console.error('Error fetching recipes:', error);
  });
}



searchBtn.addEventListener('click', getRecipesByIngredients);

})