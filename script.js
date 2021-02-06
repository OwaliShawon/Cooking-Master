const baseApi = 'https://www.themealdb.com/api/json/v1/1/search.php?f';

const getFood = foodKeyWord => {
    const url = `${baseApi}=${foodKeyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data));
}

document.getElementById('search').addEventListener('click', function () {
    const foodName = document.getElementById('food-name').value;
    getFood(foodName);
});

const displayFood = food => {
    // const fooName = food.strMeal[0];
    // console.log(fooName);
    // console.log(food.meals[0]);
    // food.forEach(element => {
    //     console.log(element);
    // });

    for (let i = 0; i < food.meals.length; i++) {
        const element = food.meals[i];
        console.log(element.strMeal);
        
    }
}


