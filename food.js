const loadFood = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => displayFood(data.meals));

}

const displayFood = foods => {

    const container = document.getElementById('container');
    for (const food of foods) {
        console.log(food);

        const repeatDiv = document.createElement('div');
        repeatDiv.classList.add('col');
        repeatDiv.innerHTML = `
    <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions}</p>
                </div>
            </div>
`;
        container.appendChild(repeatDiv);


    }
}

loadFood();