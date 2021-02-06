const baseApi = 'https://www.themealdb.com/api/json/v1/1/search.php?f';

const getFood = food => {
    const url = `${baseApi}=${food}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data));
}

document.getElementById('search').addEventListener('click', function () {
    const foodName = document.getElementById('food-name').value;
    getFood(foodName);
});

const displayFood = food => {
    console.log(food);
}
