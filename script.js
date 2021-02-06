// data calling function from api and format to json type
const baseApi = 'https://www.themealdb.com/api/json/v1/1/search.php?f';
const getFood = foodKeyWord => {
    const url = `${baseApi}=${foodKeyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data));
}

//clicking search button to call for data which go to getfood function
document.getElementById('search').addEventListener('click', function () {
    const foodNames = document.getElementById('food-name').value;
    getFood(foodNames);
});

//display function for food name and photos which are similar to type letter
const displayFood = food => {
    food.meals.forEach(singleFood => {
        const mealArea = document.createElement('div');
        const mealsDiv = document.getElementById('food-items');
        mealArea.className = 'meal-area';
        const mealInfo = `
            <img class="meal-photo" src="${singleFood.strMealThumb}">
            <h1 class="meal-name">${singleFood.strMeal}<h1>            
        `
        mealsDiv.appendChild(mealArea);
        mealArea.innerHTML = mealInfo;
    });
}