//clicking search button to call for data which go to getfood function
document.getElementById('search').addEventListener('click', function () {
    document.getElementById('food-items').innerHTML = " ";
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

const displayMealIngredient = ingredient =>{
    
}
