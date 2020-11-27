var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
console.log(ID_TOKEN);
console.log(ACCESS_TOKEN);




console.log('hi');


var apigClient = apigClientFactory.newClient();

var params = {
    Authroization: "eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNnB4UHpBMGhGR1R2MmppSjJOQ1hZUSIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoid0w2TzZKTWNuOXpCdnZOY1lSVldlNURjN0ZaUm94NFRGcld0S0NsdEJ1dWNMYkQtZ3Y0VkZFX0dzVHZrdU55bDBPbFJzc1hJenktVVcxYVdoOXhUVDNaUWJwam5zRHptWExvWlhYZ2gxNzItel9DMXlneFZDYjZOaFRjRXIzYmYtV1NEQjdQc0JWdDA2QVJvSElTdzNjTUVTSEM0YURNSDdueTYwajNRcllRIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2MjkxNTA5MDQ0In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjQzMzgxOCwiZXhwIjoxNjA2NDM3NDE4LCJpYXQiOjE2MDY0MzM4MTgsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.YYfE8SYb8xceQhriOeLzFbK7aAIfFPf3UT8OkewRPtCh77ilIOx2TzaUk9Z0aX77C1rKXLUgE0cAgoopUzRGZvCA1YNtbcUl9dZ-GJhHUkI8vkshQQGwq31AvxjgI4nuRkPQV60UPDLjABtygg45CP-thqVf7KgZj-XW-UmBm7At2OWYxdP_ArXa9BABbmHHEeXvAk1XF3ThP0-l_1g7gDfbtinxlYjZg_Kxaz-Uk0MWlKOep8-PEhX5cpU7QHZIgtLL5hNNGUWYOC0autHK2dSiRN8UyuyaHItAWlb1-tmJWYB0F8vd8himjAnrY5pVRmjuaEkze6BCnNe9ORrXIw",
};

var body = {
};

var additionalParams = {


};
// console.log(params);
// console.log(params['Authroization']);

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