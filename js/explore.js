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
    favouriteBtn.onclick = () => addToFavourites(excercise);

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('id', 'cardTitle');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#workout - descript - ${index}`);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-control', `workout - descript - ${index} `);

    workoutTitle.innerHTML = excercise.type.toUpperCase() + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `workout - descript - ${index}`);
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

var addToFavourites = async (excercise) => {
    let url = '';
    console.log("ID_TOKEN: " + ID_TOKEN);
    console.log("ACCESS_TOKEN: " + ACCESS_TOKEN);
    console.log("ID: " + ID);
    console.log(excercise);

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            // 'Authorization': ID_TOKEN,
            'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNHhrS3ZFM2RlaWhtS1B1WXVPc1ExUSIsInN1YiI6ImU0YWE2NWNhLTZkMDUtNGVlZi05OGI5LTA4ZDcxYzc3MjBmMiIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjA2NjkzMzcyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZTRhYTY1Y2EtNmQwNS00ZWVmLTk4YjktMDhkNzFjNzcyMGYyIiwiZXhwIjoxNjA2Njk2OTcyLCJpYXQiOjE2MDY2OTMzNzIsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.I7GzP6Y6LqpE1Rkh9XMQJCgXS26IzXaC0KnLX-TOHHeR-MDt5rtV38xp33fNM_rGDQ-ai--gI-fjuzo_KMqubxeNMcqaS1AuqjmOH1NCkMQbyhedmE-eoeA2xz_B56nRmOJyGN7YUdQiYqUfddSQIMk9rf5JyLTU0TbaTOInH2BOA_2rnftccFzbJp0P2UwVtaIY8SZOP1TVc37Hpv9OHkQP866WMUUn2p_p2pUort8-PuN9bItifRmX5tQ74qWQ6y7lETcHE6iX4jQYnn1Tk-FLL_dHGJqtbG5Z-ciQvVjnIzjcTgw8B_YjkKkmcZ7X_d57hLuDJTs_rVpR2kmRpA'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(excercise) // body data type must match "Content-Type" header
    });
    // return response.json(); 
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
            // 'Authorization': ID_TOKEN,
            'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNHhrS3ZFM2RlaWhtS1B1WXVPc1ExUSIsInN1YiI6ImU0YWE2NWNhLTZkMDUtNGVlZi05OGI5LTA4ZDcxYzc3MjBmMiIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjA2NjkzMzcyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZTRhYTY1Y2EtNmQwNS00ZWVmLTk4YjktMDhkNzFjNzcyMGYyIiwiZXhwIjoxNjA2Njk2OTcyLCJpYXQiOjE2MDY2OTMzNzIsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.I7GzP6Y6LqpE1Rkh9XMQJCgXS26IzXaC0KnLX-TOHHeR-MDt5rtV38xp33fNM_rGDQ-ai--gI-fjuzo_KMqubxeNMcqaS1AuqjmOH1NCkMQbyhedmE-eoeA2xz_B56nRmOJyGN7YUdQiYqUfddSQIMk9rf5JyLTU0TbaTOInH2BOA_2rnftccFzbJp0P2UwVtaIY8SZOP1TVc37Hpv9OHkQP866WMUUn2p_p2pUort8-PuN9bItifRmX5tQ74qWQ6y7lETcHE6iX4jQYnn1Tk-FLL_dHGJqtbG5Z-ciQvVjnIzjcTgw8B_YjkKkmcZ7X_d57hLuDJTs_rVpR2kmRpA'
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