//clicking search button to call for data which go to getfood function
document.getElementById('search').addEventListener('click', function () {
    document.getElementById('food-items').innerHTML = " ";
    document.getElementById('meal-details-ingredient').innerHTML = " ";
    const foodNames = document.getElementById('food-name').value;
    getFood(foodNames);
});

// data calling function from api and format to json type
const baseApi = 'https://www.themealdb.com/api/json/v1/1/search.php?f';
const getFood = foodKeyWord => {
    const url = `${baseApi}=${foodKeyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data));
}

//display function for food name and photos which are similar to type first letter
const displayFood = food => {
    food.meals.forEach(singleFood => {
        const mealArea = document.createElement('div');
        const mealsDiv = document.getElementById('food-items');
        mealArea.id = 'meal-area';
        const mealInfo = `
        <button class="btn-whole" onclick="getMeal('${singleFood.idMeal}')">
            <img class="meal-photo" src="${singleFood.strMealThumb}">
            <h5 class="meal-name">${singleFood.strMeal}<h5>  
        </button>                    
        `
        mealsDiv.appendChild(mealArea);
        mealArea.innerHTML = mealInfo;
    });
}

const getMeal = idMeal => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealIngredient(data));
}

const displayMealIngredient = ingredient => {
    document.getElementById('meal-details-ingredient').innerHTML = " ";
    document.getElementById('meal-details-ingredient');

    ingredient.meals.forEach(element => {
        const ingDiv = document.getElementById("meal-details-ingredient")
        const ingArea = document.createElement('Div');

        const ingDetails = `
            <img src="${element.strMealThumb}">
            <h4>${element.strMeal}</h4>
            <h5>Ingredients</h5>
            <ol>
                <li>${element.strIngredient1}</li>
                <li>${element.strIngredient2}</li>
                <li>${element.strIngredient3}</li>
                <li>${element.strIngredient4}</li>
                <li>${element.strIngredient5}</li>
                <li>${element.strIngredient6}</li>
                <li>${element.strIngredient7}</li>
                <li>${element.strIngredient8}</li>
                <li>${element.strIngredient9}</li>
                <li>${element.strIngredient10}</li>
            </ol>
        `
        ingDiv.appendChild(ingArea);
        ingArea.innerHTML = ingDetails;
    });

}