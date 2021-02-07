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
    document.getElementById('food-items').innerHTML = " ";
    const foodNames = document.getElementById('food-name').value;
    getFood(foodNames);
});

//display function for food name and photos which are similar to type first letter
const displayFood = food => {
    food.meals.forEach(singleFood => {      
        console.log(singleFood);  
        const mealArea = document.createElement('div');
        const mealsDiv = document.getElementById('food-items');
        mealArea.id = 'meal-area';
        const mealInfo = `
            <img class="meal-photo" src="${singleFood.strMealThumb}">
            <h5 class="meal-name">${singleFood.strMeal}<h5>
            <button onclick = "displayMealIngredient('${singleFood.strIngredient1} ${singleFood.strIngredient2}')">Ingredient</button>            
        `
        mealsDiv.appendChild(mealArea);
        mealArea.innerHTML = mealInfo;
    });   
}

// ingredient view
const displayMealIngredient = name => {
    console.log(name);
}


// food details
// document.getElementById('meal-area').addEventListener('click', function () {
//     console.log('clicked');
// });

// display meal ingredient
// const displayMealIng


// strIngredient1


