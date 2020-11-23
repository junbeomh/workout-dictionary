const excercises = [
    {
        name: "Shoulder Press",
        description: "asdasdasd",
        type: "shoulder",
    },
    {
        name: "Chest Press",
        description: "asdasdasd",
        type: "chest",
    },
    {
        name: "Leg Press",
        description: "asdasdasd",
        type: "legs",
    },
    {
        name: "Bicep Curl",
        description: "asdasdasd",
        type: "arms",
    },
    {
        name: "Deadlift",
        description: "asdasdasd",
        type: "back",
    },
    {
        name: "Squats",
        description: "asdasdasd",
        type: "legs",
    },
    {
        name: "Shoulder Press",
        description: "asdasdasd",
        type: "shoulder",
    },
    {
        name: "Chest Press",
        description: "asdasdasd",
        type: "chest",
    },
    {
        name: "Leg Press",
        description: "asdasdasd",
        type: "legs",
    },
    {
        name: "Bicep Curl",
        description: "asdasdasd",
        type: "arms",
    },
    {
        name: "Deadlift",
        description: "asdasdasd",
        type: "back",
    },
    {
        name: "Squats",
        description: "asdasdasd",
        type: "legs",
    },
]

const filterSearch = (value) => {
    $('#searchResults div').each(function () {
        let found = 'false';
        $(this).each(function () {
            if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                found = 'true';
            }
        });
        found === 'true' ? $(this).show() : $(this).hide();
    })
}

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

const makeExcercise = (excercise) => {
    const cardColumns = document.getElementById("searchResults");
    let cardContainer = document.createElement("div");
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardName = document.createElement("p");
    let cardType = document.createElement("p");
    let cardDescription = document.createElement("p");
    cardContainer.setAttribute('class', 'col-lg-4 col-md-4 col-sm-12 col-xs-12');
    card.setAttribute('class', 'card bg-light');
    cardBody.setAttribute('class', 'card bg-light');
    card.setAttribute('class', 'card-body text-center');
    cardName.setAttribute('class', 'card-text');
    cardType.setAttribute('class', 'card-text');
    cardDescription.setAttribute('class', 'card-text');
    cardName.innerHTML = excercise.name;
    cardType.innerHTML = excercise.type;
    cardDescription.innerHTML = excercise.description;
    cardBody.appendChild(cardType);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardDescription);
    card.appendChild(cardBody);
    cardColumns.appendChild(card);
}

const getAllExcercises = () => {
    // make api call

    // process api response 
    excercises.forEach((excercise) => {
        makeExcercise(excercise);
    })
}

const getExcercisesByType = (type) => {
    const cardColumns = document.getElementById("searchResults");
    cardColumns.innerHTML = "";
    // make api call 

    // process api response 
    excercises.forEach((excercise) => {
        if (excercise.type === type || type === "all") {
            makeExcercise(excercise);
        }
    })
}

getAllExcercises(); 