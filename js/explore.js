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
    favouriteBtn.setAttribute('id', `fav-btn-${index}`);
    favouriteBtn.innerHTML = "add";
    favouriteBtn.onclick = () => addToFavourites(excercise, index);

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

var addToFavourites = async (excercise, index) => {
    let url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/addtofavourites';
    console.log("ID_TOKEN: " + ID_TOKEN);
    console.log("ACCESS_TOKEN: " + ACCESS_TOKEN);
    console.log("ID: " + ID);
    console.log(excercise);
    let body = {
        "type": excercise.type,
        "uid": "e4aa65ca-6d05-4eef-98b9-08d71c7720f2",
        "name": excercise.name,
        "description": excercise.description 
    }

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            // 'Authorization': ID_TOKEN,
            'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoibWJWWVJNQ0VOeGxldHBNRVYwclNpQSIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoid1N5SEljaTh1SWcyV1JsS2VpWVFyUGUycmVEbWhQaFM0Y2t6cHJweWl6b2ZZQnh1V0JYQXlIMGRiUjdWMHl1a2Vha0FaM2ZtMnZseGxDZDVMUWo3bWVGLVYzQ2wycjFJZW56a0NvT2dIcHZEaXFhUnM0OHJkVV9iWTNNUVB5eWVqMzVtOVF5eko3bzhZa2tzekowUGF0c21BOXU0ckxNTGlJS3BDWmxhYTJZIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2MjkxNTA5MDQ0In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjcwMzU4NiwiZXhwIjoxNjA2NzA3MTg2LCJpYXQiOjE2MDY3MDM1ODYsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.G3ecBiwNwxvLEI0d_DMnPiVCmeHxnwf9upEftd0jPJIGsTkjm_e6yw3IsNNIbGv2-cai7bfN_fiitN1Wb5biTSqYJNRGpT4dZ5dSiE7yxYQr63RJSOUBOj-58fPqLtP1-KHd9Q6vL07M3dtKw92yxDnGahexmM9VVyomcF-_XE8LhipEpxSPzBNL8pniAv9YWCNAAFO67zFzMJjZrPaM9tO8qd-XxC32p_4qQ8SFvgncTolC9D39kzPRA8Xj0WxI8ovdGbSjN5UfR8NfFsaW7H7dVtt8MT44AMrbYrK56c-6ag_AeaSWkAq3LCygkbe3kro6djmx39o7MWxZh5CbSw'
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
            // 'Authorization': ID_TOKEN,
            'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUTY1eS1pc2dUSllOVmRmZ1JkR0RXUSIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjI5MTUwOTA0NCJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3MDQxMDcsImV4cCI6MTYwNjcwNzcwNywiaWF0IjoxNjA2NzA0MTA3LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.QPuuNXU47tz1m66rBBy0Sm-X7dAAFBLAQdIQqTRfVLQqCFvYGc1P_2eitRwYLRUJ6N9OVQZeVqFGbjFSfjNZtDwQlEMJPvt58igBERYc29K-olM6RHFlFRbemheGHIBcg9mHN6GTon6JGinaEuJRA4HwQeqs_jqm86YWtuKEmBvBsvNRmUip88nLPhHIs2DNa5tN9tDAKscjU5TjKX9aPTRhF99664D6v1NkseSGmJ7-EO76Er3nhYBaa2gMfLRS0l1MSNOKAPaQmuibINJN-BAXspdPA-Nj3G-JYthqZpf5tkIUsW4I0-mRuh1V2Fy8cpAvAlcInD9hXg_TKbM92A'
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