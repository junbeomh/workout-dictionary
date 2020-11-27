var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
console.log(ID_TOKEN);
console.log(ACCESS_TOKEN);

function editWorkout(workout) {
    localStorage.setItem("name", workout);
    window.location.href = "workoutEditor.html";
}

document.getElementById("Chest Day").addEventListener("click", function () { editWorkout("Chest Day"); });
document.getElementById("Back Day").addEventListener("click", function () { editWorkout("Back Day"); });
document.getElementById("Leg Day").addEventListener("click", function () { editWorkout("Leg Day"); });