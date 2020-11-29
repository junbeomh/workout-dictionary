var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
var ID = localStorage.getItem("USER_ID");
console.log(ID_TOKEN);
console.log(ACCESS_TOKEN);

var mgs = document.getElementById("muscleGroupSelector");
mgs.addEventListener("change", (e) => {
    console.log(`e.target.value = ${e.target.value} `);
    getExcercisesByType(e.target.value);
});

function getData(ID) {
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getexcercises'+ '?id=' + ID ;
  
    xmlhttp.open('GET', url);
    xmlhttp.setRequestHeader('Authorization', 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUVJVclotZHVpNlZ1NVNsWGdhcmkzZyIsInN1YiI6ImU0YWE2NWNhLTZkMDUtNGVlZi05OGI5LTA4ZDcxYzc3MjBmMiIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiYzBhNjNhZGMtY2VlNS00MTYzLWJlY2YtMGFiMDc4MWQ3ZjFmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY2ODg1NzQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX0ppRVppbjFUaSIsImNvZ25pdG86dXNlcm5hbWUiOiJlNGFhNjVjYS02ZDA1LTRlZWYtOThiOS0wOGQ3MWM3NzIwZjIiLCJleHAiOjE2MDY2OTIxNzQsImlhdCI6MTYwNjY4ODU3NCwiZW1haWwiOiJqdW5iZW9taDk0QGdtYWlsLmNvbSJ9.Q5CT7_4yK2vfxJN8fyFwySuW0zTYaFSC23mS9Y40K4EWZXLqZjubr0849_dOVvGBvdV4v-zoFzdcKboMbVl1FiUijUvXDYoajGXKclaWPKonQG8MynX2Hz24mPJIDKrp2F062gI6nDtM6JyU_8JhE5BlPxMMAcWDQ5FHLdrfpwD-rXulZFMbcWhbKGr93E9mPHPul-88xkzOOfbzmS0t9jMwotJ3h4VWkXfFt7IC5p3vrJRHPbiY5E9cWN7sJaOA938YaMv6743H-leoZbrPAJXgvfsGiSAu6Wga8-A9TKwUFvzp4eZmgne6eQ4CIdhaddB3i2LdRdl1d5tLnQ5lIg');
    xmlhttp.onload = function() {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
      } else {
        alert('Could not read data');
      }
    };
    xmlhttp.send();
  }

  getData(ID);



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
    workoutTitle.setAttribute('href', `#workout - descript - ${index} `);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-control', `workout - descript - ${index} `);

    workoutTitle.innerHTML = excercise.type.toUpperCase() + ": " + excercise.name;
    workoutHeader.appendChild(workoutTitle);
    workoutHeader.appendChild(favouriteBtn);

    workoutBody.setAttribute('class', 'collapse');
    workoutBody.setAttribute('id', `workout - descript - ${index} `);
    workoutDescript.setAttribute('class', 'card-block');

    workoutDescript.innerHTML = excercise.description;
    workoutBody.appendChild(workoutDescript);

    workoutContainer.appendChild(workoutHeader);
    workoutContainer.appendChild(workoutBody);

    cardColumns.appendChild(workoutContainer);
}

// var getAllExcercises = () => {
//     // make api call

//     // process api response 
//     excercises.forEach((excercise, index) => {
//         makeExcercise(excercise, index);
//     })
// }

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