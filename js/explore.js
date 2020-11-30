var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
var ID = localStorage.getItem("USER_ID");

var excercises = [];
var favourites = [];

var mgs = document.getElementById("muscleGroupSelector");
mgs.addEventListener("change", (e) => {
    console.log(`e.target.value = ${e.target.value} `);
    getExcercisesByType(e.target.value)
});



var filterSearch = (value) => {
    $('#searchResults .card .card-header').each(function () {
        let found = 'false';
        $(this).each(function () {
            if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                found = 'true';
            }
        });
        found === 'true' ? $(this).parent().show() : $(this).parent().hide();
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
    favouriteBtn.setAttribute('id', `fav-btn-${index}`);
    let isSaved = false;
    favourites.map((favourite) => {
        if (favourite.name == excercise.name) {
            isSaved = true;
        }
    })
    if (isSaved) {
        favouriteBtn.innerHTML = "added";
        favouriteBtn.setAttribute('class', 'btn btn-secondary btn-sm');
    } else {
        favouriteBtn.innerHTML = "add";
        favouriteBtn.setAttribute('class', 'btn btn-primary btn-sm');
        favouriteBtn.onclick = () => addToFavourites(excercise, index);
        isSaved = false;
    }



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

    cardColumns.appendChild(workoutContainer);

    $("#searchResults .card").sort(asc_sort).appendTo('#searchResults');

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

//$("#debug").text("Output:");
// accending sort
function asc_sort(a, b) {
    return ($(b).text()) < ($(a).text()) ? 1 : -1;
}

// decending sort
function dec_sort(a, b) {
    return ($(b).text()) > ($(a).text()) ? 1 : -1;
}


var getAllExcercises = () => {
    let cardColumns = document.getElementById("searchResults");
    if (excercises.length == 0) {
        cardColumns.innerHTML = "No excercises in dictionary."
        return;
    }

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
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWURvc3dQczJWVXJqSjhhejFucURuQSIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3NjE5MTYsImV4cCI6MTYwNjc2NTUxNiwiaWF0IjoxNjA2NzYxOTE2LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.e-u5uV_Gc0M3q-DhROAUEzvqXZdko9EB6wAaO8IH9XUnpZXLDPJarPoGR4I5trn02yT_xW5CyreBUF2m4Se6CBh3-D7N--NZxdJQ8F822L_2JQwcvvvrrBsmZU0Dgfixvgb0fB8nfkvhmogcZ26QI0i0PQWZQ4_N9HuN4SH8fXv90z09LdWupAAzXDXH26k-AsKkMAfSexG_tgvuVwuQVmFmrax23sMHPmHFgpe3zUNf0GFLsQ3Gfsmz7DjEAOajfA5Y2yJMEn7-6GZw-WB_-YzSwBSTZwGvXPKOM1nYs7F8OFdvyVCSqFgDnFxWMcN3_-wyynBhADcivGULJn9Zcw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then((response) => {
        console.log(response);
        let btn = document.getElementById(`fav-btn-${index}`);
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
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
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWURvc3dQczJWVXJqSjhhejFucURuQSIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3NjE5MTYsImV4cCI6MTYwNjc2NTUxNiwiaWF0IjoxNjA2NzYxOTE2LCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.e-u5uV_Gc0M3q-DhROAUEzvqXZdko9EB6wAaO8IH9XUnpZXLDPJarPoGR4I5trn02yT_xW5CyreBUF2m4Se6CBh3-D7N--NZxdJQ8F822L_2JQwcvvvrrBsmZU0Dgfixvgb0fB8nfkvhmogcZ26QI0i0PQWZQ4_N9HuN4SH8fXv90z09LdWupAAzXDXH26k-AsKkMAfSexG_tgvuVwuQVmFmrax23sMHPmHFgpe3zUNf0GFLsQ3Gfsmz7DjEAOajfA5Y2yJMEn7-6GZw-WB_-YzSwBSTZwGvXPKOM1nYs7F8OFdvyVCSqFgDnFxWMcN3_-wyynBhADcivGULJn9Zcw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
// var url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=e1dea522-b3ab-42c7-af07-e0d37dcfbb0a';
var url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=' + ID;

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



$(document).ready(function () {
    getUser(url)
        .then(data => {
            favourites = data.Item.favourites;
            getData('https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getexcercises')
                .then(data => {
                    //   console.log(data.body.Items); // JSON data parsed by `data.json()` call
                    excercises = data.body.Items;
                    getAllExcercises();
                });
        });

    $('#search').on("keyup", function () {
        var value = $(this).val().toLowerCase().trim();
        $("#searchResults").filter(function () {
            filterSearch(value);
        });
    });
});
