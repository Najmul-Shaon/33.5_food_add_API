const loadFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));

}

const displayFood = foods => {

    const container = document.getElementById('container');
    container.innerHTML = '';
    for (const food of foods) {
        // console.log(food);

        const repeatDiv = document.createElement('div');
        repeatDiv.classList.add('col');
        repeatDiv.innerHTML = `
    <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0, 50)}</p>
                </div>
            </div>
`;
        container.appendChild(repeatDiv);


    }
}


const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadFood(searchText);
    searchField.value = '';
    // console.log('searching', searchText);
}

loadFood('a');
