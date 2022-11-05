const loadFood = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => displayFood(data.meals));

}

const displayFood = foods => {

    const container = document.getElementById('container');
    for (const food of foods) {
        const repeatDiv = document.createElement('div');
        repeatDiv.classList.add('col');
        repeatDiv.innerHTML = `
    <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
`;
        container.appendChild(repeatDiv);


    }
}

loadFood();