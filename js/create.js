var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
var ID = localStorage.getItem("USER_ID");


var makeMyExcercise = (excercise, index) => {
    let myWorkOuts = document.getElementById("favourites");
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
    favouriteBtn.innerHTML = "remove";

    // favouriteBtn.onclick = () => removeFavourite(excercise, index); // TODO ADD REMOVE API CALL HERE

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('id', 'cardTitle');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#workout-descript-${index}`);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-controls', `workout-descript-${index} `);
    workoutType.setAttribute('id', 'card-type');
    workoutTitle.innerHTML = excercise.type + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `workout-descript-${index}`);
    workoutDescript.setAttribute('class', 'card-block');
    workoutDescript.innerHTML = excercise.description;
    workoutBody.appendChild(workoutDescript);

    workoutContainer.appendChild(workoutHeader);
    workoutContainer.appendChild(workoutBody);

    myWorkOuts.appendChild(workoutContainer);

}

var removeFavourite = async (excercise, index) => {
    // TODO CALL API HERE
}

var getMyExcercises = (favourites) => {
    favourites.forEach((excercise, index) => {
        makeMyExcercise(excercise, index);
    })
}

const url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=' + ID;

async function getUser(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoibEtwYjBsUHdCTzZLSHBja2pRR1FWdyIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3MjA5MTQsImV4cCI6MTYwNjcyNDUxNCwiaWF0IjoxNjA2NzIwOTE0LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.SC9g6_UzpmDCbN2bt8o7-IDJGcR-7k_oJ6ZzfumL5rI6UZ0L7VR0Hf7p_lY8NEeykdahVD85u5xRA3XSudmjvK573iDdaU8ZRDBP9oBRw_fPFlkctibCq53Kr8LXPoLvnHMKwgwNC1mR7v4vYT8kLN9EW0mkdlsRrfstmnl0m-q1m77QYNMr7l7jnPFAoIpBjm6bXD9utCw0iH4CQ9UTya7VgoVzIs5rcTP92Q-opd7ifDRDLrwafF6UmqBVU16bBMDIXsvK7A7HrSx5TUWH4hYPeUseo7oDms8ronAVDuZIc7hfBWmNcubj4wPMJT7dOJlQpcka_GEfmydnJZUkAg'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}

getUser(url)
    .then(data => {
        console.log(data.Item.favourites);
        getMyExcercises(data.Item.favourites);
    });