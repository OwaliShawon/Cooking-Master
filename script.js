const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
fetch(url)
.then(res => res.json())
.then(data => displayFood(data));

const displayFood = food => {
    console.log(food);
}