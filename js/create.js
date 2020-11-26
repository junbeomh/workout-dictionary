// function addExercise() {
//     let exercise = document.getElementById("inputExercise").value;
//     let list = document.getElementById("workoutList");
//     let entry = document.createElement("li");
//     entry.innerHTML = exercise;
//     list.appendChild(entry);
// }
// document.getElementById("add").addEventListener("click", addExercise);

var myExcercises = [
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
]

{/* <div class="card">
    <div class="card-header">
        <a data-toggle="collapse" href="#workout-descript" aria-expanded="true" aria-controls="test-block">
            card header
    </a>
    </div>
    <div id="workout-descript" class="collapse">
        <div class="card-block">
            card block
    </div>
    </div>
</div> */}
// `${y}-${x}`
var makeMyExcercise = (excercise, index) => {
    let myWorkOuts = document.getElementById("favourites");
    let workoutContainer = document.createElement("div");
    let workoutHeader = document.createElement("div");
    let workoutBody = document.createElement("div");
    let workoutTitle = document.createElement("a");
    let workoutDescript = document.createElement("div");
    let workoutType = document.createElement("p");
    let favouriteBtn = document.createElement("button");

    favouriteBtn.setAttribute('type', 'button');
    favouriteBtn.setAttribute('class', 'btn btn-secondary btn-sm');
    favouriteBtn.innerHTML = "remove";

    workoutContainer.setAttribute('class', 'card');
    workoutHeader.setAttribute('class', 'card-header');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('data-toggle', 'collapse');
    workoutTitle.setAttribute('href', `#workout-descript-${index}`);
    workoutTitle.setAttribute('aria-expanded', 'true');
    workoutTitle.setAttribute('aria-control', `workout-descript-${index}`);

    workoutTitle.innerHTML = excercise.type.toUpperCase() + ": " + excercise.name;
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

var getMyExcercises = () => {
    // make api call

    // process api response 
    myExcercises.forEach((excercise, index) => {
        makeMyExcercise(excercise, index);
    })
}


getMyExcercises(); 