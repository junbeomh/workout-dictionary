var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
console.log(ID_TOKEN);
console.log(ACCESS_TOKEN);


var apigClient = apigClientFactory.newClient();

var params = {
};

var body = {
};

var additionalParams = {
    header: {
        "Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
        "Access-Control-Allow-Origin": "'*'",
        "Access-Control-Allow-Methods": "'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'",
        "Authorization": "eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiYzIxU3FrSEl5VFF5YzA3a3p0d3pYQSIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjI5MTUwOTA0NCJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY2Nzk2NTksImV4cCI6MTYwNjY4MzI1OSwiaWF0IjoxNjA2Njc5NjU5LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.ZFn05QUSKdrsES_tKKqAauBU-XIrlb8zc1GAe1TlQ7wEwiV0rffa2LzJirQpJ1cDHEz7BgjzB5jMapbnjgw_b6I0P1dV9Fyu6NHdwjuP7hwoUiRRPP87X3cBTiC3pfSCIgWCsQ9gp7oVbPZ4AOeFs0M5dPgie90It46qdJE7EQ85Tk48XuvKBZWW_rZTLOKfeXZtyN_chg94EydnpdKHjGavXpMag7RbIHVnVZNVhQp0V2YMoOS1cVT6ZpHKA4-p45q_mrWRCu6j4qka99RsnuauwiXOFGzduwDlAlXQBhzeX6h0m5peRGWXMdOVmlZ5u6YSCbYkkrjkB0FUhGXtcQ",
    },
};

console.log(params);
console.log(params['Authroization']);

apigClient.getexcercisesGet(params, body, additionalParams)
    .then(function (result) {
        //This is where you would put a success callback
        console.log(result);
    }).catch(function (result) {
        //This is where you would put an error callback
    });



var mgs = document.getElementById("muscleGroupSelector");
mgs.addEventListener("change", (e) => {
    console.log(`e.target.value = ${ e.target.value } `);
    getExcercisesByType(e.target.value);
});

var excercises = [
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

var filterSearch = (value) => {
    $('#searchResults .card-header').each(function () {
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

var makeExcercise = (excercise, index) => {
    let cardColumns = document.getElementById("searchResults");
    let workoutContainer = document.createElement("div");
    let workoutHeader = document.createElement("div");
    let workoutBody = document.createElement("div");
    let workoutTitle = document.createElement("a");
    let workoutDescript = document.createElement("div");
    let workoutType = document.createElement("p");
    let favouriteBtn = document.createElement("button");

    favouriteBtn.setAttribute('type', 'button');
    favouriteBtn.setAttribute('class', 'btn btn-secondary btn-sm');
    favouriteBtn.innerHTML = "add";

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('id', 'cardTitle');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#workout - descript - ${ index } `);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-control', `workout - descript - ${ index } `);

    workoutTitle.innerHTML = excercise.type.toUpperCase() + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `workout - descript - ${ index } `);
    workoutDescript.setAttribute('class', 'card-block');

    workoutDescript.innerHTML = excercise.description;
    workoutBody.appendChild(workoutDescript);

    workoutContainer.appendChild(workoutHeader);
    workoutContainer.appendChild(workoutBody);

    cardColumns.appendChild(workoutContainer);

    // const cardColumns = document.getElementById("searchResults");
    // let cardContainer = document.createElement("div");
    // let card = document.createElement("div");
    // let cardBody = document.createElement("div");
    // let cardName = document.createElement("p");
    // let cardType = document.createElement("p");
    // let cardDescription = document.createElement("p");
    // cardContainer.setAttribute('class', 'col-lg-4 col-md-4 col-sm-12 col-xs-12');
    // card.setAttribute('class', 'card bg-light');
    // cardBody.setAttribute('class', 'card bg-light');
    // card.setAttribute('class', 'card-body text-center');
    // cardName.setAttribute('class', 'card-text');
    // cardType.setAttribute('class', 'card-text');
    // cardDescription.setAttribute('class', 'card-text');
    // cardName.innerHTML = excercise.name;
    // cardType.innerHTML = excercise.type;
    // cardDescription.innerHTML = excercise.description;
    // cardBody.appendChild(cardType);
    // cardBody.appendChild(cardName);
    // cardBody.appendChild(cardDescription);
    // card.appendChild(cardBody);
    // cardColumns.appendChild(myWorkOuts);
}

var getAllExcercises = () => {
    // make api call

    // process api response 
    excercises.forEach((excercise, index) => {
        makeExcercise(excercise, index);
    })
}

var getExcercisesByType = (type) => {
    let cardColumns = document.getElementById("searchResults");
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