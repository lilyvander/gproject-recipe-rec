const searchBtn = document.getElementById('#searchButton');



//Function to fetch recipie based on users ingredient search 
function fetchSCAPI() {
    const apiKeySpoon = '9ca96ef0fe1a4f36aa8fdc4f837e73db';
    const endPointSpoon = 'GET https://api.spoonacular.com/recipes/findByIngredients'

    fetch(endPointSpoon, apiKeySpoon)
    .then(function (response) {
        return response.json();
      })
      .then(function (recipeData) {
        console.log(recipeDatadata)
      })  
        var recCard = document.createElement('card');
        var recInfo = document.createElement('p');
        var link = document.createElement('a');
       
        //Need to figure out what data will pull and what elements to assign it too 

        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);


    };

//Function to store recipe via local storage 
searchBtn.addEventListener('click', fetchSCAPI);
console.log(fetchSCAPI());