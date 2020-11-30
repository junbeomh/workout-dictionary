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

    favouriteBtn.onclick = () => removeFavourite(index);

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('id', 'cardTitle');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#fav-descript-${index}`);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-controls', `fav-descript-${index} `);
    workoutType.setAttribute('id', 'card-type');
    workoutTitle.innerHTML = excercise.type + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `fav-descript-${index}`);
    workoutDescript.setAttribute('class', 'card-block');
    workoutDescript.innerHTML = excercise.description;
    workoutBody.appendChild(workoutDescript);

    workoutContainer.appendChild(workoutHeader);
    workoutContainer.appendChild(workoutBody);

    myWorkOuts.appendChild(workoutContainer);
}

var removeFavourite = async (index) => {
    let url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/deletefavourites';
    let body = {
        "uid": ID,
        "index": index
    }
    console.log(ID_TOKEN + " " + index);
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWURvc3dQczJWVXJqSjhhejFucURuQSIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3NjE5MTYsImV4cCI6MTYwNjc2NTUxNiwiaWF0IjoxNjA2NzYxOTE2LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.e-u5uV_Gc0M3q-DhROAUEzvqXZdko9EB6wAaO8IH9XUnpZXLDPJarPoGR4I5trn02yT_xW5CyreBUF2m4Se6CBh3-D7N--NZxdJQ8F822L_2JQwcvvvrrBsmZU0Dgfixvgb0fB8nfkvhmogcZ26QI0i0PQWZQ4_N9HuN4SH8fXv90z09LdWupAAzXDXH26k-AsKkMAfSexG_tgvuVwuQVmFmrax23sMHPmHFgpe3zUNf0GFLsQ3Gfsmz7DjEAOajfA5Y2yJMEn7-6GZw-WB_-YzSwBSTZwGvXPKOM1nYs7F8OFdvyVCSqFgDnFxWMcN3_-wyynBhADcivGULJn9Zcw'

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then((response) => {
        console.log(response);
        document.getElementById("create").click();
    });

}

var getMyExcercises = (favourites) => {
    let myWorkOuts = document.getElementById("favourites");
    if (excercises.length == 0) {
        myWorkOuts.innerHTML = "No excercises in favourites."
        return;
    }
    favourites.forEach((excercise, index) => {
        makeMyExcercise(excercise, index);
    })
}

var url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=' + ID;
// var url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=e1dea522-b3ab-42c7-af07-e0d37dcfbb0a';


async function getUser(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWURvc3dQczJWVXJqSjhhejFucURuQSIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3NjE5MTYsImV4cCI6MTYwNjc2NTUxNiwiaWF0IjoxNjA2NzYxOTE2LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.e-u5uV_Gc0M3q-DhROAUEzvqXZdko9EB6wAaO8IH9XUnpZXLDPJarPoGR4I5trn02yT_xW5CyreBUF2m4Se6CBh3-D7N--NZxdJQ8F822L_2JQwcvvvrrBsmZU0Dgfixvgb0fB8nfkvhmogcZ26QI0i0PQWZQ4_N9HuN4SH8fXv90z09LdWupAAzXDXH26k-AsKkMAfSexG_tgvuVwuQVmFmrax23sMHPmHFgpe3zUNf0GFLsQ3Gfsmz7DjEAOajfA5Y2yJMEn7-6GZw-WB_-YzSwBSTZwGvXPKOM1nYs7F8OFdvyVCSqFgDnFxWMcN3_-wyynBhADcivGULJn9Zcw'
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