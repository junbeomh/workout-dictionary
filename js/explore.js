var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
var ID = localStorage.getItem("USER_ID");

var excercises = [];

var mgs = document.getElementById("muscleGroupSelector");
mgs.addEventListener("change", (e) => {
    console.log(`e.target.value = ${e.target.value} `);
    getExcercisesByType(e.target.value)
});

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


{/* <div class="card">
    <div class="card-header">
        <a data-toggle="collapse" href="#test-block" aria-expanded="true" aria-controls="test-block">
            card header
        </a>
    </div>
    <div id="test-block" class="collapse">
        <div class="card-block">
            card block
        </div>
    </div>
</div> */}


var makeExcercise = (excercise, index) => {
    let cardColumns = document.getElementById("searchResults");
    let workoutContainer = document.createElement("div");
    let workoutHeader = document.createElement("div");
    let workoutTitle = document.createElement("a");
    let workoutBody = document.createElement("div");
    let workoutDescript = document.createElement("div");
    let workoutType = document.createElement("p");
    let favouriteBtn = document.createElement("button");

    favouriteBtn.setAttribute('type', 'button');
    favouriteBtn.setAttribute('class', 'btn btn-secondary btn-sm');
    favouriteBtn.setAttribute('id', `fav-btn-${index}`);
    favouriteBtn.innerHTML = "add";
    favouriteBtn.onclick = () => addToFavourites(excercise, index);

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('id', 'cardTitle');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#workout-descript-${index}`);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-controls', `workout-descript-${index} `);
    workoutType.setAttribute('id', 'card-type');
    workoutTitle.innerHTML =  excercise.type + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `workout-descript-${index}`);
    workoutDescript.setAttribute('class', 'card-block');
    workoutDescript.innerHTML = excercise.description;
    workoutBody.appendChild(workoutDescript);

    workoutContainer.appendChild(workoutHeader);
    workoutContainer.appendChild(workoutBody);

    cardColumns.appendChild(workoutContainer);
}

var getExcercisesByType = (type) => {
    let cardColumns = document.getElementById("searchResults");
    cardColumns.innerHTML = "";
    // make api call 

    // process api response 
    excercises.forEach((excercise) => {
        if (excercise.type.toLowerCase() === type || type === "all") {
            makeExcercise(excercise);
        }
    })
}


var getAllExcercises = () => {
    let cardColumns = document.getElementById("searchResults");
    // console.log(excercises);
    excercises.forEach((excercise, index) => {
        makeExcercise(excercise, index);
    })
}

var addToFavourites = async (excercise, index) => {
    let url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/addtofavourites';
    console.log("ID_TOKEN: " + ID_TOKEN);
    console.log("ACCESS_TOKEN: " + ACCESS_TOKEN);
    console.log("ID: " + ID);
    console.log(excercise);
    let body = {
        "type": excercise.type,
        "uid": ID,
        "name": excercise.name,
        "description": excercise.description 
    }

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWGZIQ2YwMkJiWnBhLXludjNsYU54dyIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoiajFxLXBmb0ZjTkE0dkg0aDJLbTJEVUpsaHlWVnh3N05yWU1YdjdRSFI5WnptT3FocERScXRuaGpqanZvMmF2U1BZSWZGWUhsWmlBb1F6VzlNMEd3T1EwTUQ0QUg2UkFfSjdiWGNGVmlvY0pZeU9WdWVlVGx5X3BTb0YtV0JON2xad0tmeDAtelZkZEZzdllqQ0NSN2Q3ODNIZmYwdS15d2lqV010SnhZYW1JIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2MjkxNTA5MDQ0In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjcxMTAzOSwiZXhwIjoxNjA2NzE0NjM5LCJpYXQiOjE2MDY3MTEwMzksImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.F0EfhyWz-F2ub3woIA4lTj86epp3Rd6vte5jEOeHmltFyDdP4d0JMenn7mv0cFIjluYy-hI5LjNiuq5VOkt2JNX0eTZvnR4vhRj0G9tw4Qdjj6axPoLX8msH-tCCIgMnI9XnSfJJ3h3bPLdYNmdWqNc2C4nHBlvm6jZcxSei6Viy5rRR-uqpMhHRLicpoBTjptMKIMT5jkqGviHCiW9GqKLjjbYxNAGYjaIcxsBgRO-E3YtzTl7Et_TGcQA7qVwy1dudMh9y3wUwEfyhDmaSIPyTQKZRWoQaGJsuDvPMjciWhtJx34GiyutyOkVKXoQYxD_-iX3Nc8mEtHQcX6_tyw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then((response) => {
        console.log(response);
        let btn = document.getElementById(`fav-btn-${index}`);
        btn.innerHTML = 'added';
        btn.style.pointerEvents = 'none';
    });
    // return response.json(); // parses JSON response into native JavaScript objects
}


// Example GET method implementation:
async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWGZIQ2YwMkJiWnBhLXludjNsYU54dyIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoiajFxLXBmb0ZjTkE0dkg0aDJLbTJEVUpsaHlWVnh3N05yWU1YdjdRSFI5WnptT3FocERScXRuaGpqanZvMmF2U1BZSWZGWUhsWmlBb1F6VzlNMEd3T1EwTUQ0QUg2UkFfSjdiWGNGVmlvY0pZeU9WdWVlVGx5X3BTb0YtV0JON2xad0tmeDAtelZkZEZzdllqQ0NSN2Q3ODNIZmYwdS15d2lqV010SnhZYW1JIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2MjkxNTA5MDQ0In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjcxMTAzOSwiZXhwIjoxNjA2NzE0NjM5LCJpYXQiOjE2MDY3MTEwMzksImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.F0EfhyWz-F2ub3woIA4lTj86epp3Rd6vte5jEOeHmltFyDdP4d0JMenn7mv0cFIjluYy-hI5LjNiuq5VOkt2JNX0eTZvnR4vhRj0G9tw4Qdjj6axPoLX8msH-tCCIgMnI9XnSfJJ3h3bPLdYNmdWqNc2C4nHBlvm6jZcxSei6Viy5rRR-uqpMhHRLicpoBTjptMKIMT5jkqGviHCiW9GqKLjjbYxNAGYjaIcxsBgRO-E3YtzTl7Et_TGcQA7qVwy1dudMh9y3wUwEfyhDmaSIPyTQKZRWoQaGJsuDvPMjciWhtJx34GiyutyOkVKXoQYxD_-iX3Nc8mEtHQcX6_tyw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

getData('https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getexcercises')
    .then(data => {
        //   console.log(data.body.Items); // JSON data parsed by `data.json()` call
        excercises = data.body.Items;
        getAllExcercises();
    });