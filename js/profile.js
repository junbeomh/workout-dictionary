var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
console.log(ID_TOKEN);
console.log(ACCESS_TOKEN);

let sudoData = [
    "Chest Day",
    "Back Day",
    "Leg Day"
]

function createWorkout(workout) {
    let workoutBtn = document.createElement("button");
    workoutBtn.setAttribute("id", workout);
    workoutBtn.setAttribute("class", "dropdown-item border mb-2");
    workoutBtn.innerHTML = workout
    workoutBtn.addEventListener("click", function () { editWorkout(workout);});
    document.getElementById("workouts").appendChild(workoutBtn);
}

function editWorkout(workout) {
    localStorage.setItem("name", workout);
    window.location.href = "workoutEditor.html";
}

sudoData.forEach(element => {
    createWorkout(element);
});
